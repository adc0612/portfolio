<template>
  <v-app-bar app color="primary" class="app-bar-wrap" dark>
    <div class="d-flex align-center">
      <h1 class="app-bar-title">
        <a class="white--text" @click="scrollToTop">DOHU JEON</a>
      </h1>
    </div>
    <div class="navigation-menu-wrap ml-10">
      <v-btn v-for="(section, index) in sectionList" :key="index" plain class="white--text" :lass="{ 'ml-3': index > 0 }" @click="scrollToSection(section)">{{ section }}</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-app-bar-nav-icon class="drawer-trigger-btn" v-bind="attrs" v-on="on" />
      </template>
      <v-list>
        <v-list-item v-for="(section, index) in sectionList" :key="index">
          <v-list-item-title>
            <v-btn class="menu-btn" width="100%" plain @click="scrollToSection(section)">{{ section }}</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    sectionList: ['Intro', 'Experience', 'Project', 'Skill', 'Award', 'Blog'],
  }),
  methods: {
    handleDrawer() {
      this.$emit('handleDrawer');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollToSection(id) {
      document.getElementById(id.toLowerCase()).scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    },
  },
};
</script>
