<template>
  <div :class="$style.container">
    <CheckBox
      v-for="pref in prefs"
      :key="pref.code"
      :code="pref.code"
      :name="pref.name"
      @check="(code) => prefCodeChecked.push(code)"
      @uncheck="(code) => (prefCodeChecked = prefCodeChecked.filter((c) => c !== code))"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import CheckBox from '@/components/CheckBox.vue'
import apiKey from '@/const/apiKey'
import { isPrefectureResponse, type Prefecture } from '@/type/ResasApi'

const prefCodeChecked = defineModel<number[]>({ default: [] })
const prefs = ref<Prefecture[]>([])

onMounted(async () => {
  try {
    const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: {
        'X-API-KEY': apiKey.X_API_KEY
      }
    })
    const prefectureResponse = await res.json()
    if (isPrefectureResponse(prefectureResponse)) {
      prefectureResponse.result.forEach((val) => {
        prefs.value.push({
          code: val.prefCode,
          name: val.prefName
        })
      })
    } else {
      throw new Error('PrefectureResponseに満たさない型')
    }
  } catch (err) {
    console.log('情報の取得は失敗した', err)
  }
})
</script>

<style module></style>
