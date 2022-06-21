import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sideBar/SideBar'
import "./wrap.css"

const Wrap = () => {
  return (
    <>
      <Navbar/>
    <div className='wrapperComponents'>
      <SideBar/>
        <div className='wrap'>
          <span> Wrap</span>
          <input type="text" placeholder="Wrap your SGB"/>
          <button className='btnWrap'>Wrap</button>
        </div>
    </div>
    </>

  )
}

export default Wrap