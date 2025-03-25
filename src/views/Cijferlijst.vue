<template>
    <div class="cijferlijst-container max-w-500px mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100 text-black">
      <h1>Cijferlijst</h1>
      <table class="w-full border-collapse bg-black-800">
        <thead>
          <tr>
            <th class="p-2 border border-gray-300">Examen</th>
            <th class="p-2 border border-gray-300">Cijfer</th>
            <th class="p-2 border border-gray-300">Actie</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(exam, index) in examens" :key="index" :class="{ 'bg-red-100': exam.grade < 5.5, 'bg-green-100': exam.grade >= 5.5 }">
            <td class="p-2 border border-gray-300">{{ exam.name }}</td>
            <td class="p-2 border border-gray-300">
              <input type="number" v-model.number="exam.grade" min="0" max="10" step="0.1" @input="checkGrade(exam)" class="w-16">
            </td>
            <td class="p-2 border border-gray-300">
              <button @click="removeExam(index)" class="cursor-pointer p-2">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="controls mt-2">
        <input v-model="newExam" placeholder="Nieuw examen" class="p-2 border border-gray-300 rounded">
        <button @click="addExam" class="cursor-pointer p-2 ml-2">Toevoegen</button>
      </div>
  
      <p class="mt-2"><strong>Gemiddeld:</strong> {{ averageGrade.toFixed(1) }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from "vue";
  
  const examens = ref([
    { name: "Webdevelopment", grade: 7.5 },
    { name: "Mobile Application Development", grade: 4.5 },
    { name: "Stage 1", grade: 6.1 }
  ]);
  
  const newExam = ref("");
  
  const addExam = () => {
    if (newExam.value.trim() !== "") {
      examens.value.push({ name: newExam.value, grade: 1.0 });
      newExam.value = "";
    }
  };
  
  const removeExam = (index: number) => {
    examens.value.splice(index, 1);
  };
  
  const averageGrade = computed(() => {
    if (examens.value.length === 0) return 0;
    const total = examens.value.reduce((sum, exam) => sum + exam.grade, 0);
    return total / examens.value.length;
  });
  
  const checkGrade = (exam: { grade: number }) => {
    if (exam.grade > 10) {
      exam.grade = 10;
    }
  };
  </script>
  
  <style scoped>

  </style>