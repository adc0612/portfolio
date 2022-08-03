<template>
  <v-chip color="primary" outlined label class="pa-4">
    <v-avatar left>
      <v-img :src="require(`@/assets/icon/ic-24-${name.toLowerCase()}.svg`)" />
    </v-avatar>
    {{ name }}
  </v-chip>
</template>

<script>
export default {
  name: 'SkillChip',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped></style>
