import { HR, Sidebar, Badge, Table, Select } from "flowbite-react";
import Header from "../components/Header";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
export default function Dashboard() {
	const [lineChartData, setLineChartData] = useState({});
	const [pieChartData, setPieChartData] = useState({});
	const [data1, setData1] = useState(null)
	const [data2, setData2] = useState(null)
	useEffect(() => {
		const fetchData1 = {
			options: {
				chart: {
					toolbar: false,
					id: "basic-bar",
				},
				xaxis: {
					categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
					labels: {
						align: 'left',
					}
				},
				yaxis: {
					labels: {
						align: 'left',
					}
				},
			},
			series: [
				{
					name: "series-1",
					data: [30, 40, 45, 50, 49, 60, 70, 91]
				}
			]
		};
		const fetchData2 = {
			options: {
				dataLabels: {
					enabled: false,
				},
				chart: {
					offsetX: -35
				},
				stroke: {
					colors: ["transparent"],
					lineCap: "",
				},
				plotOptions: {
					pie: {
						donut: {
							labels: {
								show: true,
								name: {
									show: true,
									fontFamily: "Inter, sans-serif",
									offsetY: 20,
								},
								total: {
									showAlways: true,
									show: true,
									label: "Vi phạm",
									fontFamily: "Inter, sans-serif ",
									formatter: function (w) {
										const sum = w.globals.seriesTotals.reduce((a, b) => {
											return a + b
										}, 0)
										return sum
									},
								},
								value: {
									show: true,
									fontFamily: "Inter, sans-serif",
									fontWeight: "bold",
									offsetY: -20,
									formatter: function (value) {
										return value
									},
								},
							},
							size: "80%",
						}
					}
				},
				legend: {
					show: false,
				},
				colors: ['#1C64F2', '#6875F5', '#E74694', '#FDBA8C', '#16BDCA'],
			},
			series: [44, 55, 41, 17, 15],
			labels: ['A', 'B', 'C', 'D', 'E'],

		}

		// Using Promise.all to wait for both requests to complete
		Promise.all([fetchData1, fetchData2])
			.then(([result1, result2]) => {
				setData1(result1)
				setData2(result2)
			})
			.catch((error) => {
				console.error('Error fetching data:', error)
			})
	}, []);
	console.log(data1, data2);
	return (
		<div className="container mx-auto max-w-full">
			<Header />
			<HR className="my-0" />
			<section className="">
			<div className="bg-gray-100 ">
						<div className="flex flex-col gap-4">
							<div className=" grid grid-cols-1 md:grid-cols-3 gap-16 ml-4 mt-6 mr-4 pl-6 pt-6 pb-6 bg-white rounded-md">
								<div>
									<div className="flex flex-col">
										<div className="mb-2 text-gray-500 text-sm font-normal">
											Vi phạm ngày hôm nay
										</div>
										<div className="mb-2">
											<div className="flex flex-row gap-2">
												<div className="leading-tight text-2xl font-bold text-gray-900">
													360
												</div>
												<div>
													<Badge color="success" className="mt-1.5">
														<div className="flex justify-between gap-1">
															<svg width="10" height="10" className="mt-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<g id="arrow-up">
																	<path id="Vector" d="M5.19488 0.570861L5.19524 0.571205L8.19062 3.42455C8.23191 3.46637 8.25042 3.51682 8.24999 3.56422C8.24955 3.61249 8.22939 3.66382 8.18551 3.70563C8.14083 3.74818 8.07554 3.77626 8.00253 3.77686C7.93072 3.77745 7.86568 3.75135 7.82007 3.7105L6.10468 2.07645L5.25981 1.27165V2.43848V9.28571C5.25981 9.33449 5.2397 9.38649 5.19532 9.42876C5.15012 9.47181 5.08385 9.5 5.00996 9.5C4.93607 9.5 4.8698 9.47181 4.82461 9.42876C4.78023 9.38649 4.76011 9.33449 4.76011 9.28571V2.43848V1.27235L3.91541 2.0763L2.1945 3.71418L2.19445 3.71412L2.1881 3.72037C2.16619 3.74199 2.13865 3.7605 2.10645 3.77368C2.07422 3.78687 2.03872 3.79411 2.00223 3.79442C1.96573 3.79472 1.93005 3.78806 1.89747 3.77536C1.86493 3.76268 1.83692 3.74455 1.81449 3.72318L1.81449 3.72318C1.79211 3.70186 1.77581 3.67787 1.76526 3.65329C1.75473 3.62878 1.74978 3.60343 1.75001 3.57849C1.75024 3.55354 1.75565 3.5282 1.76668 3.50375C1.77774 3.47922 1.79456 3.45537 1.81746 3.43431L1.81751 3.43436L1.82379 3.42838L4.82319 0.571205L4.82355 0.570861C4.84531 0.550089 4.87255 0.532424 4.90426 0.520068L4.90426 0.520071L4.90596 0.519405C4.97167 0.493532 5.04676 0.493532 5.11247 0.519405L5.11247 0.519408L5.11416 0.520068C5.14588 0.532425 5.17312 0.55009 5.19488 0.570861Z" fill="#03543F" stroke="#03543F" />
																</g>
															</svg>
															<p className="text-xs font-medium">1%</p>
														</div>
													</Badge>
												</div>
											</div>
										</div>
										<div className="flex flex-row gap-1 items-center">
											<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
												<g clipPath="url(#clip0_1294_3174)">
													<path d="M6.4778 2.63594L6.20002 3.05168L6.4778 2.63594C6.24757 2.48211 5.9769 2.4 5.7 2.4C5.3287 2.4 4.9726 2.5475 4.71005 2.81005C4.4475 3.0726 4.3 3.4287 4.3 3.8C4.3 4.07689 4.38211 4.34757 4.53594 4.5778C4.59053 4.6595 4.65329 4.7348 4.72297 4.8027C4.45938 4.82119 4.21024 4.93412 4.02219 5.12218C3.81589 5.32847 3.7 5.60826 3.7 5.9C3.7 6.19174 3.8159 6.47153 4.02218 6.67782C4.22847 6.88411 4.50826 7 4.8 7H4.9V7.8H4.8C4.50826 7.8 4.22847 7.91589 4.02218 8.12218C3.8159 8.32847 3.7 8.60826 3.7 8.9C3.7 9.19174 3.81589 9.47153 4.02218 9.67782C4.22848 9.88411 4.50826 10 4.8 10H7.2C7.49174 10 7.77153 9.88411 7.97782 9.67782C8.18411 9.47153 8.3 9.19174 8.3 8.9C8.3 8.60826 8.18411 8.32847 7.97782 8.12218C7.77153 7.91589 7.49174 7.8 7.2 7.8H7.1V5.9C7.1 5.60826 6.98411 5.32847 6.77782 5.12218C6.70189 5.04625 6.61599 4.98256 6.52321 4.9324C6.58218 4.88953 6.63796 4.84194 6.68995 4.78995C6.88575 4.59415 7.01908 4.3447 7.0731 4.07313L6.58271 3.97558L7.0731 4.07313C7.12712 3.80155 7.0994 3.52006 6.99343 3.26424L6.53149 3.45558L6.99343 3.26424C6.88747 3.00843 6.70803 2.78978 6.4778 2.63594ZM2.94437 1.92692C3.84876 1.32262 4.91203 1.00005 5.99973 1C7.45797 1.00167 8.85602 1.5817 9.88716 2.61284C10.9184 3.64405 11.4984 5.0422 11.5 6.50055C11.4999 7.58815 11.1773 8.65132 10.5731 9.55563C9.96874 10.4601 9.10975 11.1651 8.10476 11.5813C7.09977 11.9976 5.9939 12.1065 4.92701 11.8943C3.86011 11.6821 2.8801 11.1583 2.11092 10.3891C1.34173 9.6199 0.817902 8.63989 0.605684 7.57299C0.393465 6.5061 0.502383 5.40023 0.918665 4.39524C1.33495 3.39025 2.0399 2.53126 2.94437 1.92692Z" fill="#9CA3AF" stroke="#9CA3AF" />
												</g>
												<defs>
													<clipPath id="clip0_1294_3174">
														<rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
													</clipPath>
												</defs>
											</svg>
											<p className="text-sm font-normal text-gray-500">so với hôm qua</p>
										</div>
									</div>
								</div>
								<div>
									<div className="flex flex-col">
										<div className="mb-2 text-gray-500 text-sm font-normal">
											Vi phạm cần xử lý
										</div>
										<div className="mb-2">
											<div className="flex flex-row gap-2">
												<div className="leading-tight text-2xl font-bold text-gray-900">
													360
												</div>
												<div>
													<Badge color="success" className="mt-1.5">
														<div className="flex justify-between gap-1">
															<svg width="10" height="10" className="mt-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<g id="arrow-up">
																	<path id="Vector" d="M5.19488 0.570861L5.19524 0.571205L8.19062 3.42455C8.23191 3.46637 8.25042 3.51682 8.24999 3.56422C8.24955 3.61249 8.22939 3.66382 8.18551 3.70563C8.14083 3.74818 8.07554 3.77626 8.00253 3.77686C7.93072 3.77745 7.86568 3.75135 7.82007 3.7105L6.10468 2.07645L5.25981 1.27165V2.43848V9.28571C5.25981 9.33449 5.2397 9.38649 5.19532 9.42876C5.15012 9.47181 5.08385 9.5 5.00996 9.5C4.93607 9.5 4.8698 9.47181 4.82461 9.42876C4.78023 9.38649 4.76011 9.33449 4.76011 9.28571V2.43848V1.27235L3.91541 2.0763L2.1945 3.71418L2.19445 3.71412L2.1881 3.72037C2.16619 3.74199 2.13865 3.7605 2.10645 3.77368C2.07422 3.78687 2.03872 3.79411 2.00223 3.79442C1.96573 3.79472 1.93005 3.78806 1.89747 3.77536C1.86493 3.76268 1.83692 3.74455 1.81449 3.72318L1.81449 3.72318C1.79211 3.70186 1.77581 3.67787 1.76526 3.65329C1.75473 3.62878 1.74978 3.60343 1.75001 3.57849C1.75024 3.55354 1.75565 3.5282 1.76668 3.50375C1.77774 3.47922 1.79456 3.45537 1.81746 3.43431L1.81751 3.43436L1.82379 3.42838L4.82319 0.571205L4.82355 0.570861C4.84531 0.550089 4.87255 0.532424 4.90426 0.520068L4.90426 0.520071L4.90596 0.519405C4.97167 0.493532 5.04676 0.493532 5.11247 0.519405L5.11247 0.519408L5.11416 0.520068C5.14588 0.532425 5.17312 0.55009 5.19488 0.570861Z" fill="#03543F" stroke="#03543F" />
																</g>
															</svg>
															<p className="text-xs font-medium">1%</p>
														</div>
													</Badge>
												</div>
											</div>
										</div>
										<div className="flex flex-row gap-1 items-center">
											<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
												<g clipPath="url(#clip0_1294_3174)">
													<path d="M6.4778 2.63594L6.20002 3.05168L6.4778 2.63594C6.24757 2.48211 5.9769 2.4 5.7 2.4C5.3287 2.4 4.9726 2.5475 4.71005 2.81005C4.4475 3.0726 4.3 3.4287 4.3 3.8C4.3 4.07689 4.38211 4.34757 4.53594 4.5778C4.59053 4.6595 4.65329 4.7348 4.72297 4.8027C4.45938 4.82119 4.21024 4.93412 4.02219 5.12218C3.81589 5.32847 3.7 5.60826 3.7 5.9C3.7 6.19174 3.8159 6.47153 4.02218 6.67782C4.22847 6.88411 4.50826 7 4.8 7H4.9V7.8H4.8C4.50826 7.8 4.22847 7.91589 4.02218 8.12218C3.8159 8.32847 3.7 8.60826 3.7 8.9C3.7 9.19174 3.81589 9.47153 4.02218 9.67782C4.22848 9.88411 4.50826 10 4.8 10H7.2C7.49174 10 7.77153 9.88411 7.97782 9.67782C8.18411 9.47153 8.3 9.19174 8.3 8.9C8.3 8.60826 8.18411 8.32847 7.97782 8.12218C7.77153 7.91589 7.49174 7.8 7.2 7.8H7.1V5.9C7.1 5.60826 6.98411 5.32847 6.77782 5.12218C6.70189 5.04625 6.61599 4.98256 6.52321 4.9324C6.58218 4.88953 6.63796 4.84194 6.68995 4.78995C6.88575 4.59415 7.01908 4.3447 7.0731 4.07313L6.58271 3.97558L7.0731 4.07313C7.12712 3.80155 7.0994 3.52006 6.99343 3.26424L6.53149 3.45558L6.99343 3.26424C6.88747 3.00843 6.70803 2.78978 6.4778 2.63594ZM2.94437 1.92692C3.84876 1.32262 4.91203 1.00005 5.99973 1C7.45797 1.00167 8.85602 1.5817 9.88716 2.61284C10.9184 3.64405 11.4984 5.0422 11.5 6.50055C11.4999 7.58815 11.1773 8.65132 10.5731 9.55563C9.96874 10.4601 9.10975 11.1651 8.10476 11.5813C7.09977 11.9976 5.9939 12.1065 4.92701 11.8943C3.86011 11.6821 2.8801 11.1583 2.11092 10.3891C1.34173 9.6199 0.817902 8.63989 0.605684 7.57299C0.393465 6.5061 0.502383 5.40023 0.918665 4.39524C1.33495 3.39025 2.0399 2.53126 2.94437 1.92692Z" fill="#9CA3AF" stroke="#9CA3AF" />
												</g>
												<defs>
													<clipPath id="clip0_1294_3174">
														<rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
													</clipPath>
												</defs>
											</svg>
											<p className="text-sm font-normal text-gray-500">so với hôm qua</p>
										</div>
									</div>
								</div>
								<div>
									<div className="flex flex-col">
										<div className="mb-2 text-gray-500 text-sm font-normal">
											Camera đang hoạt động
										</div>
										<div className="mb-2">
											<div className="flex flex-row gap-2">
												<div className="leading-tight text-2xl font-bold text-gray-900">
													360
												</div>
												<div>
													<Badge color="success" className="mt-1.5">
														<div className="flex justify-between gap-1">
															<svg width="10" height="10" className="mt-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																<g id="arrow-up">
																	<path id="Vector" d="M5.19488 0.570861L5.19524 0.571205L8.19062 3.42455C8.23191 3.46637 8.25042 3.51682 8.24999 3.56422C8.24955 3.61249 8.22939 3.66382 8.18551 3.70563C8.14083 3.74818 8.07554 3.77626 8.00253 3.77686C7.93072 3.77745 7.86568 3.75135 7.82007 3.7105L6.10468 2.07645L5.25981 1.27165V2.43848V9.28571C5.25981 9.33449 5.2397 9.38649 5.19532 9.42876C5.15012 9.47181 5.08385 9.5 5.00996 9.5C4.93607 9.5 4.8698 9.47181 4.82461 9.42876C4.78023 9.38649 4.76011 9.33449 4.76011 9.28571V2.43848V1.27235L3.91541 2.0763L2.1945 3.71418L2.19445 3.71412L2.1881 3.72037C2.16619 3.74199 2.13865 3.7605 2.10645 3.77368C2.07422 3.78687 2.03872 3.79411 2.00223 3.79442C1.96573 3.79472 1.93005 3.78806 1.89747 3.77536C1.86493 3.76268 1.83692 3.74455 1.81449 3.72318L1.81449 3.72318C1.79211 3.70186 1.77581 3.67787 1.76526 3.65329C1.75473 3.62878 1.74978 3.60343 1.75001 3.57849C1.75024 3.55354 1.75565 3.5282 1.76668 3.50375C1.77774 3.47922 1.79456 3.45537 1.81746 3.43431L1.81751 3.43436L1.82379 3.42838L4.82319 0.571205L4.82355 0.570861C4.84531 0.550089 4.87255 0.532424 4.90426 0.520068L4.90426 0.520071L4.90596 0.519405C4.97167 0.493532 5.04676 0.493532 5.11247 0.519405L5.11247 0.519408L5.11416 0.520068C5.14588 0.532425 5.17312 0.55009 5.19488 0.570861Z" fill="#03543F" stroke="#03543F" />
																</g>
															</svg>
															<p className="text-xs font-medium">1%</p>
														</div>
													</Badge>
												</div>
											</div>
										</div>
										<div className="flex flex-row gap-1 items-center">
											<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
												<g clipPath="url(#clip0_1294_3174)">
													<path d="M6.4778 2.63594L6.20002 3.05168L6.4778 2.63594C6.24757 2.48211 5.9769 2.4 5.7 2.4C5.3287 2.4 4.9726 2.5475 4.71005 2.81005C4.4475 3.0726 4.3 3.4287 4.3 3.8C4.3 4.07689 4.38211 4.34757 4.53594 4.5778C4.59053 4.6595 4.65329 4.7348 4.72297 4.8027C4.45938 4.82119 4.21024 4.93412 4.02219 5.12218C3.81589 5.32847 3.7 5.60826 3.7 5.9C3.7 6.19174 3.8159 6.47153 4.02218 6.67782C4.22847 6.88411 4.50826 7 4.8 7H4.9V7.8H4.8C4.50826 7.8 4.22847 7.91589 4.02218 8.12218C3.8159 8.32847 3.7 8.60826 3.7 8.9C3.7 9.19174 3.81589 9.47153 4.02218 9.67782C4.22848 9.88411 4.50826 10 4.8 10H7.2C7.49174 10 7.77153 9.88411 7.97782 9.67782C8.18411 9.47153 8.3 9.19174 8.3 8.9C8.3 8.60826 8.18411 8.32847 7.97782 8.12218C7.77153 7.91589 7.49174 7.8 7.2 7.8H7.1V5.9C7.1 5.60826 6.98411 5.32847 6.77782 5.12218C6.70189 5.04625 6.61599 4.98256 6.52321 4.9324C6.58218 4.88953 6.63796 4.84194 6.68995 4.78995C6.88575 4.59415 7.01908 4.3447 7.0731 4.07313L6.58271 3.97558L7.0731 4.07313C7.12712 3.80155 7.0994 3.52006 6.99343 3.26424L6.53149 3.45558L6.99343 3.26424C6.88747 3.00843 6.70803 2.78978 6.4778 2.63594ZM2.94437 1.92692C3.84876 1.32262 4.91203 1.00005 5.99973 1C7.45797 1.00167 8.85602 1.5817 9.88716 2.61284C10.9184 3.64405 11.4984 5.0422 11.5 6.50055C11.4999 7.58815 11.1773 8.65132 10.5731 9.55563C9.96874 10.4601 9.10975 11.1651 8.10476 11.5813C7.09977 11.9976 5.9939 12.1065 4.92701 11.8943C3.86011 11.6821 2.8801 11.1583 2.11092 10.3891C1.34173 9.6199 0.817902 8.63989 0.605684 7.57299C0.393465 6.5061 0.502383 5.40023 0.918665 4.39524C1.33495 3.39025 2.0399 2.53126 2.94437 1.92692Z" fill="#9CA3AF" stroke="#9CA3AF" />
												</g>
												<defs>
													<clipPath id="clip0_1294_3174">
														<rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
													</clipPath>
												</defs>
											</svg>
											<p className="text-sm font-normal text-gray-500">so với hôm qua</p>
										</div>
									</div>
								</div>
							</div>
							<div className="gap-4 grid grid-cols-1 md:grid-cols-2 ml-4 ">
								<div className="p-6 flex flex-col rounded-md bg-white">
									<div className="leading-none text-xl font-bold">
										Xu hướng vi phạm
									</div>
									<div className="mt-2 text-base font-normal text-gray-500 pb-2 border-b">
										7 ngày qua (16/08/2024 00:00 - hiện tại)
									</div>
									<div className="mt-2 pt-6 border-b">
										{data1 && data1.series && (
											<Chart
												options={data1.options}
												series={data1.series}
												type="line"
											/>
										)}

									</div>
									<div className="pt-6 w-fit">
										<Select theme={{
											field: {
												select: {
													sizes: {
														md: 'pt-2 pb-2 text-sm border-none bg-white'
													}
												}
											}
										}} id="countries" required>
											<option>Last 7 days</option>
											<option>Last 14 days</option>
											<option>Last 30 days</option>
										</Select>
									</div>
								</div>
								<div className="p-6 flex flex-col rounded-md bg-white mr-4 ">
									<div className="leading-none text-xl font-bold">
										Các loại vi phạm
									</div>
									<div className="mt-2 text-base font-normal text-gray-500 pb-2 border-b">
										7 ngày qua (16/08/2024 00:00 - hiện tại)
									</div>
									<div className="mt-2 pt-6 grid grid-cols-1 xl:grid-cols-2 xl:flex gap-2 border-b pb-4">
										<div className="w-44 ">
											{data2 && data2.series && (
												<Chart
													options={data2.options}
													series={data2.series}
													type="donut"
													width={240}
													height={240}
												/>
											)}

										</div>
										<div className="grow overflow-x-auto w-full">
											<Table className="">
												<Table.Head className="uppercase text-xs font-semibold text-gray-500">
													<Table.HeadCell><span className="sr-only">Edit</span></Table.HeadCell>
													<Table.HeadCell>Vi phạm</Table.HeadCell>
													<Table.HeadCell>Số liệu</Table.HeadCell>	
												</Table.Head>
												<Table.Body className="">
													<Table.Row>
														<Table.Cell>
															<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="12" height="12" rx="6" fill="#16BDCA" />
															</svg>
														</Table.Cell>
														<Table.Cell>
															<p className="text-sm font-normal text-gray-900">Quá tốc độ quy định</p>
														</Table.Cell>
														<Table.Cell>
															<span className="text-sm text-gray-900 font-semibold">132 </span>
															<span className="text-sm text-gray-500 font-semibold">(32%)</span>
														</Table.Cell>
													</Table.Row>
													<Table.Row>
														<Table.Cell>
															<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="12" height="12" rx="6" fill="#E74694" />
															</svg>
														</Table.Cell>
														<Table.Cell>
															<p className="text-sm font-normal text-gray-900">Điều khiển xe đi không đúng phần đường quy định</p>
														</Table.Cell>
														<Table.Cell>
															<span className="text-sm text-gray-900 font-semibold">132 </span>
															<span className="text-sm text-gray-500 font-semibold">(32%)</span>
														</Table.Cell>
													</Table.Row>
													<Table.Row>
														<Table.Cell>
															<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="12" height="12" rx="6" fill="#1A56DB" />
															</svg>
														</Table.Cell>
														<Table.Cell>
															<p className="text-sm font-normal text-gray-900">Không chấp hành hiệu lệnh của đèn tín hiệu giao thông</p>
														</Table.Cell>
														<Table.Cell>
															<span className="text-sm text-gray-900 font-semibold">132 </span>
															<span className="text-sm text-gray-500 font-semibold">(32%)</span>
														</Table.Cell>
													</Table.Row>
													<Table.Row>
														<Table.Cell>
															<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="12" height="12" rx="6" fill="#FDBA8C" />
															</svg>
														</Table.Cell>
														<Table.Cell>
															<p className="text-sm font-normal text-gray-900">Đi sai chiều đường</p>
														</Table.Cell>
														<Table.Cell>
															<span className="text-sm text-gray-900 font-semibold">132 </span>
															<span className="text-sm text-gray-500 font-semibold">(32%)</span>
														</Table.Cell>
													</Table.Row>
													<Table.Row>
														<Table.Cell>
															<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect width="12" height="12" rx="6" fill="#9061F9" />
															</svg>
														</Table.Cell>
														<Table.Cell>
															<p className="text-sm font-normal text-gray-900">Đi vào đường cấm</p>
														</Table.Cell>
														<Table.Cell>
															<span className="text-sm text-gray-900 font-semibold">132 </span>
															<span className="text-sm text-gray-500 font-semibold">(32%)</span>
														</Table.Cell>
													</Table.Row>
												</Table.Body>
											</Table>
										</div>
									</div>
									<div className="pt-6 w-fit">
										<Select theme={{
											field: {
												select: {
													sizes: {
														md: 'pt-2 pb-2 text-sm border-none bg-white'
													}
												}
											}
										}} id="countries" required>
											<option>Last 7 days</option>
											<option>Last 14 days</option>
											<option>Last 30 days</option>
										</Select>
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>
		</div>
	);
}