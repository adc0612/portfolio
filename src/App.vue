<template>
  <v-app>
    <AppBar @handleDrawer="handleDrawer" />
    <NavMenu :show="drawerStatus" />
    <v-main>
      <v-container>
        <IntroPage />
        <ExperiencePage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar.vue';
import NavMenu from './components/layout/NavMenu.vue';
import IntroPage from './views/IntroPage.vue';
import ExperiencePage from './views/ExperiencePage.vue';
export default {
  name: 'App',

  components: {
    AppBar,
    NavMenu,
    IntroPage,
    ExperiencePage,
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
