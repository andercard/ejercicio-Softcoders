var React = require('react'),
    ResultItem = require('../item/ResultItem.jsx');

class ResultBox extends React.Component {
  render(){
    return(
      <div className="row">
        <ul className="col-xs-5 lista-tarea">
          {this.props.items.map(function(valorActual,index,array) {
            return <ResultItem name={valorActual} key={index} />
          })}
        </ul>
      </div>
    );
  }
}

module.exports = ResultBox;
