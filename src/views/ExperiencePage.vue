<template>
  <v-card id="experience" flat color="transparent" class="experience-wrap mt-5">
    <h2 class="primary--text section-header">Experience.</h2>
    <v-card v-for="(item, index) in $t('experience.contents')" :key="index" class="section-wrap" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
      <v-card-text class="contents-wrap">
        <div class="d-flex flex-column justify-center info-wrap">
          <div>
            <a :href="item.companyLink" target="_blank" class="company-link">{{ item.name }}</a>
          </div>
          <p class="mt-2">
            <strong>{{ item.role }}</strong>
          </p>
          <p>{{ item.date }}</p>
        </div>
        <ul class="work-list flex-grow-1 d-flex flex-column justify-center">
          <li v-for="(line, i) in item.work" :key="i" class="d-flex align-start" :class="{ 'mt-2': i > 0 }">
            <v-icon class="mr-2">mdi-briefcase-outline</v-icon>
            {{ line }}
          </li>
        </ul>
      </v-card-text>
      <v-card-actions class="d-flex justify-center button-wrap">
        <v-btn elevation="0" width="100%" color="transparent" class="primary--text" @click="openModal(item.modalContents)">More Details</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'ExperiencePage',
  methods: {
    openModal(contents) {
      this.$emit('openModal', contents);
    },
  },
};
</script>

<style></style>
