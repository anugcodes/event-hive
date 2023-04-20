import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./routes/home-layout";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Private } from "./componenets/auth/private-route";
import UserProfile from "./routes/user-profile";
import UserLayout from "./routes/user-layout";
import FestivalPage from "./routes/festspage";
import ListLayout from "./routes/list-layout";
import Homepage from "./routes/homepage";
import EventsPage from "./routes/eventspage";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Homepage />} />
            </Route>
            <Route element={<ListLayout />}>
              <Route path="/fests" element={<FestivalPage />} />
              <Route path="/fest:festid" element={<div>festid</div>} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/event:eventid" element={<div>eventid</div>} />
            </Route>
            <Route path="/user" element={<UserLayout />}>
              <Route
                index
                element={
                  <Private>
                    <UserProfile />
                  </Private>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
export default App;
