import { defineEventHandler, readBody } from "h3";
import { prisma } from "~/server/db";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const ENV = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  try {
    const { email, password } = await readBody(event);

    if (!email || !password) {
      return {
        statusCode: 400,
        message: "Email and password are required",
      };
    }

    // Find user by email
    const user = await prisma.user.findFirst({
      where: {
        userEmail: email,
      },
    });

    if (!user) {
      return {
        statusCode: 404,
        message: "User does not exist",
      };
    }

    // Hash password using SHA256
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");
    if (user.userPassword !== hashedPassword) {
      return {
        statusCode: 401,
        message: "Invalid password",
      };
    }

    // Get user roles
    const roles = await prisma.userrole.findMany({
      where: {
        userRoleUserID: user.userID,
      },
      select: {
        role: {
          select: {
            roleName: true,
          },
        },
      },
    });

    const roleNames = roles.map((r) => r.role.roleName);

    // Generate JWT tokens
    const accessToken = generateAccessToken({
      email: user.userEmail,
      roles: roleNames,
    });

    const refreshToken = generateRefreshToken({
      email: user.userEmail,
      roles: roleNames,
    });

    // Set cookies
    event.res.setHeader("Set-Cookie", [
      `accessToken=${accessToken}; HttpOnly; Secure; SameSite=Lax; Path=/`,
      `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Lax; Path=/`,
    ]);

    return {
      statusCode: 200,
      message: "Login success",
      data: {
        email: user.userEmail,
        roles: roleNames,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "Internal server error",
    };
  }
});

function generateAccessToken(user) {
  return jwt.sign(user, ENV.auth.secretAccess, { expiresIn: "1d" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, ENV.auth.secretRefresh, { expiresIn: "30d" });
}
