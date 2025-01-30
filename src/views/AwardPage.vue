<template>
  <v-card id="award" color="transparent" flat class="award-wrap mt-5">
    <h2 class="primary--text section-header">Award.</h2>
    <v-card class="py-5 mt-3">
      <v-timeline align-top>
        <v-timeline-item v-for="(content, i) in $t('award.contents')" :key="i" small>
          <template #opposite>
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
};
</script>

<style scoped></style>
