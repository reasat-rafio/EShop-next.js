import { ACTIONS } from "./Action";

interface actionInterface {
   type: string;
   payload: any;
}

const Reducer = (state, action: actionInterface) => {
   switch (action.type) {
      case ACTIONS.NOTIFY:
         return {
            ...state,
            notify: action.payload,
         };

      case ACTIONS.AUTH:
         return {
            ...state,
            auth: action.payload,
         };

      default:
         return state;
   }
};

export default Reducer;
