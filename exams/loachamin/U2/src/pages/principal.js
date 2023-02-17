import React, { Component } from "react";
import Headboard from "../components/headboard";
import Menu from "../components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
export default class principal extends Component {
  render() {
    return (
      <div>
        <div>
          <Headboard />
          <Menu />
        </div>
      </div>
    );
  }
}
