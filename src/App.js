import React, { Component } from "react";
// import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import Navbar from "react-bootstrap/Navbar";
import aws_exports from "./aws-exports";
import LoanForm from "./LoanForm";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Personal Loans Contracts
          </Navbar.Brand>
        </Navbar>
        <LoanForm />
      </div>
    );
  }
}

//export default withAuthenticator(App, true);
export default App;
