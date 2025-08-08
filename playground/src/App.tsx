import IncrementButton from "./IncrementButton";
import { Provider } from "./counterStore";
import DecrementButton from "./DecrementButton";
import RenderCount from "./RenderCount";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Provider>
        <IncrementButton />
        <DecrementButton />
        <RenderCount />
      </Provider>
    </div>
  );
}
