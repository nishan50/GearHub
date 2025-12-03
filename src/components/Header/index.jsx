import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { IoSearch } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className='container'>
                    <div className="row">
                        <div className="logowrapper d-flex align-items-center col-sm-1 ">
                            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                        </div>
                        {/*header search bar */}
                        <div className='col-sm-10 d-flex align-items-center '>
                        <div classname="'headerSearch" ml-3 mg-3>
                            <input type="text" placeholder='Search Your Product Here' />
                            <button><IoSearch/></button>
                        </div>
                        </div>
                        
                    </div>
                </div>   
            </header>
        </>
    )
}

export default Header;
