<template>
  <div :class="$style.wrapper">
    <div :class="$style.container" data-testid="mainViewContainer">
      <CheckBoxes v-model="prefChecked" @update="(prefs) => updateChart(prefs)" />
      <DisplayOptions v-model="display" />
      <HighChart :data="compositionData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { isCompositionResponse } from '@/type/ResasApi'
import DisplayOptions from '@/components/DisplayOptions.vue'
import HighChart from '@/components/HighChart.vue'
import CheckBoxes from '@/components/CheckBoxes.vue'
import apiKey from '@/const/apiKey'
import type { Prefecture, Composition } from '@/type/ResasApi'
import type { Display } from '@/type/highcharts'

const prefChecked = ref<Prefecture[]>([])
const compositionData = ref<Composition[]>([])
const display = ref<Display>('total')

const updateChart = (prefs: Prefecture[]) => {
  compositionData.value = []
  prefs.forEach(async (pref) => {
    try {
      let comp: Composition = {
        name: pref.name,
        info: {
          label: '',
          data: []
        }
      }
      const res = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${pref.code}`,
        {
          headers: {
            'X-API-KEY': apiKey.X_API_KEY
          }
        }
      )
      const compositionResponse = await res.json()
      if (isCompositionResponse(compositionResponse)) {
        switch (display.value) {
          case 'total':
            comp.info = compositionResponse.result.data[0]
            break
          case 'young':
            comp.info = compositionResponse.result.data[1]
            break
          case 'productive':
            comp.info = compositionResponse.result.data[2]
            break
          case 'elderly':
            comp.info = compositionResponse.result.data[3]
            break
          default:
            throw new Error('予期しないdisplayの型')
        }
        compositionData.value.push(comp)
      } else {
        throw new Error('CompositionResponseに満たさない型')
      }
    } catch (err) {
      console.log('情報の取得は失敗した', err)
    }
  })
}

watch(display, () => {
  updateChart(prefChecked.value)
})
</script>

<style module>
.wrapper {
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.container {
  display: flex;
  max-width: 960px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
}
</style>
