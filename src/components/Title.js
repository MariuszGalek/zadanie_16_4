import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	render() {
    	return (
        	<div className={style.appTitle}>
            	<h1>TO-DO LIST</h1>
            	<p>You have <span>{this.props.listLength}</span> tasks left.</p>
        	</div>
    	);
    }
}

export default Title;