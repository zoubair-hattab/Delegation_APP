import './navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
        <h1 className='logo'>Lena Instruments</h1>
        <ul className='navList'>
            <li>Wrap</li>
            <li>Delegate</li>
            <li>UnWrap</li>
            <li>Your Delegate</li>
        </ul>
        <div className='wrapper'>
            <span className='link'></span>
            <span className='link'></span>
            <span className='link'></span>

        </div>
    </div>
  )
}

export default Navbar