import "../../../../../css/toast.css";
import { h } from "vue";
import { toast } from "vue3-toastify";

export function useNotification(setting = {}) {
    const isEmptyConfig = Object.keys(setting).length === 0;

    if (isEmptyConfig) {
        setting = {
            autoClose: 3000,
            theme: "dark",
            type: "success",
            position: "bottom-center",
        };
    }

    function success(message) {
        toast.success(message, {
            position: setting.position,
            theme: setting.theme,
            autoClose: setting.autoClose,
        });
    }

    function error(message) {
        toast.error(message, {
            position: setting.position,
            theme: setting.theme,
            autoClose: setting.autoClose,
        });
    }

    function warning(message) {
        toast.warning(message, {
            position: setting.position,
            theme: setting.theme,
            autoClose: setting.autoClose,
        });
    }

    function custom(message, btnText, callback) {
        const toastId = toast.loading({
            render: () =>
                h('div', {
                    style: {
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }
                }, [
                    h('p', {
                        style: {
                            marginBottom: '0px',
                        }
                    }, message),
                    h('span', {
                        style: {
                            borderLeft: '1px solid gray',
                            height: '4rem',
                            margin: '-1rem 0rem',
                            paddingLeft: '0.5rem',
                            placeContent: 'center',
                        },
                    }, {
                        onClick: (event) => {
                            event.stopPropagation();
                            //emit('performUndo', true);
                            toast.remove(toastId);
                            callback();
                        }
                    }, btnText)
                ]),
        }, {
            position: setting.position,
            theme: setting.theme,
            autoClose: setting.autoClose,
            closeButton: false,
        });

        return {
            toastId
        }
    }

    function update(toastID, message) {
        toast.update(toastID, {
            message: message,
            position: setting.position,
            theme: setting.theme,
            autoClose: setting.autoClose,
        });
    }

    function remove(toastID) {
        toast.remove(toastID);
    }

    return {
        success,
        error,
        warning,
        custom,
        update,
        remove
    }
}
