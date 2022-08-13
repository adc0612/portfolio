<template>
  <v-card id="skill" color="transparent" flat class="skill-wrap mt-5">
    <h2 class="primary--text section-header">Skill</h2>
    <v-card v-for="(item, index) in $t('skill.primaryContents')" :key="index" class="section-wrap" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
      <v-card-text class="d-flex align-center contents-wrap">
        <div class="d-flex align-center flex-shrink-0">
          <v-avatar size="60" rounded="lg" left>
            <v-img :src="require(`@/assets/icon/ic-100-${item.name.toLowerCase()}.svg`)" />
          </v-avatar>
          <p class="skill-name ml-4">
            <strong>{{ item.name }}</strong>
          </p>
        </div>
        <div class="flex-grow-1 skill-text-wrap ml-4">
          <p v-for="(line, i) in item.text" :key="i">{{ line }}</p>
        </div>
      </v-card-text>
    </v-card>
    <div class="mt-4">
      <div v-for="(content, index) in $t('skill.subContents')" :key="index" class="skill-list-wrap" :class="{ 'mt-3': index > 0 }">
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
