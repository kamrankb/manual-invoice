<template>
    <div class="row disable-onEdit">
        <div class="col-12">
            <div class="page-title-container">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 big-text">Today</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row disable-onEdit">
        <div class="col-md-8">
            <DailyGraph :currentHour="props.currentHour" :data="props.singleDay" :lastPaymentDate="lastPaymentDate" />
        </div>
        <div class="col-md-4">
            <ul class="chartListUL">
                <li>
                    <div class="dailyChat-topItem">
                        <Select v-model="balanceCurrency" :options="balances"  @update:modelValue="handleCurrencyChange" suffix="Balance" class="select"></Select>

                        <p class="big-pricing">${{ props.balanceAmount }}</p>
                        <p>All time Balance</p>
                    </div>
                    <Link :href="route('admin.payouts')" class="purpleLink">View</Link>
                </li>
                <li>
                    <div class="dailyChat-topItem">
                        <h3>Monthly Balance</h3>
                        <p class="big-pricing">${{ props.monthlyBalance }}</p>
                    </div>
                    <Link :href="route('admin.payouts')" class="purpleLink">View</Link>
                </li>
            </ul>
        </div>
    </div>

    <div class="row mt-4 disable-onEdit" v-if="!hidePaymentNotReview">
    <div class="col-md-12" v-if="unreadPaymentData.length > 0">
        <div class="paymentNotReviewArea">
            <span>
                <i class="ri-eye-line"></i>
            </span>
            <p>
                <a @click="paymentReviewHandler" class="purpleLink">
                    {{ unreadPaymentData.length }} payments
                </a>
                have not been reviewed.
            </p>
            <span @click="hidePaymentNotReviewHandler">
                <i class="bx bx-x"></i>
            </span>
        </div>
    </div>
</div>


    <div class="row mt-5">
        <div class="col-12">
            <div class="page-title-container">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 big-text">Your overview</h4>
                </div>

                <div class="row mx--15">
                    <div class="col-md-6">
                        <ul class="payment-columns-filter justify-content-start">
                            <li>
                                <div class="btn-group">
                                    <Select :value="timeDuration[timeDuration.length - 1].value" :options="timeDuration"
                                        class="select" v-model="viewDuration"></Select>
                                    <DataRangePicker :startDate="startDate" :endDate="endDate" v-model="dashboardRange">
                                    </DataRangePicker>
                                </div>
                            </li>
                            <li>
                                <Select :options="[
                { label: 'Monthly', value: 'monthly' },
                { label: 'Yearly', value: 'yearly' },
            ]" class="select" v-model="calendarView"></Select>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="payment-columns-filter">
                            <li>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light" @click="setPopupVisibility">
                                        <i class="ri-add-fill"></i>
                                        Add
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light" @click="toggleDragable"
                                        v-if="!draggable">
                                        <i class="mdi mdi-cog-outline"></i>
                                        Edit
                                    </button>
                                    <button type="button" class="btn btn-primary" @click="toggleDragable(true)" v-else>
                                        Done
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <template v-for="(data, i) in visibleFields" :key="i">
            <div class="col-md-4" :draggable="draggable" @dragstart="dragStart(i)" @dragover.prevent @drop="drop(i)">
                <div class="graphDetailArea">
                    <button class="" v-if="draggable" @click="removeGraphDetail(i)">
                        <i class="bx bx-x"></i>
                    </button>
                    <Component :is="data?.component ? data?.component() : 'span'" v-bind="data" :key="data.id" />
                </div>
            </div>
            <div class="col-12 mt-4 mb-4" v-if="(i + 1) % 3 == 0">
                <div class="page-title-container">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between"></div>
                </div>
            </div>
        </template>
    </div>

    <DashboardGraphsPopup :setVisiblilty="setPopupVisibility" :allPaymentsData="allFieldComponents.payment"
        :allCustomerData="allFieldComponents.customer" :allInvoicesData="allFieldComponents.invoice"
        :selectedData="visibleFields" />

    <Head>
        <title>{{ props.page.title }}</title>
    </Head>
</template>

<style>
.dashboardTable {
    margin-top: 20px;
    width: 100%;
}

.dashboardTable td {
    padding: 12px 0;
    border-bottom: 1px solid rgba(56, 65, 74, 0.15);
}

.dashboardTable td>b:not(.normal) {
    font-size: 17px;
}

.dashboardTable td>p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
}

.dashboardTable td.space-between {
    width: 105px;
}

.dailyChat-topItem>h3 {
    font-size: 15px;
    margin-bottom: 5px;
}

.dailyChat-topItem>.select {
    display: inline-flex;
    margin-bottom: 10px;
}

.dailyChat-topItem>.select>p,
.dailyChat-topItem>*>.select>p {
    font-size: 15px;
    box-shadow: none;
    padding: 0;
    min-height: auto;
}

.dailyChat-topItem>p {
    margin: 0;
}

.dailyChat-topItem>p.big-pricing {
    font-size: 22px;
    font-weight: 400;
    color: #000;
}

/* .editingEnabled {
    --vz-card-bg-custom: #f5f8fb !important;
    background: var(--vz-card-bg-custom) !important;
} */

.editingEnabled .disable-onEdit {
    opacity: 0.75;
    user-select: none;
    pointer-events: none;
}

.dailyChat-topItem>p.small-pricing {
    font-size: 17px;
    font-weight: 400;
    color: #788091;
    margin-top: 7px;
}

.chartListUL {
    list-style: none;
    padding: 0;
    margin: 0;
}

.chartListUL>li {
    padding: 22.5px 0;
    display: flex;
}

.chartListUL>li>.dailyChat-topItem {
    flex: 1;
}

.chartListUL>li+li {
    border-top: 1px solid #f0f0f0;
}

.chartListUL>li:first-child {
    padding-top: 7px;
}

.chartListUL>li:last-child {
    padding-bottom: 7px;
}

.graphDetailArea {
    position: relative;
    padding: 1rem 1rem 0;
    background: #fff;
    display: block;
    border-radius: 1rem;
}

.graphDetailArea>button {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 20px;
}

.payment-columns-filter .btn-group>div>*:first-child {
    border-radius: 0;
}

.payment-columns-filter .btn-group>div:first-child>*:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.payment-columns-filter .btn-group>div:last-child>*:first-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.purpleLink {
    color: #625afa;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
}
</style>

<style scoped>
.mx--15 {
    margin: 0 -2rem;
}

.pl-15 {
    padding-left: 15px;
}

.paymentNotReviewArea {
    display: flex;
    gap: 22.5px;
    font-size: 16px;
    align-items: center;
    background: #f5f8fb;
    border: 1px solid #eceef0;
    border-radius: 10px;
    padding: 17px 25px;
    line-height: 1;
}

.paymentNotReviewArea>span {
    font-size: 20px;
    display: flex;
    align-items: center;
    opacity: 0.5;
}

.paymentNotReviewArea>span:last-child {
    cursor: pointer;
}

.paymentNotReviewArea>p {
    margin: 0;
    flex: 1;
}

.page-title-container {
    padding: 0 1.5rem;
    border-bottom: 1px solid rgba(56, 65, 74, 0.15);
    margin-bottom: 1.5rem;
}

.page-title-container .page-title-box {
    padding: 10px 0;
    box-shadow: none;
    margin-bottom: 7px;
}

.payment-columns-filter select {
    background: #fff;
    font-size: 13px;
    line-height: 20px;
    min-height: 28px;
    border-radius: 6px;
    box-shadow: 0px 1px 1px 0px rgba(16, 17, 26, 0.16), #d5dbe1 0 0 0 1px,
        0 0 0 0 transparent, 0 0 0 0 transparent;
    padding: 3px 10px;
    font-weight: 500;
    border: 0;
    outline: 0;
}

.payment-columns-filter select:has(+ button) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.big-text {
    font-size: 26px !important;
    text-transform: capitalize;
    font-weight: 700;
}
</style>

<script setup>
import { reactive, ref, onBeforeMount, watch } from "vue";
import { router, useForm } from "@inertiajs/vue3";
import { format, parseISO } from "date-fns";

import Select from "./Shared/Components/Select/Select.vue";

const setPopupVisibility = () => {
    document.querySelector(".dashboardPopupBg").classList.toggle("showThis");
    document.querySelector(".dashboardPopup").classList.toggle("showThis");
};

const props = defineProps({
    page: Object,
    duration: String || null,
    paymentsCount: Object,
    failedPayments: Array,
    refundPaymentsData: Array,
    topCustomerBySpend: Array,
    grossVolume: Array,
    netVolumeFromSales: Array,
    newCustomers: Array,
    successfulPayments: Array,
    refundPayments: Array,
    spendPerCustomer: Array,
    startDate: {
        type: String,
        default: "",
    },
    endDate: {
        type: String,
        default: "",
    },
    currentHour: Number || null,
    singleDay: Object || null,
    lastPaymentDate: String,
    balanceAmount: {
        type: Number,
        default: 0,
    },
    monthlyBalance: {
        type: Number,
        default: 0,
    },
    customers: Array,
    invoices: Array,
    unreadPaymentData: Array,
    user: Object,
});

const failedPaymentData = ref([]);
const refundPaymentData = ref([]);
const todayDate = ref("");
const startDate = ref("");
const endDate = ref("");
const dashboardRange = ref();
const topCustomersData = ref([]);
const CustomersData = ref([]);
const InvoicesTableData = ref([]);

const calendarView = ref('monthly');
const viewDuration = ref(props.duration || '7 days');

watch(() => viewDuration.value, (duration) => {
    router.visit(route("admin.invoice.list"), {
        method: "get",
        data: {
            dateDuration: duration,
        },
        replace: false,
        preserveState: false,
        preserveScroll: true,
    });
});

watch(
    () => dashboardRange.value,
    (dateRange) => {
        let startRange = new Date(dateRange[0]);
        let endRange = new Date(dateRange[1]);

        startRange =
            startRange.getFullYear() +
            "-" +
            ("0" + (startRange.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + startRange.getDate()).slice(-2);
        endRange =
            endRange.getFullYear() +
            "-" +
            ("0" + (endRange.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + endRange.getDate()).slice(-2);

        router.visit(route("admin.invoice.list"), {
            method: "get",
            data: {
                startDate: startRange,
                endDate: endRange,
            },
            replace: false,
            preserveState: false,
            preserveScroll: true,
        });
    }
);

const paymentProgressData = reactive([
    {
        name: "Succeeded",
        color: "var(--custom-primary)",
        count: "0",
    },
    {
        name: "Uncaptured",
        color: "#03039f",
        count: "0",
    },
    {
        name: "Refunded",
        color: "#00b1a9",
        count: "0",
    },
    {
        name: "Failed",
        color: "red",
        count: "0",
    },
]);

const visibleFields = ref([
    {
        id: "AllPayments",
    },
    {
        id: "FailedPayments",
    },
    {
        id: "TopCustomerBySpend",
    },
    {
        id: "GrossVolume",
    },
    {
        id: "NewCustomers",
    },
    {
        id: "SuccessfulPayments",
    },
    {
        id: "SpendPerCustomer",
    },
    {
        id: "HighRiskPayments",
    },
]);

onBeforeMount(() => {
    if (props.startDate != null && props.endDate != null) {
        startDate.value = props.startDate;
        endDate.value = props.endDate;
    } else {
        // Assigning Dates
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
        const year = currentDate.getFullYear();

        const sevenDaysBeforeDate = new Date(
            currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
        );

        // Extract the day, month, and year components of the date 7 days before the current date
        const sevenDaysBeforeDay = sevenDaysBeforeDate.getDate();
        const sevenDaysBeforeMonth = sevenDaysBeforeDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
        const sevenDaysBeforeYear = sevenDaysBeforeDate.getFullYear();

        todayDate.value = `${day}/${month}/${year}`;
        startDate.value = `${sevenDaysBeforeDay}/${sevenDaysBeforeMonth}/${sevenDaysBeforeYear}`;
        endDate.value = `${day}/${month}/${year}`;
    }

    paymentProgressData.values = paymentProgressData.map((item) => {
        if (
            props.paymentsCount &&
            props.paymentsCount[item.name.toLowerCase()]
        ) {
            item.count = props.paymentsCount[item.name.toLowerCase()];
        } else {
            item.count = 0;
        }
        return item;
    });

    // Failed payments
    props.failedPayments?.map((item, index) => {
        failedPaymentData.value.push({
            amount: item.price,
            message:
                format(parseISO(item.created_at), "MMM yy, hh:mm a") +
                " - " +
                item.customer.email,
            status: "Failed",
        });

        return item;
    });

      // Refund payments
      props.refundPaymentsData?.map((item, index) => {
        refundPaymentData.value.push({
            amount: item.price,
            message: format(parseISO(item.created_at), "MMM yy, hh:mm a") + " - " + item.customer.email,
            status: "Refund",
        });

        return item;
    });

    // Top Customers Payments
    props.topCustomerBySpend.map((item, index) => {
        topCustomersData.value.push({
            title: item?.email,
            message: item?.stripe_customer_id,
            amount: item?.payments_sum_price,
        });
    });

    // Customers Data for Customers Chart
    props.customers?.map((item, index) => {
        CustomersData.value.push({
            title: item.first_name + " " + item.last_name,
            message:
                format(parseISO(item.created_at), "MMM yy, hh:mm a") +
                " - " +
                item.email,
            amount: item.payments_sum_price,
        });
    });

    // Invoices
    props.invoices?.map((item, index) => {
        InvoicesTableData.value.push({
            amount: item?.payment?.price,
            message:
                format(parseISO(item.created_at), "dd MMM yy, hh:mm a") +
                " - " +
                item?.customer?.email,
            status:
                item.status == 0
                    ? "Paid"
                    : item?.status == 1
                        ? "succeeded"
                        : "Draft",
            status_text: 'Paid'
        });
        return item;
    });

    if (props.user?.dashboard_data) {
        let dashboardData = JSON.parse(props.user.dashboard_data);
        visibleFields.value = [];
        visibleFields.value = [...dashboardData.graphs];
    }
});

const balanceCurrency = ref('USD');
const balances = [
    {
        label: "USD",
        value: "USD",
        symbol: "$",
        amount: "176,218.52",
    },
    {
        label: "GBP",
        value: "GBP",
        symbol: "£",
        amount: "9,224.17",
    },
];


const handleCurrencyChange = (selectedCurrency) => {
    searchByCurrency(selectedCurrency);
};

function searchByCurrency(selectedCurrency) {

    router.visit(route("admin.invoice.list"), {
        method: "get",
        data: {
            selectedCurrency: selectedCurrency
        },
        replace: false,
        preserveState: true,
        preserveScroll: false,
    });
}

const timeDuration = [
    {
        label: "Today",
        value: "Today",
    },
    {
        label: "7 days",
        value: "7 days",
    },
    {
        label: "Last 4 weeks",
        value: "Last 4 weeks",
    },
    {
        label: "Last 3 months",
        value: "Last 3 months",
    },
    {
        label: "Last 12 months",
        value: "Last 12 months",
    },
    {
        label: "Month to date",
        value: "Month to date",
    },
    {
        label: "Quarter to date",
        value: "Quarter to date",
    },
    {
        label: "Year to date",
        value: "Year to date",
    },
    {
        label: "All time",
        value: "All time",
    },
];

const hidePaymentNotReview = ref(false);
const draggable = ref(false);

const hidePaymentNotReviewHandler = () => {
    hidePaymentNotReview.value = !hidePaymentNotReview.value;
};

const toggleDragable = (updateStatus = "") => {
    if (updateStatus != "" && updateStatus == true) {
        dashboardData.post(
            route("admin.invoice.list.user", {
                preserveScroll: true,
                onSuccess: () => console.log("Graph Data updated."),
            })
        );
    }
    draggable.value = !draggable.value;
    document.querySelector(".page-content").classList.toggle("editingEnabled");
};

const paymentReviewHandler = () => {
    router.visit(route('admin.payment.list', { is_review: true }));
}


const outstandingProgressData = [
    {
        name: "More than 60 days past due",
        color: "var(--custom-primary)",
        count: "0.00",
    },
    {
        name: "30-60 days past due",
        color: "#03039f",
        count: "0.00",
    },
    {
        name: "0-30 days past due",
        color: "#00b1a9",
        count: "0.00",
    },
    {
        name: "Not yet past due",
        color: "#ff9b00",
        count: "120.00",
    },
];

const allFieldComponents = reactive({
    payment: [
        {
            component: () => PaymentDetailTable,
            id: "FailedPayments",
            title: "Failed payments",
            data: failedPaymentData,
            updatedAt: props.page?.page_updated_at,
            total: failedPaymentData.length,
            routeTo: route("admin.payment.list", { status_all: "failed" }),
        },
        {
            component: () => BasicGraph,
            id: "GrossVolume",
            title: "Gross volume",
            data: props.grossVolume,
            start: props.startDate,
            end: props.endDate,
            prefix: "$",
            randomNumber: 50000,
            updatedAt: props.page?.page_updated_at,
            BottomDatePadding: "0 0 0 50px",
            routeTo: route("admin.payment.list"),
        },
        {
            component: () => BasicGraph,
            id: "HighRiskPayments",
            title: "High risk payments",
            total: "0",
            start: props.startDate,
            end: props.endDate,
            randomNumber: 0,
            updatedAt: props.page?.page_updated_at,
            BottomDatePadding: "0 0 0 20px",
            routeTo: route("admin.payment.list"),
        },
        {
            component: () => PaymentProgressBars,
            id: "AllPayments",
            title: "Payments",
            data: paymentProgressData,
            updatedAt: props.page?.page_updated_at,
            routeTo: route("admin.payment.list"),
        },
        {
            component: () => BasicGraph,
            id: "SuccessfulPayments",
            title: "Successful payments",
            start: props.startDate,
            end: props.endDate,
            data: props.successfulPayments,
            randomNumber: 382,
            updatedAt: props.page?.page_updated_at,
            BottomDatePadding: "0 0 0 35px",
            routeTo: route("admin.payment.list", { status_all: "succeeded" }),
        },
        {
            component: () => PaymentDetailTable,
            id: "RefundPaymentsList",
            title: "Refund List",
            data: refundPaymentData,
            updatedAt: props.page?.page_updated_at,
            total: refundPaymentData.length,
            routeTo: route("admin.payment.list", { status_all: "refunded" }),
        },
        {
            component: () => BasicGraph,
            id: "RefundPayments",
            title: "Refund Payments",
            start: props.startDate,
            end: props.endDate,
            data: props.refundPayments,
            randomNumber: 382,
            updatedAt: props.page?.page_updated_at,
            BottomDatePadding: "0 0 0 35px",
            routeTo: route("admin.payment.list", { status_all: "refunded" }),
        },
    ],
    customer: [
        {
            component: () => CustomerTable,
            title: "Customers",
            id: "CustomersTable",
            data: CustomersData,
            updatedAt: props.page?.page_updated_at,
        },
        {
            component: () => BasicGraph,
            id: "NewCustomers",
            title: "New customers",
            start: props.startDate,
            end: props.endDate,
            data: props.newCustomers,
            randomNumber: 451,
            updatedAt: props.page?.page_updated_at,
            BottomDatePadding: "0 0 0 30px",
            routeTo: route("admin.customer.list"),
        },
        {
            component: () => BasicGraph,
            id: "SpendPerCustomer",
            title: "Spend per customer",
            prefix: "$",
            start: props.startDate,
            end: props.endDate,
            data: props.spendPerCustomer,
            randomNumber: 382,
            updatedAt: props.page?.page_updated_at,
            BottomDatePadding: "0 0 0 35px",
            routeTo: route("admin.customer.list"),
        },
        {
            component: () => CustomerTable,
            title: "Top customers by spend",
            id: "TopCustomerBySpend",
            data: topCustomersData,
            updatedAt: props.page?.page_updated_at,
            routeTo: route("admin.customer.list"),
        },
    ],
    invoice: [
        {
            component: () => PaymentProgressBars,
            id: "OutstandingInvoices",
            title: "Outstanding invoices",
            data: outstandingProgressData,
            updatedAt: props.page?.page_updated_at,
        },
        {
            component: () => PaymentDetailTable,
            id: "InvoicesTable",
            title: "Invoices",
            data: InvoicesTableData,
            updatedAt: props.page?.page_updated_at,
            total: InvoicesTableData.length,
            routeTo: route("admin.invoice.list"),
        },
    ],
});

const dashboardData = useForm({
    graphs: visibleFields.value,
});

let dragIndex = null;

const dragStart = (index) => {
    dragIndex = index;
};

const drop = (index) => {
    if (dragIndex !== null && index !== null) {
        const draggedItem = visibleFields.value.splice(dragIndex, 1)[0];
        visibleFields.value.splice(index, 0, draggedItem);
        dragIndex = null;
    }
};

const removeGraphDetail = (deleteIndex) => {
    visibleFields.value.splice(deleteIndex, 1);
};

watch(
    () => visibleFields.value,
    (newValue) => {
        dashboardData.graphs = newValue;
        dashboardData.post(
            route("admin.invoice.list.user", {
                preserveScroll: true,
                onSuccess: () => console.log("Graph Data updated."),
            })
        );
    },
    { deep: true }
);
</script>
