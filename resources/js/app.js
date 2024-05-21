import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import route from "ziggy-js";
import Layout from "../js/Pages/Admin/Shared/Layout/Main.vue"

createInertiaApp({
    resolve: async name => {
        const page = (await import(`./Pages/${name}.vue`)).default;

        if (!page.layout) {
            page.layout ??= name.startsWith('Admin/') ? Layout : undefined;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        app.use(plugin)
            .component('Link', Link)
            .component('Head', Head)
            .mixin({ methods: { route } })
            .mount(el);
    },
});
