<template>
  <button class="botao" :class="estiloDoBotao" :type="tipo">
    <!-- a class normal irá buscar no css, e a class com o bind entende que se trata do js -->
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String
    },

    rotulo: {
      required: true,
      type: String
    },

    confirmacao: Boolean,
    estilo: String
  },

  methods: {
    disparaAcoa() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    }
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao botao-padrao";
      if (this.estilo == "perigo") return "botao botao-perigo";
    }
  }
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
