<template>
  <div :class="$style.container">
    <RadioCard
      :class="$style.radioCard"
      v-model="display"
      title="総人口"
      content="total population"
      name="display"
      value="total"
    ></RadioCard>
    <RadioCard
      :class="$style.radioCard"
      v-model="display"
      title="生産年齢人口"
      content="productive population"
      name="display"
      value="productive"
    ></RadioCard>
    <RadioCard
      :class="$style.radioCard"
      v-model="display"
      title="年少人口"
      content="young population"
      name="display"
      value="young"
    ></RadioCard>
    <RadioCard
      :class="$style.radioCard"
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

<style module>
.container {
  display: flex;
  width: 960px;
  align-items: flex-start;
  gap: 16px;
}

.radioCard {
  width: 228px;
}

@media screen and (max-width: 960px) {
  .container {
    width: 600px;
    flex-wrap: wrap;
  }

  .radioCard {
    width: 292px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: 320px;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .radioCard {
    width: 300px;
  }
}
</style>
