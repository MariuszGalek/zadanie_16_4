import React from 'react';

class Title extends React.Component {
	render() {
    	return (
        	<div>
            	<h1>TO-DO LIST</h1>
            	<p>You have <span>{this.props.listLength}</span> tasks left.</p>
        	</div>
    	);
    }
}

export default Title;