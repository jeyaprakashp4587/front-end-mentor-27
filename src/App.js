import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { ExportData } from "./ProviderData";

function App() {
  return (
    <div className="App">
      <ExportData>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ExportData>
    </div>
  );
}

export default App;
