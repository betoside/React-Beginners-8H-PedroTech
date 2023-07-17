import { Link } from 'react-router-dom';

export const Navbar = () => {

    return(
        <div>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/profile">Profile</Link> &nbsp;
            <Link to="/contact">Contact</Link>
        </div>
    );

}