import React from 'react';
import ReactDOM from 'react-dom'

// Create a new react component.

const App = () => {
	return <div>Hi!</div>;
}

// Take the component's generated HTML and append to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));