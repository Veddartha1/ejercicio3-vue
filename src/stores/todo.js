import { defineStore } from 'pinia'

import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const useToDoStore = defineStore('todo', {
  state: () => ({
      todos: [],
  }),
  getters: {
    // reciben como primer parámetro el 'state'
    unfinishedTodos: (state) => state.todos.filter((todo) => !todo.done),
  },
  actions: {
    // any amount of arguments, return a promise or not
    async addTodo(newTitle){
        if (newTitle) {
            try {
                const response = await axios.post(SERVER + '/todos', {
                    title: newTitle,
                    done: false
                })
                this.todos.push(response.data)
            } catch (err) {
                alert(err)
            }
        }
    },
    async loadData() {
        try {
            const responseToDos = await axios.get(SERVER + '/todos')
            this.todos = responseToDos.data
        } catch (err){
            alert(err)
        }
    },
    async setChecked(item) {
        try {
            const response = await axios.patch(SERVER + '/todos/' + item.id, {
                done: !item.done
            })
            let elem = this.todos.find(todo => todo.id == item.id)
            elem.done = response.data.done
        } catch (err) {
            alert(err)
        }

    },
    async removeTodo(item){
        try {
            const response = await axios.delete(SERVER + '/todos/' + item.id)
            this.todos.splice((this.todos.findIndex(todo => todo.id == item.id)), 1)
        } catch (err) {
            alert(err)
        }
    },
    delTodos() {
        this.todos.forEach((todo) => this.removeTodo(todo))
    },
  },
})

