import React from "react";
import ReactDOM from "react-dom";
import Header from "emp_header/Header";
import Footer from "emp_footer/Footer";
import Container from "emp_container/Container";

import "./index.css";

const App = () => (
  <React.Fragment>
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
