<template>
  <v-card flat class="award-wrap mt-5">
    <h2 class="primary--text section-header">Award</h2>
    <v-card class="py-5 mt-3">
      <v-timeline align-top>
        <v-timeline-item v-for="(content, i) in awardContents" :key="i" small>
          <template v-slot:opposite>
            <span v-text="content.year" />
          </template>
          <div class="pa-4">
            <h4>
              <b>{{ content.awardName }}</b>
              <v-icon right>mdi-trophy-outline</v-icon>
            </h4>
            <p class="mt-2">
              {{ content.explanation }}
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'AwardPage',
  data: () => ({
    awardContents: [
      {
        year: '2019년',
        awardName: '칸타코리아 - 우수사원상(Rookie 상)',
        explanation: '[칸타코리아] 장기 프로젝트 진행과 라이브러리와 사이트 개발로 인한 팀 내 작업 편의성에 기여로 인한 수상 ',
      },
    ],
  }),
};
</script>

<style scoped></style>
