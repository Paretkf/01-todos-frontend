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
  data () {
    return {
      status: 'All'
    }
  },
  computed: {
    ...mapGetters(['todos', 'visibility', 'activeTodos', 'completedTodos', 'allTodos']),
    item () {
      if (this.visibility === 'all') {
        return this.allTodos
      } else if (this.visibility === 'active') {
        return this.activeTodos
      } else {
        return this.completedTodos
      }
    }
  }
}
</script>
