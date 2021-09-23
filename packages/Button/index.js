import KButton from './src/button.js';

KButton.install = function (Vue) {
    Vue.component(KButton.name, KButton);
}

export default KButton;

