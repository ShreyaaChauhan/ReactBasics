// import the react ad reactdon libraries
import React from 'react';
import ReactDOM from 'react-dom';
//Create a react component
function getButtonText() {
    return 'Click on me!';
}
 const App = () => {
    //different types of variaables JSX can represent
    const buttonNumber = 12345;
    const buttonText = "Click Me";
    const buttonTwoString = "hi" + "there"; 
    const buttonTextObject = { text: 'Click me' }; 
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style= {{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
            <br/>
            <button>
                {getButtonText()}
            </button>
            <br/>
            <button>
                {buttonNumber}
            </button>
            <br/>
            <button>
                {buttonTwoString}
            </button>
            <br/>
            <button style = {style}>
                {buttonTextObject.text}
            </button>
        </div>
    );
 };

//take the react component and show it on th screen

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);