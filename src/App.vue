<template>
  <v-app>
    <AppBar @handleDrawer="handleDrawer" />
    <NavMenu :show="drawerStatus" />
    <v-main>
      <v-container>
        <IntroPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar.vue';
import NavMenu from './components/layout/NavMenu.vue';
import IntroPage from './views/IntroPage.vue';
export default {
  name: 'App',

  components: {
    AppBar,
    NavMenu,
    IntroPage,
  },

  data: () => ({
    drawerStatus: false,
  }),
  methods: {
    handleDrawer() {
      this.drawerStatus = !this.drawerStatus;
    },
  },
};
</script>
