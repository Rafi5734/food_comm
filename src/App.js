import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BackToTop from "./Components/Shared/BackToTop/BackToTop";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AboutUs from "./Optional/AboutUs";
import Faq from "./Optional/Faq";
import Reviews from "./Pages/AllReviews/Reviews/Reviews";
import CheckOut from "./Pages/CheckOut/CheckOut/CheckOut";
import AllItems from "./Pages/CoursesPage/AllItems/AllItems";
import ItemDetails from "./Pages/CoursesPage/ItemDetails/ItemDetails";
import SingleItem from "./Pages/CoursesPage/SingleItem/SingleItem";
import AddItem from "./Pages/Dashboard/AddCourse/AddItem";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AllTransaction from "./Pages/Dashboard/AllTransaction/AllTransaction";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import ManageItems from "./Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "./Pages/Dashboard/ManageItems/UpdateItem";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Users from "./Pages/Dashboard/Users/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import WishList from "./Pages/Dashboard/WishList/WishList";
import PaymentAll from "./Pages/Dashboard/Orders/PaymentAll/PaymentAll";

function App() {
  return (
    <div className="App">
      <BackToTop></BackToTop>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route path="myOrders" element={<Orders></Orders>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>

            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users></Users>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addItem"
              element={
                <RequireAdmin>
                  <AddItem />
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageOrders"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageItems"
              element={
                <RequireAdmin>
                  <ManageItems />
                </RequireAdmin>
              }
            ></Route>
            <Route path="manageItems">
              <Route
                path="update/:itemId"
                element={
                  <RequireAdmin>
                    <UpdateItem />
                  </RequireAdmin>
                }
              />
            </Route>
            <Route
              path="allTransaction"
              element={
                <RequireAdmin>
                  <AllTransaction></AllTransaction>
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="reviews" element={<Reviews />} />
          <Route path="allFoods" element={<AllItems />} />
          <Route path="wishlist" element={<WishList></WishList>}></Route>
          <Route path="singleItem" element={<SingleItem />} />
          <Route path="paymentall" element={<PaymentAll></PaymentAll>}></Route>
          <Route
            path="itemDetails/:serviceId"
            element={
              <RequireAuth>
                <ItemDetails />
              </RequireAuth>
            }
          />
          <Route
            path="checkOut/:serviceId"
            element={
              <RequireAuth>
                <CheckOut />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
