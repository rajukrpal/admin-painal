// src/components/Navbar.jsx
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from './redux/features/sidebar/sidebarSlice';


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <header className="bg-[#1f2937] text-white flex justify-between items-center px-4 py-3 shadow">
      <div className="flex items-center gap-2">
        <FaBars
          className="md:hidden cursor-pointer"
          size={20}
          onClick={() => dispatch(toggleSidebar())}
        />
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <img src="https://i.pravatar.cc/32" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Navbar;
