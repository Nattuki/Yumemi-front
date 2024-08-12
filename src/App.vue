<template>
  <highcharts :options="chartsOptions"></highcharts>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const chartsOptions = ref({
  series: [{ data: [1, 2, 3] }]
})
</script>
