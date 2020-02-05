<template>
	<section class="section a">
	  <div class="container">
	    <span class="tag" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500">
	      MARQUE UM GOLAÇO!
	    </span>
	    <h1 data-aos="fade-down" data-aos-easing="linear">
	      Lucre com nossas indicações <br />
	      no mercado esportivo através <br />
	      do seu celular!
	    </h1>
	    <img id="kick" src="../assets/kick.png">
      <a
        :href="checkout"
        class="btn"
        data-aos="fade-down"
        data-aos-easing="linear"
      >
	      <img src="../assets/btn-icon.svg">
	      <span>ENTRE PARA O CLUBE</span>
	    </a>
	  </div>
	</section>
</template>

<script>
  export default {
    props: ['checkout']
  }
</script>

<style lang="scss" scoped>
  .section.a > .container {
    background: #0E111C;
    border-radius: 10px;
    box-shadow: 0px 12px 20px rgba(5, 7, 11, 0.6);
    height: 490px;
    padding: 152px 60px 0 60px;
    > .tag {
      background: #42D9C8;
      color: #FFFFFF;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
    }
    > h1 {
      margin-top: 16px;
      font-weight: 900;
      font-size: 48px;
      line-height: 62px;
      color: #FFFFFF;
    }
    #kick {
      position: absolute;
      top: -151px;
      right: -30px;
      transform: rotate(0.08deg);
    }
    > .btn {
      position: absolute;
      bottom: -44.5px;
      right: 90px;
    }
  }
  @media screen and (max-width: 769px) {
    .section.a > .container {
      padding: 20px;
      padding-bottom: 60px;
      height: 100%;
      > h1 {
        font-size: 32px;
        line-height: 42px;
      }
      #kick {
        display: none;
      }
      > .btn {
        bottom: -30px;
        left: 5%;
      }
    }
  }
</style>