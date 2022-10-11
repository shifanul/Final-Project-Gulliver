import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import Adventure from "./Adventure";
import MyAdventures from "./MyAdventures";
import CreatedAdventure from "./CreatedAdventure";
import GlobalStyle from "./GlobalStyle";
import Create from "./Create";

const App = () => {
  // ALL THE DETAILS WE NEED FOR NAVIGATION!
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/added-adventures" element={<MyAdventures />} />
        <Route path="/add-event" element={<CreatedAdventure />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/adventure/:_id" element={<Adventure />} />
        <Route path="/create" element={<Create />} />
        <Route path="" element={<h1>404: Oops!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
