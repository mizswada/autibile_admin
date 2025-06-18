<script setup>

definePageMeta({
  title: "Login",
  layout: "empty",
  middleware: ["dashboard"],
});

const { $swal } = useNuxtApp();
const email = ref("");
const password = ref("");

const togglePasswordVisibility = ref(false);

const login = async () => {
  try {
    const res = await useFetch("/server/auth/login.post", {
      method: "POST",
      initialCache: false,
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = res.data.value;

    if (data.statusCode === 200) {
      // Save token to pinia store
      userStore.setUsername(data.data.username);
      userStore.setRoles(data.data.roles);
      userStore.setIsAuthenticated(true);

      $swal.fire({
        position: "center",
        title: "Success",
        text: "Login Success",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      window.location.href = "/dashboard";
    } else {
      $swal.fire({
        title: "Error!",
        text: data.message,
        icon: "error",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div
    class="flex-none md:flex justify-center text-center items-center h-screen"
  >
    <div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/6">
      <rs-card class="h-screen md:h-auto px-10 md:px-16 py-12 md:py-20 mb-0">
        <h3 class="mb-4">Login</h3>
        <p class="mb-6">Welcome to Autible Admin. Please login to continue.</p>
        <div class="grid grid-cols-2">
          <FormKit
            type="email"
            label="Email"
            outer-class="col-span-2"
            label-class="text-left"
          />
          <FormKit
            type="password"
            label="Password"
            outer-class="col-span-2"
            label-class="text-left"
          />
          <FormKit type="checkbox" label="Remember Me" />
          <NuxtLink
            class="flex items-center justify-end h-5 mt-1 text-primary hover:underline"
            to="/forgot-password/index"
            >Forgot Password?</NuxtLink
          >
          <NuxtLink to="/" class="col-span-2">
            <FormKit type="button" input-class="w-full"> Sign In </FormKit>
          </NuxtLink>
        </div>
        <p class="mt-3 text-center">
          Don't have an account?
          <NuxtLink to="/register/index" class="text-primary hover:underline"
            >Sign Up</NuxtLink
          >
        </p>
      </rs-card>
    </div>
  </div>
</template>
