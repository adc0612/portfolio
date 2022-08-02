<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click.stop="handleDrawer" class="d-sm-none" />
      <!-- <h1>Dohu Jeon</h1> -->
    </div>
    <v-spacer></v-spacer>
    <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    handleDrawer() {
      this.$emit('handleDrawer');
    },
  },
};
</script>
