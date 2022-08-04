<template>
  <v-card flat class="skill-wrap mt-5">
    <h2 class="primary--text section-header">Skill</h2>
    <v-card v-for="(item, index) in skillContents" :key="index" class="section-wrap" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
      <v-card-text class="contents-wrap">
        <div class="d-flex justify-center align-center info-wrap">
          <v-avatar left>
            <v-img :src="require(`@/assets/icon/ic-100-${item.name.toLowerCase()}.svg`)" />
          </v-avatar>
          <p class="ml-4">
            <strong>{{ item.name }}</strong>
          </p>
          <div class="ml-4">
            <p v-for="(line, i) in item.text" :key="i">{{ line }}</p>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'SkillPage',
  data: () => ({
    skillContents: [
      {
        name: 'Javascript',
        text: ['ES6 문법을 사용하며 코드의 재사용성과 쉽게 이해 할 수 있도록 함수형 프로그래밍을 지향하며 개발하도록 노력하고 있습니다.'],
      },
      {
        name: 'Typescript',
        text: ['코드 단에서 오류 탐지와 코드 자동완성의 장점을 가지는 언어로 강의를 통해 공부하고 있습니다.', '추후 vue3로 업데이트하면서 적용 할 예정입니다.'],
      },
      {
        name: 'Vue',
        text: ['Vue2를 기반으로 전반적인 프로젝트에 사용중입니다. ', '코드 재사용성을 위해 mixin과 slot을 사용 중이며, composition api도 적용 할 예정입니다.'],
      },
      {
        name: 'Javascript',
        text: ['ES6 문법을 사용하며 코드의 재사용성과 쉽게 이해 할 수 있도록 함수형 프로그래밍을 지향하며 개발하도록 노력하고 있습니다.'],
      },
    ],
  }),
};
</script>

<style scoped></style>
