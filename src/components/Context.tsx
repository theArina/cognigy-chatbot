import { FC, createContext, useReducer, useEffect } from "react";
import { addListener, sendMessage } from "../socket";
import { IContextProps } from "../interfaces";
import { reducer, initialState } from "../reducer";

export const Context = createContext({} as IContextProps);

export const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    addListener(({ text }) => {
      dispatch({
        type: "addMessage",
        value: {
          message: text,
          direction: "incoming"
        }
      });
    });
  }, []);

  const handleSendMessage = (message: string) => {
    dispatch({
      type: "addMessage",
      value: {
        message,
        direction: "outgoing"
      }
    });
    sendMessage(message);
  };

  const value = {
    history: state.history,
    handleSendMessage
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
