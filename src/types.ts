export type MessageDirection = "incoming" | "outgoing";

export type HistoryItem = {
  message: string;
  direction: MessageDirection;
};

export type Action = {
  type: "addMessage";
  value: HistoryItem;
};

export type State = {
  history: HistoryItem[];
};
