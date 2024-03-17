import { defineStore } from 'pinia'


export const useUserStore = defineStore('User store', {
    state: () => ({
        users: []
    }),
    getters: {

    },
    actions: {
        async getUsers(){
            const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            return response
        },

        addNewUser(user) {
            this.users.push(user)
        }
    }
})