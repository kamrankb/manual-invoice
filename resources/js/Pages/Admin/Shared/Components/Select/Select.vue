<template>
  <div :class="[props.class, { 'disabled': props.disabled, 'selectArea': props.inputStyleDefault, }]" :style="props.inputStyle" ref="selectAreaRef">
    <p @click="visibility = !visibility">
      <span>{{ selected.label }} {{ props.suffix }}</span>
      <i class="bx bx-chevron-down" v-if="!props.hideArrow"></i>
    </p>
    <template v-if="visibility">
        <div class="selectDropdownArea" :style="props.dropDownStyle">

      <ul class="selectDropdown">
        <li
          v-for="(item, index) in props.options"
          :key="index"
          :class="checkActive(item)"
          @click="selectOption(item)"
        >
          <i class="bx bx-check" v-if="!props.hideChecks"></i>
          {{ item.label }}
        </li>
      </ul>
      </div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    options: Array,
    suffix: String,
    class: String,
    hideArrow: Boolean,
    hideChecks: Boolean,
    modelValue: String | Number,
    disabled: Boolean,
    inputStyleDefault: { type: Boolean, default: true },
    inputStyle: String,
    dropDownStyleDefault: { type: Boolean, default: true },
    dropDownStyle: String,
});

const emit = defineEmits(['update:modelValue']);

const selectedLabel = () => {
  const value = props.modelValue;
  if (!value) return '';

  const matchedOption = props.options.find(option => option.value == value);
  return matchedOption ? matchedOption.label : '';
};


const visibility = ref(false);

const selected = ref({
  label: selectedLabel(),
  value: props.modelValue,
});

watch(() => props.modelValue, (newValue) => {
  selected.value.value = newValue;
  selected.value.label = selectedLabel();
});

const selectAreaRef = ref();

const checkActive = (item) => {
  return selected.value.value == item.value? 'active' : '';
}

const closeSelectDrop = (e) => {
  if (
    visibility &&
    selectAreaRef.value &&
    !selectAreaRef.value.contains(e.target)
  ) {
    visibility.value = false;
  }
};

onMounted(()=> {
  document.addEventListener("mousedown", closeSelectDrop);

  if(props.modelValue == null || props.modelValue == "" || props.modelValue == undefined) {
    emit('update:modelValue', props.options[0].value);
  }
})

const selectOption = (item) => {
  selected.value = item;
  visibility.value = false;

  emit('update:modelValue', item.value)
};

</script>


<style>
  .selectArea {
    position: relative;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .selectArea > p {
    background: #fff;
    font-size: 13px;
    line-height: 20px;
    min-height: 28px;
    border-radius: 6px;
    box-shadow: 0px 1px 1px 0px rgba(16, 17, 26, 0.16), #d5dbe1 0 0 0 1px, 0 0 0 0 transparent, 0 0 0 0 transparent;
    padding: 3px 10px;
    font-weight: 500;
    border: 0;
    outline: 0;
    display: flex;
    margin: 0;
    gap: 0.25rem;
    align-items: center;
    justify-content: space-between;
  }

  .selectArea > p > i {
    font-size: 20px;
  }

  .selectDropdownArea{
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, 12px);
      z-index: 10100;
      min-width: 100%;
  }

  .selectDropdown {
    width: 100%;
    white-space: nowrap;
    background: #fff;
    padding: 0.375rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.75rem rgba(0,0,0,0.15);
    list-style: none;
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
    max-height: 10rem;
    overflow: auto
  }

  .selectDropdownArea::before{
    content: '';
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
    z-index: 1;
    filter: drop-shadow(0 -0.125rem 0.125rem rgba(0,0,0,0.15));
    transform: translate(-50%, 0);
  }

  .selectDropdown > li {
    width: 100%;
    padding: 0.375rem 0.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .selectDropdown > li:hover {
    background: #eee;
  }

  .selectDropdown > li > i {
    line-height: 0;
    font-size: 16px;
    opacity: 0;
  }

  .selectDropdown > li.active {
    color: var(--custom-primary);
  }

  .selectDropdown > li.active > i {
    opacity: 1;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.7;
  }
</style>
