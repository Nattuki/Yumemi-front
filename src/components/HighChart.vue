<template>
  <highcharts :options="chartsOptions"></highcharts>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Composition } from '@/type/ResasApi'
import type { Series } from 'highcharts'

const props = defineProps<{
  data: Composition[]
}>()

const chartsOptions = ref({
  series: [{ data: [1, 2, 3, 4, 5, 6] }]
})
</script>

<style module></style>
