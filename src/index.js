import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App {...store} />
    <div style={{
        position: "fixed",
        bottom : "0",
        backgroundColor: "#252525",
        height:"50px",
        width:"100%",
        color:"whitesmoke",
        textAlign:"center",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:"2"
      }}>
        <p>Developed by <a href="https://sathishwebdev.netlify.app" target="_blank" rel="noreferrer"> Sathish Kumar S</a>
      </p></div>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
