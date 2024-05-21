<template>
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 big-text">Invoices</h4>

                <div class="page-title-right">
                    <div class="btn-group float-end create-payment-btn">
                        <Link
                            :href="route('admin.invoice.create')"
                            class="btn btn-primary btn-radius6 waves-effect waves-light btn-sm"
                        >
                            <i class="ri-add-line align-bottom me-1"></i>
                            Create invoice
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="tab-content text-muted">
                        <div
                            class="tab-pane active"
                            id="invoices"
                            role="tabpanel"
                        >
                            <div class="tableContainer">
                                <table
                                    id="scroll-horizontal"
                                    class="table nowrap align-middle productsTables"
                                    style="width: 100%"
                                >
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">Amount</th>
                                            <th style="min-width: 150px">
                                                Invoice Number
                                            </th>
                                            <th>Account</th>
                                            <th style="min-width: 10px">Created</th>
                                            <th style="width: 10px"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-if="props?.invoices"
                                            v-for="invoice in props.invoices.data"
                                        >
                                            <td>
                                                <b>
                                                    ${{ invoice?.total }}
                                                </b>
                                            </td>

                                            <td>
                                                <b>
                                                    {{ invoice?.invoice_no }}
                                                </b>
                                            </td>

                                            <td>
                                                <b>
                                                    {{ invoice?.account?.first_name + ' ' + invoice?.account?.last_name }}
                                                </b>
                                            </td>
                                            
                                            <td>
                                                {{ format(parseISO(invoice?.created_at), "MMM d") }}
                                            </td>
                                            <td>
                                                <ul class="payment-actionListUl">
                                                    <li>
                                                        <div class="dropdown d-inline-block">
                                                            <button
                                                                class="btn btn-soft-secondary btn-sm dropdown"
                                                                type="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <i class="ri-more-fill align-middle"></i>
                                                            </button>
                                                            <ul class="dropdown-menu dropdown-menu-end drop-down-colors">
                                                                <li class="dropHead">
                                                                    <span class="dropdown-item">Actions</span>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        :href="route('admin.invoice.edit',{id: invoice?.id,})" class="dropdown-item">
                                                                        Edit invoice
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <a class="dropdown-item text-red" @click="handleInvoiceDeletePopup(invoice?.id)">
                                                                        Delete draft
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination v-if="props.invoices.total > 0"
                            :total="props.invoices.total"
                            :prevPage="props.invoices.prev_page_url"
                            :nextPage="props.invoices.next_page_url"
                            :from="props.invoices.from"
                            :to="props.invoices.to"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <DeletePopup
        title="invoice"
        message="Are you sure you want to permanently delete this invoice? This cannot be undone."
        :deleteVisibility="deletePopupVisibility"
        :hideDeletePopup="() => (deletePopupVisibility = false)"
        :onDeleteSubmit="onDeleteSubmit"
    />

    <Head>
        <title>{{ props.page.title }}</title>
    </Head>
</template>

<style scoped>
.big-text {
    font-size: 26px !important;
    text-transform: capitalize;
    font-weight: 700;
}
.buttonWithSmallText {
    font-size: 12px;
    white-space: nowrap;
    margin-left: -100px;
}
.page-title-box {
    box-shadow: none;
    border: 0;
    margin-bottom: 10px;
}
.card-body,
.card {
    padding: 0;
    box-shadow: none;
}

.btn-radius6 {
    border-radius: 6px;
    min-height: 28px;
    padding: 3px 12px;
}

.clearFilterBtn{
    color: #4e11e2;
    font-weight: 600;
    padding: 0.25rem 0;
    margin: auto;
    cursor: pointer;
    white-space: nowrap;
}

.tableContainer {
  min-height: -webkit-fill-available;
}
</style>

<script setup>
import { router } from "@inertiajs/vue3";
import { ref } from "vue";
import Title from "../Shared/Components/Title.vue";
import { format, parseISO } from "date-fns";

import Pagination from "../Shared/Components/Table/Pagination.vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "../../../../css/toast.css";
import DeletePopup from "../Shared/Components/Popups/DeletePopup.vue";

const props = defineProps({
    invoices: Object,
    page: String,
});

const deletePopupVisibility = ref(false);
const deleteInvoiceId = ref(null);

const handleInvoiceDeletePopup = (itemId) => {
    deletePopupVisibility.value = true;
    deleteInvoiceId.value = itemId;
};

const onDeleteSubmit = () => {
    router.visit(
        route("admin.invoice.delete", { invoiceID: deleteInvoiceId.value }),
        {
            method: "get",
            replace: false,
            preserveState: false,
            preserveScroll: false,
        }
    );

    deletePopupVisibility.value = false;
    deleteInvoiceId.value = null;
};
</script>
