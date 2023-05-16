import { useLoaderData } from "react-router-dom";

const FeaturedJobsDetails = () => {
	
	const {id} = useLoaderData();
	const dd=JSON.stringify(id)
	console.log(dd)
	
	
	return (
		<div>
		<h2></h2>
		</div>
	);
};

export default FeaturedJobsDetails;