

const Bookmark = ({bookmark}) => {
  const {title}=bookmark
    return (
        <div>
            <h1 className=" mt-5 p-4 bg-white rounded-md" >{title}</h1>
        </div>
    );
};

export default Bookmark;