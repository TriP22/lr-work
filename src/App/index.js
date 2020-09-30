import React from "react";
import Header from "./Components/MainLayout/Header/index";
import Footer from "./Components/MainLayout/Footer/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={Home} />
          {/* <Route component={NotFound}/>  */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
