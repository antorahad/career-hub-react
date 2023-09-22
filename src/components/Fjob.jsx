const Fjob = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="bg-slate-50 p-5 rounded-md border-2 space-y-3">
            <div>
                <img src={logo} alt="" />
            </div>
            <h1>{job_title}</h1>
            <p>{company_name}</p>
            <div>
            <span className="badge rounded-md p-5 badge-ghost">{remote_or_onsite}</span>
            <span className="badge rounded-md p-5 badge-ghost ml-2">{job_type}</span>
            </div>
            <p>{location}</p>
            <p>{salary}</p>
            <div>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default Fjob;