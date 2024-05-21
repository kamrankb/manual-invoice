<template>
    <div v-if="props.type == 'numbers'" class="d-flex justify-content-center">
        <ul v-show="props.lastPage > 1" class="pagination">
            <li
                class="page-item paginate_button page-item"
                v-for="link in links"
            >
                <Link
                    :class="'page-link' + (link.active ? ' active' : '')"
                    v-if="link.url"
                    :href="link.url"
                    v-html="link.label"
                />
                <a
                    v-else
                    v-html="link.label"
                    class="page-link disabled"
                    href="javascript:void(0);"
                ></a>
            </li>
        </ul>
    </div>
    <div v-else class="d-flex justify-content-between">
        <span><span v-if="props.total > 20">Viewing <b>{{ props.from || 0 }}-{{ props.to || 0 }}</b> of </span><b>{{ props.total || 0 }}</b> results </span>
        <div v-if="props.total > 20 || props.showButtons" class="paginationButtons">
            <Link
                v-if="props.prevPage"
                :href="props.prevPage"
                :class="{ disabled: props.prevPage }"
                class="paginationButton"
                >Previous</Link
            >
            <a v-else href="javascript:void(0);" class="paginationButton"
                >Previous</a
            >
            <Link
                v-if="props.nextPage"
                :href="props.nextPage"
                :class="{ disabled: props.nextPage }"
                class="paginationButton"
                >Next</Link
            >
            <a v-else href="javascript:void(0);" class="paginationButton"
                >Next</a
            >
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    links: {
        type: Array,
        default: null,
    },
    lastPage: {
        type: Number,
        default: null,
    },
    from: {
        type: Number,
        default: null,
    },
    to: {
        type: Number,
        default: null,
    },
    prevPage: {
        type: String,
        default: null,
    },
    nextPage: {
        type: String,
        default: null,
    },
    showButtons: {
        type: Boolean,
        default: false,
    },
    total: Number,
    type: String,
});
</script>

<style scoped>
.paginationButtons {
    display: flex;
    align-self: flex-end;
    max-width: fit-content;
}

.paginationButton {
    border: 1px solid #c7c7c7;
    color: #444444;
    border-radius: 6px;
    padding: 0.1rem 0.5rem;
    font-weight: 600;
    margin: 0.15rem;
    transition: 0.25s;
    text-align: center;
    opacity: 0.75;
    font-size: smaller;
}

.paginationButton:hover {
    border: 1px solid #625afa;
    color: #625afa;
}
.disabled {
    opacity: 1;
}
</style>
