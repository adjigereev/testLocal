import "./Block.css"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const Block = ({title,body,image}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        if (!localStorage?.getItem('isAuth') === true){
            navigate('/login')
        }
    },[])
    return (
        <div className=''>
            <div className='main_block'>
                <div className='block_header'>
                    <div className='block_image'>
                        <img src={image?.thumbnailUrl} alt=""/>
                    </div>
                    <div className='block_author'>
                        <h3>Author: UserName</h3>
                        <h4>Company: TestCompany</h4>
                    </div>
                </div>
                <div className='block_title'>
                    <h5> Title: {title}</h5>
                </div>
                <div className='block_description'>
                    <p>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Block


