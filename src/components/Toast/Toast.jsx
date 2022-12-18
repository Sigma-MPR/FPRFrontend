import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToastContainer = () => {
    return (
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    );
}   

const ToastSuccess = (text) => {
        toast.success(text, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
}

const ToastError = (text) => {
    toast.error(text, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}
const ToastPromise = (text) => {
    toast.promise(
        Promise.resolve(text),
        {
            pending: "Loading...",
            success: "Success",
            error: "Error",
        },
        {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }
    );
}

// const response = await toast.promise(
//     fetch("A_URL"),
//     {
//       pending: 'Promise is pending',
//       success: 'Promise resolved 👌',
//       error: 'Promise rejected 🤯'
//     }
// );
// console.log(response)
export {ToastSuccess, CustomToastContainer, ToastError};