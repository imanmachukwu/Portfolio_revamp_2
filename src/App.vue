<template>
  <nav>
    <a href="mailto:iamimanma@gmail.com">Contact</a>
    <a href="assets/Imanmachukwu_Chukwuemeka_-_Web_Developer.pdf" download
      >Resume</a
    >
  </nav>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.cdnfonts.com/css/product-sans");

*::before,
*::after,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: fit-content;
}

body {
  height: 100dvh;
  width: 100dvw;
  background: #fcfdfb;
  font-family: "Inter", sans-serif;
  //font-family: "Product Sans", sans-serif;
  overflow-x: hidden;

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.333vw;
    position: fixed;
    bottom: 2.111vw;

    a {
      text-decoration: none;
      border-radius: 4.398vw;
      border: 1px solid #000;
      padding: 1.5vw 3.88vw;
      color: #000;
      font-size: 1.157vw;
      font-weight: 400;
    }
  }
}

@media only screen and (max-width: 960px) {
  body {
    nav {
      gap: 1.56rem;
      bottom: 1.56rem;
      a {
        padding: 0.5rem 1rem;
        border-radius: 4.75rem;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
</style>
