<script setup>
import { reactive, defineEmits } from 'vue';
import { useUserStore } from '../store/userStore';
import { v4 as uuidv4 } from 'uuid';


const store = useUserStore()

const state = reactive({
  name: ''
})

defineEmits(['add-new-user'])
</script>

<template>
  <main>
    <h1>New User</h1>
    <label for="name">Name</label>
    <input type="string" v-model="state.name"/>
    <!-- <button @click="$emit('add-new-user', state.name)">Add new user</button> -->
    <button @click="store.addNewUser({name: state.name, id: uuidv4() })">Add new user</button>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
