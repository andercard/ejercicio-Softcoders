var React = require('react'),
    InputBox = require('./InputBox.jsx'),
    ResultBox = require('./ResultBox.jsx');


class Box extends React.Component {
  render(){
    return(
      <div className="container">
        <h1>Lista de Tareas</h1>
        <InputBox />
      </div>
    );
  }
}

module.exports = Box;
