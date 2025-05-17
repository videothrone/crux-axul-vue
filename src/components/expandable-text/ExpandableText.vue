<template>
  <div class="expandable-text" v-if="shouldExpand">
    <div class="expandable-text__content" :class="{ 'expandable-text__content--expanded': isExpanded }">
      <p v-html="text"></p>
    </div>
    <button
      class="expandable-text__toggle"
      @click="toggleExpand"
      :aria-expanded="isExpanded.toString()"
      :aria-controls="uniqueId"
    >
      <span class="visually-hidden">{{ isExpanded ? 'Collapse' : 'Expand' }} text</span>
      <v-icon
        :name="isExpanded ? 'hi-chevron-up' : 'hi-chevron-down'"
        scale="1.2"
        aria-hidden="true"
      />
    </button>
  </div>
  <p v-else v-html="text"></p>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      default: 200
    }
  });

  const isExpanded = ref(false);
  const uniqueId = computed(() => `expandable-text-${Math.random().toString(36).substr(2, 9)}`);
  const shouldExpand = computed(() => props.text.length > props.maxLength);

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
  };
</script>

<style lang="scss" scoped>
@use './ExpandableText.scss';
</style>
