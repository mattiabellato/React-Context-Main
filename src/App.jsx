import List from "./Components/List";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Contexts";

function App() {
  return (
    <ContextProvider>
      <div className="container-fluid">
        <Navbar />
        <List />
      </div>
    </ContextProvider>
  );
}

export default App;

// props drilling
