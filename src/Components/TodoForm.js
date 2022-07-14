import React from 'react';


class TodoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inpV: '',
    }
  }

  btnSubmit (e) {
    e.preventDefault()
    this.props.addTodo(this.state.inpV)
    this.setState({ inpV: '' });
  }

  btnChange (e) {
    this.setState({
      inpV: e
    });
  }

  keyPressInp (e) {
    if (e.key === 'Enter') this.btnSubmit()
  }

  render() { 
    return (
      <>
        <form onSubmit={(e) => this.btnSubmit(e)}>
          <input type="text" value={this.state.inpV} onChange={(e) => this.btnChange(e.target.value)} onKeyPress={(e) => this.keyPressInp(e)} placeholder={'Your note...'} />
          <button>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default TodoForm;