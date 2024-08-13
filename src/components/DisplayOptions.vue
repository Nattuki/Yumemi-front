<template>
  <div>
    <RadioCard
      v-model="display"
      title="総人口"
      content="total population"
      name="display"
      value="total"
    ></RadioCard>
    <RadioCard
      v-model="display"
      title="生産年齢人口"
      content="productive population"
      name="display"
      value="productive"
    ></RadioCard>
    <RadioCard
      v-model="display"
      title="年少人口"
      content="young population"
      name="display"
      value="young"
    ></RadioCard>
    <RadioCard
      v-model="display"
      title="老年人口"
      content="elderly population"
      name="display"
      value="elderly"
    ></RadioCard>
  </div>
</template>

<script lang="ts" setup>
import RadioCard from './RadioCard.vue'

const display = defineModel<string>()
</script>

<style module></style>
