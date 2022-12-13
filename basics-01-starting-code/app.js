const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!"
      // courseGoal: [1, 2, 3]
    };
  }
});

// html과 연결
app.mount("#user-goal");