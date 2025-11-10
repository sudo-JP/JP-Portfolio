import Navbar from '../Navbar/Navbar'
import '../../index.css'

function Header() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#1f1c33] 90 backdrop-blur-md shadow-md">
            <Navbar />
        </div>

    );

}

export default Header;
