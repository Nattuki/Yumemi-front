<template>
  <div :class="$style.container" @click="onCheckBoxClicked">
    <svg
      v-if="checked === false"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="#F1F1F4" stroke="#D8D8DB" />
    </svg>
    <svg
      v-else
      :class="$style.checked"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Prefecture } from '@/type/ResasApi'

const props = defineProps<{
  pref: Prefecture
}>()

const emit = defineEmits(['check', 'uncheck'])

const checked = ref<boolean>(false)

const onCheckBoxClicked = () => {
  checked.value = !checked.value
  if (checked.value) {
    emit('check', props.pref)
  } else {
    emit('uncheck', props.pref)
  }
}
</script>

<style module>
.container {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.checked {
  border-radius: 4px;
  background: #5cb860;
}
</style>
