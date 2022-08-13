<template>
  <v-card id="project" color="transparent" flat class="project-wrap mt-5">
    <h2 class="primary--text section-header">Project</h2>
    <v-card v-for="(item, index) in $t('project.contents')" :key="index" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
      <v-card-text class="contents-wrap">
        <h3 class="primary--text">
          <span>{{ item.platformName }}</span>
          <span>{{ item.name }}</span>
        </h3>
        <div>
          <h4>
            <v-icon left>mdi-information-outline</v-icon>
            {{ $t('project.section.title') }}
          </h4>
          <p class="pl-9 mt-2">{{ item.introduction }}</p>
        </div>
        <div>
          <h4>
            <v-icon left>mdi-calendar-edit</v-icon>
            {{ $t('project.section.date') }}
          </h4>
          <p v-for="(date, i) in item.dates" :key="`date-${i}`" class="pl-9 mt-2">
            {{ date }}
          </p>
        </div>
        <div>
          <h4>
            <v-icon left>mdi-sword</v-icon>
            {{ $t('project.section.skill') }}
          </h4>
          <div class="pl-9 mt-2 d-flex flex-wrap skill-list">
            <SkillChip v-for="(skill, i) in item.skills" :key="i" :name="skill" />
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="d-flex justify-center button-wrap">
        <v-btn elevation="0" width="100%" color="transparent" class="primary--text" @click="openModal(item.modalContents)">{{ $t('project.section.button') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
import SkillChip from '@/components/common/SkillChip';
export default {
  name: 'ProjectPage',
  components: { SkillChip },
  methods: {
    openModal(contents) {
      this.$emit('openModal', contents);
    },
  },
};
</script>

<style scoped></style>
