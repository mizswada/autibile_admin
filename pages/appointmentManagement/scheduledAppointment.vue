<script setup>
import { ref } from 'vue';

const data = [
  {
    patientName: "Alice Brown",
    userType: "Doctor",
    userName: "Dr. John Smith",
    date: "2024-06-10",
    time: "10:00",
    notes: "First consultation",
  },
  {
    patientName: "Bob Green",
    userType: "Therapist",
    userName: "Jane Doe",
    date: "2024-06-11",
    time: "14:30",
    notes: "Speech therapy session",
  }
];

const showModal = ref(false);
const selectedAppointment = ref({});

const columns = [
  { name: 'patientName', label: 'Patient Name' },
  { name: 'userType', label: 'Type' },
  { name: 'userName', label: 'Doctor/Therapist' },
  { name: 'date', label: 'Date' },
  { name: 'time', label: 'Time' },
  { name: 'notes', label: 'Notes' },
  { name: 'action', label: 'Actions' }
];

function openModal(appointment) {
  selectedAppointment.value = { ...appointment };
  showModal.value = true;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Scheduled Appointments</h1>
    <div class="card p-4 mt-4">
      <div class="flex justify-end items-center mb-4">
        <router-link to="/appointmentManagement/newAppointment">
          <rs-button>
            <Icon name="material-symbols:add" class="mr-1"></Icon>
            New Appointment
          </rs-button>
        </router-link>
      </div>
      <rs-table
        :data="data"
        :columns="columns"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
        }"
        :options-advanced="{
          sortable: true,
          responsive: true,
          filterable: false,
        }"
        advanced
      >
        <template v-slot:action="data">
          <div class="flex justify-center items-center">
            <rs-button size="sm" @click="openModal(data.value)">
              View
            </rs-button>
          </div>
        </template>
      </rs-table>
    </div>
  </div>
  <rs-modal
    title="Appointment Details"
    ok-title="Close"
    :ok-callback="() => { showModal = false }"
    v-model="showModal"
    :overlay-close="true"
    :show-cancel="false"
  >
    <div v-if="selectedAppointment">
      <div><strong>Patient Name:</strong> {{ selectedAppointment.patientName }}</div>
      <div><strong>Type:</strong> {{ selectedAppointment.userType }}</div>
      <div><strong>Doctor/Therapist:</strong> {{ selectedAppointment.userName }}</div>
      <div><strong>Date:</strong> {{ selectedAppointment.date }}</div>
      <div><strong>Time:</strong> {{ selectedAppointment.time }}</div>
      <div><strong>Notes:</strong> {{ selectedAppointment.notes }}</div>
    </div>
  </rs-modal>
</template>