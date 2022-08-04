import "./Header.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === "true")
    const navigate = useNavigate()
    const logout = () => {
      localStorage.removeItem('isAuth')
        setIsAuth(false)
        navigate('/login')
    }
    return (
        <div className='header_main'>
            <div className='nav'>
                <div className='nav_right'>
                    <img src="./images/logo1.png" alt=""/>
                    <h3>Каналсервис</h3>
                </div>
                {isAuth &&
                <div className='nav_left'>
                    <h3>UserName</h3>
                    <img onClick={logout} style={{cursor:'pointer'}} src="./images/Frame1.png" alt=""/>
                </div>
                }
            </div>
        </div>
    )
}


export default Header