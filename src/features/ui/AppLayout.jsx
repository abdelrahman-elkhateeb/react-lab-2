import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";
function AppLayout() {
  return (
    <div className="container mx-auto grid h-screen grid-rows-[auto_1fr_auto]">
      <NavBar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
