<template>
  <div :class="$style.container" data-testid="checkBoxesContainer">
    <CheckBox
      v-for="pref in prefs"
      :class="$style.checkBox"
      :key="pref.code"
      :pref="pref"
      @check="onBoxChecked"
      @uncheck="onBoxUnchecked"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import CheckBox from '@/components/CheckBox.vue'
import apiKey from '@/const/apiKey'
import { isPrefectureResponse, type Prefecture } from '@/type/ResasApi'

const emit = defineEmits(['update'])

const prefChecked = defineModel<Prefecture[]>({ default: [] })
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

const onBoxChecked = (pref: Prefecture) => {
  prefChecked.value.push(pref)
  emit('update', prefChecked.value)
}

const onBoxUnchecked = (pref: Prefecture) => {
  prefChecked.value = prefChecked.value.filter((p) => p.code !== pref.code)
  emit('update', prefChecked.value)
}
</script>

<style module>
.container {
}

.checkBox {
}
</style>
