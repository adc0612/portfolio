<template>
  <v-card id="exercise" color="transparent" flat class="intro-wrap mt-5">
    <h2 class="primary--text section-header">Exercise.</h2>
    <div class="intro-container mt-3">
      <div class="profile-wrap">
        <v-avatar size="300" rounded="lg">
          <v-img alt="profile image" :src="require('@/assets/image/krav-maga.jpeg')" />
        </v-avatar>
      </div>
      <div class="text-wrap align-self-start">
        <p v-for="(line, i) in $t('exercise.introduction')" :key="i" :class="{ 'mt-2': i > 0 }">{{ line }}</p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'HobbyPage',
};
</script>

<style></style>
