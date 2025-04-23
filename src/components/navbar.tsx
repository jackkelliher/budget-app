import { Link } from "react-router-dom"

export function NavBar() {

    return (
        <>
            <div className='navbar'>
                <ul className='link-list'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/income">Income</Link>
                    </li>
                    <li>
                        <Link to="/payments">Payments</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;