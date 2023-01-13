<script>
import { mapActions } from 'pinia';
import {useToDoStore} from '../stores/todo.js'

export default {
    methods: {
        ...mapActions(useToDoStore, ['delTodos']),
        delTodosFromStore() {
            if (confirm('Vas a borar todas las tareas')) {
                this.delTodos()
                this.$router.push({name: 'home'})
            }
        }
    },
}
</script>
<template>
        <div class="col m-2">
            <h2>Borrar Todos</h2>
        </div>
        <div class="col m-2">
            <button @click="delTodosFromStore" class="btn btn-secondary">Borrar lista</button>
        </div>    
</template>