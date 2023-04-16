import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./routes/home-layout";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Private } from "./componenets/auth/private-route";
import UserProfile from "./routes/auth/user-profile";
import UserLayout from "./routes/auth/user-layout";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<div>home</div>} />             
            </Route>
            <Route path="/user" element={<UserLayout/>}>
              <Route index element={<Private><UserProfile/></Private>} />
              </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
export default App;
