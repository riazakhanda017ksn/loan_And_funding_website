import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../src/LogIn/Dashboard";
// import PrivateRoute from "../src/LogIn/PrivateRoute";
// import SingupMethod from "../src/LogIn/SingupMethod";
import "./App.css";
import AddNews from "./components/BackEndWork/AddNews/AddNews";
import AddReview from "./components/BackEndWork/AddReview/AddReview";
import ForgetPasswordSection from "./components/BackEndWork/ForgetPasswordSection/ForgetPasswordSection";
import MemberUpload from "./components/BackEndWork/MemberUoload/MemberUpload";
import ServiceUpload from "./components/BackEndWork/ServiceUpload/ServiceUpload";
import SignIn from "./components/BackEndWork/SignIn/SignIn";
import SignUp from "./components/BackEndWork/SignUp/SignUp";
import AboutUs from "./components/CustomPage/AboutUs/AboutUs";
import CustomLoan from "./components/CustomPage/CustomLoan";
import Funding from "./components/CustomPage/Funding/Funding";
import HomeInfo from "./components/Home/HomeInfo/HomeInfo";
import UserServiceSend from "./components/Home/UserServiceSend/UserServiceSend";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeInfo></HomeInfo>
        </Route>
        <Route  path="/home">
          <HomeInfo></HomeInfo>
        </Route>
        <Route path="/services-upload">
          <ServiceUpload></ServiceUpload>
        </Route>
        <Route path="/addReview">
          <AddReview></AddReview>
        </Route>
        <Route path="/addMember">
          <MemberUpload></MemberUpload>
        </Route>
        <Route path="/addNews">
          <AddNews></AddNews>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/signup">
        <SignIn></SignIn>
        </Route>
        <Route path="/forgetPassword">
         <ForgetPasswordSection></ForgetPasswordSection>
        </Route>
        <Route path="/user-login">
        <SignUp></SignUp>
        </Route>
        <Route path="/loan">
        <CustomLoan></CustomLoan>
        </Route>
        <Route path="/service">
        <CustomLoan></CustomLoan>
        </Route>
        <Route path="/about">
        <AboutUs></AboutUs>
        </Route>
        <Route path="/funding">
        <Funding></Funding>
        </Route>
        <Route path="/service/:_id">
        <UserServiceSend></UserServiceSend>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
