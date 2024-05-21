<template>
  
  <form @submit.prevent="submit()" method="post">
  
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between" style="margin-bottom: 1px;">
                <h4 class="mb-sm-0">Update Invoice</h4>

                <div class="page-title-right d-flex gap-5">
                  <h5>Total: {{ totalAmount }}</h5>
                  <div class="btn-group float-end margin-between">
                      <button type="submit" class="btn btn-primary waves-effect waves-light btn-sm">
                          Update
                      </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-0">
                <div class="card-body p-0">
                    <div class="create-billing-invoice-Area">
                        <div class="create-billing-invoice-fifty">
                            <div class="create-billing-invoice-fiftyHolder">
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="row rowGap-45">                                    
                                    <div class="row">
                                      <div class="col-lg-4">
                                        <label for="placeholderInput" class="form-label">Account:</label>
                                        <input type="text" class="form-control" ref="nameRef" autofocus tabindex="1" v-model="invoiceData.accountName" placeholder="Account" disabled />
                                        <span class="error" v-if="invoiceData.errors.accountName">{{ invoiceData.errors.accountName[0] }}</span>
                                      </div>

                                      <div class="col-lg-4">
                                        <label for="placeholderInput" class="form-label">Invoice #:</label>
                                        <input type="text" class="form-control" ref="nameRef" autofocus tabindex="1" v-model="invoiceData.invoiceNumber" placeholder="Account" disabled />
                                        <span class="error" v-if="invoiceData.errors.invoiceNumber">{{ invoiceData.errors.invoiceNumber[0] }}</span>
                                      </div>

                                      <div class="col-lg-4">
                                        <label for="placeholderInput" class="form-label">Date:</label>
                                        <input type="date" class="form-control" ref="nameRef" autofocus tabindex="1" v-model="invoiceData.issueDate" placeholder="Account" />
                                        <span class="error" v-if="invoiceData.errors.issueDate">{{ invoiceData.errors.issueDate[0] }}</span>
                                      </div>
                                    </div>

                                    
                                    <div class="row">
                                      <div class="col-lg-12">
                                        <label for="placeholderInput" class="form-label">Heading:</label>
                                        <input type="text" class="form-control" ref="nameRef" autofocus tabindex="1" v-model="invoiceData.heading" placeholder="Account" />
                                        <span class="error" v-if="invoiceData.errors.heading">{{ invoiceData.errors.heading[0] }}</span>
                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-lg-12">
                                        <table class="table table">
                                          <thead>
                                              <tr>
                                                  <th scope="col">HAWB</th>
                                                  <th scope="col">Date</th>
                                                  <th scope="col">Description</th>
                                                  <th scope="col">Service</th>
                                                  <th scope="col">Unit</th>
                                                  <th scope="col">Qty</th>
                                                  <th scope="col">Rate</th>
                                                  <th scope="col">Total</th>
                                                  <th scope="col"></th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr v-for="(item, index) in invoiceData.items">
                                                  <td>
                                                    <input type="text" class="form-control" autofocus tabindex="1" v-model="item.HAWB" placeholder="HAWB" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.HAWB`]">{{ invoiceData?.errors[`items.${index}.HAWB`]?.[0] }}</span>
                                                  </td>

                                                  <td>
                                                    <input type="date" class="form-control" tabindex="2" v-model="item.date" placeholder="Date" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.date`]">{{ invoiceData?.errors[`items.${index}.date`]?.[0] }}</span>
                                                  </td>

                                                  <td>
                                                    <input type="text" class="form-control" tabindex="3" v-model="item.description" placeholder="Description" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.description`]">{{ invoiceData?.errors[`items.${index}.description`]?.[0] }}</span>
                                                  </td>

                                                  <td>
                                                    <input type="text" class="form-control" tabindex="4" v-model="item.service" placeholder="Service" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.service`]">{{ invoiceData?.errors[`items.${index}.service`]?.[0] }}</span>
                                                  </td>
                                                  
                                                  <td>
                                                    <input type="text" class="form-control" tabindex="5" v-model="item.unit" placeholder="Unit" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.unit`]">{{ invoiceData?.errors[`items.${index}.unit`]?.[0] }}</span>
                                                  </td>
                                                  
                                                  <td>
                                                    <input type="number" min="0" class="form-control" tabindex="6" v-model="item.qty" placeholder="Qty" @change="totalRow(index)" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.qty`]">{{ invoiceData?.errors[`items.${index}.qty`]?.[0] }}</span>
                                                  </td>

                                                  <td>
                                                    <input type="number" min="0" class="form-control" tabindex="7" v-model="item.rate" placeholder="Rate" @change="totalRow(index)" />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.rate`]">{{ invoiceData?.errors[`items.${index}.rate`]?.[0] }}</span>
                                                  </td>
                                                  
                                                  <td>
                                                    <input type="text" class="form-control" tabindex="8" v-model="item.total" placeholder="Total" disabled />
                                                    <span class="error" v-if="invoiceData?.errors[`items.${index}.total`]">{{ invoiceData?.errors[`items.${index}.total`]?.[0] }}</span>
                                                  </td>

                                                  <td>
                                                    <div class="hstack gap-3 flex">
                                                        <a href="javascript:void(0);" class="link-success fs-15" @click="addItem()"><i class="ri-edit-2-line"></i></a>
                                                        <a v-if="index != 0" href="javascript:void(0);" class="link-danger fs-15" @click="deleteItem(index)"><i class="ri-delete-bin-line"></i></a>
                                                    </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref, watch, computed, onUpdated } from 'vue';
import { toast } from 'vue3-toastify';
import "../../../../css/toast.css";
import { router, useForm } from '@inertiajs/vue3';
import axios from 'axios';

const props = defineProps({
  page: Object,
  invoice: Object,
  errors: Object,
  selected_customer_id: Number,
});

onMounted(() => {
  if(props?.invoice) {
    invoiceData.invoiceNumber = props.invoice?.invoice_no;
    invoiceData.accountID = props.invoice?.created_by;
    invoiceData.accountName = props.invoice.account?.first_name + ' ' + props.invoice.account?.last_name;
    invoiceData.issueDate = props.invoice?.issue_date;
    invoiceData.heading = props.invoice?.heading;;
    invoiceData.items = props.invoice.invoice_items;
    invoiceData.total = props.invoice?.total;
    invoiceData.invoice_id = props.invoice?.id;
  }
  
});

onUpdated(() => {
  if(props?.errors) {
    invoiceData.errors = props.errors;
  }
});

const totalRow = (index) => {
  invoiceData.items[index].total = invoiceData.items[index].qty * invoiceData.items[index].rate;
};

const invoiceData = useForm({
  accountID: router.page.props?.authUser.id,
  accountName: router.page.props?.authUser.firstName + ' ' + router.page.props?.authUser.lastName,
  invoiceNumber: 0,
  issueDate: '',
  heading: '',
  items: [{
    HAWB: '',
    date: '',
    description: '',
    service: '',
    unit: '',
    qty: '',
    rate: '',
    total: '',
  }],
  total: 0,
  invoice_id: ''
})

const addItem = () => {
  invoiceData.items.push({
    HAWB: '',
    date: '',
    description: '',
    service: '',
    unit: '',
    qty: '',
    rate: '',
    total: '',
  });
};

const totalAmount = computed(() => {
  let total = 0;
  invoiceData.items.map((item) => total += item.total);
  
  invoiceData.total = total;

  return total;
});

function submit() {
  router.post(route('admin.invoice.update', {id: invoiceData.invoice_id}), invoiceData)
}

const deleteItem = (index) => {
  invoiceData.items.splice(index, 1);    
};
</script>


<style>
.page-content {
    padding-bottom: 0;
    padding-left: 0;
}
</style>

<style scoped>
span.error {
  color: red;
}
.create-billing-invoice-fiftyHolder {
  max-width: 1000px;
}
body,

.gap-15 {
  gap: 15px;
}

.width150 {
  width: 150%;
}

.gap-10-15 {
  gap: 10px 15px !important;
}
.Page-bg {
    min-height: 735.3px;
    height: auto;
    padding-bottom: 25px;
}

.Page-bg td {
    font-size: 13px;
}

.customerDropDownArea {
  position: relative;
}
.selectedCustomerDetail {
    flex: 1;
}
.selectedCustomerDetail p {
    margin: 0;
    font-size: 12px;
    color: #777;
    line-height: 1.65;
}
.selectedCustomerDetail p.textDark {
    color: #000;
    font-size: 13px;
}
.selectedCustomerDetail p.textDark.bold {
    font-weight: 600;
}
.selectedCustomerControls .payment-columns-filter > li > .btn-group > button:not(:is(:hover, .show)) {
    box-shadow: none;
}
.selectedCustomerArea {
    display: flex;
    max-width: 250px;
}
.selectedCustomerControls .payment-columns-filter > li > .btn-group > .dropdown-menu {
    padding: 5px;
}


ul.customerDropDown {
  position: absolute;
  list-style: none;
  padding: 0.375rem;
  margin: 0;
  background: #fff;
  border-radius: 9px;
  box-shadow: 0 0 0.5rem rgba(0,0,0,0.2);
  top: 100%;
  left: 0;
  transform: translate(0, 7px);
  width: 100%;
  z-index: 100;
  max-height: 202px;
  overflow: hidden;
}

ul.customerDropDown li {
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  transition: all 0.3s;
  display: flex;
  gap: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
}

ul.customerDropDown li:not(:hover) > span {
  color: #777777;
}

.create-billing-invoice-fiftyHolder .col-12 > button.purpleTextBtn {
    color: var(--custom-primary);
    background: transparent;
    border: 0;
    cursor: pointer;
    line-height: 1;
    font-weight: 500;
}

.create-billing-invoice-fiftyHolder .col-12 > button.smallText {
    font-size: 12px;
    min-height: 0px;
}

ul.customerDropDown li:not(.noHover):hover {
  background: var(--custom-primary);
  color: #fff;
  cursor: pointer;
}
ul.customerDropDown li > :is(span.darkText, .heading) {
  font-weight: 600;
}
ul.customerDropDown li:not(:hover) > :is(span.darkText, .heading) {
  color: #000;
}
ul.customerDropDown li > .heading {
  font-size: 11px;
  text-transform: uppercase;
}

ul.customerDropDown li > span > i {
  font-size: 18px;
  line-height: 0;
  top: 4px;
  position: relative;
  font-weight: 400;
}

.invoice-heading {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-bottom: 15px;
}

.client-footer-table .client-detail > p {
    font-weight: 400;
    color: #999;
}
.client-footer-table .client-detail > p.thankyou {
    color: var(--primary-color);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
}
.Page-bg .customer-padding h2 {
    font-size: 32px;
}
.Page-bg .customer-padding h1 {
    margin-bottom: 5px;
}
.create-billing-invoice-Area {
    /* height: calc(100vh - 104px); */
    height: auto;
    min-height: calc(100vh - 104px);
    margin-right: calc(var(--vz-gutter-x) * -1);
}

.checkbox-flex {
    gap: 10px 0;
    align-items: flex-start;
}
.form-check label {
    white-space: nowrap;
}

.page-title-right .btn-group button {
    padding: 0 0.75rem;
    min-height: 28px;
    border-radius: 6px;
}
.page-title-right .btn-group button.waves-ligh {
    color: #000;
}

.create-billing-invoice-input {
    padding-bottom: 50px;
}

.create-billing-invoice-input .main-label {
    margin: 0;
}

.create-billing-invoice-fiftyHolder .col-12 > label {
    display: block;
    margin: 0 0 5px 0;
}
.create-billing-invoice-fiftyHolder .col-12 input:not(:is([type="checkbox"], [type="radio"],[type="submit"])),
.create-billing-invoice-fiftyHolder .col-12 select,
.create-billing-invoice-fiftyHolder .col-12 .input-group >  .input-group-text {
    width: 100%;
    outline: 0;
    background: #fff !important;
    color: #000;
    box-shadow: 0px 1px 1px 0px rgba(16, 17, 26, 0.16), #d5dbe1 0 0 0 1px, 0 0 0 0 transparent, 0 0 0 0 transparent;
    border: 0;
    border-radius: 6px;
    min-height: 32px;
    padding: 0 10px;
}

.create-billing-invoice-fiftyHolder .col-12 .input-group >  .input-group-text {
  width: auto;
  min-width: 32px;
  justify-content: center;
}
.create-billing-invoice-fiftyHolder .col-12 .input-group >  input:not(:is([type="checkbox"], [type="radio"],[type="submit"])) {
  width: auto;
  flex: 1;
}

.create-billing-invoice-fiftyHolder .col-12 > button {
    padding: 0 0.75rem;
    min-height: 30px;
    border-radius: 6px;
}

.create-billing-invoice-fiftyHolder .row.rowGap {
    row-gap: 15px;
}

.rowGap-45 {
  row-gap: 45px;
}

.dark {
    background: #f0f0f0;
}

.footer-text p {
    margin: 0;
    line-height: 1.5;
}

.footer-text a {
    color: #9c9c9c;
    text-decoration: none;
}

.footer-text h2 {
    margin: 0;
    color: var(--primary-color);
    font-size: 31px;
    font-weight: 900;
    line-height: 1;
}

.top-footer {
    border-bottom: 2px solid var(--primary-color);
    padding: 30px 20px 15px 20px;
}

.bottom-footer {
    padding: 15px 30px 30px 20px;
}

/* for date calendar */
.row {
    display: flex;
    align-items: center;
}

.selected-date {
    margin-left: 10px;
}

</style>