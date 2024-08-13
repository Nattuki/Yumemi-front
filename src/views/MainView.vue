<template>
  <CheckBoxes v-model="prefCodeChecked" />
  <highcharts :options="chartsOptions"></highcharts>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Composition } from '@/type/ResasApi'
import { isCompositionResponse } from '@/type/ResasApi'
import CheckBoxes from '@/components/CheckBoxes.vue'
import apiKey from '@/const/apiKey'

const prefCodeChecked = ref<number[]>([])
const prefInfo = ref<Map<number, Composition>>(new Map())

const chartsOptions = ref({
  series: [{ data: [1, 2, 3] }]
})

watch(prefCodeChecked, (codes) => {
  codes.forEach(async (code) => {
    try {
      const res = await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/prefectures?cityCode=-&prefCode=${code}`,
        {
          headers: {
            'X-API-KEY': apiKey.X_API_KEY
          }
        }
      )
      const compositionResponse = await res.json()
      if (isCompositionResponse(compositionResponse)) {
        compositionResponse.result.data.forEach((data) => {
          const comp: Composition = {
            data: []
          }
          comp.data.push({
            year: data.data.year,
            value: data.data.value
          })
          prefInfo.value.set(code, comp)
        })
      } else {
        throw new Error('CompositionResponseに満たさない型')
      }
    } catch (err) {
      console.log('情報の取得は失敗した', err)
    }
  })
})
</script>
