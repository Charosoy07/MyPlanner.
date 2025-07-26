import { Link } from 'react-router'
const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white ">
            <div className="text-3xl font-bold text-yellow-400">
                My<span className='text-purple-500'>Planner</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
                <nav>
                    <ul className='flex gap-[15px]'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/planner">Planner</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header