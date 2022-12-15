// const app = Vue.createApp({
//   data() {
//     return {
//       enterdValue: "",
//       name: this.enterdValue,
//       age: 3,
//       image: "https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_960_720.jpg",
//     }
//   },
//   methods: {
//     plusFive(age) {
//       return age + 5;
//     },
//     favoritNum() {
//       return Math.random();
//     },
//     addName(enterdValue) {
//       this.enterdValue += enterdValue.data
//       this.name = this.enterdValue
//     }
//   }
// });
// app.mount("#assignment")

const app = Vue.createApp({
  data() {
    return {
      name: "Ethan",
      age: 34,
      imageUrl: "https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_960_720.jpg"
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount("#assignment");