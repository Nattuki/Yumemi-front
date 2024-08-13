<template>
  <highcharts :options="chartsOptions"></highcharts>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { CompositionResponse } from '@/type/ResasApi'

const props = defineProps<{
  data: CompositionResponse
}>()

const chartsOptions = ref({
  series: [{ data: [1, 2, 3, 4, 5, 6] }]
})
</script>

<style module></style>
