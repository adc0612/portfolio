<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container class="py-5">
        <IntroPage />
        <ExperiencePage @openModal="openModal" />
        <ProjectPage @openModal="openModal" />
        <SkillPage />
        <AwardPage />
        <BlogPage />
      </v-container>
    </v-main>
    <DetailModal v-if="showModal" v-model="showModal" :data="modalData" @close="showModal = false" />
  </v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar.vue';
import IntroPage from './views/IntroPage.vue';
import ExperiencePage from './views/ExperiencePage.vue';
import DetailModal from '@/components/common/DetailModal';
import ProjectPage from '@/views/ProjectPage';
import SkillPage from '@/views/SkillPage';
import AwardPage from '@/views/AwardPage';
import BlogPage from '@/views/BlogPage';
export default {
  name: 'App',

  components: {
    BlogPage,
    AwardPage,
    SkillPage,
    ProjectPage,
    DetailModal,
    AppBar,
    IntroPage,
    ExperiencePage,
  },

  data: () => ({
    showModal: false,
    modalData: {},
  }),
  methods: {
    openModal(contents) {
      this.showModal = true;
      this.modalData = contents;
    },
  },
};
</script>
