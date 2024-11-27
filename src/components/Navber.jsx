import {NavLink} from "react-router-dom";

const Navber = () => {
    return (
        <div>
            <header className='header'>
                <NavLink className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md '
                         to='/'><p className='blue-gradient_text'>AH</p></NavLink>
                <nav className='flex gap-7 text-lg font-medium'>
                    <NavLink to={'/about'} className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                        About
                    </NavLink>
                    <NavLink to={'/projects'}
                                        className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                </nav>
            </header>
        </div>
    );
};

export default Navber;