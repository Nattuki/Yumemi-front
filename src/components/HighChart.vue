<template>
  <div :class="$style.container">
    <highcharts :options="chartsOptions"></highcharts>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Composition } from '@/type/ResasApi'
import type { ChartSeries } from '@/type/highcharts'

const props = defineProps<{
  data: Composition[]
}>()

const seriesData = computed(() => {
  let res: ChartSeries[] = []
  props.data.forEach((data) => {
    let series: ChartSeries = {
      name: data.name,
      data: []
    }
    data.info.data.forEach((v) => {
      series.data.push(v.value)
    })
    res.push(series)
  })
  return res
})

const categoriesData = computed(() => {
  let res: number[] = []
  for (let year = 1960; year <= 2045; year += 5) {
    res.push(year)
  }
  return res
})

const chartsOptions = ref({
  title: {
    text: '人口の推移'
  },
  xAxis: {
    title: {
      text: 'year'
    },
    categories: categoriesData
  },
  yAxis: {
    title: {
      text: 'population'
    }
  },
  series: seriesData
})
</script>

<style lang="scss" module>
.container {
  display: flex;
  width: 960px;
  justify-content: center;
}
</style>
