const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      // courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/"
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

// html과 연결
app.mount("#user-goal");