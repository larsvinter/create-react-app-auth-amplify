import React, { Component } from "react";
import logo from "./logo.svg";
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import LoanForm from "./LoanForm";
import "bootstrap/dist/css/bootstrap.min.css";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoanForm />
      </div>
    );
  }
}

//export default withAuthenticator(App, true);
export default App;
