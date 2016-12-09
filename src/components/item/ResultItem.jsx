var React = require('react');

class ResultItem extends React.Component {
  render() {
    return(
      <li>{this.props.name}</li>
    )
  }
}

module.exports = ResultItem;
