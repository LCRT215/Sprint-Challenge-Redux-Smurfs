import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { getSmurfs, addSmurfs } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
// class App extends Component {
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     this.props.getSmurfs();
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS!</h1>
//         <p>
//           <strong>Name: </strong> {props.smurfs.name}
//         </p>
//         <p>
//           <strong>Age: </strong> {props.smurfs.age}
//         </p>
//         <p>
//           <strong>Height: </strong> {props.smurfs.height}
//         </p>
//       </div>
//     );
//   }
// }

const App = props => {
  console.log(smurfs);
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      console.log(smurfs)
      <p>
        <strong>Name: </strong> {props.smurfs.name}
      </p>
      <p>
        <strong>Age: </strong> {props.smurfs.age}
      </p>
      <p>
        <strong>Height: </strong> {props.smurfs.height}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurf: state.fetchingSmurf,
  addingSmurf: state.addingSmurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurfs }
)(App);
