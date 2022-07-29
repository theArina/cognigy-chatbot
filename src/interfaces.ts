import { MessageDirection, HistoryItem } from "./types";

export interface MessageProps {
  direction: MessageDirection;
}

export interface IContextProps {
  history: HistoryItem[];
}
