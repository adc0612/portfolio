<template>
  <v-card id="blog" color="transparent" flat class="blog-wrap mt-5">
    <h2 class="primary--text section-header">Blog</h2>
    <v-card class="mt-3 py-4 px-8">
      <v-list-item v-for="(content, index) in $t('blog.contents')" :key="index" two-line>
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
};
</script>

<style scoped>
.link {
  font-size: 16px;
  font-weight: 600;
}
</style>
