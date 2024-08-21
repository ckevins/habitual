<template>
  <article>
    <p>What habit are you trying to start?</p>
    <p>How many days per week are you hoping to practice this habit?</p>
    <p>When would you like to start this habit?</p>
    <figure>
      <button>Cancel</button>
      <button @click="createNewHabit">Save</button>
    </figure>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Habit from '../models/habit'

const name = ref('')
const consistencyGoal = ref(0)
const startDate = ref(Date.now)

const createNewHabit = () => {
  const newHabit = new Habit(name, consistencyGoal, startDate)
}
</script>
<style></style>
