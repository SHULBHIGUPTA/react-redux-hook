import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const appCount = useSelector((reduxStore) => {
    return reduxStore.count;
  });

  const name = useSelector((x) => {
    return x.name;
  });

  console.log("name = ", name);

  const dispatch = useDispatch();
 
  console.log("appCount = ", appCount);

  const dispatchAction = () => {
    dispatch({ type: "INCREASE" });
  };

  return (
    <div className="App">
      <header className="App-header">
        redux with hooks
        <p>appCount - {appCount}</p>
        <button onClick={() => dispatchAction()}>dispatch</button>
      </header>
    </div>
  );
}

export default App;
