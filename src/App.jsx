
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Booksmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([])

 const [readTime,setReadTime]=useState(0)


 const handleAddBookmarks=(blog)=>{
   const newbookmarks=[...bookmarks,blog]
  setBookmarks(newbookmarks)
 }

 const handleAddToRead=(time)=>{
  const newReadTime=readTime+time
     setReadTime(newReadTime)
 }
 

  return (
    <div className='max-w-screen-xl mx-auto sm:my-10'>
      
      <Header></Header>
      <div className='md:flex '>
      <Blogs handleAddBookmarks={handleAddBookmarks} handleAddToRead={handleAddToRead}></Blogs>
      <Booksmarks bookmarks={bookmarks} readTime={readTime}></Booksmarks>
      </div>
      
    </div>
  )
}

export default App
