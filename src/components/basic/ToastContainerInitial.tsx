
import { ToastContainer } from 'react-toastify'
import './toastStyles.css';

const ToastContainerInitial = () => {
  return (
    <ToastContainer
      autoClose={2000}
      position="bottom-right"
    />
  )
}

export default ToastContainerInitial;
