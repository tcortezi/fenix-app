<template>
    <section>
        <b-carousel
            animated="slide"
            :has-drag="true"
            :autoplay="true"
            :pause-hover="true"
            :pause-info="false"
            :indicator="false"
            :interval="3500"
            :arrow-hover="false"
            icon-size="is-large"
            ref="parent">
            <b-carousel-item v-for="(item, i) in 28" :key="i">
                <div>
                    <img :src="`/prints/${i}.jpeg`">
                </div>
            </b-carousel-item>
        </b-carousel>
    </section>
</template>

<script>
  export default {
    methods: {
      moveDiv() {
        const parent = this.$refs.parent.$el
        const arrow = parent.querySelector('.carousel-arrow')
        parent.appendChild(arrow)
      }
    },
    mounted() {
      this.moveDiv()
    }
  }
</script>

<style lang="scss">
  section {
      .carousel {
        width: 100%;
        height: 620px;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -10;
          background-image: url('../assets/mockup.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .carousel-arrow .icon {
          background: unset;
          border: none;
          color: #42D9C8;
        }
      }
      .carousel > .carousel-items {
        width: 274px;
        height: 481px;
        display: flex;
        align-items: center;
        justify-content: center;
        .carousel-item {
          width: 274px;
          height: 481px;
        }
      }
  }
  @media screen and (max-width: 769px) {
    section {
      .carousel-arrow .icon.has-icons-right { right: 1.5rem; }
      .carousel-arrow .icon.has-icons-left { left: 1.5rem; }
    }
  }
  @media screen and (max-width: 330px) {
    .carousel-item {
      width: 90% !important;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    }
  }
</style>