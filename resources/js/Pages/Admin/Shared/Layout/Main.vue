<template>
  <!-- Begin page -->
  <div id="layout-wrapper">

    <Header></Header>

    <!-- removeNotificationModal -->
    <div id="removeNotificationModal" class="modal fade zoomIn" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <!-- <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
          </div>
          <div class="modal-body">
            <div class="mt-2 text-center">
              <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style="width: 100px; height: 100px"></lord-icon>
              <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                <h4>Are you sure ?</h4>
                <p class="text-muted mx-4 mb-0">
                  Are you sure you want to remove this Notification ?
                </p>
              </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
              <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn w-sm btn-danger" id="delete-notification">
                Yes, Delete It!
              </button>
            </div>
          </div>
        </div> -->
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <Sidebar @moreDrawer="drawerVisibility" :drawerVisibility="moreDrawer"></Sidebar>

    <!-- Vertical Overlay-->
    <div class="vertical-overlay"></div>

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">

          <!-- <div v-show="success" :class="alertClass" class="alert alert-dismissible text-white alert-label-icon fade show" role="alert">
              <i class="ri-notification-off-line label-icon"></i><strong>{{ success ? 'Success' : 'Failed'}}</strong> - {{ message }}
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
          </div> -->

          <slot></slot>
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->

      <Footer></Footer>
    </div>
    <!-- end main content-->
  </div>
  <!-- END layout-wrapper -->
</template>

<style>
.tableContainer{
    overflow-x: auto;
    height: calc(30rem + 5rem);
    overflow-y: visible;
    min-height: 15rem;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-content{
    margin-left: 200px;
}
</style>

<script setup>
import Header from '@Admin/Shared/Layout/Header.vue';
import Footer from '@Admin/Shared//Layout/Footer.vue';
import Sidebar from '@Admin/Shared//Layout/Sidebar.vue';
import { usePage } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import MoreSidebar from '@Admin/Shared/Layout/MoreSidebar.vue';
import { useNotification } from '../Composables/useNotification';

const flash = ref({
  success: usePage().props.flash.success,
  message: usePage().props.flash.message
});

const moreDrawer = ref(false);

watch(()=> usePage().props.flash.message, (flastMessage) => {
  flash.value.success = usePage().props.flash.success;
  flash.value.message = flastMessage;

  if (flash.value.message) {
    if(flash.value.success) {
      useNotification().success(flash.value.message);
    } else {
      useNotification().error(flash.value.message);
    }
  }
});

function drawerVisibility(visibile) {
  moreDrawer.value = !moreDrawer.value;
}
</script>
