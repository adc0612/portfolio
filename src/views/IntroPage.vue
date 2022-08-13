<template>
  <v-card id="intro" color="transparent" flat class="intro-wrap">
    <h2 class="primary--text section-header">Introduce</h2>
    <div class="intro-container mt-3">
      <div class="profile-wrap">
        <v-avatar size="200" rounded="lg">
          <v-img alt="profile image" :src="require('@/assets/image/profile.jpeg')" />
        </v-avatar>
      </div>
      <div class="text-wrap">
        <i18n v-for="(item, index) in $t('intro')" :key="index" :path="`intro.${index}.text`" tag="p" :class="{ 'mt-2': index !== 'p1' }">
          <template #strong1>
            <strong class="primary--text">{{ $t(`intro.${index}.strong1`) }}</strong>
          </template>
          <template #strong2>
            <strong class="primary--text">{{ $t(`intro.${index}.strong2`) }}</strong>
          </template>
          <template #break>
            <br />
          </template>
        </i18n>
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
