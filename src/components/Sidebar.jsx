
import { MdDashboard, MdPerson, MdBarChart, MdSettings } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar } from './redux/features/sidebar/sidebarSlice';
import { Link, useLocation } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";


const menuItems = [
    { icon: <MdDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <MdPerson size={20} />, label: 'Profile', path: '/profile' },
    { icon: <MdBarChart size={20} />, label: 'Reports', path: '/reports' },
    { icon: <MdSettings size={20} />, label: 'Settings', path: '/settings' },
    { icon: <FaShopify size={20} />, label: 'E-Commerce', path: '/e-commerce' },
];

const Sidebar = () => {
    const { isOpen } = useSelector((state) => state.sidebar);
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`${isOpen ? 'fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden' : 'hidden'}`}
                onClick={() => dispatch(closeSidebar())}
            />

            <aside
                className={`
          bg-[#111827] text-white h-screen p-4 fixed z-50 top-0 left-0 transition-all duration-300
          ${isOpen ? 'translate-x-0 w-56' : '-translate-x-full w-0'}
          md:translate-x-0 md:static lg:w-48 w-16 
        `}
            >
                <div className="text-xl font-bold">
                    <span className="hidden md:block lg:text-xl text-sm">Logo</span>
                    <span className="md:hidden text-center">Logo</span>
                </div>
                <nav className="flex flex-col gap-4 mt-4">
                    {menuItems.map((item, i) => (
                        <Link
                            to={item.path}
                            key={i}
                            onClick={() => dispatch(closeSidebar())}
                            className={`flex items-center gap-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer lg:w-40 ${location.pathname === item.path ? 'bg-gray-700' : ''
                                }`}
                        >
                            {item.icon}
                            <span className={`${isOpen ? "block" : "lg:block hidden"}`}>{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
