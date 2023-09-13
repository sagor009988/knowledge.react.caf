
import PropTypes from 'prop-types';
import { FaBeer} from 'react-icons/fa';

const Blog = ({blog,handleAddBookmarks,handleAddToRead}) => {
    const {title,cover_img,hashtag,author_img,read_time,author_name,post_date}=blog
    console.log(title);
    return (
        <div className='mb-10'>
            <img className='w-full rounded-lg mt-5' src={cover_img} alt="" />
            <div className='flex justify-between items-center my-5'>
                <div className='flex'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h2 className="text-2xl ">{author_name}</h2>
                        <h1>{post_date}</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <span>{read_time} Min read  </span>
                    <button onClick={()=>handleAddBookmarks(blog)}
                     className='text-red-600'>
                        <FaBeer></FaBeer></button>

                  
                    
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2> 
            <p>
            {
                hashtag.map((hashtags,idx)=><span  key={idx} > #{hashtags} </span>)
            }
            </p>

                
            <button 
            onClick={()=>handleAddToRead(read_time)}
            className='text-purple-800 text-lg underline my-5'>
                Mark As REad</button>

        </div>
        

    );
};
Blog.propTypes={
    blog : PropTypes.object.isRequired
}
export default Blog;