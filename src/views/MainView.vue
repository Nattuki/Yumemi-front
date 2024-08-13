<template>
  <div :class="$style.container" data-testid="mainViewContainer">
    <CheckBoxes v-model="prefCodeChecked" />
    <HighChart :data="compositionResponse" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { isCompositionResponse } from '@/type/ResasApi'
import HighChart from '@/components/HighChart.vue'
import CheckBoxes from '@/components/CheckBoxes.vue'
import apiKey from '@/const/apiKey'
import type { CompositionResponse } from '@/type/ResasApi'

const prefCodeChecked = ref<number[]>([])
const compositionResponse = ref<CompositionResponse>({
  message: null,
  result: {
    boundaryYear: -1,
    data: []
  }
})

watch(prefCodeChecked, (codes) => {
  codes.forEach(async (code) => {
    try {
      const res = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${code}`,
        {
          headers: {
            'X-API-KEY': apiKey.X_API_KEY
          }
        }
      )
      compositionResponse.value = await res.json()
      if (isCompositionResponse(compositionResponse)) {
        return
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
