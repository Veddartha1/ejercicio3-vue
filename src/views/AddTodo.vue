<script>
import { mapActions } from 'pinia';
import {useToDoStore} from '../stores/todo.js'

export default {
    data(){
        return {
            newTitle: '',
        }
    },
    methods: {
        ...mapActions(useToDoStore, ['addTodo']),
        addTodoToStore(){
            if (this.newTitle) {
                this.addTodo(this.newTitle)
                this.newTitle = ''
                this.$router.push({name: 'home'})
            }
        },
    }
}
</script>
<template>
    <form @submit.prevent="addTodoToStore" class="row g-3 align-items-center p-2">
        <div class="col-auto">
            <label class="col-form-label">Añadir Tarea</label>
        </div>
        <div class="col-auto">
            <input type="text" v-model.trim="newTitle" class="form-control">
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-secondary mt-2">Add Todo</button>    
        </div>
    </form>
</template>