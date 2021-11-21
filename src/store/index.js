import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        creator: "Rasmus Talioja",
        time: "Sept 18, 2020 15:16",
        image: "hl2.jpg",
        text: "Imagine",
        likes: 0,
      },
      {
        creator: "Rasmus Talioja",
        time: "Sept 18, 2020 15:16",
        image: "image.jpg",
        text: "Which weighs more, a pound of feathers or a pound of bricks?",
        likes: 0,
      },
      {
        creator: "Märten Kahu",
        time: "Sept 18, 2020 15:16",
        image: "geralt.jpg",
        text: "Felt cute",
        likes: 0,
      },
      {
        creator: "Rasmus Talioja",
        time: "Sept 19, 2020 15:42",
        image: null,
        text: "Guy across the road forgot to trim his garbage, what a mess",
        likes: 0,
      },
      {
        creator: "Mart-Mihkel Aun",
        time: "Oct 16, 2020 15:11",
        image: "triangel.jpg",
        text: "I'm not sure you can apply Pythagorean on that triangle",
        likes: 0,
      },
      {
        creator: "Märten Kahu",
        time: "Oct 13, 2020 12:25",
        image: null,
        text: "You don't look okay",
        likes: 0,
      },
      {
        creator: "Jaanus Albert Joosep Külatee Jobu",
        time: "Oct 13, 2020 10:21",
        image: "magi.jpg",
        text: "Would you?",
        likes: 0,
      },
      {
        creator: "Rasmus Talioja",
        time: "Nov 24, 2020 19:23",
        image: null,
        text: "Road works ahead? I sure hope it does",
        likes: 0,
      },
      {
        creator: "Mart-Mihkel Aun",
        time: "Nov 24, 2020 19:26",
        image: null,
        text: "Men invented arm wrestling so they could hold hands and look eachother in the eyes",
        likes: 0,
      },
      {
        creator: "Rasmus Talioja",
        time: "Nov 26, 2020 20:41",
        image: "mets.png",
        text: "Soothing walk in the forest",
        likes: 0,
      },
    ],
  },
  mutations: {
    ResetLikes: (state) => {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    ResetLikesAct: (act) => {
      act.commit({
        type: "ResetLikes",
      });
    },
  },
  modules: {},
});
