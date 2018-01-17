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
    DEL_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    CHANGE_COMPETED (state, payload) {
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
    delTodo ({commit, dispatch}, index) {
      commit('DEL_TODO', index)
      dispatch('saveTodos')
    },
    changeCompleted ({commit, dispatch}, payload) {
      commit('CHANGE_COMPETED', payload)
      dispatch('saveTodos')
    },
    clearCompeted ({commit}) {
      commit('CLEAR_COMPLETED_TODOS')
    },
    saveTodos ({state}) {
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
