<script setup>
import { ref } from 'vue';

const questions = ref([
  { id: 1, question: "Does your child respond to their name?", enabled: true, type: "yesno" },
  { id: 2, question: "Does your child make eye contact?", enabled: true, type: "scale" },
  { id: 3, question: "Does your child use gestures to communicate?", enabled: false, type: "yesno" },
  { id: 4, question: "Does your child play with other children?", enabled: true, type: "scale" },
]);

const showModal = ref(false);
const newQuestion = ref({
  question: '',
  enabled: true,
  type: 'yesno',
});

function toggleQuestion(id) {
  const q = questions.value.find(q => q.id === id);
  if (q) q.enabled = !q.enabled;
}

function openAddModal() {
  newQuestion.value = { question: '', enabled: true, type: 'yesno' };
  showModal.value = true;
}

function addQuestion() {
  if (newQuestion.value.question.trim()) {
    questions.value.push({
      id: Date.now(),
      question: newQuestion.value.question,
      enabled: newQuestion.value.enabled,
      type: newQuestion.value.type,
    });
    showModal.value = false;
  }
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Manage Questionnaire</h1>
    <div class="flex justify-end mb-2">
      <rs-button @click="openAddModal">
        <Icon name="material-symbols:add" class="mr-1" />
        Add Question
      </rs-button>
    </div>
    <div class="card p-4 mt-4">
      <rs-table
        :data="questions"
        :columns="[
          { name: 'question', label: 'Question' },
          { name: 'type', label: 'Type' },
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
        <template v-slot:type="slotProps">
          <span v-if="slotProps.value === 'yesno'">Yes/No</span>
          <span v-else-if="slotProps.value === 'scale'">Scale</span>
        </template>
      </rs-table>
    </div>
    <rs-modal
      title="Add Question"
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
            :value="true"
            v-model="newQuestion.enabled"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            :value="false"
            v-model="newQuestion.enabled"
          />
          No
        </label>
      </div>
      <div class="mt-2">
        <label class="block font-medium mb-1">Question Type</label>
        <label class="mr-4">
          <input
            type="radio"
            value="yesno"
            v-model="newQuestion.type"
          />
          Yes/No
        </label>
        <label>
          <input
            type="radio"
            value="scale"
            v-model="newQuestion.type"
          />
          Scale (1-5)
        </label>
      </div>
      <FormKit
        type="text"
        v-model="newQuestion.question"
        name="questionText"
        label="Question"
        placeholder="Enter question"
      />
    </rs-modal>
  </div>
</template>
