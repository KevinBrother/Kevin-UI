var KButton = {
  name: 'KButton',
  data: function () {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
};

KButton.install = function (Vue) {
  Vue.component(KButton.name, KButton);
};

export { KButton };
