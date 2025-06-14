import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen">
        <Navbar />
        <main className="p-4 bg-[#0f172a] text-white overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
