<template>
  <div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <!-- Light Logo-->
      <a :href="route('admin.invoice.list')" class="logo logo-light">
        <span class="logo-lg">
          <span class="iconArea"><i class="bx bx-store"></i></span>
          <p>Test <sup class="beta-text">beta</sup></p>
        </span>
      </a>
      <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
        <i class="ri-record-circle-line"></i>
      </button>
    </div>

    <div id="scrollbar">
      <div class="container-fluid">
        <div id="two-column-menu"></div>
        <ul class="navbar-nav" id="navbar-nav">
          <li class="nav-item">
            <Link :href="route('admin.invoice.list')" :class="{ 'active': $page.url.startsWith('/admin/dashboard'), 'nav-link menu-link': true }">
              <i class="las la-file-invoice"></i>
              <span data-key="t-dashboards">Invoice</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link :href="route('admin.invoice.find')" :class="{ 'active': $page.url.startsWith('/admin/dashboard'), 'nav-link menu-link': true }">
              <i class="mdi mdi-magnify"></i>
              <span data-key="t-dashboards">Find Invoice</span>
            </Link>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>

    <div class="sidebar-background"></div>
  </div>
</template>

<style scoped>

.navbar-menu {
  z-index: 10000;
}
.navbar-brand-box {
  text-align: left;
}

.navbar-menu .navbar-nav .nav-link i {
  text-align: center;
  margin-right: 5px;
}

.animated-i i {
  transition: all 0.3s;
}
.animated-i.rotated i {
  transform: rotate(45deg);
}
.navbar-brand-box .logo span.iconArea {
  display: inline-flex;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 5px 0px rgba(48, 49, 61, 0.08);
  align-items: center;
  justify-content: center;
  font-size: 17px;
}

.navbar-brand-box .logo {
  padding: 16px 0;
  margin: 0 0 30px 0;
}
.navbar-brand-box .logo > span {
  display: flex;
  gap: 12px;
  align-items: center;
}
.navbar-brand-box .logo p {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  color: #000;
}

.beta-text {
    top: -1.3em;
    color: #fff;
    background-color: #000000;
    padding: 0.2em 0.4em;
    border-radius: 0.4em;
    text-transform: uppercase;
    font-size: 0.5em;
    font-weight: bold;
    transform: rotate(10deg) skew(-10deg);
    box-shadow: -3px 3px 0 rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;
    left: 3px;
}


</style>

<script setup>

const props = defineProps({
  drawerVisibility: Boolean
})

const emit = defineEmits(['moreDrawer']);

const moreDrawer = () => {
  emit('moreDrawer', true);
};
</script>
