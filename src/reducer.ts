import { State, Action } from "./types";

export const initialState = { history: [] };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addMessage":
      const { message, direction } = action.value;
      return {
        history: [
          ...state.history,
          {
            message,
            direction
          }
        ]
      };
  }
};
