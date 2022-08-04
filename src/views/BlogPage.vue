<template>
  <v-card flat class="blog-wrap mt-5">
    <h2 class="primary--text section-header">Blog</h2>
    <v-card class="mt-3 py-4 px-8">
      <v-list-item two-line v-for="(content, index) in blogContents" :key="index">
        <v-list-item-content>
          <v-list-item-title>
            <a :href="content.link" target="_blank" class="link">{{ content.name }}</a>
          </v-list-item-title>
          <v-list-item-subtitle class="mt-1">
            {{ content.explanation }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'BlogPage',
  data: () => ({
    blogContents: [
      {
        name: 'Velog',
        link: 'https://velog.io/@adc0612',
        explanation: '프론트엔드 실무 프로젝트 및 공부 지식 블로그',
      },
      {
        name: 'Jekyll - Github Page',
        link: 'https://adc0612.github.io/',
        explanation: '프론트엔드 공부 지식 블로그 (Velog로 옮겨서 작성중이라 최신글이 없다.)',
      },
    ],
  }),
};
</script>

<style scoped>
.link {
  font-size: 16px;
  font-weight: 600;
}
</style>
