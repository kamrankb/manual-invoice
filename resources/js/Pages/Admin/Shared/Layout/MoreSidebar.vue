<style>
.morepanel {
    background: #fff;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 200px;
    z-index: 9999;
    height: 100vh;
    padding: 15px 25px;
    transition: all 0.3s;
}
.image-box {
    display: flex;
    align-items: center;
    padding: 7px;
    transition: all 0.3s ease;
    border-radius: 6px;
    margin: 0 -7px 5px;
}
.image-box:hover {
    background: #f5f6f8;
}

.image-box img {
    max-width: 30px;
    margin-right: 10px;
    padding: 6px;
    background: #f5f6f8;
    border-radius: 4px;
}

.image-box .content {
    flex: 1;
}
.image-box .content h6 {
    font-size: 0.875rem;
    margin-bottom: 0;
}
.image-box .content p {
    font-size: 0.75rem;
    margin-bottom: 0;
}
.morepanel h5 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

.morepanel > h3 {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 40px;
}

.morepanel a + h5 {
  margin-top: 30px;
}
.panelclose {
    position: absolute;
    top: 5px;
    right: 10px;
    color: #000;
    background: transparent;
    padding: 4px;
    border-radius: 50%;
    font-size: 1.375rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.panelclose:hover {
    color: #000;
    background: #f5f5f5;
}
.paneloverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(182, 192, 205, 0.7);
    z-index: 9999;
    opacity: 0.7;
    transition: all 0.3s;
}
.navbar-menu {
    z-index: 9999;
    width: 200px;
}
.morepanel:not(.showSideMenu) {
  transform: translate(-100%, 0%);
}
.paneloverlay:not(.showSideMenu),
.morepanel:not(.showSideMenu) {
  opacity: 0;
  visibility: hidden;
}
</style>

<template>
    <div class="paneloverlay" :class="visibility ? 'showSideMenu' : ''"  @click="moreDrawer"></div>

    <div class="morepanel" id="slidingPanel" :class="visibility ? 'showSideMenu' : ''">
        <a class="panelclose" @click="moreDrawer"><i class="bx bx-x"></i></a>
        <h3>Do more with Stripe</h3>
        <h5>Accept payments</h5>

        <Link v-if="$modulePermission('Invoice','View')" :href="route('admin.invoice.list')" class="image-box" @click="moreDrawer">
            <img :src="siteURL + 'backend/images/invoices.svg'" alt="Image" />
            <div class="content">
                <h6>Invoices</h6>
                <p>Create and send invoices</p>
            </div>
        </Link>

        <Link v-if="$modulePermission('PaymentLinkGenerator','View')"  :href="route('admin.payment.linkgenerator.list')" class="image-box" @click="moreDrawer">
            <img :src="siteURL + 'backend/images/payment-links.svg'" alt="Image" />
            <div class="content">
                <h6>Payment links</h6>
                <p>Create no-code payment pages</p>
            </div>
        </Link>

        <h5 v-if="$modulePermission('Product','View')" >Manage your products</h5>

        <Link v-if="$modulePermission('Product','View')"  :href="route('admin.products.list')" class="image-box" @click="moreDrawer">
            <img :src="siteURL + 'backend/images/product.svg'" alt="Image" />
            <div class="content">
                <h6>Product catalog</h6>
                <p>Create listings for goods or services</p>
            </div>
        </Link>

        <h5 v-if="$modulePermission('User','View') || $modulePermission('Team','View')">Manage your staff</h5>

        <Link v-if="$modulePermission('User','View')"  :href="route('admin.staff.list')" class="image-box" @click="moreDrawer">
            <img :src="siteURL + 'backend/images/staff.svg'" alt="Image" />
            <div class="content">
                <h6>Staff</h6>
                <p>Manage listings your staff</p>
            </div>
        </Link>

        <Link v-if="$modulePermission('Team','View')"  :href="route('admin.team.list')" class="image-box" @click="moreDrawer">
            <img :src="siteURL + 'backend/images/team.svg'" alt="Image" />
            <div class="content">
                <h6>Teams</h6>
                <p>Create to manage teams</p>
            </div>
        </Link>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { siteURL } from '../Composables/functions';

const emit = defineEmits(['moreDrawer']);
const props = defineProps({
  visibility: Boolean
});

const visibility = ref(props.visibility);

watch(() => props.visibility, async (newVisibility, oldVisibility) => {
    visibility.value = newVisibility;
    if(visibility.value && document.documentElement.scrollHeight > window.innerHeight) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px';
        document.querySelector("#page-topbar .layout-width").style.paddingRight = '17px';

    } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.querySelector("#page-topbar .layout-width").style.paddingRight = '';
    }

});

const moreDrawer = () => {
  emit('moreDrawer', true);
};

</script>
