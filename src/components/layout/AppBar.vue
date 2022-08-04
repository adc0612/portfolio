<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <!--      <v-app-bar-nav-icon @click.stop="handleDrawer" class="d-sm-none" />-->
      <h1 class="app-bar-title">
        <a class="white--text" @click="scrollToTop">Dohu Jeon</a>
      </h1>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    handleDrawer() {
      this.$emit('handleDrawer');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
