<template>
  <main>
    <h1>Habitual</h1>
    <section>
      <button @click="startingNewHabit = true">Start New Habit</button>
      <NewHabitModal v-if="startingNewHabit" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NewHabitModal from '@/components/NewHabitModal.vue'

const habits = []

let startingNewHabit = ref(false)
</script>

<style scoped>
main {
  margin: 10px;
  text-align: center;
}
</style>
