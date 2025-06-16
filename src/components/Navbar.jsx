import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from './redux/features/sidebar/sidebarSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationPopup from '../popup/ConfirmationPopup';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('auth_token'); 
    setShowPopup(false);
    navigate('/auth'); 
  };

  return (
    <>
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
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={() => setShowPopup(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {showPopup && (
        <ConfirmationPopup
          onConfirm={handleLogout}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Navbar;
