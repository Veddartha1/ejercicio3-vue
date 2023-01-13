<script>
import { mapActions } from 'pinia';
import {useToDoStore} from '../stores/todo.js'

export default {
    props: {
        item: Object,
    },
    data () {},
    computed: {
    },
    methods: {
        ...mapActions(useToDoStore, ['setChecked', 'removeTodo']),
        removeTodoFromStore(){
            if (confirm('Se va a borrar ' + this.item.title)) {
                this.removeTodo(this.item)
            }
        }
    },
}
</script>
<template>
        <li class="list-group-item d-flex justify-content-between col-6">
            <div>
                <input class="form-check-input" type="checkbox" :checked="item.done" @click="setChecked(this.item)">
            <del class="mx-2" v-if="item.done" >
                {{ item.title }}
            </del>
            <span class="mx-2" v-else>
                {{ item.title }}
            </span>
            </div>
            <div>
                <button type="button" class="btn btn-secondary" @click="removeTodoFromStore">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </li>
</template>