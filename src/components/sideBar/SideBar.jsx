import "./sideBar.css"
const SideBar = () => {
  return (
   
    <div className="containers">
      <div className="firstContent">
        <h1 className="firstTtile">Your Wallet</h1>
        <div className="address">
          <span className="title">ADDRESS</span>
          <div className="addressContent">0x23AE516493CD4D83128c1923098fbA112a63fb64</div>
        </div>
      </div>

      <div className="scondContent">
        <h1 className="secondTtile">COINS</h1>
        <div className="songBird">
          <img src="" alt="" />
          <span className="sonbirgName">SongBird</span>
          <span className="value">122</span>
          <span className="sbg">SGB</span>
        </div>
        <div className="WsongBird">
          <img src="" alt="" />
          <span className="WsonbirgName">SongBird</span>
          <span className="Wvalue">122</span>
          <span className="Wsbg">WSGB</span>
        </div>
      </div>
      <div className="thirdContent">
        <h1 className="thirdTtile">STATISTICS</h1>
        <span className="sonbirgName">Address for receive reward :</span>
        <input type="text" placeholder="Address for receive reward " />

        <div className="unclaimReward">
          <span className="sonbirgName">Unclaimed Rewards</span>
          <span className="value">0</span>
          <span className="sbg">SGB</span>
        </div>
        <div className="pendind">
          <span className="WsonbirgName">Pending Rewards</span>
          <span className="Wvalue">122</span>
          <span className="Wsbg">WSGB</span>
        </div>
      </div>
      <button className="claim">Claim Rwards</button>
    </div>
  );
};

export default SideBar;
