import { useReducer, useContext, createContext } from "react";

const AppContext = createContext();
const DispatchContext = createContext();

export const initialState = {
  drinks: [], // initial value inside state this can be any structure you want
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        drinks: action.payload, //push array
      };

    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export const useDispatchContext = () => useContext(DispatchContext);
