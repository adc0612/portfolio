<template>
  <v-card flat class="experice-wrap">
    <h2 class="primary--text">Exp</h2>
    <v-card v-for="(item, index) in contents" :key="index" :class="{ 'mt-3': index > 0 }">
      <v-card-text class="px-8 py-4 contents-wrap">
        <div class="d-flex flex-column justify-center info-wrap">
          <h3>{{ item.name }}</h3>
          <p>{{ item.role }}</p>
          <p>{{ item.date }}</p>
        </div>
        <ul class="work-list flex-grow-1">
          <li v-for="(line, i) in item.work" :key="i">
            <v-icon>mdi-check</v-icon>
            {{ line }}
          </li>
        </ul>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn elevation="0" width="200" color="transparent" class="primary--text">More Details</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data: () => ({
    contents: [
      {
        name: '이름',
        link: '',
        role: '로',
        date: '2020.02 ~ 2020.05',
        work: [
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
        ],
      },
      {
        name: '이름',
        link: '',
        role: '로',
        date: '2020.02 ~ 2020.05',
        work: [
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
        ],
      },
      {
        name: '이름',
        link: '',
        role: '로',
        date: '2020.02 ~ 2020.05',
        work: [
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
        ],
      },
    ],
  }),
};
</script>

<style></style>
