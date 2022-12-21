const app = Vue.createApp({
  data() {
    return {
      resister: "",
      resisterEnter: "",
    };
  },
  methods: {
    inputUser(event) {
      this.resister = event.target.value
    },
    showAlert() {
      alert("This is Alert!!")
    },
    enterUser() {
      this.resisterEnter = this.resister
    },
  }
});

app.mount("#assignment")