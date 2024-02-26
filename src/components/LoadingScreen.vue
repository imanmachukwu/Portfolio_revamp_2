<template>
  <section id="intro">
    <div class="intro__images">
      <img src="../assets/images/1.png" data-hidden />
      <img src="../assets/images/2.png" data-hidden />
      <img src="../assets/images/3.png" data-hidden />
      <img src="../assets/images/4.png" data-hidden />
      <img src="../assets/images/5.png" data-hidden />
      <img src="../assets/images/6.png" data-hidden />
      <img src="../assets/images/7.png" data-hidden />
      <img src="../assets/images/8.png" data-hidden />
      <img class="main-image" src="../assets/images/9.png" data-hidden />
    </div>
    <div class="intro__text">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>
import Intro from "@/animations/intro";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Designing websites",
    };
  },
  methods: {
    createIntro() {
      this.intro = new Intro();
      console.log("Intro created");
    },
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.getSingle("homepage");
      if (response) {
        this.title = response.data.title[0].text;
        console.log(response);
      } else {
        console.log("Error fetching content");
      }
    },
  },
  mounted() {
    this.createIntro();
  },
  created() {
    this.getContent();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

section#intro {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;
}

[data-hidden] {
  opacity: 0;
}

#intro img {
  position: absolute;
}

/* .intro__images {
    //position: absolute;
} */

#intro .intro__images img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

#intro .intro__images.initial img {
  transform: none;
}

#intro .intro__images img:nth-child(9) {
  width: 13.31vw;
}

#intro .intro__images img:nth-child(1) {
  width: 16.435vw;
}

#intro .intro__images img:nth-child(2) {
  width: 10.369vw;
}

#intro .intro__images img:nth-child(3) {
  width: 10.475vw;
}

#intro .intro__images img:nth-child(4) {
  width: 11.516vw;
}

#intro .intro__images img:nth-child(5) {
  width: 9.606vw;
}

#intro .intro__images img:nth-child(6) {
  width: 11.979vw;
}

#intro .intro__images img:nth-child(7) {
  width: 17.593vw;
}

#intro .intro__images img:nth-child(8) {
  width: 17.245vw;
}

#intro .intro__images img:nth-child(9) {
  z-index: 20;
}

.intro__images.initial {
  width: 100%;
  height: 100%;
}

#intro .intro__images.initial img:nth-child(1) {
  top: 59.087vh;
  left: 5.556vw;
}

#intro .intro__images.initial img:nth-child(2) {
  top: 8.594vh;
  left: 6.889vw;
}

#intro .intro__images.initial img:nth-child(3) {
  top: 17.819vh;
  left: 79.741vw;
}

#intro .intro__images.initial img:nth-child(4) {
  top: 12.004vh;
  left: 50vw;
}

#intro .intro__images.initial img:nth-child(5) {
  top: 49.962vh;
  left: 32.991vw;
}

#intro .intro__images.initial img:nth-child(6) {
  top: 66.335vh;
  left: 55.787vw;
}

#intro .intro__images.initial img:nth-child(7) {
  top: 40.824vh;
  left: 67.417vw;
}

#intro .intro__images.initial img:nth-child(8) {
  top: 23.191vh;
  left: 21.991vw;
}

/* #intro .intro__images.initial img:nth-child(9) {
    opacity: 0;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
} */

/* .intro__images {
    opacity: 1;
}

.intro__text {
    opacity: 0;
} */

.intro__text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
}

.intro__text h1 {
  padding-bottom: 3px;
  max-width: 56.019vw;
  font-size: 5.556vw;
  font-weight: 500;
  line-height: 109.375%;
  letter-spacing: -0.222vw;
  text-align: center;
  //background: -webkit-linear-gradient(#2b2d42, #41e2ba);
  //background-clip: text;
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
}
</style>
