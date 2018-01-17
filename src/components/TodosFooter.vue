<template>
  <div>
    <p class="is-pulled-left">{{item}} items left</p>
    <visibility-input/>
  </div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import { mapGetters } from 'vuex'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['todos']),
    item () {
      return this.todos.filter(todo => todo.completed === false).length
    }
  }
}
</script>
