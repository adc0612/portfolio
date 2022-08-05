<template>
  <v-card flat id="project" class="project-wrap mt-5">
    <h2 class="primary--text section-header">Project</h2>
    <v-card v-for="(item, index) in projectContents" :key="index" :class="{ 'mt-3': index > 0, 'mt-4': index === 0 }">
      <v-card-text class="contents-wrap">
        <h3 class="primary--text">
          <span>{{ item.platformName }}</span>
          <span>{{ item.name }}</span>
        </h3>
        <div>
          <h4>
            <v-icon left>mdi-information-outline</v-icon>
            프로젝트 소개
          </h4>
          <p class="pl-9 mt-2">{{ item.introduction }}</p>
        </div>
        <div>
          <h4>
            <v-icon left>mdi-calendar-edit</v-icon>
            개발 기간
          </h4>
          <p v-for="(date, i) in item.dates" :key="`date-${i}`" class="pl-9 mt-2">
            {{ date }}
          </p>
        </div>
        <div>
          <h4>
            <v-icon left>mdi-sword</v-icon>
            사용 기술
          </h4>
          <div class="pl-9 mt-2 d-flex flex-wrap skill-list">
            <SkillChip v-for="(skill, i) in item.skills" :key="i" :name="skill" />
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="d-flex justify-center button-wrap">
        <v-btn elevation="0" width="100%" color="transparent" class="primary--text" @click="openModal(item.modalContents)">More Details</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
import SkillChip from '@/components/common/SkillChip';
export default {
  name: 'ProjectPage',
  components: { SkillChip },
  data: () => ({
    projectContents: [
      {
        platformName: '치매예방 관리 플랫폼:',
        name: '멘티실버 플러스',
        introduction: '시니어 맞춤형 보이는 ARS 기술과 음성인식 기술을 활용한 인지능력 자가 체크 서비스 및 치매예방 DB관리 시스템',
        skills: ['Vue', 'Javascript', 'Vuex', 'Vuetify', 'Sass', 'ChartJS', 'HTML', 'CSS'],
        dates: ['2022.01 ~ 2022.01 (보이는 ARS 모바일 조사 개발)', '2022.07 ~ current (관리대상자 관리 웹 프론트엔드 개발)'],
        modalContents: {
          title: '멘티실버 플러스',
          imageName: 'menti-silver-plus.gif',
          sections: [
            {
              subTitle: '# 서비스 목표',
              contents: [
                'COVID-19로 인해 방문검진이 어려워진 환경에 맞춰 시간과 장소에 구애받지 않고 스스로 치매진단을 할수 있는 자가 문진을 제공',
                '위험 인자를 찾아 지속적인 치매 예방 실천행동 및 인지 훈련 프로그램을 제공하여 치매 발병 가능성을 감소 목표',
              ],
            },
            {
              subTitle: '# 내 기여도',
              contents: ['모바일 ARS KDSQ검사(인지기능평가) 페이지 개발', '센터 관리대상자 관리 웹 프론트엔드 개발', 'KDSQ검사 결과 차트와 표로 표현', '관리대상자 전환 시 서명 저장'],
            },
          ],
        },
      },
      {
        platformName: '구강통합관리 플랫폼:',
        name: '덴티아이(Denti-i) 2022',
        introduction: '건강한 구강을 위해 검진부터 예방까지 학교, 보건소, 병원이 효율적으로 관리할 수 있는 통합관리 플랫폼',
        skills: ['Vue', 'Javascript', 'Vuex', 'Sass'],
        dates: ['2022.03 ~ 2022.04 (기관용 웹 페이지 마이그레이션)', '2022.06 ~ 2022.06 (웹뷰 프론트엔드 개발)'],
        modalContents: {
          title: '덴티아이(Denti-i) 2022',
          imageName: 'denti-i.gif',
          sections: [
            {
              subTitle: '# 서비스 목표',
              contents: [
                '서울, 인천, 부산, 여수, 밀양, 순천, 수원시가 지정한 초등학생과 학교를 다니지 않는 아동에게 지자체가 지정한 치과 의료기관에서 무상으로 구강 진료를 쉽고 편하게 받을 수 있도록 기술 지원하는 서비스',
              ],
            },
            {
              subTitle: '# 내 기여도',
              contents: [
                '웹뷰 프론트엔드 개발',
                '지자체와 사업별로 구분하여 구강 검진결과 페이지 개발 및 데이터를 그래프와 수치로 구현',
                '치아이미지 svg를 이용한 충치 위치 구현',
                '기관용 웹 페이지 2022년형식으로 마이그레이션 및 css에서 sass로 전환',
              ],
            },
          ],
        },
      },
      {
        platformName: '육군구강관리 플랫폼:',
        name: '덴티로카(Denti-ROKA)',
        introduction: '육군 장병을 위한 구강건강관리 플랫폼',
        skills: ['Vue', 'Javascript', 'Vuex', 'Vuetify', 'Sass', 'chartJS', 'vuei18n'],
        dates: ['2021.12 ~ 2022.01 (관리자 웹 프론트엔드 개발)', '2022.05 ~ 2022.05 (베트남 수출용 개발)'],
        modalContents: {
          title: '덴티로카(Denti-ROKA)',
          imageName: 'denti-roka.gif',
          sections: [
            {
              subTitle: '# 서비스 목표',
              contents: ['스마트폰 카메라를 이용하여 자가 구강 촬영을 통한 플라그 체크, 구강 교육 컨텐츠 제공으로 장병들의 구강관리'],
            },
            {
              subTitle: '# 내 기여도',
              contents: [
                '장병 정보등록 및 관리, 통계를 볼 수 있는  관리자 웹 프론트엔드 개발',
                '장병의 구강상태를 치아이미지로 표현',
                '차트와 표로 비교 구강 결과 분석 리포트 구현',
                'vue-i18n을 이용하여 베트남 수출용 페이지 개발',
              ],
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

<style scoped></style>
