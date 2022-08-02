<template>
  <v-card flat class="experice-wrap">
    <h2 class="primary--text">Exp</h2>
    <v-card v-for="(item, index) in experienceContents" :key="index" :class="{ 'mt-3': index > 0 }">
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
        name: '이름',
        link: '',
        role: '로1',
        date: '2021.06 ~ current',
        work: [
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
          '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
        ],
        modalContents: {
          title: '타이틀',
          sections: [
            {
              subTitle: 'subtitle',
              contents: [
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
              ],
            },
            {
              subTitle: 'subtitle',
              contents: [
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
              ],
            },
            {
              subTitle: 'skill',
              contents: ['Vue', 'Vuex', 'Vuetify', 'Sass'],
            },
          ],
        },
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
        modalContents: {
          title: '타이틀',
          sections: [
            {
              subTitle: 'subtitle',
              contents: [
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
              ],
            },
            {
              subTitle: 'subtitle',
              contents: [
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
              ],
            },
            {
              subTitle: 'skill',
              contents: ['Vue', 'Vuex', 'Vuetify', 'Sass'],
            },
          ],
        },
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
        modalContents: {
          title: '타이틀',
          sections: [
            {
              subTitle: 'subtitle',
              contents: [
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
              ],
            },
            {
              subTitle: 'subtitle',
              contents: [
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
                '프로필 이미지의 이상적인 사진 크기는 400픽셀x400픽셀입니다.',
              ],
            },
            {
              subTitle: 'skill',
              contents: ['Vue', 'Vuex', 'Vuetify', 'Sass'],
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
