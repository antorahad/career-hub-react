import { useEffect } from "react";
import { useState } from "react";
import Fjob from "./Fjob";

const Featured = () => {
    const [dataLength, setDataLength] = useState(4);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then (data => setJobs(data));
    }, [])
    return (
        <>
            <section className="py-[50px]">
                <div className="my-[15px]">
                    <h1 className="text-center text-5xl font-bold">Featured Jobs</h1>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {
                        jobs.slice(0, dataLength).map(job => <Fjob key={job.id} job={job}></Fjob>)
                    }
                </div>
                <div className={dataLength === jobs.length && 'hidden'}>
                <center className="mt-[25px]">
                    <button onClick={() => {setDataLength(jobs.length)}} className="btn btn-primary">See All jobs</button>
                </center>
                </div>
            </section>   
        </>
    );
};

export default Featured;