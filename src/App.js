import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre/:genre" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mybooks" element={<MyBooks />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;