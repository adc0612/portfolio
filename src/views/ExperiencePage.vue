<template>
  <v-card flat class="experience-wrap mt-5">
    <h2 class="primary--text section-header">Experience</h2>
    <v-card v-for="(item, index) in experienceContents" :key="index" class="section-wrap" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
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
          <li v-for="(line, i) in item.work" :key="i" class="d-flex" :class="{ 'mt-2': i > 0 }">
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
  data: () => ({
    experienceContents: [
      {
        name: '카이아이 컴퍼니',
        companyLink: 'https://www.kai-i.com/',
        role: 'Frontend Developer',
        date: '2021.06 ~ current',
        work: ['앱 웹뷰 구현 및 서비스 관리자 페이지 화면 구현 ', '기존 프로젝트 css에서 sass로 전환', '데이터 시각화를 위한 대시보드, 차트 기능 구현'],
        modalContents: {
          title: '카이아이 컴퍼니',
          sections: [
            {
              subTitle: '# What I Learned',
              contents: ['vuex를 이용한 state 관리', 'vuetify와 sass를 이용한 UI구현', '컴포넌트 모듈화를 통한 재사용성 향상', '기획자, 백엔드 개발자, 디자이너와 협업'],
            },
            {
              subTitle: '# Skill',
              contents: ['Vue', 'Vuex', 'Vuetify', 'Sass'],
            },
          ],
        },
      },
      {
        name: '칸타코리아',
        companyLink: 'http://www.kantar.co.kr/',
        role: 'Survey Programmer (CAWI)',
        date: '2018.09 ~ 2020.09',
        work: ['IBM Dimension Platform을 이용한 온라인 설문조사(CAWI) 구현 및 진행', '한국조사에 맞춘 UI 컴포넌트 개발', '프로젝트 코드 입력시 테스트 및 실제 조사 URL 생성 페이지 개발'],
        modalContents: {
          title: '칸타코리아',
          sections: [
            {
              subTitle: '# What I Learned',
              contents: ['온라인 설문조사 개발부터 진행, 데이터 전달 경험', '크로스 브라우징 대응', '1년이상 진행하는 장기프로젝트를 담당하며 얻은 소통기술과 책임감'],
            },
            {
              subTitle: '# Skill',
              contents: ['Javascript', 'JQuery', 'Css', 'HTML', 'Vue'],
            },
          ],
        },
      },
      {
        name: 'NTech Service (NHN Technology Service)',
        companyLink: 'https://www.nts-corp.com/',
        role: '인턴',
        date: '2018.01 ~ 2018.02',
        work: ['UI개발팀 인턴으로 웹 교육과 매일 과제 수행', '디자인(psd 파일) 기반으로 웹 페이지 구현'],
        modalContents: {
          title: 'NTech Service(NHN Technology Service)',
          sections: [
            {
              subTitle: '# What I Learned',
              contents: ['HTML, CSS, Javascript, Sass, Gulp 등 웹 전반적인 지식', '반응형, 크로스 브라우징, 접근성, 성능 개선을 고려한 개발'],
            },
            {
              subTitle: '# Skill',
              contents: ['Javascript', 'CSS', 'HTML'],
            },
          ],
        },
      },
    ],
  }),
  methods: {
    openModal(contents) {
      this.$emit('openModal', contents);
    },
  },
};
</script>

<style></style>
