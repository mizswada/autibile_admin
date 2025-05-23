<script setup>
import { ref } from 'vue';

// Example user types: 'parent', 'doctor', 'therapist', 'admin'
const userType = ref('parent'); // Change this to test different forms

// Example profile data (should be loaded from backend)
const profile = ref({
  fullName: 'John Doe',
  email: 'johndoe@gmail.com',
  phoneNumber: '1234567890',
  childName: 'Jane Doe',
  childAge: 5,
  password: '',
  adminName: 'Admin User',
});

function saveProfile() {
  // Implement save logic here
  console.log('Save profile', profile.value);
}
</script>

<template>
  <div class="mb-4 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Edit Profile</h1>
    <div class="card p-4">
      <FormKit
        v-if="userType === 'parent'"
        type="form"
        @submit="saveProfile"
      >
        <FormKit type="text" v-model="profile.fullName" name="fullName" label="Full Name" />
        <FormKit type="email" v-model="profile.email" name="email" label="Email" />
        <FormKit type="number" v-model="profile.phoneNumber" name="phoneNumber" label="Phone Number" />
        <FormKit type="text" v-model="profile.childName" name="childName" label="Child Name" />
        <FormKit type="number" v-model="profile.childAge" name="childAge" label="Child Age" />
        <FormKit type="password" v-model="profile.password" name="password" label="Password" />
        <div class="flex justify-end mt-4">
          <rs-button type="submit" variant="primary">Save</rs-button>
        </div>
      </FormKit>
      <FormKit
        v-else-if="userType === 'doctor' || userType === 'therapist'"
        type="form"
        @submit="saveProfile"
      >
        <FormKit type="text" v-model="profile.fullName" name="fullName" label="Full Name" />
        <FormKit type="email" v-model="profile.email" name="email" label="Email" />
        <FormKit type="number" v-model="profile.phoneNumber" name="phoneNumber" label="Phone Number" />
        <FormKit type="password" v-model="profile.password" name="password" label="Password" />
        <div class="flex justify-end mt-4">
          <rs-button type="submit" variant="primary">Save</rs-button>
        </div>
      </FormKit>
      <FormKit
        v-else-if="userType === 'admin'"
        type="form"
        @submit="saveProfile"
      >
        <FormKit type="text" v-model="profile.adminName" name="adminName" label="Admin Name" />
        <FormKit type="password" v-model="profile.password" name="password" label="Password" />
        <div class="flex justify-end mt-4">
          <rs-button type="submit" variant="primary">Save</rs-button>
        </div>
      </FormKit>
    </div>
  </div>
</template>
