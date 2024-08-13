<template>
  <div :class="$style.container" data-testid="highChartContainer">
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

//渡されたデータを処理してHighChartsのoptionsに適した形式のデータを返す
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

// HighChartsのoptionsのデータを作る
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

<style module>
.container {
  display: flex;
  width: 960px;
  justify-content: center;
}

@media screen and (max-width: 960px) {
  .container {
    width: 600px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: 320px;
  }
}
</style>
