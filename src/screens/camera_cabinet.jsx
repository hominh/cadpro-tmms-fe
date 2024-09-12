import { HR, Table, Select, Button, TextInput, Drawer, Label, Radio, Checkbox, Modal, Textarea, Pagination, Toast } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SettingsMapContainer from "../components/MapContainer";
import SidebarSettings from "../components/SidebarSettings";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export default function CameraCabinet() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [showFormAddCameraCabinet, setShowFormAddCameraCabinet] = useState(false);
  const handleCloseFormAddCameraCabinet = () => setShowFormAddCameraCabinet(false);
  const onShowFormAddCameraCabinet = () => setShowFormAddCameraCabinet(true);
  const [showToastAddCameraCabinetSucess, setShowToastAddCameraCabinetSuccess] = useState(false);
  const [showToastDeleteCameraCabinetSuccess, setShowToastDeleteCameraCabinetSuccess] = useState(false);
  const [openModalDeleteCameraCabinet, setOpenModalDeleteCameraCabinet] = useState(false);
  const [classNameDrawer, setClassNameDrawer] = useState('');

  const [showDataTable, setShowDataTable] = useState(true);

  const addCameraCabinet = () => {
		setShowFormAddCameraCabinet(false);
		setShowToastAddCameraCabinetSuccess((state) => !state);
	};

  const deleteCameraCabinet = () => {
		setOpenModalDeleteCameraCabinet(false);
		setShowToastDeleteCameraCabinetSuccess((state) => !state);
	};

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
      {showToastAddCameraCabinetSucess && (
				<Toast
					theme={{
						root: {
							base: 'absolute top-20 left-1/2 transform -translate-x-1/2 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400'
						}
					}}
				>
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-green-500 dark:bg-green-800 dark:text-green-200">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.29303C16.8945 5.48056 16.9998 5.73487 16.9998 6.00003C16.9998 6.26519 16.8945 6.5195 16.707 6.70703L8.70704 14.707C8.51951 14.8945 8.26521 14.9998 8.00004 14.9998C7.73488 14.9998 7.48057 14.8945 7.29304 14.707L3.29304 10.707C3.11088 10.5184 3.01009 10.2658 3.01237 10.0036C3.01465 9.74143 3.11981 9.49062 3.30522 9.30521C3.49063 9.1198 3.74144 9.01464 4.00364 9.01236C4.26584 9.01008 4.51844 9.11087 4.70704 9.29303L8.00004 12.586L15.293 5.29303C15.4806 5.10556 15.7349 5.00024 16 5.00024C16.2652 5.00024 16.5195 5.10556 16.707 5.29303Z" fill="#1C64F2" />
						</svg>
					</div>
					<div className="ml-3 text-sm font-normal">Đã thêm tủ camera</div>
					<Toast.Toggle onDismiss={() => setShowToastAddCameraCabinetSuccess(false)} />
				</Toast>
			)}
			{showToastDeleteCameraCabinetSuccess && (
				<Toast
					theme={{
						root: {
							base: 'absolute top-20 left-1/2 transform -translate-x-1/2 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400'
						}
					}}
				>
					<div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-green-500 dark:bg-green-800 dark:text-green-200">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.29303C16.8945 5.48056 16.9998 5.73487 16.9998 6.00003C16.9998 6.26519 16.8945 6.5195 16.707 6.70703L8.70704 14.707C8.51951 14.8945 8.26521 14.9998 8.00004 14.9998C7.73488 14.9998 7.48057 14.8945 7.29304 14.707L3.29304 10.707C3.11088 10.5184 3.01009 10.2658 3.01237 10.0036C3.01465 9.74143 3.11981 9.49062 3.30522 9.30521C3.49063 9.1198 3.74144 9.01464 4.00364 9.01236C4.26584 9.01008 4.51844 9.11087 4.70704 9.29303L8.00004 12.586L15.293 5.29303C15.4806 5.10556 15.7349 5.00024 16 5.00024C16.2652 5.00024 16.5195 5.10556 16.707 5.29303Z" fill="#1C64F2" />
						</svg>
					</div>
					<div className="ml-3 text-sm font-normal">Đã xóa tủ camera</div>
					<Toast.Toggle onDismiss={() => setShowToastDeleteCameraCabinetSuccess(false)} />
				</Toast>
			)}
      <div>
        <HR className="my-0" />
      </div>
      <Modal
				theme={{
					header: {
						base: 'flex items-start justify-between rounded-t p-5'
					}
				}}
				size="md" dismissible show={openModalDeleteCameraCabinet} onClose={() => setOpenModalDeleteCameraCabinet(false)}>
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
							Bạn có muốn xóa tủ camera này?
						</div>
						<div className="flex justify-center items-center text-base font-normal text-gray-500">
							Hành động này không thể phục hồi
						</div>
						<div className="mt-5 flex justify-center items-center">
							<div className="flex flex-row gap-4">
								<div>
									<Button onClick={e => deleteCameraCabinet()} size="xs" color="failure">Xóa</Button>
								</div>
								<div>
									<Button onClick={e => setOpenModalDeleteCameraCabinet(false)} size="xs" color="light">Không xóa</Button>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
			<Drawer
				className="md:h-full"
				backdrop={true}
				open={showFormAddCameraCabinet}
				onClose={handleCloseFormAddCameraCabinet}
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
						<Drawer.Header title="Thêm tủ camera" />
					</div>
				</div>
				<HR className="mt-2 mb-0" />
				<Drawer.Items>
					<BrowserView>
						<div className="grid grid-cols-1 md:flex md:flex-row gap-4 pl-4">
							<div className="w-400 pt-4 flex flex-col h-screen">
								<div className="flex flex-col overflow-y-auto h-full max-h-screen">
									<div className="text-base font-semibold">
										Thông tin tủ camera
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
										<Label htmlFor="fromdate" value="Gửi tin nhắn khi" className="text-sm font-medium text-gray-900" />
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
													onClick={e => addCameraCabinet()}
													theme={{
														size: {
															sm: 'px-3 py-2 text-sm'
														}
													}}
													color="blue" size="sm">Thêm</Button>
											</div>
											<div>
												<Button
                          onClick={() => setShowFormAddCameraCabinet(false)}
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
								<SettingsMapContainer />
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
                        onClick={e => addCameraCabinet()}
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
								<SettingsMapContainer />
							</div>
						</div>
					</MobileView>
				</Drawer.Items>
			</Drawer>
      <section className="pb-3 h-full">
        <div className="grid grid-cols-1 h-full md:grid-cols-12">
          <div className="pt-3 block md:col-span-2 pl-2">
            <SidebarSettings activeItem="camera_cabinet_item" />
          </div>
          <div className="pl-4  block md:col-span-10 h-full bg-gray-100 pb-2">
            <div className="h-full flex flex-col pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
                <div className="	text-sl font-semibold pt-4">Tủ camera</div>
                <div className="pt-2 md:justify-self-end">
                  <Button
                    onClick={e => onShowFormAddCameraCabinet()}
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
                    </svg>Thêm tủ camera</Button>
                </div>
              </div>
              <div className="pt-4 h-full pb-4 bg-white rounded-md">
                <div className="flex flex-col h-full">
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
                      id="plate" type="text" icon={IoSearchOutline} placeholder="Tìm tủ camera" sizing="sm" required />
                  </div>
                  {showDataTable ? (
                    <>
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
                            <Table.HeadCell className="">loại tủ</Table.HeadCell>
                            <Table.HeadCell className="">tên tủ</Table.HeadCell>
                            <Table.HeadCell className="">số hiệu</Table.HeadCell>
                            <Table.HeadCell className="">loại kết nối</Table.HeadCell>
                            <Table.HeadCell className="">ip</Table.HeadCell>
                            <Table.HeadCell className="">port</Table.HeadCell>
                            <Table.HeadCell className="">cảnh báo</Table.HeadCell>
                            <Table.HeadCell className="">danh sách điện thoại</Table.HeadCell>
                            <Table.HeadCell className="">danh sách email</Table.HeadCell>
                            <Table.HeadCell className="">mở cửa tủ</Table.HeadCell>
                            <Table.HeadCell className="">mất điện lưới</Table.HeadCell>
                            <Table.HeadCell className="">Mất điện ups</Table.HeadCell>
                            <Table.HeadCell className="">mất kết nối</Table.HeadCell>
                            <Table.HeadCell className="">min zoom</Table.HeadCell>
                            <Table.HeadCell className="">max zoom</Table.HeadCell>
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
                              <Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
                              <Table.Cell><p className="text-sm text-gray-900 font-normal">-</p></Table.Cell>
                              <Table.Cell className="sticky right-0 whitespace-nowrap bg-white">
                                <div className="flex flex-row gap-6">
                                  <div>
                                    <Button size="sm"
                                      onClick={e => onShowFormAddCameraCabinet()}
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
                                      onClick={e => setOpenModalDeleteCameraCabinet(true)}
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
                          </Table.Body>
                        </Table>
                      </div>
                      <div className="grid grid-cols-1 pl-4 md:grid-cols-2 gap-4 pt-2">
                        <div className="block col-span-1">
                          <div className="flex flex-row gap-2.5">
                            <div>
                              <span className="text-sm pt-2 text-gray-500 font-normal block">Hiển thị</span>
                            </div>
                            <div>
                              <Select
                                id="countries" required>
                                <option>100</option>
                                <option>10</option>
                              </Select>
                            </div>
                            <div className="pt-2">
                              <span className="font-bold pt-2">1-10 </span> of <span className="font-bold pt-2">1000 </span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-1 block col-span-1 md:text-right pr-3">
                          <Pagination
                            nextLabel=""
                            previousLabel=""
                            theme={{
                              pages: {
                                selector: {
                                  active: 'bg-blue-100 text-blue-700 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                                }
                              }
                            }}
                            currentPage={currentPage}
                            totalPages={100}
                            onPageChange={onPageChange}
                            showIcons
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
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
                            <Table.HeadCell className="">loại tủ</Table.HeadCell>
                            <Table.HeadCell className="">tên tủ</Table.HeadCell>
                            <Table.HeadCell className="">số hiệu</Table.HeadCell>
                            <Table.HeadCell className="">loại kết nối</Table.HeadCell>
                            <Table.HeadCell className="">ip</Table.HeadCell>
                            <Table.HeadCell className="">port</Table.HeadCell>
                            <Table.HeadCell className="">cảnh báo</Table.HeadCell>
                            <Table.HeadCell className="">danh sách điện thoại</Table.HeadCell>
                            <Table.HeadCell className="">danh sách email</Table.HeadCell>
                            <Table.HeadCell className="">mở cửa tủ</Table.HeadCell>
                            <Table.HeadCell className="">mất điện lưới</Table.HeadCell>
                            <Table.HeadCell className="">Mất điện ups</Table.HeadCell>
                            <Table.HeadCell className="">mất kết nối</Table.HeadCell>
                            <Table.HeadCell className="">min zoom</Table.HeadCell>
                            <Table.HeadCell className="">max zoom</Table.HeadCell>
                            <Table.HeadCell className="sticky right-0">Hành động</Table.HeadCell>
                          </Table.Head>
                        </Table>
                      </div>
                      <div className="h-full bg-gray-200 ">
                        <div className="flex flex-col items-center mt-16 gap-4">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                              <g clipPath="url(#clip0_2086_10743)">
                                <path d="M25.5 0C20.5555 0 15.722 1.46622 11.6108 4.21326C7.49953 6.96029 4.29521 10.8648 2.40302 15.4329C0.510832 20.0011 0.0157488 25.0277 0.980379 29.8772C1.94501 34.7268 4.32603 39.1813 7.82234 42.6777C11.3187 46.174 15.7732 48.555 20.6228 49.5196C25.4723 50.4842 30.4989 49.9892 35.0671 48.097C39.6352 46.2048 43.5397 43.0005 46.2867 38.8892C49.0338 34.778 50.5 29.9445 50.5 25C50.4927 18.3718 47.8565 12.0172 43.1696 7.33037C38.4828 2.64354 32.1282 0.00727899 25.5 0ZM25.5 37.5C25.0056 37.5 24.5222 37.3534 24.1111 37.0787C23.7 36.804 23.3795 36.4135 23.1903 35.9567C23.0011 35.4999 22.9516 34.9972 23.048 34.5123C23.1445 34.0273 23.3826 33.5819 23.7322 33.2322C24.0819 32.8826 24.5273 32.6445 25.0123 32.548C25.4972 32.4516 25.9999 32.5011 26.4567 32.6903C26.9135 32.8795 27.304 33.1999 27.5787 33.6111C27.8534 34.0222 28 34.5055 28 35C28 35.663 27.7366 36.2989 27.2678 36.7678C26.7989 37.2366 26.163 37.5 25.5 37.5ZM28 27.5C28 28.163 27.7366 28.7989 27.2678 29.2678C26.7989 29.7366 26.163 30 25.5 30C24.837 30 24.2011 29.7366 23.7322 29.2678C23.2634 28.7989 23 28.163 23 27.5V15C23 14.337 23.2634 13.7011 23.7322 13.2322C24.2011 12.7634 24.837 12.5 25.5 12.5C26.163 12.5 26.7989 12.7634 27.2678 13.2322C27.7366 13.7011 28 14.337 28 15V27.5Z" fill="#1F2A37" />
                              </g>
                              <defs>
                                <clipPath id="clip0_2086_10743">
                                  <rect width="50" height="50" fill="white" transform="translate(0.5)" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-lg font-normal text-black">
                          Không có dữ liệu
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}