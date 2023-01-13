<script>
import AppMenu from './components/AppMenu.vue'
import {useToDoStore} from './stores/todo.js'
import { mapActions } from 'pinia'
import TodosTable from './views/TodosTable.vue'

export default ({
  components: { 
    AppMenu,
    TodosTable,
  },
  computed: {
    ...mapActions(useToDoStore, {
        loadData: 'loadData',
    })
  },
  mounted() {
    this.loadData
  }
})
</script>

<template>
  <div>
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
</style>