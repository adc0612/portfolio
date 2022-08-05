<template>
  <v-card flat id="skill" class="skill-wrap mt-5">
    <h2 class="primary--text section-header">Skill</h2>
    <v-card v-for="(item, index) in primarySkillContents" :key="index" class="section-wrap" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
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
      <div v-for="(content, index) in skillContents" :key="index" class="skill-list-wrap" :class="{ 'mt-3': index > 0 }">
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
  data: () => ({
    primarySkillContents: [
      {
        name: 'Javascript',
        text: ['ES6 문법을 사용하며 코드의 재사용성과 쉽게 이해 할 수 있도록 함수형 프로그래밍을 지향하며 개발하도록 노력하고 있습니다.'],
      },
      {
        name: 'Typescript',
        text: ['코드 단에서 오류 검사와 코드 자동완성의 장점을 가지고 있으므로, 프로젝트 개발 생산성과 유지보수에 이점이 있습니다.', '추후 Vue3로 리팩토링 하며 적용할 예정입니다.'],
      },
      {
        name: 'Vue',
        text: ['Vue2를 기반으로 전반적인 프로젝트에 사용중입니다. ', '코드 재사용성을 위해 mixin과 slot을 사용 중이며, composition api도 적용 할 예정입니다.'],
      },
      {
        name: 'React',
        text: ['개인 프로젝트와 인터넷 강의를 통해 배우는 중이며 소규모 프로젝트부터 적용해 볼 예정입니다.'],
      },
    ],
    skillContents: [
      {
        title: 'UI library',
        skills: ['Vuetify', 'StyledComponents'],
      },
      {
        title: 'Collaboration',
        skills: ['Bitbucket', 'Jira', 'Zeplin', 'Figma', 'Notion', 'Slack'],
      },
      {
        title: 'Language',
        skills: ['Korean', 'English'],
      },
    ],
  }),
};
</script>

<style scoped></style>
