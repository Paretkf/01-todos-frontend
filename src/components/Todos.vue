<template>
  <div id="test">
    <div v-for="todo,index in todos" :key="todo.title" v-if="visibility === 'all'">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="check(index, $event)" :value="todo.completed">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>

    <div v-for="todo,index in todos" :key="todo.title" v-if="visibility === 'active'" v-show="!todo.completed">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="check(index, $event)" :value="todo.completed">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>

    <div v-for="todo,index in todos" :key="todo.title" v-if="visibility === 'completed'" v-show="todo.completed">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="check(index, $event)" :value="todo.completed">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <div v-else>{{ todo.title }}</div>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="removeTodo(index)"></a>
      <div class="is-clearfix"></div>
    </div>

    <button class="button is-pulled-right is-outlined is-danger" @click="clearCompleted()">
      Clear Completed
    </button>
    
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  mounted () {
    let el = document.getElementById('test')
    Sortable.create(el, { handle: '.handle', onUpdate: this.onUpdate, animation: 150 })
  },
  methods: {
    ...mapActions(['removeTodo', 'changeCompleted', 'clearCompleted', 'sortTo']),
    check (index, state) {
      this.changeCompleted({
        index,
        state
      })
    },
    onUpdate: function (event) {
      this.sortTo({ newIndex: event.newIndex, oldIndex: event.oldIndex })
    }
  }
}
</script>
