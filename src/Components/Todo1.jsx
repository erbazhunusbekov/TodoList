import React from 'react';


class Todo1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item
    return (
      <>
        <div>
          <span className={item.comp ? 'text' : ''} onClick={() => this.props.btnToggle(item.id)} key={item.id}>
            {item.text}
          </span>
          <button disabled={!item.comp ? true : false} onClick={() => this.props.btnDel(item.id)}>
            x
          </button>
        </div>
      </>
    );
  }
}

export default Todo1;