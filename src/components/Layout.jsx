import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
		<div className="container mx-auto max-w-full">
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</div>
	);
}