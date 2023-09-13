import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-3/4 font-bold text-2xl">
            <h1>Blog : {blogs.length}</h1>
            
        </div>
    );
};

export default Blogs;