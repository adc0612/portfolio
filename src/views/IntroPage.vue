<template>
  <v-card id="intro" color="transparent" flat class="intro-wrap">
    <h2 class="primary--text section-header">Introduce.</h2>
    <div class="intro-container mt-3">
      <div class="profile-wrap">
        <v-avatar size="200" rounded="lg">
          <v-img alt="profile image" :src="require('@/assets/image/profile.jpeg')" />
        </v-avatar>
      </div>
      <div class="text-wrap">
        <i18n :path="`intro.title.text`" tag="p">
          <template #strong1>
            <strong class="primary--text">{{ $t(`intro.title.strong1`) }}</strong>
          </template>
        </i18n>
        <p class="mt-2">{{ $t('intro.intro') }}</p>
        <ul class="mt-2">
          <li v-for="(line, i) in $t('intro.contents')" :key="i" class="mt-1">
            <v-icon>mdi-circle-small</v-icon>
            {{ line }}
          </li>
        </ul>
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
