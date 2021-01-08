const Toast = ({ msg, handleShow, bgColor }) => {
   return (
      <div
         className={`toast show position-fixed text-light ${bgColor}`}
         style={{ top: " 5px", right: "5px", zIndex: 9, minWidth: "280px" }}
         data-autohide="false"
      >
         <div className={`toast-header ${bgColor} text-light`}>
            <strong className="mr-auto text-primary">{msg.title}</strong>

            <button
               type="button"
               // className="ml-1 mb-1 close"
               data-dismiss="toast"
               style={{
                  outline: "none",
                  background: "none",
                  border: "none",
                  marginLeft: "auto",
               }}
               onClick={handleShow}
            >
               X
            </button>
         </div>
         <div className="toast-body">{msg.msg}</div>
      </div>
   );
};

export default Toast;
