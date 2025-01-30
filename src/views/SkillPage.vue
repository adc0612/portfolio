<template>
  <v-card id="skill" color="transparent" flat class="skill-wrap mt-5">
    <h2 class="primary--text section-header">Skill.</h2>
    <div class="mt-4">
      <div v-for="(content, index) in $t('skill.contents')" :key="index" class="skill-list-wrap" :class="{ 'mt-3': index > 0 }">
        <p class="flex-shrink-0 sub-category-title">{{ `${content.title}: ` }}</p>
        <div class="skill-list d-flex flex-wrap">
          <SkillChip v-for="skill in content.skills" :key="skill" :name="skill" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import SkillChip from '@/components/common/SkillChip';
export default {
  name: 'SkillPage',
  components: { SkillChip },
};
</script>

<style scoped></style>
