import React from "react";
import { createRoot } from "react-dom/client";
import Header from "emp_header/Header";
import Footer from "emp_footer/Footer";
import Container from "emp_container/Container";

const App = () => (
    <div>
        <Header></Header>
        <Container></Container>
        <Footer></Footer>
    </div>
);

const globalApp = document.getElementById("app");

const root = createRoot(globalApp);

root.render(<App />);

export default App;
