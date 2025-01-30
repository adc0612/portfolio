<template>
  <v-card id="project" color="transparent" flat class="project-wrap mt-5">
    <h2 class="primary--text section-header">Project.</h2>
    <v-card v-for="(item, index) in $t('project.contents')" :key="index" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
      <v-card-text class="contents-wrap">
        <h3 class="primary--text">
          <span>{{ item?.platformName }}</span>
          <span>{{ item.name }}</span>
        </h3>

        <div>
          <h4>
            <v-icon left>mdi-information-outline</v-icon>
            {{ $t('project.section.title') }}
          </h4>
          <p v-for="(line, i) in item.introduction" :key="`introduction-${i}`" class="pl-9 mt-2">{{ line }}</p>
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
            <v-icon left>mdi-fire</v-icon>
            {{ $t('project.section.problem') }}
          </h4>
          <div v-for="(section, idx) in item.sections" :key="idx" class="text-container mt-4 ml-9">
            <h5 class="primary--text">
              <v-icon class="mr-2">mdi-alert-box-outline</v-icon>
              <strong>{{ section.problem }}</strong>
            </h5>
            <div class="mt-2 ml-9">
              <h5><strong>개선 사항</strong></h5>
              <ul class="work-list flex-grow-1 pl-2">
                <li v-for="(line, i) in section.contents" :key="i" class="d-flex align-start">
                  <v-icon class="mr-2">mdi-circle-small</v-icon>
                  {{ line }}
                </li>
              </ul>
            </div>
            <div class="mt-1 ml-9">
              <h5><strong>성과</strong></h5>
              <ul class="work-list flex-grow-1 pl-2">
                <li v-for="(line, i) in section.effect" :key="i" class="d-flex align-start">
                  <v-icon class="mr-2">mdi-circle-small</v-icon>
                  {{ line }}
                </li>
              </ul>
            </div>
          </div>
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
    </v-card>
  </v-card>
</template>

<script>
import SkillChip from '@/components/common/SkillChip';
export default {
  name: 'ProjectPage',
  components: { SkillChip },
};
</script>

<style scoped></style>
