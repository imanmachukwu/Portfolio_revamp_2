import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default class Intro {
  constructor() {
    this.state = null;
    this.introImagesWrapper = document.querySelector(".intro__images");
    this.images = [...this.introImagesWrapper.querySelectorAll("img")];
    this.mainImage = document.querySelector(".intro__images .main-image");
    this.introText = document.querySelector(".intro__text h1");
    this.introTextWrapper = document.querySelector(".intro__text");
    this.section = document.querySelector("#intro");

    this._getFinalState();
    this._setInitialState();
    this._fadeUpImages();
    //this._moveimagesToCenter();
  }

  _getFinalState() {
    gsap.set([this.images, this.mainImage], {
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
    });

    this.state = Flip.getState([this.mainImage, this.images]);
  }

  _setInitialState() {
    this.introImagesWrapper.classList.add("initial");

    gsap.set([this.images, this.mainImage], {
      xPercent: 0,
      yPercent: 0,
      y: 30,
    });

    gsap.set(this.mainImage, {
      opacity: 0,
    });

    gsap.set(this.introTextWrapper, {
      y: 60,
    });
    //console.log("y60 set")
  }

  _fadeUpImages() {
    return gsap.to([this.images, this.mainImage], {
      y: 0,
      //opacity: 1,
      duration: 3,
      ease: "power3.inOut",
      stagger: 0.1,
      onComplete: () => this._moveimagesToCenter(),
    });
  }

  _moveimagesToCenter() {
    Flip.to(this.state, {
      duration: 2,
      ease: "expo.inOut",
      stagger: 0.15,
      onComplete: () => this._moveImagesDown(),
    });
  }

  _moveImagesDown() {
    const tl = gsap.timeline();

    tl.to(this.introTextWrapper, {
      y: 0,
      opacity: 1,
      ease: "expo.in",
      duration: 1,
      delay: 0.5,
      onComplete: () => this._endScreen(),
    }).to(
      this.introImagesWrapper,
      {
        y: 100,
        display: "none",
        opacity: 0,
        ease: "expo.out",
        duration: 1,
      },
      0
    );

    return tl;
  }

  _endScreen() {
    gsap.to(this.section, {
      y: 0,
      display: "none",
      opacity: 0,
      ease: "expo.out",
      delay: 1,
      duration: 0.5,
    });
  }
}
