import Bookmark from "./Bookmark/Bookmark";


const Booksmarks = ({bookmarks,readTime}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 font-bold text-2xl ml-5 mt-10 bg-slate-300 text-center rounded-lg p-4">
            <h2 className="p-4 mb-5 bg-yellow-50 ">Spent time on read:{readTime}</h2> <hr />
            <h2>Bookmarks used:{bookmarks.length}</h2> 
            <hr />
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Booksmarks;