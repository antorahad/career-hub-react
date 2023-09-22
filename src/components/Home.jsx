import Banner from "./Banner";
import Categorylist from "./Categorylist";
import Featured from "./Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorylist></Categorylist>
            <Featured></Featured>
        </div>
    );
};

export default Home;