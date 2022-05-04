import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <nav aria-label="Main Navigation" role="navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/stocks">Stocks</Link>
            </nav>
        </div>
    )
};