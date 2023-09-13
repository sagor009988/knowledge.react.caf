import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-4'>
            <h1 className='text-4xl font-bold '>Knowledge-React-cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;