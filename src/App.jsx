import React from 'react';
import Todo1 from './Components/Todo1'
import TodoForm from './Components/TodoForm.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home'



export default class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        {/* <ToastContainer /> */}
      </>
    )
  }
}