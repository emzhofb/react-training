import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ikhda">Ikhda</Link>
        </li>
        <li>
          <Link to="/muhammad">Muhammad</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/ikhda" component={Ikhda} />
      <Route path="/muhammad" component={Muhammad} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Ikhda = () => (
  <div>
    <h2>Ikhda</h2>
    <br />
    <p>Ikhda adalah nama depan saya, ikhda sepengetahuan saya mempunyai arti salah satu</p>
  </div>
);

const Muhammad = () => (
  <div>
    <h2>Muhammad</h2>
    <br />
    <p>Muhammad adalah nama tengah, nama ini sangat bagus, saya bersyukur mempunyai nama ini dan arti dari nama ini adalah orang yang terpuji.</p>
  </div>
);
export default BasicExample