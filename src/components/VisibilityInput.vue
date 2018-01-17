<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ( {{ coutAll }} )</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ( {{coutActive}} )</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ( {{coutCompleted}} )</span>
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
    coutAll () {
      if (this.todos) {
        return this.todos.length
      } else {
        return 0
      }
    },
    coutActive () {
      if (this.todos) {
        return this.todos.filter(todo => todo.completed === false).length
      } else {
        return 0
      }
    },
    coutCompleted () {
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
