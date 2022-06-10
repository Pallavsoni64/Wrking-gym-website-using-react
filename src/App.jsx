import React from "react";
import Form from "./Form";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
const App = () => {
    return (
        <><div className="Home">

            <Header />
            <div className="formContainer">
                <h1>Join the best gym of Jaipur now</h1>
                <Form />
            </div>
        </div>
            <About />
            <Contact />


        </>
    )
}
export default App;