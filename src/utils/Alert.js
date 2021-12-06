import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Alert = () => {
    const toastID = useRef(null)
    const { alert } = useSelector(state => state)


    const errorNotify = (message) => {
        toast.dismiss(toastID.current)
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const successNotify = (message) => {
        toast.dismiss(toastID.current)
        toast.success(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const loadingNotify = (message) => {
        toastID.current = toast.loading("Please wait...")
    };
    return (
        <div>
            {alert?.error && errorNotify(alert.error)}
            {alert?.success && successNotify(alert.success)}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Alert;