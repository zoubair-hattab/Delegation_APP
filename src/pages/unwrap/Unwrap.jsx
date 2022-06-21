import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import "./unwrap.css";

const Unwrap = () => {
  return (
    <>
      <Navbar />
      <div className="unwrap">
        <div className="left">
          <SideBar />
        </div>

        <div className="right">
          <div className="wrap">
            <span className="text"> Wrap</span>
            <input type="text" placeholder="Wrap your SGB"  className="inputWrap"/>
            <button className="btnWrap">Wrap</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unwrap;
