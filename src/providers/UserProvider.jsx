import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";
import Firebase from "firebase";


export const UserContext = createContext({ user: null });

class UserProvider extends React.Component {
  state = {
    user: null
  };

  
  
  componentDidMount() {
    const myitems = Firebase.database().ref("/Documents");
    myitems.on("value",datasnap=>{
      console.log(datasnap.val()
    )}
    )
   
  }

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
