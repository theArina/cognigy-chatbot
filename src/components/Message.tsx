import { FC } from "react";
import { MessageProps } from "../interfaces";

export const Message: FC<MessageProps> = (props) => {
  const { direction, children } = props;

  return (
    <div
      style={{
        alignSelf: direction === "incoming" ? "flex-start" : "flex-end",
        border: "1px solid black",
        padding: 5,
        borderRadius: 5
      }}
    >
      {children}
    </div>
  );
};
