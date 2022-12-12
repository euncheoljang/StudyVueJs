Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enterdValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enterdValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal); 