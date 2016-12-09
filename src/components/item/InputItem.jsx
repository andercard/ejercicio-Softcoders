var React = require('react');

class InputItem extends React.Component {
  constructor(){
    super()
    this.state = ({
      valor: ""
    })
  }

  ejecutar(evento){
    console.log(evento.target.value);
    this.setState({
      valor: evento.target.value
    });
  }

  getValue(){
    return this.state.valor
  }

  render(){
    return(
      <input
        type="text"
        placeholder="Tarea"
        id="inputTarea"
        className="form-control col-xs-4"
        onChange={this.ejecutar.bind(this)}
        value={this.state.valor}
      />
    )
  }
}

module.exports = InputItem;
