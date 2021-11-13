import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        poster: "Rasmus Talioja",
        time: "Sept 18, 2020 15:16",
        image: "hl2.jpg",
        text: "Imagine",
      },
      {
        poster: "Rasmus Talioja",
        time: "Sept 18, 2020 15:16",
        image: "image.jpg",
        text: "Which weighs more, a pound of feathers or a pound of bricks?",
      },
      {
        poster: "Märten Kahu",
        time: "Sept 18, 2020 15:16",
        image: "geralt.jpg",
        text: "Felt cute",
      },
      {
        poster: "Rasmus Talioja",
        time: "Sept 19, 2020 15:42",
        image: "nopic.png",
        text: "Guy across the road forgot to trim his garbage, what a mess",
      },
      {
        poster: "Mart-Mihkel Aun",
        time: "Oct 16, 2020 15:11",
        image: "triangel.jpg",
        text: "I'm not sure you can apply Pythagorean on that triangle",
      },
      {
        poster: "Märten Kahu",
        time: "Oct 13, 2020 12:25",
        image: "nopic.png",
        text: "You don't look okay",
      },
      {
        poster: "Jaanus Albert Joosep Külatee Jobu",
        time: "Oct 13, 2020 10:21",
        image: "magi.jpg",
        text: "Would you?",
      },
      {
        poster: "Rasmus Talioja",
        time: "Nov 24, 2020 19:23",
        image: "nopic.png",
        text: "Road works ahead? I sure hope it does",
      },
      {
        poster: "Mart-Mihkel Aun",
        time: "Nov 24, 2020 19:26",
        image: "nopic.png",
        text: "Men invented arm wrestling so they could hold hands and look eachother in the eyes",
      },
      {
        poster: "Rasmus Talioja",
        time: "Nov 26, 2020 20:41",
        image: "mets.png",
        text: "Soothing walk in the forest",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
