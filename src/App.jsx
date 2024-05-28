import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Contact from "./page/Contact";
import { ShopContextProvider } from "./context/RecipeContext";
import FoodDetails from "./component/FoodDetails";
import LogIn from "./page/LogIn";
import Registratin from "./page/Registratin";
import ProtectedRoute from "./source/ProtectedRoute";
import ProtectedInfo from "./source/ProtectedInfo";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(0);
  const [q, setQ] = useState("");
  const [more, setMore] = useState(10);

  return (
    <div className="flex flex-col justify-between bg-white h-screen overflow-auto">
      <ShopContextProvider foodData={foodData}>
        <Router>
          <Nav setQ={setQ} foodData={foodData} setFoodId={setFoodId} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  foodData={foodData}
                  setFoodId={setFoodId}
                  foodId={foodId}
                  q={q}
                  setQ={setQ}
                  setFoodData={setFoodData}
                  more={more}
                  setMore={setMore}
                />
              }
            />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/login" element={<LogIn />} />
              <Route path="/registration" element={<Registratin />} />
            </Route>
            <Route path="/" element={<ProtectedInfo />}>
              <Route path="/cart" element={<Cart foodData={foodData} />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
        {foodId !== 0 && <FoodDetails foodId={foodId} setFoodId={setFoodId} />}
      </ShopContextProvider>
    </div>
  );
}

export default App;
