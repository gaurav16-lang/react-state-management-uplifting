import "./styles.css";
import { ParentToChild } from "./components/ParentToChild";
import ChildToParent from "./components/ChildToParent";
export default function App() {
  return (
    <div className="App">
      <ParentToChild />
      <ChildToParent />
      <h1>gaurav maihuria</h1>
    </div>
  );
}
