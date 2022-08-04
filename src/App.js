import './App.css';
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/main/Msin";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path="/login" element={<LoginForm/>}/>
                <Route exact path="/" element={<Main/>}/>
            </Routes>

        </div>
    );
}

export default App;
