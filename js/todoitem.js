Vue.component('todo-item', {
  props: ['todo'],
  template: '<li v-bind:style="todo.style">{{todo.name}}</li>',
});