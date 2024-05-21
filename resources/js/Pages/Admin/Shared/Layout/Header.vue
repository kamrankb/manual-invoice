<template>
    <header id="page-topbar">
        <div class="layout-width">
            <div class="navbar-header justify-content-end" ref="headerRef">
                <div class="d-flex align-items-center">
                    <div class="dropdown d-md-none topbar-head-dropdown header-item">
                        <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                            id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="bx bx-search fs-22"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-search-dropdown">
                            <form class="p-3">
                                <div class="form-group m-0">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search..."
                                            aria-label="Recipient's username" />
                                        <button class="btn btn-primary" type="submit">
                                            <i class="mdi mdi-magnify"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
                        <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                            id="page-header-notifications-dropdown" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-bell fs-20"></i>
                            <!-- <span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger"></span> -->
                            <span v-if="unreadCount > 0"
                                class="position-absolute topbar-badge fs-7 translate-middle badge rounded-pill bg-danger">
                            </span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 notification-dropdown"
                            aria-labelledby="page-header-notifications-dropdown"
                            style="height: 20rem;">


                            <!-- <div class="notification-head" style="position: fixed; top: 0; width: 100%; z-index: 999; height: 2rem; padding: 0.5rem"> -->
                            <div  style="position: fixed; top: 0; width: 100%; z-index: 999; padding: 0.5rem; display: flex; flex-direction: column;">
                                <div class="notification-head" style="display: flex;">
                                    <h3>Notification</h3>
                                    <ul class="payment-columns-filter p-0">
                                        <li>
                                            <div class="btn-group" v-if="unreadCount > 0">
                                                <button type="button" class="btn btn-light background-primary"
                                                    @click="markSelectedAsRead">
                                                    Mark {{ unreadCount }} as read
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                 <ul class="payment-top-filters" style="background-color: white; z-index: 999; display: flex; padding-bottom: 0;">
                                    <li style="width: 50%">
                                        <button id="unread" type="button" class="btn"
                                            :class="{ 'active': currentFilter === 'unread' }"
                                            @click="filterNotifications('unread')">
                                            <span>Unread <span v-if="unreadCount > 0">{{ unreadCount }}</span></span>
                                        </button>
                                    </li>
                                    <li style="width: 50%">
                                        <button id="all" type="button" class="btn"
                                            :class="{ 'active': currentFilter === 'all' }"
                                            @click="filterNotifications('all')">
                                            <span>All</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>



                            <div class="notification-body" style="margin-top: 6.5rem; box-sizing: border-box; height: 10rem; overflow-y: auto;">
                                <table id="unread" class="table nowrap align-middle" style="height:100%; width: 95%; overflow-y: auto; margin: auto 2.5%;"
                                    v-show="filteredNotifications.length > 0">

                                    <tbody>
                                        <tr v-for="notification in filteredNotifications" :key="notification.id">
                                            <td @click="closeDropdown">
                                                <!-- {{ notification.id }} -->
                                                <Link :href="route('admin.invoice.list') + '/' + notification.id">
                                                <p class="message">
                                                    <span v-if="!notification.read_at" class="unread"></span>
                                                    {{ notification.jsonData.message }}
                                                </p>

                                                </Link>
                                                <div class="row" v-if="notification.jsonData.title === 'payment'">
                                                    <!-- Column for displaying the time -->
                                                    <div class="col-lg-6 col-sm-12">
                                                        <p>{{ formatDistanceToNow(parseISO(notification.created_at)) }}
                                                            ago</p>
                                                    </div>

                                                    <!-- Column for the button -->
                                                    <div class="col-lg-6 col-sm-12 button-actionListUl">
                                                        <button class="btn btn-soft-secondary btn-sm" type="button"
                                                            @click="detailInvoice(notification.jsonData.data.id)">
                                                            <b>View Payment</b>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table id="unread" class="table nowrap align-middle" style="height:100%; width: 100%; overflow-y: auto;"
                                    v-show="filteredNotifications.length == 0">
                                    <tbody>
                                        <tr>
                                            <td colspan="2"
                                                style="text-align: center; padding: 35px 0 35px;Line-height: 20px ;">

                                                <p>You're up to date.</p>
                                                <p>There are no new notifications at the moment.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                              <div class="d-flex justify-content-between" style="height: 2rem; padding: 1rem;">
                                    <div class="col">
                                        <p v-if="unreadCount > 0" class="text-start">{{ unreadCount }} of
                                            {{ notifications.length }} unread notifications</p>
                                    </div>
                                    <div class="col-auto">
                                        <a class="color-primary font-bold" @click="closeDropdown">
                                            <Link class="dropdown-item"
                                                :href="route('admin.invoice.list')">
                                            View all
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div class="dropdown ms-sm-2 header-item topbar-user">
                        <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="mdi mdi-cog-outline fs-20"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" style="min-width: 210px;">
                            <!-- item-->
                            <!-- <h6 class="dropdown-header">Welcome Anna!</h6> -->
                            <Link :href="route('admin.invoice.list')" class="dropdown-item"
                                href="pages-profile-settings.html"><i
                                class="mdi mdi-cog-outline fs-16 align-middle me-2"></i>
                            <span class="align-middle">Settings</span>
                            </Link>
                            <Link class="dropdown-item"  :href="route('admin.invoice.list')"><i
                                class="mdi mdi-account-circle fs-16 align-middle me-2"></i>
                            <span class="align-middle">Profile</span></Link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" :href="route('admin.logout')"><i
                                    class="mdi mdi-logout fs-16 align-middle me-2"></i>
                                <span class="align-middle" data-key="t-logout">Sign Out</span></a>
                            <h6 class="dropdown-header fs-14 fw-400">
                                {{ `${authUser.firstName} ${authUser.lastName}` }}
                                <small style="display: block;">{{ authUser.email }}</small>
                            </h6>
                        </div>
                    </div>

                    <div class="dropdown ms-sm-2 header-item topbar-user">
                        <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="bx bxs-plus-circle fs-24 color-primary"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" style="min-width: 210px;">
                            <!-- item-->
                            <h6 class="dropdown-header">Online Payments</h6>
                            <Link 
                                class="dropdown-item d-flex justify-content-between"
                                :href="route('admin.invoice.create')">
                            <span>
                                <i class="ri-file-list-3-line fs-16 align-middle me-2"></i>
                                <span class="align-middle">Invoice</span>
                            </span>
                            <span class="codes">
                                <span class="code">c</span>
                                <span class="code">i</span>
                            </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { format, parseISO, formatDistanceToNow } from 'date-fns'
import axios from 'axios';
import { router } from "@inertiajs/vue3";

const authUser = ref(router.page.props.authUser);

const headerRef = ref();

const closeDropdown = () => {
    document.getElementsByClassName('dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 notification-dropdown')[0].classList.remove('show');
    document.getElementsByClassName('btn btn-icon btn-topbar btn-ghost-secondary rounded-circle')[0].classList.remove('show');
    // document.getElementById('aria-expanded').setAttribute('aria-expanded', 'false');
}

const stickyHeader = (e) => {
    if (window.scrollY > 50) {
        headerRef.value.classList.add("sticky");
    } else {
        headerRef.value.classList.remove("sticky");
    }
};

//For Notification:
const notifications = ref([]);
const filteredNotifications = ref([]);
const unreadCount = ref(0);
const currentFilter = ref('unread');
let pollingInterval;
onMounted(() => {
    window.addEventListener('scroll', stickyHeader);

});

const detailInvoice = (id) => {
    router.visit(route('admin.payment.detail.id', { id }));
};


const filterNotifications = (type) => {
    if (type === 'all') {
        filteredNotifications.value = notifications.value;
    } else {
        filteredNotifications.value = notifications.value.filter(notification => !notification.read_at);
    }
    currentFilter.value = type;
};

const markSelectedAsRead = async () => {
    try {
        const response = await router.visit(route('admin.invoice.list.markallread'), { notifications: unreadCount });
        console.log('response', response)
        // console.log('data',data)
        // console.log('data.success',data.success)
        // if (response.data.success) {
        //     notificationData.msg = 'Notification Read Successfully';
        //     notificationData.type = 'success';
        //     notify = true;
        router.visit(route('admin.invoice.list'));
        // } else {
        //     notificationData.msg = 'Notification Not Read Successfully!';
        //     notificationData.type = 'error';
        //     notify = true;
        // }
    } catch (error) {
        console.error('Failed to mark selected notifications as read:', error);
    }

    closeDropdown();
    // refreshPage();

};
// const refreshPage = () => {
//     window.location.reload();
// };
</script>

<style scoped>
.button-actionListUl {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
}

.button-actionListUl button {
    opacity: 0;
    transition: opacity 0.3s ease;
}

.button-actionListUl:hover button {
    opacity: 1;
    color:#625afa;
}

.notification-dropdown{
    padding: 0 !important;
}
</style>
