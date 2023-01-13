<script>
    import {useToDoStore} from '../stores/todo.js'
    import TodoItem from '../components/TodoItem.vue'
    import { mapState } from 'pinia'

export default {
    components: {
        TodoItem
    },
    data () {},
    computed: {
        ...mapState(useToDoStore, {
            todos: 'todos',
            unfinishedTodos: 'unfinishedTodos'
        }),
    },
}
</script>

<template>
    <div class="row m-5">
        <p class="col-12">Tareas sin terminar: {{ unfinishedTodos.length }}</p>
        <ul class="list-group row">
            <todo-item
                v-for="item in todos"
                :key="item.id"
                v-bind:item="item"
                >
            </todo-item>
        </ul>
    </div>
</template>

<style>
ul {
    list-style-type: none;  
}
</style>