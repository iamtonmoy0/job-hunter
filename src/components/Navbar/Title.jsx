import { useLocation } from "react-router-dom";

const Title = () => {
	const {pathname} = useLocation();
	
	return (
		<>
			{ pathname === '/blogs' && <h2>blog page</h2>}
			{pathname === '/statistics' && <h2>statistics page</h2>}
		
		</>
	);
};

export default Title;