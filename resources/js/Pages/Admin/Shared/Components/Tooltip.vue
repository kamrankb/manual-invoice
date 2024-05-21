<template>
    <div class="copycardArea">
        <button @click="textToCopy" :style="props.showButtonStyle" :class="props.showButtonClass" @mouseleave="textToCopyRevert">
            <span class="customTooltip" :class="staticClass">
                <template v-if="!copiedRef">
                    <template v-if="!defaultText">
                        <span>Copy ID</span>
                        <span class="code">ctrl</span>
                        <span>+</span>
                        <span class="code">i</span>
                    </template>
                    <template v-else>
                        <span>{{ defaultText }}</span>
                    </template>
                </template>
                <template v-else>
                    <span><i class="ri-check-line"></i></span
                    ><span>Copied</span>
                </template>
            </span>

            <span :style="props.showTextStyle" :class="props.showTextClass" v-html="props.showText || props.copyText"></span>
            <i v-if="props.showIcon" class="ri-clipboard-line"></i>
        </button>
    </div>
</template>

<style scoped>
.copycardArea {
    display: flex;
    align-items: center;
    /* justify-content: flex-end; */
    font-size: 12px;
}
p > .copycardArea {
    justify-content: initial;
}
.copycardArea > button {
    position: relative;
    padding: 2px 5px;
    border-radius: 4px;
    /* margin-bottom: 5px; */
    background: transparent;
    transition: color 0.3s;
    cursor: pointer;
    border: 0;
    outline: 0;
}
.copycardArea > button:hover,
p .copycardArea > button {
    background: #f5f5f5;
}

p > .copycardArea > button {
    border: 1px solid #e6e6e6;
}
.customTooltip {
    display: flex;
    align-items: center;
    gap: 3px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background: #434352;
    bottom: 120%;
    padding: 6px 10px;
    color: #fff;
    border-radius: 6px;
    white-space: nowrap;
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 10010;
}

.customTooltip > span {
    display: inline-block;
}

.copycardArea > button:not(:hover) > .customTooltip {
    opacity: 0;
    visibility: hidden;
}

.customTooltip > span.code {
    background: rgba(255, 255, 255, 0.15);
    padding: 1px 5px;
    border-radius: 4px;
    min-width: 25px;
    text-align: center;
}
</style>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    copyText: String,
    tooltipText: String,
    direction: String,
    showText: String,
    showTextStyle: String,
    showTextClass: String,
    showButtonStyle: String,
    showButtonClass: String,
    showIcon: Boolean,
    showCopied: {
        type: Boolean,
        default: true,
    },
});

const copiedRef = ref(false);
const staticClass = computed(() =>
    props?.direction ? props.direction.toLowerCase() : ""
);
const defaultText = props.tooltipText ? props.tooltipText : "";

const textToCopy = async () => {
    try {
        await navigator.clipboard.writeText(props.copyText);
        if(props.showCopied){
            copiedRef.value = true;
        }
    } catch (ex) {
        alert(ex.message);
    }
};

const textToCopyRevert = () => {
    setTimeout(() => {
        copiedRef.value = false;
    }, 300);
};
</script>
