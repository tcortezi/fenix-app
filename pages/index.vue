<template>
  <div>
    <div id="b"></div>
    <section-a data-aos="fade-up" :checkout="checkoutUrl"></section-a>
    <section-b data-aos="fade-up" data-aos-anchor-placement="top-center" :checkout="checkoutUrl">
    </section-b>
    <section-c data-aos="fade-up" data-aos-anchor-placement="top-center"></section-c>
    <section-d data-aos="fade-up" data-aos-anchor-placement="top-center" :checkout="checkoutUrl">
    </section-d>
    <guarantee data-aos="fade-up" data-aos-anchor-placement="top-center"></guarantee>
    <faq :checkout="checkoutUrl"></faq>
    <footer-c></footer-c>
  </div>
</template>

<script>
  import SectionA from '~/components/SectionA'
  import SectionB from '~/components/SectionB'
  import SectionC from '~/components/SectionC'
  import SectionD from '~/components/SectionD'
  import Guarantee from '~/components/Guarantee'
  import Faq from '~/components/Faq'
  import FooterC from '~/components/Footer'
  export default {
    components: {
      SectionA, SectionB, SectionC, SectionD, Guarantee, Faq, FooterC
    },
    computed: {
      checkoutUrl() {
        if(this.$route.query.marketing === 'clarific') {
          this.$store.commit('affiliate')
        }
        return this.$store.state.checkout
      }
    }
  }
</script>

<style lang="scss" scoped>
  #b {
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 920px;
    z-index: -1;
    background: linear-gradient(180deg, rgba(27, 33, 55, 0) 56.3%, #1B2137 100%), url(../assets/bg.jpg);
  }
</style>