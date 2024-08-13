<template>
  <div :class="$style.container" data-testid="checkBoxesContainer">
    <div :class="$style.checkContainer" v-for="pref in prefs" :key="pref.code">
      <CheckBox
        :pref="pref"
        @check="(pref) => onBoxChecked(pref)"
        @uncheck="(pref) => onBoxUnchecked(pref)"
      />
      {{ pref.name }}
    </div>
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
  prefChecked.value.forEach((val, index) => {
    if (val.code === pref.code) {
      prefChecked.value.splice(index, 1)
    }
  })
  console.log(prefChecked.value)
  emit('update', prefChecked.value)
}
</script>

<style module>
.container {
  display: flex;
  width: 960px;
  justify-content: start;
  flex-wrap: wrap;
  gap: 16px 0;
}

.checkContainer {
  width: 120px;
  display: flex;
  justify-content: stretch;
  gap: 8px;
}

@media screen and (max-width: 960px) {
  .container {
    width: 600px;
  }
}

@media screen and (max-width: 600px) {
  .container {
    width: 320px;
    gap: 16px 32px;
    padding-left: 32px;
  }
}
</style>
