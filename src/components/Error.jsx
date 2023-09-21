import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 className="text-5xl font-[800] text-center mt-[200px]"><span className="text-red-700">404</span> Page Not Found</h1>
            <center>
            <Link to={'/'}>
                <button className="btn btn-primary mt-[50px]">Go back</button>
            </Link>
            </center>
        </div>
    );
};

export default Error;