<script setup>
import UserCard from '../components/UserCard.vue';
import AddNewUser from '../components/AddNewUser.vue';
import { userList } from '../composable/useUserStore';
import { useUserStore } from '../store/userStore'
import { v4 as uuidv4 } from 'uuid';
import { ref, reactive } from 'vue';

const store = useUserStore();

        async function fetchUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            return response
        };


        // get users from store
        store.users = await store.getUsers()
        console.log("USERS FROM store", store.users)

        userList.value = await fetchUsers();

        console.log("USER PAGE", userList.value)

        const addNewUser = (name) => {
            userList.push({
                name,
                id: uuidv4()
            })
        }

</script>

<template>
    <main>
    <h1>Users</h1>
    <ul v-if="store.users.length > 0">
        <UserCard v-for="user in store.users" :key="`user-${user.id}`" :user="user">
                {{ user.name }}: {{ user.website }}
        </UserCard>
    </ul>
    <p v-else>No users in the list</p>
    <AddNewUser @add-new-user="addNewUser"/>
    <!-- <button @click="addNewUser">Add new user</button> -->
    </main>


</template>

<style scoped>
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
    background-color: red;
    height: 30px;
    margin-bottom: 10px;
    text-align: center;
}
</style>