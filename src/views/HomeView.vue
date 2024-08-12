<template>
  <CheckBoxes />
  <highcharts :options="chartsOptions"></highcharts>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckBoxes from '@/components/CheckBoxes.vue'

const chartsOptions = ref({
  series: [{ data: [1, 2, 3] }]
})
</script>
