<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="../assets/logo.svg" alt="Fênix Club" width="182" height="32">
          </a>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
  export default {
    methods: {
      async aosInit() {
        const AOS = await import('aos')
        AOS.init({
          delay: 0,
          disable: 'phone',
          once: true,
          duration: 600,
          easing: 'ease-out-back',
        })
      }
    },
    mounted() {
      this.aosInit()
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    background-color: unset;
  }
</style>