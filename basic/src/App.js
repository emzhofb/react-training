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
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={Abouts} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Abouts = ({ match }) => (
  <div>
    <h2>My Name</h2>
    <ul>
      <li>
        <Link to={`${match.url}/ikhda`}>first name</Link>
      </li>
      <li>
        <Link to={`${match.url}/muhammad`}>second name</Link>
      </li>
      <li>
        <Link to={`${match.url}/wildani`}>last name</Link>
      </li>
    </ul>

    {/* <Route path={`${match.url}/ikhda`} component={Ikhda} />
    <Route path={`${match.url}/muhammad`} component={Muhammad} />
    <Route path={`${match.url}/wildani`} component={Wildani} /> */}
    <Route path={`${match.url}/:nameId`} component={About} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a name.</h3>}
    />
  </div>
);

const About = ({ match }) => (
  <div>
    <h3>{match.params.nameId}</h3>
  </div>
);

// const Ikhda = () => {
//   <div>
//     <h2>Ikhda</h2>
//     <br />
//     <p>Ikhda adalah nama depan saya, ikhda sepengetahuan saya mempunyai arti salah satu</p>
//   </div>
// }

// const Muhammad = () => {
//   <div>
//     <h2>Muhammad</h2>
//     <br />
//     <p>Muhammad adalah nama tengah, nama ini sangat bagus, saya bersyukur mempunyai nama ini dan arti dari nama ini adalah orang yang terpuji.</p>
//   </div>
// }

// const Wildani = () => {
//   <div>
//     <h2>Wildani</h2>
//     <br />
//     <p>Dan Wildani adalah nama akhir saya, wildan sendiri berarti anak laki laki dari surga, dan tambahan huruf ya' dalam bahasa arab sendiri berati aku, jadi bisa di artikan anak laki laki ku dari surga</p>
//   </div>
// }

export default BasicExample