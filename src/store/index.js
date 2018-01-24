import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    CHANGE_COMPLETED (state, payload) {
      state.todos[payload.index].completed = payload.state
    },
    CLEAR_COMPLETED_TODOS (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed) {
          state.todos.splice(i, 1)
        }
      }
    },
    GET_TODOS (state, todos) {
      state.todos = todos
    },
    SORT_TO (state, payload) {
      state.todos.splice(payload.newIndex, 0, state.todos.splice(payload.oldIndex, 1)[0])
    }
  },
  actions: {
    getTodos ({commit}, todos) {
      commit('GET_TODOS', todos)
    },
    addTodo ({commit, dispatch}, title) {
      commit('ADD_TODO', title)
      dispatch('saveTodos')
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    removeTodo ({commit, dispatch}, index) {
      commit('REMOVE_TODO', index)
      dispatch('saveTodos')
    },
    changeCompleted ({commit, dispatch}, payload) {
      commit('CHANGE_COMPLETED', payload)
      dispatch('saveTodos')
    },
    clearCompleted ({commit}) {
      commit('CLEAR_COMPLETED_TODOS')
    },
    saveTodos ({state}) {
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    sortTo ({commit, dispatch}, payload) {
      commit('SORT_TO', payload)
      dispatch('saveTodos')
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility,
    activeTodos: state => state.todos.filter(todo => todo.completed === false).length,
    completedTodos: state => state.todos.filter(todo => todo.completed === true).length,
    allTodos: state => state.todos.length
  }
})
