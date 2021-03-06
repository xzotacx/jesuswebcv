import { useReducer } from "react";

const initialState = {
  email: "",
  name: "",
  company: "",
  comment: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_COMPANY":
      return { ...state, company: action.payload };
    case "CHANGE_COMMENT":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};

function useFormState() {
  const [formState, changeField] = useReducer(reducer, initialState);
  return { formState, changeField };
}

export default useFormState;
