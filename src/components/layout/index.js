import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "./Header";

import '../../flex.css';

class Layout extends Component {

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