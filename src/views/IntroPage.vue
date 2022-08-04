<template>
  <v-card flat class="intro-wrap">
    <h2 class="primary--text section-header">Introduce</h2>
    <div class="intro-container mt-3">
      <div class="profile-wrap">
        <v-avatar size="200" rounded="lg">
          <v-img alt="profile image" :src="require('@/assets/image/profile.jpeg')" />
        </v-avatar>
      </div>
      <div class="text-wrap">
        <p>
          안녕하세요. 프론트엔드 개발자
          <strong class="primary--text">전도후</strong>
          입니다.
        </p>
        <p class="mt-2">
          현재 스타트업에서
          <strong class="primary--text">웹 프론트엔드 개발자</strong>
          를 담당하고 있습니다.
          <br />
          시각화 대시보드, 차트와 유저 관리를 포함 한 앱 관리자 웹과 웹뷰를 개발하고 있습니다.
          <br />
        </p>
        <p class="mt-3">
          또한,
          <strong class="primary--text">UI 개발팀 인턴</strong>
          과
          <strong class="primary--text">survey programmer</strong>
          경력과 인도에서 학창시절을 보낸 다양한 경험을 가지고있습니다.
        </p>
        <p class="mt-3">글 솜씨는 좋지 않지만 얻은 정보들을 공유하고 기억하기 위해 개인 블로그에 포스트를 작성하려 노력하고 있습니다.</p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'IntroPage',
};
</script>

<style></style>
