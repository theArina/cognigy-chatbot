import { FC, FormEventHandler, useState, useContext } from "react";
import { Context } from "./Context";

export const Input: FC = () => {
  const [message, setMessage] = useState("");

  const { handleSendMessage } = useContext(Context);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (message !== "") {
      setMessage("");
      handleSendMessage(message);
    }
  };

  return (
    <form
      style={{ display: "flex", alignItems: "stretch" }}
      onSubmit={handleSubmit}
    >
      <input
        style={{ flexGrow: 1, border: "1px solid black", padding: 5 }}
        placeholder="type here"
        autoFocus
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" style={{ border: "1px solid black", padding: 5 }}>
        submit
      </button>
    </form>
  );
};
