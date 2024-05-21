<template>
  <div class="row">
    <div class="col-12">
      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
        <h4 class="mb-sm-0">{{ props?.heading }}</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <Tooltip v-if="typeof props.breadcrumb === 'string'" :copy-text="props?.breadcrumb"></Tooltip>
            <li class="breadcrumb-item active" v-else v-for="(item,i) in props.breadcrumb" :key="i">{{ item }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.textToCopy span{
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 6px;
}
.textToCopy span:hover{
  background-color: #f5f5f5;
}
</style>

<script setup>
import Tooltip from './Tooltip.vue';

const props = defineProps({
  heading: String,
  breadcrumb: Array | String | null,
});

const textToCopy = async() => {
  try {
    await navigator.clipboard.writeText(props.breadcrumb);
    alert('Text copied to clipboard: ' + props.breadcrumb);
  } catch(ex) {
    alert(ex.message);
  }
};
</script>