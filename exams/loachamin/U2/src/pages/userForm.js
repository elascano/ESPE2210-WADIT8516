import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headboard from "../components/headboard";
import UserForm from "../components/userForm";
export default class usuarios extends Component {
  render() {
    return (
      <div>
        <Headboard />
        <UserForm />
      </div>
    );
  }
}
