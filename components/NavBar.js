import Image from 'next/image';
import Link from 'next/Link';
import logo from '../public/Logo.JPG';


const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/">
          <Image
            src={logo}
            alt="Blog Logo" 
            width={130}
            height={130}
            
          />
        </Link>
      </div>
      <div className="nav-item-container">
        <p>xxxx</p>
      </div>
    </nav>
  );
};

export default NavBar;
