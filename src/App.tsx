import { Provider } from "./components/Context";
import { History } from "./components/History";
import { Input } from "./components/Input";

export default function App() {
  return (
    <Provider>
      <div
        style={{
          width: 300,
          height: 400,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <History />
        <Input />
      </div>
    </Provider>
  );
}
