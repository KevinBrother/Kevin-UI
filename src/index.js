import KButton from '../packages/Button/index';

const components = [
    KButton,
]


/*
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

// 自动全局注册？ install
if(typeof window != 'undefined' && window.Vue) {
   install(window.Vue)
}
*/

export {KButton};
