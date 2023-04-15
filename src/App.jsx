import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grommet } from "grommet";
import HomeLayout from "./routes/home-layout";

function App() {
  return (
    // <div className="App">
    <Grommet full>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<div>home</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Grommet>
    // </div>
  );
}

export default App;
