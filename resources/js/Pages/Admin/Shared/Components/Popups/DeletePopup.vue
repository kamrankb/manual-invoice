<template>
  <Popup :title="`Delete ${props.title}`" class="" :visibility="props.deleteVisibility" :onClose="props.hideDeletePopup">
    <template v-slot:body>
      <div class="popup-details-area text-muted">
        {{ props.message }}
      </div>
    </template>
    <template v-slot:footer>
      <button @click="props.hideDeletePopup">Cancel</button>
      <button class="redLinkStyle" @click="props.onDeleteSubmit">
        Delete {{ props.title }}
      </button>
    </template>
  </Popup>
</template>

<script setup>
import Popup from '../Popup.vue';

const props = defineProps({
  title: String,
  message: String,
  deleteVisibility: Boolean,
  hideDeletePopup: Function,
  onDeleteSubmit: Function,
});

</script>

<style scoped>
  .redLinkStyle {
    background: #df1b41 !important;
    color: #fff !important;
  }
</style>