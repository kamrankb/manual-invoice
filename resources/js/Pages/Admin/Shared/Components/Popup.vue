<template>
    <div
        class="popup-bg"
        :class="`${props.class}bg ${visibilityClass}`"
        @click="onCloseFunction"
    ></div>
    <div
        class="popup-area"
        :style="{ width: props.maxWidth ?? '450px' }"
        :class="`${props.class} ${visibilityClass}`"
    >
        <div class="popup-head">
            <h2>{{ props.title }}</h2>
            <slot name="head"></slot>
        </div>

        <div class="popup-body">
            <slot name="body"></slot>
        </div>
        <div class="popup-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style>
.popup-bg {
    z-index: 10000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #c1c9d2b3;
}

.popup-bg:not(.showThis),
.popup-area:not(.showThis) {
    opacity: 0;
    visibility: hidden;
}

.popup-bg,
.popup-area {
    transition: all 0.3s;
}
.popup-area {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 100%;
    /* max-width: 450px; */
    border-radius: 8px;
    background: #fff;
    transform: translate(-50%, -50%);
    z-index: 10001;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 60px);
}

.popup-head {
    padding: 1rem;
    box-shadow: inset 0 -1px #ebeef1;
    flex: 1 0 auto;
}

.popup-body {
    background-color: #f6f8fa;
    padding: 20px 20px;
    flex: 1 1 auto;
    overflow: auto;
}

.popup-details-area > h3 {
    font-size: 15px;
    font-weight: 500;
    color: #1a1b25;
    margin-bottom: 30px;
}

.popup-details-area a {
    font-weight: 600;
    color: var(--custom-primary) !important;
}

.popup-details-area > h3 > i {
    font-size: 18px;
    line-height: 0;
    transform: translate(0, 3px);
}

.popup-details-area > h3.hide > i {
    transform: rotate(180deg) translate(0, -3px);
}

.popup-details-area + .popup-details-area {
    margin-top: 40px;
}

.popupToggleArea:not(.show) {
    display: none;
}

.popupToggleArea {
    padding: 7px 0;
}

.popup-details-input {
    font-size: 13px;
}

.popup-details-input + .popup-details-input {
    margin-top: 30px;
}

.popup-details-input label:not(.checkbox-label) {
    display: block;
    font-weight: 500;
    color: #414552;
    margin-bottom: 10px;
}

.popup-details-input label.checkbox-label {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 5px 0;
    gap: 10px;
}
.popup-details-input input:not(:is([type="checkbox"], [type="radio"])) {
    border: 1px solid #ccc;
}

.popup-details-input
    input:not(:is([type="checkbox"], [type="radio"])):focus-visible,
.popup-details-input select:focus-visible,
.popup-details-input textarea:focus-visible {
    outline-color: var(--custom-primary);
}

.popup-details-input input:not(:is([type="checkbox"], [type="radio"])),
.popup-details-input select,
.popup-details-input textarea {
    width: 100%;
    padding: 3px 10px;
    min-height: 28px;
    border-radius: 6px;
}

.popup-details-input
    :is(input, select, textarea)
    + :is(input, select, textarea) {
    margin-top: 15px;
}

.popup-details-input :is(select, textarea) {
    color: #404452;
    background: #fff;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
        rgba(64, 68, 82, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(64, 68, 82, 0.08) 0px 2px 5px 0px;
}

.popup-head > h2 {
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
    color: #1a1b25;
}

.flex-inputArea {
    display: flex;
    gap: 12px;
    align-items: center;
}

.flex-inputArea + .flex-inputArea {
    margin-top: 15px;
}

.flex-inputArea > .popup-details-input {
    margin: 0;
    flex: 1;
}

.flex-inputArea > .popup-details-input.flex180 {
    flex: 0 0 180px;
}

.flex-inputArea > .deleteArea {
    color: var(--custom-primary);
    cursor: pointer;
}

.popup-footer {
    box-shadow: inset 0 1px #ebeef1;
    padding: 15px 20px;
    font-size: 14px;
    display: flex;
    gap: 7px;
    justify-content: flex-end;
    flex: 1 0 auto;
}

.popup-footer > button,
label.popup-file-upload-label > button {
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

label.popup-file-upload-label {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
}

label.popup-file-upload-label > button {
    display: inline-flex;
    align-items: center;
    margin: 0;
    gap: 7px;
    font-weight: 600;
}

label.popup-file-upload-label > button > i {
    font-size: 18px;
    line-height: 0;
}

.popup-file-upload {
    cursor: pointer;
}

.popup-file-upload > input {
    display: none;
}

.popup-footer > button.purpleLinkStyle {
    background: #625afa;
    color: #fff;
}

.btn-to-start {
    flex: 1;
}

.btn-to-start > button {
    border: 0;
    background: transparent;
    outline: 0;
    color: var(--custom-primary);
    font-weight: 500;
}
</style>

<script setup>
import { ref, watch, useSlots } from "vue";

const props = defineProps({
    title: String,
    visibility: Boolean,
    class: String,
    onClose: Function,
    maxWidth: String || "450px",
});

const slots = useSlots();
const visibilityClass = ref(props.visibility ? "showThis" : "");

const onCloseFunction = props.onClose ? props.onClose : () => null;

watch(
    () => props.visibility,
    (newVal) => {
        visibilityClass.value = props.visibility ? "showThis" : "";
    }
);
</script>
