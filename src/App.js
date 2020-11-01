import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./Components/ProfilePage";
import { UserContext } from "./providers/UserProvider";
import Firebase from "firebase";

class App extends React.Component {
componentDidMount() {
  const myitems = Firebase.database().ref("/");
  myitems.on("value",datasnap=>{
    console.log(datasnap.val()
  )}
  )
  this.getUserData();
}
render(){
return(
  <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Firebase Development Team</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.role}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Add new team member here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Role</label>
                    <input
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>
                Tutorial{" "}
                <a href="https://sebhastian.com/react-firebase-real-time-database-guide">
                  here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
);
}
function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
}

export default App;
