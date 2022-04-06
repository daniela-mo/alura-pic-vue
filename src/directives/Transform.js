//criando minha directiva

import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener("dblClick", function() {
      let incremento = 90;
      let animate = true;

      if (binding.value) {
        incremento = binding.value.incremento;
        animate = binding.value.animate;
      }

      //  let incremento = binding.value || 90;  o bindgin vai pegar o valor passado na diretiva lá na home, caso não seja pasasdo nada, irá pegar o 90
      current += incremento;
      el.style.transform = `rotate(${current}deg)`;
      if (animate) el.style.transition = "transform 0.5s";
    });
  }
});
