import { Label, TextInput, Button, Checkbox } from "flowbite-react";
import { useState } from "react";

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<div className="flex flex-row gap-2">
							<div>
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
							</div>
							<div className="text-lg text-gray-900 font-semibold">CadPro TMMS</div>
						</div>
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Xin chào
						</h1>
						<form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="phone" value="Tên tài khoản" />
								</div>
								<TextInput id="username" type="text" placeholder="name@example.com" onChange={e => setUsername(e.target.value)} required />
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="password" value="Mật khẩu" />
								</div>
								<TextInput id="password" type="password" onChange={e => setPassword(e.target.value)} required />
							</div>
							<div className="flex items-center gap-2 justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5 mt-1">
										<Checkbox id="remember" />
									</div>
									<div className="ml-3">
										<Label className="text-sm font-medium text-gray-500" htmlFor="remember">Ghi nhớ</Label>
									</div>
								</div>
								<a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-600">Quên mật khẩu</a>
							</div>
							<Button type="submit" color="blue">Đăng nhập</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};