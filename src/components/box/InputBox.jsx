var React = require('react'),
    InputItem = require('../item/InputItem.jsx'),
    ResultBox = require('./ResultBox.jsx');

class InputBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      verificar: "",
      items: []
    }
  }

  componentWillMount(){
    console.log('antes');
  }

  componentDidMount(){
    console.log('despues');
  }

  ejecutar(evento){
    console.log(this.state.items.concat(this.refs.tarea.getValue()));
    if(this.refs.tarea.getValue() == ""){
      this.setState({
        verificar: 'Lo siento, pero esta vacio el campo'
      })
    }else {
      this.setState({
        verificar: 'todo okay!',
        items: this.state.items.concat(this.refs.tarea.getValue())
      })
    }
  }

  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="buscar">
            <InputItem ref="tarea" />
            <button type="button" className="btn btn-primary" id="btn" onClick={this.ejecutar.bind(this)} >
              Agregar
            </button>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="mensaje">{this.state.verificar}</div>
        </div>
        <div className="col-xs-12">
          <ResultBox items={this.state.items} />
        </div>
      </div>
    );
  }

}

module.exports = InputBox;
