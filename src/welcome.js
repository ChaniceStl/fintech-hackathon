import React from 'react'
import {Link} from 'react-router'
// import userObj from './src/test-api-obj';

var Welcome = React.createClass({
	getInitialState(){
		return({userName:"Linda James"})
	},

	render(){
		return (
			<div>
				<h1>Welcome Back {this.state.userName}</h1>
				<h1>How's Life....</h1>
				<p>here we will give a brief description about why they are on this page<span />
					And have simple description in the button innerhtml to convey the product that pertain <span/>
					And that will send them to the particular product that best suits
				</p>
				<Link to="/schedule"><button>product info 1</button></Link>
				<br />
				<Link to="/schedule"><button>product info 2</button></Link>
				<br />
				<Link to="/schedule"><button>product info 3</button></Link>
				<br />
					<Link to="/schedule"><button>product info 4</button></Link>
			</div>
			)
		}
})

export default Welcome