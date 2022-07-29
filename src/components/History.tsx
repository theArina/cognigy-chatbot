import { FC, useContext, useRef, useEffect } from "react";
import { Context } from "./Context";
import { Message } from "./Message";

export const History: FC = () => {
  const { history } = useContext(Context);

  const endRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [history]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid black",
        padding: 10,
        flexGrow: 1,
        overflow: "auto"
      }}
    >
      {history.map(({ message, direction }, index) => (
        <Message key={index} direction={direction}>
          {message}
        </Message>
      ))}
      <span ref={endRef} />
    </div>
  );
};
