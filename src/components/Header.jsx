import { Navbar, Avatar } from "flowbite-react"
import { useLocation } from 'react-router-dom';
function Header() {
	return (
		<div className="pr-4 md:pr-2">
			<Navbar fluid rounded theme={{
				link: {
					active: {
						on: 'bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700',
						off: 'border-b border-gray-100 text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
					}
				},
				collapse: {
					list: '	mt-4 flex flex-col md:mt-0 md:flex-row md:text-sm md:font-medium'
				}
			}}>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link href="#" className="md:leading-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 33" fill="none">
							<g clipPath="url(#clip0_512_11382)">
								<path fillRule="evenodd" clipRule="evenodd" d="M20.6404 21.8474C29.0947 15.9014 33.8707 8.23942 31.3079 4.73383C28.745 1.22823 19.8139 3.20656 11.3596 9.15254C2.90527 15.0985 -1.87071 22.7605 0.692121 26.2661C3.25496 29.7717 12.1861 27.7934 20.6404 21.8474ZM18.8884 21.2591C25.9208 17.6168 30.2516 12.1193 28.5616 8.98019C26.8716 5.84107 19.8006 6.24902 12.7682 9.89137C5.73575 13.5337 1.40489 19.0312 3.09493 22.1703C4.78497 25.3094 11.8559 24.9015 18.8884 21.2591Z" fill="#0E3472" />
								<path d="M21.6196 7.26782H19V28.2678H24.75C20.837 20.0178 21.5326 10.8512 21.6196 7.26782Z" fill="#0E3472" />
							</g>
							<defs>
								<clipPath id="clip0_512_11382">
									<rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
								</clipPath>
							</defs>
						</svg>
					</Navbar.Link>
					<Navbar.Link className={`md:pl-8 md:pt-1.5 ${useLocation().pathname === "/dashboard" ? " bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700 nav-link active" : ""}`} href="/#dashboard">
						Trang chủ
					</Navbar.Link>
					<Navbar.Link href="/#map" className={`md:pl-4 md:pt-1.5 ${useLocation().pathname === "/map" ? " bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700 nav-link active" : ""}`}>Bản đồ</Navbar.Link>
					<Navbar.Link href="/#violation" className={`md:pl-4 md:pt-1.5 ${useLocation().pathname === "/violation" ? " bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700 nav-link active" : ""}`}>Vi phạm</Navbar.Link>
					<Navbar.Link href="/#camera" className={`md:pl-4 md:pt-1.5 ${useLocation().pathname === "/camera" ? " bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700 nav-link active" : ""}`}>Camera</Navbar.Link>
				</Navbar.Collapse>
				<div className="flex md:order-2">
					<div className="grid grid-cols-5 md:grid-cols-5 gap-4">
						<div className="mb-1 block col-span-1 pt-3.5 md:pt-2">
							<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.111 11.5862V9.69145C15.1118 8.41087 14.6241 7.1675 13.7267 6.16237C12.8293 5.15725 11.5747 4.44915 10.1658 4.15258C10.1765 4.11584 10.1849 4.07859 10.1908 4.041V1.55262C10.1908 1.27345 10.0654 1.00571 9.84212 0.808304C9.61886 0.610901 9.31606 0.5 9.00033 0.5C8.68459 0.5 8.38179 0.610901 8.15853 0.808304C7.93527 1.00571 7.80985 1.27345 7.80985 1.55262V4.041C7.81577 4.07859 7.82412 4.11584 7.83485 4.15258C6.42593 4.44915 5.17134 5.15725 4.27395 6.16237C3.37655 7.1675 2.88881 8.41087 2.88961 9.69145V11.5862C2.88961 14.0977 0.666992 14.7251 0.666992 15.9808C0.666992 16.605 0.666992 17.2366 1.30747 17.2366H16.6932C17.3337 17.2366 17.3337 16.605 17.3337 15.9808C17.3337 14.7251 15.111 14.0977 15.111 11.5862Z" fill="#6B7280" />
								<path d="M5.21818 18.2892C5.53399 18.945 6.06091 19.5043 6.73338 19.8973C7.40585 20.2904 8.19419 20.5 9.00033 20.5C9.80646 20.5 10.5948 20.2904 11.2673 19.8973C11.9397 19.5043 12.4667 18.945 12.7825 18.2892H5.21818Z" fill="#6B7280" />
							</svg>
						</div>
						<div className="mb-1 block col-span-1 pt-3.5 md:pt-2">
							<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.8889 8.27778H18.0478L17.2622 6.38111L17.8567 5.78556C18.065 5.57719 18.182 5.29463 18.182 5C18.182 4.70537 18.065 4.42281 17.8567 4.21444L16.2856 2.64333C16.0772 2.43503 15.7946 2.31802 15.5 2.31802C15.2054 2.31802 14.9228 2.43503 14.7144 2.64333L14.1189 3.23778L12.2222 2.45222V1.61111C12.2222 1.31643 12.1052 1.03381 11.8968 0.825437C11.6884 0.617063 11.4058 0.5 11.1111 0.5H8.88889C8.5942 0.5 8.31159 0.617063 8.10322 0.825437C7.89484 1.03381 7.77778 1.31643 7.77778 1.61111V2.45222L5.88111 3.23778L5.28556 2.64333C5.07719 2.43503 4.79463 2.31802 4.5 2.31802C4.20537 2.31802 3.92281 2.43503 3.71444 2.64333L2.14333 4.21444C1.93503 4.42281 1.81802 4.70537 1.81802 5C1.81802 5.29463 1.93503 5.57719 2.14333 5.78556L2.73889 6.38111L1.95222 8.27778H1.11111C0.816426 8.27778 0.533811 8.39484 0.325437 8.60322C0.117063 8.81159 0 9.0942 0 9.38889V11.6111C0 11.9058 0.117063 12.1884 0.325437 12.3968C0.533811 12.6052 0.816426 12.7222 1.11111 12.7222H1.95222C2.33111 13.6367 2.36 13.7044 2.73778 14.6189L2.14333 15.2144C1.93503 15.4228 1.81802 15.7054 1.81802 16C1.81802 16.2946 1.93503 16.5772 2.14333 16.7856L3.71444 18.3567C3.92281 18.565 4.20537 18.682 4.5 18.682C4.79463 18.682 5.07719 18.565 5.28556 18.3567L5.88111 17.7622L7.77778 18.5478V19.3889C7.77778 19.6836 7.89484 19.9662 8.10322 20.1746C8.31159 20.3829 8.5942 20.5 8.88889 20.5H11.1111C11.4058 20.5 11.6884 20.3829 11.8968 20.1746C12.1052 19.9662 12.2222 19.6836 12.2222 19.3889V18.5478L14.1189 17.7611L14.7144 18.3567C14.9228 18.565 15.2054 18.682 15.5 18.682C15.7946 18.682 16.0772 18.565 16.2856 18.3567L17.8567 16.7856C18.065 16.5772 18.182 16.2946 18.182 16C18.182 15.7054 18.065 15.4228 17.8567 15.2144L17.2622 14.6189L18.0478 12.7222H18.8889C19.1836 12.7222 19.4662 12.6052 19.6746 12.3968C19.8829 12.1884 20 11.9058 20 11.6111V9.38889C20 9.0942 19.8829 8.81159 19.6746 8.60322C19.4662 8.39484 19.1836 8.27778 18.8889 8.27778ZM10 14.9444C9.12097 14.9444 8.26169 14.6838 7.5308 14.1954C6.79991 13.7071 6.23026 13.0129 5.89387 12.2008C5.55748 11.3887 5.46946 10.4951 5.64095 9.63293C5.81244 8.77079 6.23574 7.97887 6.8573 7.3573C7.47887 6.73574 8.27079 6.31244 9.13293 6.14095C9.99507 5.96946 10.8887 6.05748 11.7008 6.39387C12.5129 6.73026 13.2071 7.29991 13.6954 8.0308C14.1838 8.76169 14.4444 9.62097 14.4444 10.5C14.4444 11.6787 13.9762 12.8092 13.1427 13.6427C12.3092 14.4762 11.1787 14.9444 10 14.9444Z" fill="#6B7280" />
							</svg>
						</div>
						<div className="mb-1 block col-span-1 pt-3.5 md:pt-2">
							<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 0.5C8.02219 0.5 6.08879 1.08649 4.4443 2.1853C2.79981 3.28412 1.51809 4.8459 0.761209 6.67316C0.00433284 8.50042 -0.1937 10.5111 0.192152 12.4509C0.578004 14.3907 1.53041 16.1725 2.92894 17.5711C4.32746 18.9696 6.10929 19.922 8.0491 20.3078C9.98891 20.6937 11.9996 20.4957 13.8268 19.7388C15.6541 18.9819 17.2159 17.7002 18.3147 16.0557C19.4135 14.4112 20 12.4778 20 10.5C19.9971 7.84873 18.9426 5.30688 17.0679 3.43215C15.1931 1.55741 12.6513 0.502912 10 0.5ZM10 16.5C9.80222 16.5 9.60888 16.4413 9.44443 16.3315C9.27998 16.2216 9.15181 16.0654 9.07612 15.8827C9.00044 15.7 8.98063 15.4989 9.01922 15.3049C9.0578 15.1109 9.15304 14.9327 9.2929 14.7929C9.43275 14.653 9.61093 14.5578 9.80491 14.5192C9.99889 14.4806 10.2 14.5004 10.3827 14.5761C10.5654 14.6518 10.7216 14.78 10.8315 14.9444C10.9414 15.1089 11 15.3022 11 15.5C11 15.7652 10.8946 16.0196 10.7071 16.2071C10.5196 16.3946 10.2652 16.5 10 16.5ZM11 11.966V12.5C11 12.7652 10.8946 13.0196 10.7071 13.2071C10.5196 13.3946 10.2652 13.5 10 13.5C9.73479 13.5 9.48043 13.3946 9.2929 13.2071C9.10536 13.0196 9 12.7652 9 12.5V11.082C8.99999 10.9473 9.02718 10.8141 9.07994 10.6902C9.13269 10.5663 9.20992 10.4543 9.307 10.361C9.40334 10.2671 9.51793 10.194 9.64367 10.1462C9.7694 10.0984 9.90362 10.0769 10.038 10.083C10.2313 10.09 10.4241 10.0579 10.6047 9.98854C10.7853 9.9192 10.95 9.81409 11.089 9.67951C11.228 9.54492 11.3383 9.38365 11.4134 9.20536C11.4885 9.02707 11.5268 8.83545 11.526 8.642C11.5414 8.24417 11.3981 7.85653 11.1277 7.56435C10.8572 7.27217 10.4818 7.09938 10.084 7.084C9.68618 7.06861 9.29854 7.2119 9.00636 7.48233C8.71417 7.75275 8.54139 8.12817 8.526 8.526C8.52284 8.65777 8.49329 8.78757 8.43909 8.90772C8.3849 9.02787 8.30717 9.13594 8.21049 9.22554C8.11381 9.31513 8.00015 9.38443 7.87623 9.42934C7.7523 9.47425 7.62063 9.49385 7.489 9.487C7.22425 9.47659 6.97446 9.36154 6.79446 9.16711C6.61447 8.97268 6.519 8.71476 6.529 8.45C6.55739 7.80694 6.76257 7.18417 7.12196 6.65017C7.48136 6.11616 7.98106 5.69161 8.5661 5.4232C9.15115 5.15478 9.79888 5.0529 10.4381 5.12876C11.0773 5.20462 11.6832 5.45528 12.1891 5.85318C12.6951 6.25107 13.0816 6.78079 13.306 7.38408C13.5304 7.98737 13.5841 8.64087 13.4612 9.2727C13.3383 9.90454 13.0435 10.4902 12.6093 10.9654C12.1751 11.4406 11.6182 11.7868 11 11.966Z" fill="#6B7280" />
							</svg>
						</div>
						<div className="mb-1 block col-span-1 pt-3.5 md:pt-2">
							<svg width="1" height="33" viewBox="0 0 1 33" fill="none" xmlns="http://www.w3.org/2000/svg">
								<line x1="0.5" y1="0.500004" x2="0.499716" y2="32.5" stroke="#E5E7EB" />
							</svg>
						</div>
						<div className="mb-1 block col-span-1 pt-3.5 md:pt-2">
							<Avatar className="w-6 h-6" placeholderInitials="PH" rounded />
						</div>
					</div>
				</div>
			</Navbar>
		</div>
	);
}
export default Header