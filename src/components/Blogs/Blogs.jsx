import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddBookmarks,handleAddToRead}) => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-3/4 font-bold text-2xl">
            <h1>Blog : {blogs.length}</h1>
            {
                blogs.map((blog,idx)=>
                <Blog 

                key={idx}
                handleAddBookmarks={handleAddBookmarks}
                handleAddToRead={handleAddToRead}
                 blog={blog}>
                   

                </Blog>)
            }
            
        </div>
    );
};

export default Blogs;