

export const JobCategory = (job) => {
	const {jobs_available,logo,name}=job.job;
	

return (
		
	
	<div className="badge  bg-slate-100 ">
	<div className="card card-side  shadow-xl bg-purple-200  w-60" >
  <figure><img src={logo} className="h-20"/></figure>
  <div className="card-body text-black">
    <h2 className="card-title">{name}</h2>
    <p>{jobs_available} Jobs Available</p>
      </div>
</div>


	</div>
	



		
	);
}

