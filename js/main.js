"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo1: "C'era una volta il sole",
      titolo2: '<span style= "color: red">C era una volta il sole</span>',
      titoloId: 'container',
      url: 'https://www.civitatis.com/f/italia/gaeta/gaeta.jpg',
      imgId: 'imgScale',
      imgD: 'imgHidden'
    }  
  },
  methods: {
      mostra(){
        this.imgD = 'imgShow'
      }
    }
}).mount("#app");
