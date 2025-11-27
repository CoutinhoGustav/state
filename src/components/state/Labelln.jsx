import React from "react";

export default class Labelln extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: props.texto,
    };
  }

  render() {
    return (
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        {this.state.valor}
      </h1>
    );
  }
}
