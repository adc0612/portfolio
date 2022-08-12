<template>
  <v-dialog v-model="show" scrollable max-width="500" transition="dialog-bottom-transition" overlay-color="rgba(0,0,0,0.7)" overlay-opacity="1">
    <v-card tile class="modal-wrap">
      <v-card-title class="d-flex justify-space-between flex-nowrap title-wrap">
        <p>{{ data.title }}</p>
        <v-btn width="36" height="36" icon @click="$emit('close')">
          <v-icon color="primary" size="28">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-wrap">
        <div v-if="data.imageName" class="mt-4">
          <v-img :alt="`${data.imageName} project image`" :src="require(`@/assets/image/${data.imageName}`)" contain max-height="500px" />
        </div>
        <div v-for="(section, index) in data.sections" :key="index" class="text-container mt-4">
          <h3 class="primary--text">{{ section.subTitle }}</h3>
          <div v-if="section.subTitle === '# Skill'" class="skill-list d-flex flex-wrap mt-4">
            <SkillChip v-for="(skill, i) in section.contents" :key="i" :name="skill" />
          </div>
          <ul v-else class="work-list flex-grow-1 pl-2 mt-4">
            <li v-for="(line, i) in section.contents" :key="i" class="d-flex align-start" :class="{ 'mt-4': i === 0 }">
              <v-icon class="mr-2">mdi-fire</v-icon>
              {{ line }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import SkillChip from '@/components/common/SkillChip';
export default {
  name: 'DetailModal',
  components: { SkillChip },
  props: {
    value: Boolean,
    data: {
      type: Object,
      default: () => {
        return {
          title: '',
          sections: [],
        };
      },
    },
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style scoped></style>
