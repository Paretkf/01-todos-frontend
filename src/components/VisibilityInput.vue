<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ( {{ allTodos }} )</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ( {{activeTodos}} )</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ( {{completedTodos}} )</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos']),
    allTodos () {
      if (this.todos) {
        return this.todos.length
      } else {
        return 0
      }
    },
    activeTodos () {
      if (this.todos) {
        return this.todos.filter(todo => todo.completed === false).length
      } else {
        return 0
      }
    },
    completedTodos () {
      if (this.todos) {
        return this.todos.filter(todo => todo.completed === true).length
      } else {
        return 0
      }
    },
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    }
  }
}
</script>
