<template>
  <v-app-bar app :color="$vuetify.theme.dark ? 'black' : 'primary'" class="d-flex justify-space-between app-bar-wrap" width="100%" dark>
    <div class="d-flex align-center">
      <h1 class="app-bar-title">
        <a class="white--text" @click="scrollToTop">DOHU JEON</a>
      </h1>
    </div>
    <v-spacer></v-spacer>

    <div class="navigation-menu-wrap">
      <v-btn v-for="(section, index) in sectionList" :key="index" plain class="white--text" @click="scrollToSection(section)">{{ section }}</v-btn>
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
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(language, index) in languageList" :key="index">
          <v-list-item-title>
            <v-btn class="menu-btn" width="100%" plain @click="changeLanguage(language)">{{ language }}</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn icon @click="switchTheme">
      <v-icon v-if="$vuetify.theme.dark">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-weather-sunny</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    sectionList: ['Intro', 'Experience', 'Project', 'Skill', 'Award', 'Blog'],
    languageList: ['ko', 'en'],
  }),
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollToSection(id) {
      document.getElementById(id.toLowerCase()).scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    },
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    changeLanguage(value) {
      this.$root.$i18n.locale = value;
    },
  },
};
</script>
