import React, { useState } from "react";



//create your first component
const Home = () => {
	const [color, setColor] = useState(false)
	const handleClick = event => {
		setColor(current => !current)
	}

	

	return (
		<div className="text-center container d-flex align-items-center justify-content-center">
			<div className= {`redlight ${color ? 'activelight' : ''}`} onClick={handleClick}></div>
			<div className= {`yellowlight ${color ? 'activelight' : ''}`} onClick={handleClick}></div>
			<div className= {`greenlight ${color ? 'activelight' : ''}`} onClick={handleClick}></div>
		
		</div>
	);
};

export default Home;
