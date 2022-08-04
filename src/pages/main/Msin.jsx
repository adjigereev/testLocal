import Block from "../../components/Block/Block";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getElement, getImage} from "../../store/slice/post.slice";


const Main = () => {
    const dispatch = useDispatch()
    useEffect( ()=>{
        dispatch(getElement())
        dispatch(getImage())
    },[])
    const post = useSelector(state => state.postReduce.post)
    const images = useSelector(state => state.postReduce.image)


    return (
        <div className='container row'>
            { post?.slice(Math.random() * 10 + 5,16).map((item,index) => <Block image={images[index]} title={item.title} body={item.body} />)}
        </div>
    )
}
export default Main