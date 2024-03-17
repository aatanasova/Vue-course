<script setup>
import { ref } from 'vue'
import { userList } from '../composable/useUserStore';
import { computed } from 'vue';

const shortUserList = computed(() => {
  return userList.value.splice(0, 5)
})

const changedColor =  ref('blue');
</script>

<template>
  <h1>Change color</h1>
  <input type="color" v-model="changedColor" />
  <p>{{ changedColor }}</p>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <ul>
      <li v-for="user in shortUserList" :key="`user-${user.id}`">{{ user.name }}: {{ user.website }}</li>
    </ul>
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
li {
    border: 1px solid grey;
    border-radius: 5px;
    background-color: v-bind(changedColor);
    height: 30px;
    margin-bottom: 10px;
    text-align: center;
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
