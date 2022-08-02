<template>
  <v-app>
    <AppBar @handleDrawer="handleDrawer" />
    <NavMenu :show="drawerStatus" />
    <v-main>
      <v-container>
        <IntroPage />
        <ExperiencePage @openModal="openModal" />
      </v-container>
    </v-main>
    <DetailModal v-if="showModal" v-model="showModal" :data="modalData" @close="showModal = false" />
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar.vue';
import NavMenu from './components/layout/NavMenu.vue';
import IntroPage from './views/IntroPage.vue';
import ExperiencePage from './views/ExperiencePage.vue';
import DetailModal from '@/components/common/DetailModal';
export default {
  name: 'App',

  components: {
    DetailModal,
    AppBar,
    NavMenu,
    IntroPage,
    ExperiencePage,
  },

  data: () => ({
    drawerStatus: false,
    showModal: false,
    modalData: {},
  }),
  methods: {
    handleDrawer() {
      this.drawerStatus = !this.drawerStatus;
    },
    openModal(contents) {
      this.showModal = true;
      this.modalData = contents;
    },
  },
};
</script>
