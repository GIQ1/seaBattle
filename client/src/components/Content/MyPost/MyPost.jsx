import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return <div>
        <div> 
        <textarea></textarea>
        <button>ADD </button>
        </div>
        <Post number={1}/>
        <Post number={2}/>
        <Post number={3}/>
        <Post number={4}/>
        <Post number={5}/>
    </div>

}
export default MyPost;