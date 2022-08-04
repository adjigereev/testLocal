import './LoginForm.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate()
    const user = {
        login: 'testlogin',
        password: 123456
    }

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    if (localStorage.getItem('isAuth') === true){
        return navigate('/')
    }
    const handleForm = (e) => {
        e.preventDefault()
        if (login !== user.login && password !== user.password) {
            alert("Неверный пароль или логин ")
        }
        localStorage.setItem('isAuth', 'true')
        return navigate('/')
    }
    return (
        <div className='container position '>
            <div className='login_form '>
                <div className='form_title'>
                    <h4>Autorization</h4>
                </div>
                <form onSubmit={handleForm}>
                    <div className='form_block'>
                        <label>login</label>
                        <input onChange={e => setLogin(e.target.value)} type="text" className='form'/>
                    </div>
                    <div className='form_block'>
                        <label>password</label>
                        <input onChange={e => setPassword(e.target.value)} type="text" className='form'/>
                    </div>
                    <input type="submit" style={{display: 'none'}}/>
                </form>
            </div>
        </div>
    )
}
export default LoginForm