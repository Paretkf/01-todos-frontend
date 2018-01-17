<template>
  <div>
    <div v-for="todo,index in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large">{{ todo.title }}</b-checkbox>
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
    ...mapActions(['delTodo'])
  }
}
</script>
