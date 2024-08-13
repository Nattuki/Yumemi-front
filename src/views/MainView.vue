<template>
  <div :class="$style.container" data-testid="mainViewContainer">
    <CheckBoxes v-model="prefChecked" />
    <HighChart :data="compositionData" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { isCompositionResponse } from '@/type/ResasApi'
import HighChart from '@/components/HighChart.vue'
import CheckBoxes from '@/components/CheckBoxes.vue'
import apiKey from '@/const/apiKey'
import type { Prefecture, Composition } from '@/type/ResasApi'

const prefChecked = ref<Prefecture[]>([])
const compositionData = ref<Composition[]>([])

watch(prefChecked, (prefs) => {
  prefs.forEach(async (pref) => {
    try {
      let comp: Composition = {
        name: pref.name,
        info: []
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
        compositionResponse.result.data.forEach((info) => {
          comp.info.push(info)
        })
        compositionData.value.push(comp)
      } else {
        throw new Error('CompositionResponseに満たさない型')
      }
    } catch (err) {
      console.log('情報の取得は失敗した', err)
    }
  })
})
</script>

<style module>
.container {
}
</style>
