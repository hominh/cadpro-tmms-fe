import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
		<div className="container mx-auto max-w-full md:h-screen">
      <div className="flex md:h-full flex-col md:overflow-y-auto">
			<Header />
			<Outlet />
      </div>
		</div>
	);
}