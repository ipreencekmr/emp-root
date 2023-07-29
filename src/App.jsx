import React from "react";
import ReactDOM from "react-dom";
import Header from "emp_header/Header";
import Footer from "emp_footer/Footer";
import Container from "emp_container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const App = () => (
  <React.Fragment>
    <Header></Header>
    <Container></Container>
    <FontAwesomeIcon icon={faAtom}></FontAwesomeIcon>
    <Footer></Footer>
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
