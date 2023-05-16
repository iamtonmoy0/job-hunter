import { Link } from "react-router-dom";


const Card = (job) => {
	const {company_name,id,company_logo,job_title,remote_or_onsite,fulltime_or_parttime,location,salary} = job.job;
 
	// console.log(job)
	
	return (
		<>
		<a
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
		{company_name}
      </h3>

      <p className="mt-1 text-2xl  text-black">{job_title}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src={company_logo}
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
   <div className="badge  bg-purple-100 text-black">{remote_or_onsite} </div>
   <div className="badge  bg-purple-100 text-black ml-2">{fulltime_or_parttime} </div>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">{location}</dt>
     
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">{salary}</dt>
      
    </div>
  </dl>
   <Link to={`/featuredjobsDetails/${id}`} job={job.job} className='font-semibold text-blue-600  text-lg '> Details</Link>
</a>
		
		</>
	);
};

export default Card;