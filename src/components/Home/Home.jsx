import axios from "axios";
import { Hero } from "../Hero/Hero";
import { JobCategory } from "../JobCategory/JobCategory";
import { useEffect, useState } from "react";
import { FeaturedJobs } from "../FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

export const Home = () => {
	

    const [data, setData] = useState([]);
//   const [smallData , setSmallData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("jobs.json");
      setData(result.data);
    };
    fetchData();
  }, []);
  const jobData = useLoaderData()
//   console.log(jobData)
  
const job =jobData[1]
// console.log(job)
	return (
		<>
		<Hero/>
		<div className="min-h-screen  bg-slate-100  ">
                <div className="flex justify-center  text-2xl text-bold">Job Category List 
  		</div>
		<p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
		
  		<div className="my-20  bg-slate-100">
			{
		data.map(job=><JobCategory key={job.id} job={job} />)
		}
 		</div>

		
        <p className="text-2xl font-bold">Feature Jobs</p>
        <p>Explore Thousand Of Job Opportunities World Wide</p>
		</div>
		
			<FeaturedJobs data={job}/>
			
			
			
			
			</>
	);
}

