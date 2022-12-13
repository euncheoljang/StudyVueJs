const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!"
    };
  }
});

// html과 연결
app.mount("#user-goal");