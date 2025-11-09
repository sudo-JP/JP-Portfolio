import './NavBar.css'

function NavBar() {
    return (
        <header className='header'>
            <nav className='nav'>
                <a href='/' id='jason'>Jason Phan</a>
                <ul >
                    <li>
                        <a href='/Home'>Home</a>
                    </li>
                    <li>
                        <a href='/About'>About Me</a>
                    </li>
                    <li>
                        <a href='/Projects'>Projects</a>
                    </li>
                    <li>
                        <a href='CV'>CV</a>
                    </li>
                    <li>
                        <a href='/Gym Schedule'>Gym Schedule</a>
                    </li>

                </ul>

            </nav>

        </header>
    );
}

export default NavBar;