<template>
  <label>
    <input
      :class="$style.input"
      type="radio"
      :name="props.name"
      :value="props.value"
      @change="model = props.value"
    />
    <div :class="$style.container">
      <div :class="$style.title_wrapper">
        <div :class="$style.title">{{ props.title }}</div>
        <div :class="$style.btn"></div>
      </div>
      <div :class="$style.content">
        {{ props.content }}
      </div>
    </div>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  content: string
  name: string
  value: string
}>()

const model = defineModel<string>()
</script>

<style lang="scss" module>
.container {
  box-shadow: inset 0 0 0 1px #e2e2e2;
  border-radius: 4px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
}

.container:hover {
  background-color: #eef7ee;
}

.input:checked + .container {
  box-shadow: inset 0 0 0 3px #5cb860;
}

.title_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.title {
  color: #1a1a1c;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content {
  font-size: 16px;
  text-align: left;
  align-self: stretch;
  color: #626264;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
}

.input {
  display: none;
}

.btn {
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.btn::before {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f1f1f4;
  border: 2px solid #e2e2e2;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-sizing: border-box;
}

.input:checked + .container .title_wrapper .btn::before {
  background-color: #5cb860;
  border: none;
}

.input:checked + .container .title_wrapper .btn::after {
  content: '';
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
</style>
