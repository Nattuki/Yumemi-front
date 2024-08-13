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

<style module>
.container {
  box-shadow: inset 0 0 0 1px grey;
  border-radius: 4px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
}

.container:hover {
  background-color: grey;
}

.input:checked + .container {
  box-shadow: inset 0 0 0 3px greenyellow;
}

.title_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.title {
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.content {
  font-size: 16px;
  text-align: left;
  align-self: stretch;
  color: black;
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
  background-color: black;
  border: 2px solid black;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-sizing: border-box;
}

.input:checked + .container .title_wrapper .btn::before {
  background-color: black;
  border: none;
}

.input:checked + .container .title_wrapper .btn::after {
  content: '';
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
}
</style>
