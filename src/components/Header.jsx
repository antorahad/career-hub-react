import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between px-[20px] py-[30px] bg-slate-300">
                <div>
                    <Link className="text-[30px] font-bold" to={'/'}>Career Hub</Link>
                </div>

                <nav className="flex items-center gap-[20px]">
                    <Link className="text-[25px] font-semibold" to={'/'}>Home</Link>
                    <Link className="text-[25px] font-semibold" to={'/job'}>Applied Jobs</Link>
                    <Link className="text-[25px] font-semibold" to={'/blog'}>Blog</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;