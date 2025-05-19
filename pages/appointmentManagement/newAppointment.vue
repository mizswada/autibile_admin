<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const appointmentForm = ref({
  patientName: '',
  userType: '', // Doctor or Therapist
  userName: '',
  date: '',
  time: '',
  notes: '',
});

function openModal() {
  showModal.value = true;
}

function saveAppointment() {
  // Implement the logic to save appointment
  console.log('Save Appointment', appointmentForm.value);
  showModal.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">New Appointment</h1>
    <div class="card p-4 mt-4 max-w-lg mx-auto">
      <FormKit
        type="text"
        v-model="appointmentForm.patientName"
        name="patientName"
        label="Patient Name"
        placeholder="Enter patient name"
      />
      <FormKit
        type="select"
        v-model="appointmentForm.userType"
        name="userType"
        label="User Type"
        :options="[
          { label: 'Doctor', value: 'Doctor' },
          { label: 'Therapist', value: 'Therapist' }
        ]"
        placeholder="Select user type"
      />
      <FormKit
        type="text"
        v-model="appointmentForm.userName"
        name="userName"
        label="Doctor/Therapist Name"
        placeholder="Enter doctor or therapist name"
      />
      <FormKit
        type="date"
        v-model="appointmentForm.date"
        name="date"
        label="Date"
      />
      <FormKit
        type="time"
        v-model="appointmentForm.time"
        name="time"
        label="Time"
      />
      <FormKit
        type="textarea"
        v-model="appointmentForm.notes"
        name="notes"
        label="Notes"
        placeholder="Additional notes (optional)"
      />
      <div class="flex justify-end mt-4">
        <rs-button @click="saveAppointment" variant="primary">
          Save Appointment
        </rs-button>
      </div>
    </div>
  </div>
</template>