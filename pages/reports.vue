<script setup>
import { ref } from 'vue';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const data = [
  {
    timestamp: "2024-06-10 10:00:00",
    user: "admin",
    action: "Created Appointment",
    details: "Appointment for Alice Brown with Dr. John Smith",
  },
  {
    timestamp: "2024-06-11 14:35:00",
    user: "admin",
    action: "Approved Therapist",
    details: "Therapist Jane Doe approved",
  },
  {
    timestamp: "2024-06-12 09:15:00",
    user: "user1",
    action: "Updated Profile",
    details: "User profile updated",
  }
];

const columns = [
  { name: 'timestamp', label: 'Timestamp' },
  { name: 'user', label: 'User' },
  { name: 'action', label: 'Action' },
  { name: 'details', label: 'Details' }
];

function downloadPDF() {
  const doc = new jsPDF();
  doc.text("Reports", 14, 16);
  autoTable(doc, {
    startY: 22,
    head: [columns.map(col => col.label)],
    body: data.map(row => columns.map(col => row[col.name])),
  });
  doc.save("reports.pdf");
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Reports</h1>
    <div class="flex justify-end mb-2">
      <rs-button @click="downloadPDF">
        <Icon name="material-symbols:download" class="mr-1" />
        Download PDF
      </rs-button>
    </div>
    <div class="card p-4 mt-4">
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
      </rs-table>
    </div>
  </div>
</template>