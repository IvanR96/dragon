import _ from "lodash";
import './style.css';

const component = () =>{
    const section = document.getElementById("content");

    const title = document.createElement('h1');

    title.textContent = "Welcome to Webpack";

    section.appendChild(title);


    return component;

};

document.body.appendChild(component());