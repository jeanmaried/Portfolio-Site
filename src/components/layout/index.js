import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		);
  	}
}

export default Layout;