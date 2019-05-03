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
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = () => {
    // const { name, age, height } = this.state;
    this.props.addSmurfs({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <hr />
        {this.props.fetchingSmurf ? (
          <div> Getting Smurfs... </div>
        ) : (
          <div>
            {this.props.smurfs.map(smurfs => {
              return (
                <div key={smurfs.id}>
                  <h2> {smurfs.name}</h2>
                  <p>
                    <strong>Age: </strong>
                    {smurfs.age}
                  </p>
                  <p>
                    <strong>Height:</strong> {smurfs.height}
                  </p>
                </div>
              );
            })}
            <hr />
          </div>
        )}

        <div className="addSmurfForm">
          <h3>Add your new Smurf!</h3>
          <form>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name..."
            />
            <br />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Age..."
            />
            <br />
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
              placeholder="Height..."
            />
          </form>
          <br />
          <button onClick={() => this.addSmurf()} type="button">
            Add Smurf
          </button>
        </div>
      </div>
    );
  }
}

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
