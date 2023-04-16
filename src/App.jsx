import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./routes/home-layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<div>home</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;