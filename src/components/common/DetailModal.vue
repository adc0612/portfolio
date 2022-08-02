<template>
  <v-dialog v-model="show" max-width="500" transition="dialog-bottom-transition" overlay-color="rgba(0,0,0,0.7)" overlay-opacity="1">
    <v-card tile class="detail-modal-wrap">
      <v-card-title class="d-flex justify-space-between">
        {{ data.title }}
        <v-btn width="48" height="48" icon @click="$emit('close')">
          <v-icon color="primary" size="28">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div v-for="(section, index) in data.sections" :key="index">
          <h2>{{ section.subTitle }}</h2>
          <ul class="work-list flex-grow-1">
            <li v-for="(line, i) in section.contents" :key="i">
              <v-icon>mdi-check</v-icon>
              {{ line }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DetailModal',
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
