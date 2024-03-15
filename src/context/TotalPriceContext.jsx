import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);

const TotalPriceDispathContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unkwon action : " + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispathContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispathContext.Provider>
    </TotalPriceContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTotalPriceDispath() {
  return useContext(TotalPriceDispathContext);
}
