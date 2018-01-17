<template>
  <div>
    <div v-for="todo,index in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="check(index, $event)">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="delTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['delTodo', 'changeCompleted']),
    check (index, state) {
      this.changeCompleted({
        index,
        state
      })
    }
  }
}
</script>
