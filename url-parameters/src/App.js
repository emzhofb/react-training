import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ParamsExample = () => (
  <Router>
    <div>
    <h2>Names</h2>
      <ul>
        <li>
          <Link to='/minami'>Hamabe Minami</Link>
        </li>
        <li>
          <Link to='/nana'>Seino Nana</Link>
        </li>
        <li>
          <Link to='/nanjou'>Nanjou Yoshino</Link>
        </li>
        <li>
          <Link to='/taira'>Yuna Taira</Link>
        </li>
      </ul>

      <Route path="/:id" component={Child} />

      {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default ParamsExample;

// import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// const ParamsExample = () => {
//   <Router>
//     <div>
//       <h2>Names</h2>
//       <ul>
//         <li>
//           <Link to='/minami'>Hamabe Minami</Link>
//         </li>
//         <li>
//           <Link to='/nana'>Seino Nana</Link>
//         </li>
//         <li>
//           <Link to='/nanjou'>Nanjou Yoshino</Link>
//         </li>
//         <li>
//           <Link to='/taira'>Yuna Taira</Link>
//         </li>
//       </ul>

//       <Route
//         path='/:id'
//         component={Child}
//       />
//       <Route
//         path='/order/:direction(asc|desc)'
//         component={ComponentWithRegex}
//       />
//     </div>
//   </Router>
// }

// const Child = ({ match }) => {
//   <div>
//     <h3>ID: { match.params.id }</h3>
//   </div>
// }

// const ComponentWithRegex = ({ match }) => {
//   <div>
//     <h3>Only asc/desc are allowed: {match.params.direction}</h3>
//   </div>
// }

// export default ParamsExample