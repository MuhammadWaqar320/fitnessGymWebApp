import { useEffect } from "react";
//Redux
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { loadUser } from "./actions/auth";
import AdminDashboard from "./pages/adminDashboard";
import Alert from "./components/Alert";
import About from "./pages/About";
import AllChatUI from "./pages/allChatUI";
import { initializeApp } from "firebase/app";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import TrainerDashboardDashboard from "./pages/trainerDashboard";
import AllCustomer from "./pages/allCustomer";
import AllTrainer from "./pages/allTrainer";
import AllOrder from "./pages/allOrder";
import PaymentReport from "./pages/payment";
import AddTrainer from "./pages/addTrainer";
import AddProduct from "./pages/addProduct";
import ViewProfile from "./pages/viewProfile";
import ChangeProfile from "./pages/changeProfile";
import AddDiet from "./pages/addDiet";
import TrainerChat from "./pages/trainerChat";
import AllTrainerStudent from "./pages/allTrainerStudent";
import Appointment from "./pages/Appointment";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allcustomer">
            <AllCustomer />
          </Route>
          <Route path="/alltrainer">
            <AllTrainer />
          </Route>
          <Route path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/trainerpanel">
            <TrainerDashboardDashboard />
          </Route>
          <Route path="/viewProfile">
            <ViewProfile />
          </Route>
          <Route path="/changeProfile">
            <ChangeProfile />
          </Route>
          <Route path="/addDiet">
            <AddDiet />
          </Route>
          <Route path="/trainerChat">
            <TrainerChat />
          </Route>
          <Route path="/allTrainerStudent">
            <AllTrainerStudent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/addtrainer">
            <AddTrainer />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/allorder">
            <AllOrder />
          </Route>
          <Route path="/payment">
            <PaymentReport />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/allchat">
            <AllChatUI />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
