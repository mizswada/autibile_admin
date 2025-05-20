<script setup>
import { ref } from 'vue';

const questions = ref([
  { id: 1, question: "What is the purpose of this app?", answer: "Our app is designed to support individuals on the autism spectrum by providing tools for communication, emotional regulation, learning, and daily routines. It also offers resources and tracking features for caregivers, therapists, and educators.", enabled: true },
  { id: 2, question: "Who can use this app?", answer: "The app is suitable for children, teens, and adults on the autism spectrum, as well as parents, caregivers, therapists, and teachers. Features can be customized to match individual needs and developmental levels.", enabled: true },
  { id: 3, question: "Is the app suitable for non-verbal users?", answer: "Yes, the app includes alternative communication tools such as visual schedules, symbol-based communication boards, and voice output features to support non-verbal or minimally verbal users.", enabled: false },
  { id: 4, question: "Does the app offer progress tracking or reporting?", answer: "Yes, caregivers and educators can track progress in key developmental areas such as communication, social interaction, and behavior. Reports can be generated and shared with professionals to support therapy or education plans.", enabled: true },
]);

const showModal = ref(false);
const newQuestion = ref({
  question: '',
  answer: '',
  enabled: true,
});

function toggleQuestion(id) {
  const q = questions.value.find(q => q.id === id);
  if (q) q.enabled = !q.enabled;
}

function openAddModal() {
  newQuestion.value = { text: '', answer: '', enabled: true };
  showModal.value = true;
}

function addQuestion() {
  if (newQuestion.value.text.trim()) {
    questions.value.push({
      id: Date.now(),
      text: newQuestion.value.text,
      answer: newQuestion.value.answer,
      enabled: newQuestion.value.enabled,
    });
    showModal.value = false;
  }
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Manage FAQ</h1>
    <div class="flex justify-end mb-2">
      <rs-button @click="openAddModal">
        <Icon name="material-symbols:add" class="mr-1" />
        Add FAQ
      </rs-button>
    </div>
    <div class="card p-4 mt-4">
      <rs-table
        :data="questions"
        :columns="[
          { name: 'question', label: 'FAQ Question' },
          { name: 'enabled', label: 'Enabled' }
        ]"
        :options="{ borderless: true }"
        advanced
      >
        <template v-slot:enabled="slotProps">
          <input
            type="checkbox"
            :checked="slotProps.value"
            @change="toggleQuestion(slotProps.row.id)"
          />
        </template>
      </rs-table>
    </div>
    <rs-modal
      title="Add FAQ"
      ok-title="Add"
      cancel-title="Cancel"
      :ok-callback="addQuestion"
      v-model="showModal"
      :overlay-close="false"
    >
      <div class="mt-2">
        <label class="block font-medium mb-1">Enabled by default</label>
        <label class="mr-4">
          <input
            type="radio"
            value="true"
            v-model="newQuestion.enabled"
            :checked="newQuestion.enabled === true"
            @change="newQuestion.enabled = true"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="false"
            v-model="newQuestion.enabled"
            :checked="newQuestion.enabled === false"
            @change="newQuestion.enabled = false"
          />
          No
        </label>
      </div>
      <FormKit
        type="text"
        v-model="newQuestion.text"
        name="faqText"
        label="FAQ Question"
        placeholder="Enter FAQ question"
      />

      <FormKit 
      type="textarea"
      v-model="newQuestion.answer" 
      name="Answer" 
      rows="8" 
      label="Textarea"/>
    </rs-modal>
  </div>
</template>