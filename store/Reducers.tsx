import { ACTIONS } from "./Action";

interface actionInterface {
   type: string;
   payload: any;
}

export default (state, action: actionInterface) => {
   switch (action.type) {
      case ACTIONS.NOTIFY:
         return {
            ...state,
            notify: action.payload,
         };

      case ACTIONS.AUTH:
         return {
            ...state,
            notauthify: action.payload,
         };

      default:
         return state;
   }
};
