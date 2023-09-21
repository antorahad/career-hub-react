import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="flex items-center justify-between px-[20px] py-[30px] bg-slate-300">
                <div>
                    <NavLink className="text-[30px] font-bold" to={'/'}>Career Hub</NavLink>
                </div>

                <nav className="flex items-center gap-[20px]">
                    <NavLink className="text-[25px] font-semibold" to={'/'}>Home</NavLink>
                    <NavLink className="text-[25px] font-semibold" to={'/job'}>Applied Jobs</NavLink>
                    <NavLink className="text-[25px] font-semibold" to={'/blog'}>Blog</NavLink>
                </nav>

                <button className="btn btn-primary">Click</button>
            </header>
        </div>
    );
};

export default Header;