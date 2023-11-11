import styles from "./App.module.css";
import Catalog from "./components/pages/Catalog/Catalog";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
