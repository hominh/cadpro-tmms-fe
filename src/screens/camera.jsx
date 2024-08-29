import { HR, Sidebar, Table, Select, Button, TextInput, Drawer, Label, Radio, Checkbox, Modal, Textarea } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MapContainer, TileLayer, useMap, } from 'react-leaflet'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import camfixed from '../assets/cam-fixed.png';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Camera() {
	const [showFormAddCamera, setShowFormAddCamera] = useState(false);
	const handleCloseFormAddCamera = () => setShowFormAddCamera(false);
	const onShowFormAddCamera = () => setShowFormAddCamera(true);
	const [centerMap, setCenterMap] = useState([10.502307, 107.169205]);
	const [positionMap1, setPositionMap1] = useState([10.502307, 107.169205]);
	const [openModalDeleteCamera, setOpenModalDeleteCamera] = useState(false);
	const [classNameDrawer, setClassNameDrawer] = useState('');
	const ResizeMap = () => {
		const map = useMap();
		map._onResize();
		return null;
	};
	const customIcon = new Icon({
		iconUrl: camfixed,
		iconSize: [24, 16]
	});
	const handleWidthDrawer = () => {
		if (isMobile) {
      setClassNameDrawer('right-0 top-0 h-screen w-full transform-none');
    }
    else {
      setClassNameDrawer('right-0 top-0 h-screen w-3/5 transform-none');
    }
	};
	useEffect(() => {
    handleWidthDrawer();
  }, []);
	return (
		<>
			<div>
				<HR className="my-0" />
			</div>
			<Modal
				theme={{
					header: {
						base: 'flex items-start justify-between rounded-t p-5'
					}
				}}
				size="md" dismissible show={openModalDeleteCamera} onClose={() => setOpenModalDeleteCamera(false)}>
				<Modal.Header />
				<Modal.Body>
					<div className="flex flex-col">
						<div className="flex justify-center items-center">
							<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="exclamation-outline">
									<g id="Vector">
										<path d="M24.5 48C19.7533 48 15.1131 46.5924 11.1663 43.9553C7.21954 41.3181 4.1434 37.5698 2.3269 33.1844C0.510399 28.799 0.0351188 23.9734 0.961164 19.3178C1.88721 14.6623 4.17299 10.3859 7.52945 7.02945C10.8859 3.67299 15.1623 1.38721 19.8178 0.461164C24.4734 -0.464881 29.299 0.0103988 33.6844 1.8269C38.0698 3.6434 41.8181 6.71954 44.4553 10.6663C47.0924 14.6131 48.5 19.2533 48.5 24C48.493 30.3631 45.9622 36.4635 41.4628 40.9628C36.9635 45.4622 30.8631 47.993 24.5 48ZM24.5 4.80001C20.7026 4.80001 16.9905 5.92607 13.8331 8.03579C10.6756 10.1455 8.21473 13.1441 6.76152 16.6525C5.30832 20.1608 4.9281 24.0213 5.66893 27.7457C6.40977 31.4702 8.23839 34.8913 10.9236 37.5765C13.6087 40.2616 17.0298 42.0902 20.7543 42.8311C24.4787 43.5719 28.3392 43.1917 31.8475 41.7385C35.3559 40.2853 38.3545 37.8244 40.4642 34.667C42.5739 31.5095 43.7 27.7974 43.7 24C43.6943 18.9096 41.6696 14.0293 38.0701 10.4299C34.4707 6.83041 29.5904 4.80573 24.5 4.80001Z" fill="#9CA3AF" />
										<path d="M24.5 28.8C23.8635 28.8 23.253 28.5471 22.803 28.0971C22.3529 27.647 22.1 27.0365 22.1 26.4V14.4C22.1 13.7635 22.3529 13.153 22.803 12.703C23.253 12.2529 23.8635 12 24.5 12C25.1365 12 25.747 12.2529 26.1971 12.703C26.6472 13.153 26.9 13.7635 26.9 14.4V26.4C26.9 27.0365 26.6472 27.647 26.1971 28.0971C25.747 28.5471 25.1365 28.8 24.5 28.8Z" fill="#9CA3AF" />
										<path d="M24.5 36C25.8255 36 26.9 34.9255 26.9 33.6C26.9 32.2745 25.8255 31.2 24.5 31.2C23.1745 31.2 22.1 32.2745 22.1 33.6C22.1 34.9255 23.1745 36 24.5 36Z" fill="#9CA3AF" />
									</g>
								</g>
							</svg>
						</div>
						<div className="flex justify-center items-center mt-4 text-base font-normal text-gray-500">
							Bạn có muốn xóa camera này?
						</div>
						<div className="flex justify-center items-center text-base font-normal text-gray-500">
							Hành động này không thể phục hồi
						</div>
						<div className="mt-5 flex justify-center items-center">
							<div className="flex flex-row gap-4">
								<div>
									<Button onClick={e => setOpenModalDeleteCamera(false)} size="xs" color="failure">Xóa</Button>
								</div>
								<div>
									<Button onClick={e => setOpenModalDeleteCamera(false)} size="xs" color="light">Không xóa</Button>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
			<Drawer
				className="md:h-full"
				backdrop={true}
				open={showFormAddCamera}
				onClose={handleCloseFormAddCamera}
				position="right"
				theme={{
					root: {
						base: 'fixed z-40 bg-white pb-4 pt-4 transition-transform dark:bg-gray-800',
						position: {
							right: {
								on: `${classNameDrawer}`
							}
						}
					},
					header: {
						inner: {
							titleText: 'mb-3 inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-400',
							titleIcon: 'hidden'
						}
					}
				}}
			>
				<div className="flex flex-row gap-1 pl-4 pr-4">
					<div>
						<Drawer.Header title="Thêm camera" />
					</div>
				</div>
				<HR className="mt-2 mb-0" />
				<Drawer.Items>
					<BrowserView>
						<div className="grid grid-cols-1 md:flex md:flex-row gap-4 pl-4">
							<div className="w-400 pt-4 flex flex-col h-screen">
								<div className="flex flex-col overflow-y-auto h-full max-h-screen">
									<div className="text-base font-semibold">
										Thông tin camera
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Vị trí" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															xs: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="xs"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Số hiệu nút" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															xs: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="xs"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Tên camera" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															xs: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="xs"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Loại camera" className="text-sm font-medium text-gray-900" />
										<Select
											theme={{
												field: {
													select: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											id="countries"
											className="mt-2"
											required>
											<option>United States</option>
											<option>Canada</option>
											<option>France</option>
											<option>Germany</option>
										</Select>
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Tủ camera" className="text-sm font-medium text-gray-900" />
										<Select
											theme={{
												field: {
													select: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											id="countries"
											className="mt-2"
											required>
											<option>United States</option>
											<option>Canada</option>
											<option>France</option>
											<option>Germany</option>
										</Select>
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Số hiệu camera" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="IP" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Danh sách số điện thoại" className="text-sm font-medium text-gray-900" />
										<Textarea id="comment" rows={3} />
									</div>
									<div className="md:mt-2 text-xs font-normal text-gray-500">
										Các số cách nhau bằng dấu |
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Danh sách email" className="text-sm font-medium text-gray-900" />
										<Textarea id="comment" rows={3} />
									</div>
									<div className="md:mt-2 text-xs font-normal text-gray-500">
										Các số cách nhau bằng dấu |
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Bật/Tắt cảnh báo" className="text-sm font-medium text-gray-900" />
									</div>
									<div className="flex flex-row gap-2">
										<div>
											<Radio
												theme={{
													root: 'h-4 w-4 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600'
												}}
												id="united-state" name="countries" value="USA" defaultChecked />
											<Label htmlFor="united-state" className="ml-1">Bật</Label>
										</div>
										<div>
											<Radio
												theme={{
													root: 'h-4 w-4 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600'
												}}
												id="united-state" name="countries" value="USA" defaultChecked />
											<Label htmlFor="united-state" className="ml-1">Tắt</Label>
										</div>
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Assign Role" className="text-sm font-medium text-gray-900" />
									</div>
									<div className="flex flex-row gap-4">
										<div className="flex flex-row gap-1">
											<div>
												<Checkbox
													color="blue"
													id="accept" defaultChecked />
											</div>
											<div className="mt-1">
												<Label htmlFor="accept" className="flex">Mất kết nối</Label>
											</div>

										</div>
										<div className="flex flex-row gap-1">
											<div>
												<Checkbox color="blue" id="accept" />
											</div>
											<div className="mt-1">
												<Label htmlFor="accept" className="flex">Ùn tắc</Label>
											</div>

										</div>
										<div className="flex flex-row gap-1">
											<div>
												<Checkbox color="blue" id="accept" />
											</div>
											<div className="mt-1">
												<Label htmlFor="accept" className="flex">Xe vi phạm</Label>
											</div>

										</div>
									</div>
									<div>
										<HR className="my-6" />
									</div>
									<div className="text-base font-semibold">
										Thiết lập camera trên bản đổ
									</div>
									<div className="md:mt-3">
										<Label htmlFor="fromdate" value="Mức xem bản đồ thấp nhất" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Mức xem bản đồ cao nhất" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Góc quay" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Kinh độ" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Vĩ độ" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div>
										<HR className="my-6" />
									</div>
									<div className="text-base font-semibold">
										Hình ảnh camera
									</div>
									<div className="md:mt-3">
										<Label htmlFor="fromdate" value="Ảnh H264" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Ảnh Motion JPEG" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="Ảnh Snapshot" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="URL quay quét" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
									<div className="md:mt-4">
										<Label htmlFor="fromdate" value="URL cài đặt" className="text-sm font-medium text-gray-900" />
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
														}
													}
												}
											}}
											sizing="md"
											id="plate"
											type="text"
											placeholder=""
											className="mt-2"
											required />
									</div>
								</div>
								<div className="mb-20">
									<div className="mt-4">
										<div className="flex flex-row gap-2.5">
											<div>
												<Button
													theme={{
														size: {
															sm: 'px-3 py-2 text-sm'
														}
													}}
													color="blue" size="sm">Thêm</Button>
											</div>
											<div>
												<Button
													theme={{
														size: {
															sm: 'px-3 py-2 text-sm'
														}
													}}
													color="light" size="sm">Bỏ qua</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex w-full min-h-screen">
								<MapContainer
									className="w-full min-h-screen" center={centerMap} zoom={12} scrollWheelZoom={true}>
									<ResizeMap />
									<TileLayer
										className="w-full"
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker position={positionMap1}
										icon={customIcon}
									>
										<Popup>
											A pretty CSS3 popup. <br /> Easily customizable.
										</Popup>
									</Marker>
								</MapContainer>
							</div>
						</div>
					</BrowserView>
					<MobileView>
						<div className="grid grid-cols-1 md:flex md:flex-row gap-4 pl-4 h-[150dvh]">
							<div className="pr-2 block pt-4  overflow-auto md:w-400 md:flex md:flex-col md:h-screen ">
								<div className="text-base font-semibold">
									Thông tin camera
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Vị trí" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														xs: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="xs"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Số hiệu nút" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														xs: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="xs"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Tên camera" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														xs: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="xs"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Loại camera" className="text-sm font-medium text-gray-900" />
									<Select
										theme={{
											field: {
												select: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										id="countries"
										className="mt-2"
										required>
										<option>United States</option>
										<option>Canada</option>
										<option>France</option>
										<option>Germany</option>
									</Select>
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Tủ camera" className="text-sm font-medium text-gray-900" />
									<Select
										theme={{
											field: {
												select: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										id="countries"
										className="mt-2"
										required>
										<option>United States</option>
										<option>Canada</option>
										<option>France</option>
										<option>Germany</option>
									</Select>
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Số hiệu camera" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="IP" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Danh sách số điện thoại" className="text-sm font-medium text-gray-900" />
									<Textarea id="comment" rows={3} />
								</div>
								<div className="mt-2 text-xs font-normal text-gray-500">
									Các số cách nhau bằng dấu |
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Danh sách email" className="text-sm font-medium text-gray-900" />
									<Textarea id="comment" rows={3} />
								</div>
								<div className="mt-2 text-xs font-normal text-gray-500">
									Các số cách nhau bằng dấu |
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Bật/Tắt cảnh báo" className="text-sm font-medium text-gray-900" />
								</div>
								<div className="flex flex-row gap-2">
									<div>
										<Radio
											theme={{
												root: 'h-4 w-4 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600'
											}}
											id="united-state" name="countries" value="USA" defaultChecked />
										<Label htmlFor="united-state" className="ml-1">Bật</Label>
									</div>
									<div>
										<Radio
											theme={{
												root: 'h-4 w-4 border border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600'
											}}
											id="united-state" name="countries" value="USA" defaultChecked />
										<Label htmlFor="united-state" className="ml-1">Tắt</Label>
									</div>
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Assign Role" className="text-sm font-medium text-gray-900" />
								</div>
								<div className="flex flex-row gap-4">
									<div className="flex flex-row gap-1">
										<div>
											<Checkbox
												color="blue"
												id="accept" defaultChecked />
										</div>
										<div className="mt-1">
											<Label htmlFor="accept" className="flex">Mất kết nối</Label>
										</div>

									</div>
									<div className="flex flex-row gap-1">
										<div>
											<Checkbox color="blue" id="accept" />
										</div>
										<div className="mt-1">
											<Label htmlFor="accept" className="flex">Ùn tắc</Label>
										</div>

									</div>
									<div className="flex flex-row gap-1">
										<div>
											<Checkbox color="blue" id="accept" />
										</div>
										<div className="mt-1">
											<Label htmlFor="accept" className="flex">Xe vi phạm</Label>
										</div>

									</div>
								</div>
								<div>
									<HR className="my-6" />
								</div>
								<div className="text-base font-semibold">
									Thiết lập camera trên bản đổ
								</div>
								<div className="mt-3">
									<Label htmlFor="fromdate" value="Mức xem bản đồ thấp nhất" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Mức xem bản đồ cao nhất" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Góc quay" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Kinh độ" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Vĩ độ" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div>
									<HR className="my-6" />
								</div>
								<div className="text-base font-semibold">
									Hình ảnh camera
								</div>
								<div className="mt-3">
									<Label htmlFor="fromdate" value="Ảnh H264" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Ảnh Motion JPEG" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="Ảnh Snapshot" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="URL quay quét" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<Label htmlFor="fromdate" value="URL cài đặt" className="text-sm font-medium text-gray-900" />
									<TextInput
										theme={{
											field: {
												input: {
													sizes: {
														md: 'pl-4 pr-4 pt-2 pb-2 text-sm'
													}
												}
											}
										}}
										sizing="md"
										id="plate"
										type="text"
										placeholder=""
										className="mt-2"
										required />
								</div>
								<div className="mt-4">
									<div className="flex flex-row gap-2.5">
										<div>
											<Button
												theme={{
													size: {
														sm: 'px-3 py-2 text-sm'
													}
												}}
												color="blue" size="sm">Thêm</Button>
										</div>
										<div>
											<Button
												theme={{
													size: {
														sm: 'px-3 py-2 text-sm'
													}
												}}
												color="light" size="sm">Bỏ qua</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="flex w-full min-h-screen">
								<MapContainer
									className="w-full min-h-screen" center={centerMap} zoom={12} scrollWheelZoom={true}>
									<ResizeMap />
									<TileLayer
										className="w-full"
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker position={positionMap1}
										icon={customIcon}
									>
										<Popup>
											A pretty CSS3 popup. <br /> Easily customizable.
										</Popup>
									</Marker>
								</MapContainer>
							</div>
						</div>
					</MobileView>
				</Drawer.Items>
			</Drawer>
			<section className="pb-3">
				<div className="grid grid-cols-1 md:grid-cols-12">
					<div className="pt-3 block md:col-span-2 md:h-full pl-2">
						<Sidebar
							className="w-auto mr-4"
							theme={{
								root: {
									inner: 'h-full overflow-y-auto overflow-x-hidden rounded md:pb-4 dark:bg-gray-800'
								},
								item: {
									base: 'flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
									content: {
										base: 'flex-1 whitespace-nowrap text-gray-900 font-medium text-sm',
									},
									label: 'text-gray-400 bg-inherit text-gray-400 font-medium text-sm'
								}
							}}
							aria-label="Quick filter">
							<Sidebar.Items>
								<Sidebar.ItemGroup>
									<Sidebar.Item key={1} className="">
										Camera
									</Sidebar.Item>
									<Sidebar.Item key={2} className="">
										Tủ camera
									</Sidebar.Item>
									<Sidebar.Item key={3} className="">
										Tủ thông tin
									</Sidebar.Item>
									<Sidebar.Item key={4} className="">
										Tủ nguồn
									</Sidebar.Item>
									<Sidebar.Item key={5} className="">
										Tủ điều khiển
									</Sidebar.Item>
									<Sidebar.Item key={6} className="">
										Đèn tín hiệu giao thông
									</Sidebar.Item>
									<Sidebar.Item key={7} className="">
										Điểm đếm xe
									</Sidebar.Item>
									<Sidebar.Item key={8} className="">
										Khu vực
									</Sidebar.Item>
									<Sidebar.Item key={9} className="">
										Kế hoạch tủ điều khiển
									</Sidebar.Item>
									<Sidebar.Item key={10} className="">
										Tuyến làn sóng xanh
									</Sidebar.Item>
									<Sidebar.Item key={11} className="">
										Chiến lược làn sóng xanh
									</Sidebar.Item>
									<Sidebar.Item key={12} className="">
										Kế hoạch tủ điều khiển
									</Sidebar.Item>
									<Sidebar.Item key={13} className="">
										Xem log hệ thống
									</Sidebar.Item>
									<Sidebar.Item key={14} className="">
										Quản lý người dùng
									</Sidebar.Item>
								</Sidebar.ItemGroup>
							</Sidebar.Items>
						</Sidebar>
					</div>
					<div className="pl-4  block md:col-span-10 md:h-full bg-gray-100 pb-2">
						<div className="flex flex-col pr-4">
							<div className="grid grid-cols-1 md:grid-cols-2 pb-4">
								<div className="	text-sl font-semibold pt-4">Camera</div>
								<div className="pt-2 md:justify-self-end">
									<Button
										onClick={e => onShowFormAddCamera()}
										theme={{
											base: 'group relative flex items-stretch justify-center text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none',
											size: {
												xs: 'px-3 py-2 text-sm'
											}
										}}
										color="blue"
										sizing="xs"
									>
										<svg className="mr-2 h-3 w-3 mt-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6 6.5H3Z" fill="white" />
											<path d="M6 3.5V6.5M6 6.5V9.5M6 6.5H9M6 6.5H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>Thêm camera</Button>
								</div>
							</div>
							<div className="pt-4  pb-4 bg-white rounded-md">
								<div className="flex flex-col">
									<div className="md:w-96 grid grid-cols-1 md:pl-4 md:pr-4">
										<TextInput
											theme={{
												field: {
													input: {
														sizes: {
															sm: 'py-3 px-4 leading-tight text-sm font-normal'
														}
													}
												}
											}}
											id="plate" type="text" icon={IoSearchOutline} placeholder="Tìm camera" sizing="sm" required />
									</div>
									<div className="pt-4 overflow-x-scroll">
										<Table
											className=""
											theme={{
												head: {
													cell: {
														base: 'bg-gray-50 px-4 py-4 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700'
													}
												},
												body: {
													cell: {
														base: 'px-4 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg'
													}
												}
											}}
										>
											<Table.Head className="font-semibold text-xs text-gr uppercase ">
												<Table.HeadCell className="sticky left-0">vị trí</Table.HeadCell>
												<Table.HeadCell className="">số hiệu nút</Table.HeadCell>
												<Table.HeadCell className="">loạicamera</Table.HeadCell>
												<Table.HeadCell className="">số hiệu</Table.HeadCell>
												<Table.HeadCell className="">ip</Table.HeadCell>
												<Table.HeadCell className="">url quay quét</Table.HeadCell>
												<Table.HeadCell className="">url cài đặt</Table.HeadCell>
												<Table.HeadCell className="">góc quay</Table.HeadCell>
												<Table.HeadCell className="">min zoom</Table.HeadCell>
												<Table.HeadCell className="">max zoom</Table.HeadCell>
												<Table.HeadCell className="">cảnh báo</Table.HeadCell>
												<Table.HeadCell className="">Danh sách điện thoại</Table.HeadCell>
												<Table.HeadCell className="">danh sách email</Table.HeadCell>
												<Table.HeadCell className="">Mất kết nối</Table.HeadCell>
												<Table.HeadCell className="">Ùn tắc</Table.HeadCell>
												<Table.HeadCell className="sticky right-0">Hành động</Table.HeadCell>
											</Table.Head>
											<Table.Body className="divide-y whitespace-nowrap	">
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	onClick={e => onShowFormAddCamera()}
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	onClick={e => setOpenModalDeleteCamera(true)}
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	onClick={e => onShowFormAddCamera()}
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	onClick={e => onShowFormAddCamera()}
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	onClick={e => onShowFormAddCamera()}
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	onClick={e => onShowFormAddCamera()}
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
												<Table.Row>
													<Table.Cell className="sticky left-0 whitespace-nowrap bg-white"><p className="text-sm text-gray-900 font-normal">Trạm kiểm soát tải trọng xe_Km39_QL51</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bắt vi phạm</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">NC001</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">http://10.8.1.78:25469/camera_pantilt?</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">/QS1NC001/</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">150</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">1</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">19</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">Bật</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-semibold">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
													<Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
														<div className="flex flex-row gap-6">
															<div>
																<Button size="sm"
																	color="blue"
																	theme={{
																		color: {
																			blue: 'border border-transparent bg-white text-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-1">
																		<path d="M14.1798 18.1876C14.1798 18.2349 14.162 18.2802 14.1303 18.3136C14.0986 18.347 14.0555 18.3658 14.0107 18.3658H2.19483C2.14997 18.3658 2.10695 18.347 2.07523 18.3136C2.04351 18.2802 2.02569 18.2349 2.02569 18.1876V5.73878C2.02569 5.69152 2.04351 5.64619 2.07523 5.61277C2.10695 5.57935 2.14997 5.56058 2.19483 5.56058H9.46301L11.4887 3.42638H2.19483C1.61289 3.42694 1.05494 3.67075 0.643444 4.10429C0.231949 4.53783 0.000536352 5.12567 0 5.73878V18.1876C0.000536352 18.8007 0.231949 19.3885 0.643444 19.8221C1.05494 20.2556 1.61289 20.4994 2.19483 20.5H14.0107C14.5926 20.4994 15.1506 20.2556 15.5621 19.8221C15.9736 19.3885 16.205 18.8007 16.2055 18.1876V10.5301L14.1798 12.6643V18.1876Z" fill="#1C64F2" />
																		<path d="M19.1063 1.4373C18.5365 0.837147 17.7638 0.5 16.9581 0.5C16.1523 0.5 15.3796 0.837147 14.8098 1.4373L6.9309 9.73721C6.78968 9.88625 6.69347 10.076 6.65439 10.2825L5.93831 14.0558C5.90827 14.2108 5.91134 14.371 5.94729 14.5246C5.98325 14.6783 6.0512 14.8216 6.14621 14.9442C6.24122 15.0667 6.36092 15.1655 6.49664 15.2333C6.63235 15.3012 6.78069 15.3363 6.9309 15.3363C6.99887 15.3361 7.06667 15.3293 7.13347 15.316L10.7139 14.5616C10.91 14.5201 11.0901 14.4184 11.2314 14.2692L19.1093 5.96928C19.392 5.67171 19.6161 5.31835 19.7689 4.9294C19.9218 4.54046 20.0003 4.12358 20 3.70262C19.9997 3.28167 19.9206 2.86491 19.7673 2.47619C19.6139 2.08748 19.3893 1.73444 19.1063 1.4373ZM17.6741 2.94618C17.7683 3.04529 17.843 3.16297 17.894 3.29252C17.945 3.42206 17.9712 3.56092 17.9712 3.70115C17.9712 3.84139 17.945 3.98025 17.894 4.10979C17.843 4.23933 17.7683 4.35702 17.6741 4.45613L17.1313 5.02703L15.6991 3.51815L16.242 2.94618C16.4319 2.74613 16.6895 2.63375 16.9581 2.63375C17.2266 2.63375 17.4842 2.74613 17.6741 2.94618ZM10.013 12.5277L8.22227 12.9054L8.58082 11.0177L14.2669 5.02703L15.6991 6.53591L10.013 12.5277Z" fill="#1C64F2" />
																	</svg>
																	Sửa
																</Button>
															</div>
															<div>
																<Button size="sm"
																	color="red"
																	theme={{
																		color: {
																			red: 'border border-transparent bg-white text-red-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
																		},
																		size: {
																			sm: 'py-1.5 text-sm'
																		}
																	}}
																>
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
																		<path d="M18.1481 4.71053H14.074V2.60526C14.074 2.04691 13.8594 1.51143 13.4774 1.11662C13.0953 0.721804 12.5772 0.5 12.037 0.5H7.96288C7.42263 0.5 6.9045 0.721804 6.52248 1.11662C6.14046 1.51143 5.92584 2.04691 5.92584 2.60526V4.71053H1.85177C1.58164 4.71053 1.32258 4.82143 1.13157 5.01884C0.94056 5.21624 0.833252 5.48398 0.833252 5.76316C0.833252 6.04233 0.94056 6.31007 1.13157 6.50748C1.32258 6.70489 1.58164 6.81579 1.85177 6.81579H2.87029V18.3947C2.87029 18.9531 3.0849 19.4886 3.46692 19.8834C3.84894 20.2782 4.36707 20.5 4.90733 20.5H15.0925C15.6328 20.5 16.1509 20.2782 16.5329 19.8834C16.9149 19.4886 17.1295 18.9531 17.1295 18.3947V6.81579H18.1481C18.4182 6.81579 18.6773 6.70489 18.8683 6.50748C19.0593 6.31007 19.1666 6.04233 19.1666 5.76316C19.1666 5.48398 19.0593 5.21624 18.8683 5.01884C18.6773 4.82143 18.4182 4.71053 18.1481 4.71053ZM7.96288 2.60526H12.037V4.71053H7.96288V2.60526ZM15.0925 18.3947H4.90733V6.81579H15.0925V18.3947Z" fill="#E02424" />
																		<path d="M7.96288 7.86842C7.69275 7.86842 7.43369 7.97932 7.24268 8.17673C7.05167 8.37414 6.94436 8.64188 6.94436 8.92105V16.2895C6.94436 16.5686 7.05167 16.8364 7.24268 17.0338C7.43369 17.2312 7.69275 17.3421 7.96288 17.3421C8.23301 17.3421 8.49207 17.2312 8.68308 17.0338C8.87409 16.8364 8.9814 16.5686 8.9814 16.2895V8.92105C8.9814 8.64188 8.87409 8.37414 8.68308 8.17673C8.49207 7.97932 8.23301 7.86842 7.96288 7.86842Z" fill="#E02424" />
																		<path d="M12.037 7.86842C11.7668 7.86842 11.5078 7.97932 11.3168 8.17673C11.1257 8.37414 11.0184 8.64188 11.0184 8.92105V16.2895C11.0184 16.5686 11.1257 16.8364 11.3168 17.0338C11.5078 17.2312 11.7668 17.3421 12.037 17.3421C12.3071 17.3421 12.5661 17.2312 12.7572 17.0338C12.9482 16.8364 13.0555 16.5686 13.0555 16.2895V8.92105C13.0555 8.64188 12.9482 8.37414 12.7572 8.17673C12.5661 7.97932 12.3071 7.86842 12.037 7.86842Z" fill="#E02424" />
																	</svg>
																	Xóa
																</Button>
															</div>
														</div>
													</Table.Cell>
												</Table.Row>
											</Table.Body>
										</Table>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}