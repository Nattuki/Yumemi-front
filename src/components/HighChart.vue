<template>
  <highcharts :options="chartsOptions"></highcharts>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartsOptions = ref({
  series: [{ data: [1, 2, 3] }]
})
</script>

<style module></style>
