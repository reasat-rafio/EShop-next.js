import { useCtx } from "../store/GlobalState";
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
   const [state, dispatch] = useCtx();
   const { notify } = state;

   console.log(notify);

   return (
      <>
         {notify.loading && <Loading />}
         {notify.error && (
            <Toast
               msg={{ msg: notify.error, title: "Error" }}
               handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
               bgColor="bg-danger"
            />
         )}
         {notify.success && (
            <Toast
               msg={{ msg: notify.success, title: "Success" }}
               handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
               bgColor="bg-success"
            />
         )}
      </>
   );
};

export default Notify;
