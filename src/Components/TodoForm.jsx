import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  inpV(e) {
    this.setState({
      value: e
    });
  }

  btnAdd1(e) {
    e.preventDefault()
    this.props.btnAdd(this.state.value)
    this.setState({
      value: ''
    });
  }

  keyPress(e) {
    if (e.key == 'Enter') this.btnAdd1()
  }

  render() {
    return (
      <>
        <form action="" onSubmit={(e) => this.btnAdd1(e)}>
          <input
            type="text"
            placeholder='Your todo'
            value={this.state.value}
            onChange={(e) => this.inpV(e.target.value)}
            onKeyPress={(e) => this.keyPress(e)}
          />
          <button>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default TodoForm;