import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import Firebase from "firebase";
class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    const myitems = Firebase.database().ref("Documents");
    myitems.on("value",datasnap=>{
      console.log(datasnap.val()
    )}
    )
    this.getUserData();
  }
  render()
  {
    <React.Fragment>
        <p id="myitems"></p>
      </React.Fragment>
  }
}
function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
