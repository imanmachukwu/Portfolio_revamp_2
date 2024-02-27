<template>
  <div class="home">
    <div class="loading_screen" v-if="loaded === false">
      <span class="loader"></span>
      <h2>Organizing Resources</h2>
    </div>
    <div class="home_details">
      <img :src="photo" class="home_details_bio_photo" />
      <h1 class="home_details_title">{{ name }}</h1>
      <p class="home_details_subtitle">{{ subtitle }}</p>
    </div>
    <div class="home_works">
      <div v-for="project in projects" :key="project.id" class="home_work">
        <h2 class="project_title">{{ project.data.copy[0].text }}</h2>
        <div class="tags_container">
          <div class="tag" v-for="(tag, index) in project.tags" :key="index">
            {{ tag }}
          </div>
        </div>
        <div
          v-for="(slice, index) in project.data.body"
          :key="index"
          class="image_parent_container"
        >
          <div
            v-if="
              project.data.body[index].slice_type === 'fullscreen_two_photos'
            "
            class="image_container"
          >
            <img
              :src="project.data.body[index].primary.dual_photo_1.url"
              :alt="project.data.body[index].primary.dual_photo_1.alt"
            />
            <img
              :src="project.data.body[index].primary.dual_photo_2.url"
              :alt="project.data.body[index].primary.dual_photo_1.alt"
            />
          </div>
          <div
            v-if="project.data.body[index].slice_type === 'fullscreen_photo'"
            class="image_container"
          >
            <img
              :src="project.data.body[index].primary.fullscreen_photo.url"
              :alt="project.data.body[index].primary.fullscreen_photo.alt"
            />
          </div>
        </div>
        <!-- <img class="work_image" :src="project.data.banner.url" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/LoadingScreen.vue";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "HomeView",
  data() {
    return {
      title: "Designing websites",
      subtitle: "Subtitle",
      name: "Name",
      photo: "photo",
      projects: [],
      //tags: [],
      //works: [],
      loaded: false,
    };
  },
  /* components: {
    HelloWorld,
  }, */
  methods: {
    async getContent() {
      const api = this.$prismic.client;
      //console.log(api);
      // Query the API and assign the response to "response"
      const response = await api.getSingle("homepage");
      try {
        if (response) {
          this.subtitle = response.data.description[0].text;
          this.name = response.data.profile_name[0].text;
          this.photo = response.data.profile_photo.url;
          //console.log(response);
          //console.log(works);
        } else {
          console.log("Error fetching content");
        }
      } catch (error) {
        console.error("Error is:", error);
      }
    },
    async getProjects() {
      const api = this.$prismic.client;
      const works = await api.getAllByType("project_details");

      if (works) {
        this.projects = works;
        this.loaded = true;
        //this.tags = works.tags;
        //this.title = this.project.data.copy[0].text;
        //console.log(works);
      } else {
        console.log("Error fetching content");
      }
    },
    _revealText() {
      const tl = gsap.timeline();

      tl.to(this.introTextWrapper, {
        y: 0,
        opacity: 1,
        ease: "expo.in",
        duration: 1,
        delay: 0.5,
      });

      return tl;
    },
  },
  created() {
    this.getContent();
    this.getProjects();
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100dvw;
  height: 100dvh;
  div.loading_screen {
    width: 100dvw;
    height: 100dvh;
    background: #fcfdfb;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 4;
    position: fixed;
    h2 {
      color: #000;
      font-family: Inter;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.135rem;
    }
    .loader {
      width: 40px;
      height: 40px;
      border: 2px solid #000;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .home_details {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.444vw;
    text-align: center;
    padding-top: 2.111vw;
    img.home_details_bio_photo {
      width: 3.588vw;
      height: 3.588vw;
      border-radius: 50%;
      position: absolute;
      top: 2.111vw;
      left: 2.111vw;
    }
    .home_details_bio {
      display: flex;
      align-items: center;
      gap: 1em;
      img.home_details_bio_photo {
        width: 3.588vw;
        height: 3.588vw;
        border-radius: 50%;
      }
      .home_details_bio_name {
        font-size: 2.083vw;
        font-size: 1.157vw;
        font-weight: 400;
        color: #212121;
      }
    }
    h1.home_details_title {
      font-weight: 500;
      font-size: 2.315vw;
      //line-height: 109.375%;
      letter-spacing: -0.139vw;
      font-style: normal;
      //background: -webkit-linear-gradient(#2b2d42, #41e2ba);
      //background-clip: text;
      //-webkit-background-clip: text;
      //-webkit-text-fill-color: transparent;
    }
    p.home_details_subtitle {
      font-size: 1.157vw;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      letter-spacing: -0.069vw;
    }
  }
  .home_works {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.222vw;
    .home_work {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 4.222vw;
      h2 {
        color: #000;
        text-align: center;
        font-size: 1.852vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.139vw;
      }
      div.tags_container {
        padding: 2.111vw;
        padding-bottom: 0px;
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 2.111vw;
        div.tag {
          border-radius: 3.993vw;
          border: 0.5px solid rgba(0, 0, 0, 0.2);
          padding: 0.574vw;
          color: #000;
          text-align: center;
          font-size: 0.694vw;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.042vw;
        }
      }
      div.image_parent_container {
        width: 100%;
        padding: 2.111vw;
        padding-bottom: 0px;
        div.image_container {
          width: 100%;
          display: flex;
          gap: 1.0202vw;
          justify-content: space-between;
          img {
            width: 45%;
            height: auto;
            flex-grow: 1;
            border-radius: 1.736vw;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 960px) {
  .home {
    .home_details {
      padding-top: 3.19rem;
      padding-left: 1.5rem;
      img.home_details_bio_photo {
        width: 3.875rem;
        height: 3.875rem;
        flex-shrink: 0;
        top: 3.19rem;
        left: 1.5rem;
      }
      h1.home_details_title {
        color: #000;
        text-align: center;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.09rem;
        max-width: 10.5625rem;
      }
      p.home_details_subtitle {
        color: rgba(0, 0, 0, 0.6);
        text-align: center;
        font-size: 0.8125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.04875rem;
      }
    }
    .home_works {
      .home_work {
        h2 {
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.09rem;
        }
        div.tags_container {
          gap: 1.5rem;
          padding: 1.5rem;
          div.tag {
            border-radius: 4.3125rem;
            padding: 0.625rem;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.045rem;
          }
        }
      }
    }
  }
}
</style>
