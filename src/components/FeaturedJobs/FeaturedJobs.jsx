import {  } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


export const FeaturedJobs = () => {
const [data, setData] = useState([]);
const [limit , setLimit] = useState(4)

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios("jobdata.json");
      setData(result.data);
      
    };
    fetchData();
  }, []);
//   console.log(data)


	
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 ">
				
		{
			data.slice(0, limit).map(job=> <Card key={job.id} job={job}></Card>)
		}
		<button onClick={() => setLimit(limit + 2)} className="bg-purple-400 rounded w-20 h-8 text-black justify-center ml-96">
        More
      </button>
			</div>
		</div>
	);
}


