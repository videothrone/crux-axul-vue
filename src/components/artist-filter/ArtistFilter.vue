<template>
  <div class="artist-filter" ref="containerRef">
    <button
      type="button"
      class="artist-filter__trigger"
      role="combobox"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-controls="listboxId"
      :aria-activedescendant="isOpen ? activeOptionId : undefined"
      @click="toggleOpen"
      @keydown="onKeydown"
    >
      <span>{{ currentLabel }}</span>
      <v-icon name="hi-chevron-down" class="artist-filter__caret" aria-hidden="true" />
    </button>
    <ul
      v-show="isOpen"
      :id="listboxId"
      role="listbox"
      class="artist-filter__listbox"
      tabindex="-1"
    >
      <li
        v-for="(option, index) in allOptions"
        :key="option.value"
        :id="`${listboxId}-option-${index}`"
        role="option"
        :aria-selected="modelValue === option.value"
        class="artist-filter__option"
        :class="{
          'artist-filter__option--focused': focusedIndex === index,
          'artist-filter__option--selected': modelValue === option.value,
        }"
        @click="selectOption(option.value)"
        @mouseenter="focusedIndex = index"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: { type: String, required: true },
  options: { type: Array, required: true },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const focusedIndex = ref(0);
const containerRef = ref(null);
const listboxId = 'artist-filter-listbox';

const allOptions = computed(() => [
  { value: 'all', label: 'All' },
  ...props.options.map(o => ({ value: o, label: o })),
]);

const currentLabel = computed(
  () => allOptions.value.find(o => o.value === props.modelValue)?.label ?? 'All'
);

const activeOptionId = computed(() => `${listboxId}-option-${focusedIndex.value}`);

function open() {
  isOpen.value = true;
  focusedIndex.value = Math.max(allOptions.value.findIndex(o => o.value === props.modelValue), 0);
}

function close() {
  isOpen.value = false;
}

function toggleOpen() {
  isOpen.value ? close() : open();
}

function selectOption(value) {
  emit('update:modelValue', value);
  close();
}

function onKeydown(e) {
  if (!isOpen.value) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault();
      open();
    }
    return;
  }

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      focusedIndex.value = Math.min(focusedIndex.value + 1, allOptions.value.length - 1);
      break;
    case 'ArrowUp':
      e.preventDefault();
      focusedIndex.value = Math.max(focusedIndex.value - 1, 0);
      break;
    case 'Enter':
    case ' ':
      e.preventDefault();
      selectOption(allOptions.value[focusedIndex.value].value);
      break;
    case 'Escape':
      e.preventDefault();
      close();
      break;
    case 'Tab':
      close();
      break;
  }
}

function onClickOutside(e) {
  if (!containerRef.value?.contains(e.target)) close();
}

onMounted(() => document.addEventListener('mousedown', onClickOutside));
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside));
</script>

<style lang="scss">
@use './ArtistFilter.scss';
</style>
