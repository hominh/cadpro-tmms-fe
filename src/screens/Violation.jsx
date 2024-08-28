import { Tabs, HR, TextInput, Button, Table, Pagination, Label, Select, Accordion, Textarea, Sidebar, Badge, Drawer } from "flowbite-react";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Header from "../components/Header";
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import noimage from '../assets/noimage.png';
import ReactPlayer from 'react-player'

export default function Violation() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [showDetailViolation, setShowDetailViolation] = useState(false);
  const handleCloseDetailViolation = () => setShowDetailViolation(false);
  const GetDetailViolation = () => {
    setShowDetailViolation(true);
  };
  const onSetActiveViolationItem = (item) => {
    if (item !== activeViolationFilter) {
      setActiveViolationFilter(item);
    }
    else {
      setActiveViolationFilter(''); // handle click on currently active item
    }
  };
  const [activeViolationFilter, setActiveViolationFilter] = useState('violation_all_today');

  return (
    <>
      <div>
        <HR className="my-0" />
      </div>
      <section className="pl-4 pt-4 bg-gray-100 sm:px-4">
        <p className="font-semibold text-xl text-gray-900">Vi phạm</p>
      </section>
      <section className="pt-3 pb-3 sm:px-4 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
          <div className="mb-1 block md:col-span-2 md:h-full">
            <div className="rounded bg-white pt-3 pl-4 md:h-full">
              <Tabs
                aria-label="tabs"
                variant="underline"
                theme={{
                  tabpanel: 'py-4',
                  tablist: {
                    base: 'flex text-center gap-8',
                    tabitem: {
                      base: 'flex items-center justify-center md:pr-0 pb-2 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
                      variant: {
                        underline: {
                          base: '',
                          active: {
                            on: 'text-blue-600 dark:bg-gray-800 dark:text-cyan-500 border-b-2 border-blue-500'
                          }
                        }
                      }
                    }
                  }
                }}
              >
                <Tabs.Item active title="Lọc nhanh">
                  <p className="text-gray-900 text-sm font-medium">Thời gian</p>
                  <Tabs aria-label="Pills" variant="pills" className="mt-2" theme={{
                    tabpanel: 'py-4',
                    tablist: {
                      variant: {
                        pills: 'flex flex-row space-x-3 justify-between text-sm font-medium text-gray-500 dark:text-gray-400 mr-4'
                      },
                      tabitem: {
                        base: 'p-2 text-black border border-inherit rounded-md',
                        variant: {
                          pills: {
                            active: {
                              on: 'text-blue-700 border border-sky-600 rounded-md'
                            }
                          }
                        }
                      },
                    },
                  }}>
                    <Tabs.Item active title="Hôm nay">
                      <Sidebar
                        className="w-auto mr-4"
                        theme={{
                          root: {
                            inner: 'h-full overflow-y-auto overflow-x-hidden rounded md:pb-4 dark:bg-gray-800'
                          },
                          item: {
                            base: 'flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                            content: {
                              base: 'flex-1 whitespace-nowrap text-gray-900 font-medium text-sm',
                            },
                            label: 'text-gray-400 bg-inherit text-gray-400 font-medium text-sm'
                          }
                        }}
                        aria-label="Quick filter">
                        <Sidebar.Items>
                          <Sidebar.ItemGroup>
                            <Sidebar.Item key={1} id="1" label="1" className={`${activeViolationFilter === 'violation_all_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_all_today")}>
                              Tất cả
                            </Sidebar.Item>
                            <Sidebar.Item key={2} id="1" label="1" className={`${activeViolationFilter === 'violation_detected_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_detected_today")}>
                              Đã phát hiện
                            </Sidebar.Item>
                            <Sidebar.Item key={3} id="1" label="1" className={`${activeViolationFilter === 'violation_need_process_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_need_process_today")}>
                              Cần xử lý
                            </Sidebar.Item>
                            <Sidebar.Item key={4} id="1" label="1" className={`${activeViolationFilter === 'violation_processed_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_processed_today")}>
                              Đã xử lý
                            </Sidebar.Item>
                            <Sidebar.Item key={5} id="1" label="1" className={`${activeViolationFilter === 'violation_canceled_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_canceled_today")}>
                              Đã hủy
                            </Sidebar.Item>
                            <Sidebar.Item key={6} id="1" label="1" className={`${activeViolationFilter === 'violation_custompreset_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_custompreset_today")}>
                              Custom preset #1
                            </Sidebar.Item>
                            <Sidebar.Item key={7} id="1" label="1" className={`${activeViolationFilter === 'violation_truck_ran_red_light_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_truck_ran_red_light_today")}>
                              Xe tải vượt đèn đỏ
                            </Sidebar.Item>
                            <Sidebar.Item key={8} id="1" label="1" className={`${activeViolationFilter === 'violation_over60_today' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`} onClick={() => onSetActiveViolationItem("violation_over60_today")}>
                              Xe chạy quá tốc độ 60km/h
                            </Sidebar.Item>
                          </Sidebar.ItemGroup>
                        </Sidebar.Items>
                      </Sidebar>
                    </Tabs.Item>
                    <Tabs.Item title="Tuần này">
                      <Sidebar
                        className="w-auto mr-2"
                        theme={{
                          root: {
                            inner: 'h-full overflow-y-auto overflow-x-hidden rounded pb-4 dark:bg-gray-800'
                          },
                          item: {
                            base: 'flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                            content: {
                              base: 'flex-1 whitespace-nowrap text-gray-900 font-medium text-sm',
                            },
                            label: 'text-gray-400 bg-inherit text-gray-400 font-medium text-sm'
                          }
                        }}
                        aria-label="Quick filter">
                        <Sidebar.Items>
                          <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" label="1">
                              Tất cả
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Đã phát hiện
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Cần xử lý
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Đã xử lý
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Đã hủy
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Custom preset #1
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Xe tải vượt đèn đỏ
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Xe chạy quá tốc độ 60km/h
                            </Sidebar.Item>
                          </Sidebar.ItemGroup>
                        </Sidebar.Items>
                      </Sidebar>
                    </Tabs.Item>
                    <Tabs.Item title="Tháng này">
                      <Sidebar
                        className="w-auto mr-2"
                        theme={{
                          root: {
                            inner: 'h-full overflow-y-auto overflow-x-hidden rounded pb-4 dark:bg-gray-800'
                          },
                          item: {
                            base: 'flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                            content: {
                              base: 'flex-1 whitespace-nowrap text-gray-900 font-medium text-sm',
                            },
                            label: 'text-gray-400 bg-inherit text-gray-400 font-medium text-sm'
                          }
                        }}
                        aria-label="Quick filter">
                        <Sidebar.Items>
                          <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" label="1">
                              Tất cả
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Đã phát hiện
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Cần xử lý
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Đã xử lý
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Đã hủy
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Custom preset #1
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Xe tải vượt đèn đỏ
                            </Sidebar.Item>
                            <Sidebar.Item href="#" label="1">
                              Xe chạy quá tốc độ 60km/h
                            </Sidebar.Item>
                          </Sidebar.ItemGroup>
                        </Sidebar.Items>
                      </Sidebar>
                    </Tabs.Item>
                  </Tabs>
                </Tabs.Item>
                <Tabs.Item title="Lọc chi tiết">
                  <form className="flex max-w-md flex-col gap-3 pr-3">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="fromdate" value="Từ ngày" />
                      </div>
                      <div className="relative">
                        <div className="flex">
                          <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <g clipPath="url(#clip0_518_12037)">
                                  <mask id="path-1-inside-1_518_12037" fill="white">
                                    <path d="M0 13.1C0 13.4713 0.1475 13.8274 0.41005 14.0899C0.672601 14.3525 1.0287 14.5 1.4 14.5H12.6C12.9713 14.5 13.3274 14.3525 13.5899 14.0899C13.8525 13.8274 14 13.4713 14 13.1V6.1H0V13.1ZM9.8 7.85C9.8 7.75717 9.83687 7.66815 9.90251 7.60251C9.96815 7.53687 10.0572 7.5 10.15 7.5H10.85C10.9428 7.5 11.0318 7.53687 11.0975 7.60251C11.1631 7.66815 11.2 7.75717 11.2 7.85V8.55C11.2 8.64283 11.1631 8.73185 11.0975 8.79749C11.0318 8.86312 10.9428 8.9 10.85 8.9H10.15C10.0572 8.9 9.96815 8.86312 9.90251 8.79749C9.83687 8.73185 9.8 8.64283 9.8 8.55V7.85ZM9.8 10.65C9.8 10.5572 9.83687 10.4682 9.90251 10.4025C9.96815 10.3369 10.0572 10.3 10.15 10.3H10.85C10.9428 10.3 11.0318 10.3369 11.0975 10.4025C11.1631 10.4682 11.2 10.5572 11.2 10.65V11.35C11.2 11.4428 11.1631 11.5318 11.0975 11.5975C11.0318 11.6631 10.9428 11.7 10.85 11.7H10.15C10.0572 11.7 9.96815 11.6631 9.90251 11.5975C9.83687 11.5318 9.8 11.4428 9.8 11.35V10.65ZM6.3 7.85C6.3 7.75717 6.33687 7.66815 6.40251 7.60251C6.46815 7.53687 6.55717 7.5 6.65 7.5H7.35C7.44283 7.5 7.53185 7.53687 7.59749 7.60251C7.66313 7.66815 7.7 7.75717 7.7 7.85V8.55C7.7 8.64283 7.66313 8.73185 7.59749 8.79749C7.53185 8.86312 7.44283 8.9 7.35 8.9H6.65C6.55717 8.9 6.46815 8.86312 6.40251 8.79749C6.33687 8.73185 6.3 8.64283 6.3 8.55V7.85ZM6.3 10.65C6.3 10.5572 6.33687 10.4682 6.40251 10.4025C6.46815 10.3369 6.55717 10.3 6.65 10.3H7.35C7.44283 10.3 7.53185 10.3369 7.59749 10.4025C7.66313 10.4682 7.7 10.5572 7.7 10.65V11.35C7.7 11.4428 7.66313 11.5318 7.59749 11.5975C7.53185 11.6631 7.44283 11.7 7.35 11.7H6.65C6.55717 11.7 6.46815 11.6631 6.40251 11.5975C6.33687 11.5318 6.3 11.4428 6.3 11.35V10.65ZM2.8 7.85C2.8 7.75717 2.83687 7.66815 2.90251 7.60251C2.96815 7.53687 3.05717 7.5 3.15 7.5H3.85C3.94283 7.5 4.03185 7.53687 4.09749 7.60251C4.16313 7.66815 4.2 7.75717 4.2 7.85V8.55C4.2 8.64283 4.16313 8.73185 4.09749 8.79749C4.03185 8.86312 3.94283 8.9 3.85 8.9H3.15C3.05717 8.9 2.96815 8.86312 2.90251 8.79749C2.83687 8.73185 2.8 8.64283 2.8 8.55V7.85ZM2.8 10.65C2.8 10.5572 2.83687 10.4682 2.90251 10.4025C2.96815 10.3369 3.05717 10.3 3.15 10.3H3.85C3.94283 10.3 4.03185 10.3369 4.09749 10.4025C4.16313 10.4682 4.2 10.5572 4.2 10.65V11.35C4.2 11.4428 4.16313 11.5318 4.09749 11.5975C4.03185 11.6631 3.94283 11.7 3.85 11.7H3.15C3.05717 11.7 2.96815 11.6631 2.90251 11.5975C2.83687 11.5318 2.8 11.4428 2.8 11.35V10.65Z" />
                                    <path d="M14 3.3C14 2.9287 13.8525 2.5726 13.5899 2.31005C13.3274 2.0475 12.9713 1.9 12.6 1.9H11.2V1.2C11.2 1.01435 11.1263 0.836301 10.995 0.705025C10.8637 0.57375 10.6857 0.5 10.5 0.5C10.3143 0.5 10.1363 0.57375 10.005 0.705025C9.87375 0.836301 9.8 1.01435 9.8 1.2V1.9H7.7V1.2C7.7 1.01435 7.62625 0.836301 7.49497 0.705025C7.3637 0.57375 7.18565 0.5 7 0.5C6.81435 0.5 6.6363 0.57375 6.50503 0.705025C6.37375 0.836301 6.3 1.01435 6.3 1.2V1.9H4.2V1.2C4.2 1.01435 4.12625 0.836301 3.99497 0.705025C3.8637 0.57375 3.68565 0.5 3.5 0.5C3.31435 0.5 3.1363 0.57375 3.00503 0.705025C2.87375 0.836301 2.8 1.01435 2.8 1.2V1.9H1.4C1.0287 1.9 0.672601 2.0475 0.41005 2.31005C0.1475 2.5726 0 2.9287 0 3.3V4.7H14V3.3Z" />
                                  </mask>
                                  <path d="M0 13.1C0 13.4713 0.1475 13.8274 0.41005 14.0899C0.672601 14.3525 1.0287 14.5 1.4 14.5H12.6C12.9713 14.5 13.3274 14.3525 13.5899 14.0899C13.8525 13.8274 14 13.4713 14 13.1V6.1H0V13.1ZM9.8 7.85C9.8 7.75717 9.83687 7.66815 9.90251 7.60251C9.96815 7.53687 10.0572 7.5 10.15 7.5H10.85C10.9428 7.5 11.0318 7.53687 11.0975 7.60251C11.1631 7.66815 11.2 7.75717 11.2 7.85V8.55C11.2 8.64283 11.1631 8.73185 11.0975 8.79749C11.0318 8.86312 10.9428 8.9 10.85 8.9H10.15C10.0572 8.9 9.96815 8.86312 9.90251 8.79749C9.83687 8.73185 9.8 8.64283 9.8 8.55V7.85ZM9.8 10.65C9.8 10.5572 9.83687 10.4682 9.90251 10.4025C9.96815 10.3369 10.0572 10.3 10.15 10.3H10.85C10.9428 10.3 11.0318 10.3369 11.0975 10.4025C11.1631 10.4682 11.2 10.5572 11.2 10.65V11.35C11.2 11.4428 11.1631 11.5318 11.0975 11.5975C11.0318 11.6631 10.9428 11.7 10.85 11.7H10.15C10.0572 11.7 9.96815 11.6631 9.90251 11.5975C9.83687 11.5318 9.8 11.4428 9.8 11.35V10.65ZM6.3 7.85C6.3 7.75717 6.33687 7.66815 6.40251 7.60251C6.46815 7.53687 6.55717 7.5 6.65 7.5H7.35C7.44283 7.5 7.53185 7.53687 7.59749 7.60251C7.66313 7.66815 7.7 7.75717 7.7 7.85V8.55C7.7 8.64283 7.66313 8.73185 7.59749 8.79749C7.53185 8.86312 7.44283 8.9 7.35 8.9H6.65C6.55717 8.9 6.46815 8.86312 6.40251 8.79749C6.33687 8.73185 6.3 8.64283 6.3 8.55V7.85ZM6.3 10.65C6.3 10.5572 6.33687 10.4682 6.40251 10.4025C6.46815 10.3369 6.55717 10.3 6.65 10.3H7.35C7.44283 10.3 7.53185 10.3369 7.59749 10.4025C7.66313 10.4682 7.7 10.5572 7.7 10.65V11.35C7.7 11.4428 7.66313 11.5318 7.59749 11.5975C7.53185 11.6631 7.44283 11.7 7.35 11.7H6.65C6.55717 11.7 6.46815 11.6631 6.40251 11.5975C6.33687 11.5318 6.3 11.4428 6.3 11.35V10.65ZM2.8 7.85C2.8 7.75717 2.83687 7.66815 2.90251 7.60251C2.96815 7.53687 3.05717 7.5 3.15 7.5H3.85C3.94283 7.5 4.03185 7.53687 4.09749 7.60251C4.16313 7.66815 4.2 7.75717 4.2 7.85V8.55C4.2 8.64283 4.16313 8.73185 4.09749 8.79749C4.03185 8.86312 3.94283 8.9 3.85 8.9H3.15C3.05717 8.9 2.96815 8.86312 2.90251 8.79749C2.83687 8.73185 2.8 8.64283 2.8 8.55V7.85ZM2.8 10.65C2.8 10.5572 2.83687 10.4682 2.90251 10.4025C2.96815 10.3369 3.05717 10.3 3.15 10.3H3.85C3.94283 10.3 4.03185 10.3369 4.09749 10.4025C4.16313 10.4682 4.2 10.5572 4.2 10.65V11.35C4.2 11.4428 4.16313 11.5318 4.09749 11.5975C4.03185 11.6631 3.94283 11.7 3.85 11.7H3.15C3.05717 11.7 2.96815 11.6631 2.90251 11.5975C2.83687 11.5318 2.8 11.4428 2.8 11.35V10.65Z" fill="#6B7280" />
                                  <path d="M14 3.3C14 2.9287 13.8525 2.5726 13.5899 2.31005C13.3274 2.0475 12.9713 1.9 12.6 1.9H11.2V1.2C11.2 1.01435 11.1263 0.836301 10.995 0.705025C10.8637 0.57375 10.6857 0.5 10.5 0.5C10.3143 0.5 10.1363 0.57375 10.005 0.705025C9.87375 0.836301 9.8 1.01435 9.8 1.2V1.9H7.7V1.2C7.7 1.01435 7.62625 0.836301 7.49497 0.705025C7.3637 0.57375 7.18565 0.5 7 0.5C6.81435 0.5 6.6363 0.57375 6.50503 0.705025C6.37375 0.836301 6.3 1.01435 6.3 1.2V1.9H4.2V1.2C4.2 1.01435 4.12625 0.836301 3.99497 0.705025C3.8637 0.57375 3.68565 0.5 3.5 0.5C3.31435 0.5 3.1363 0.57375 3.00503 0.705025C2.87375 0.836301 2.8 1.01435 2.8 1.2V1.9H1.4C1.0287 1.9 0.672601 2.0475 0.41005 2.31005C0.1475 2.5726 0 2.9287 0 3.3V4.7H14V3.3Z" fill="#6B7280" />
                                  <path d="M0 13.1C0 13.4713 0.1475 13.8274 0.41005 14.0899C0.672601 14.3525 1.0287 14.5 1.4 14.5H12.6C12.9713 14.5 13.3274 14.3525 13.5899 14.0899C13.8525 13.8274 14 13.4713 14 13.1V6.1H0V13.1ZM9.8 7.85C9.8 7.75717 9.83687 7.66815 9.90251 7.60251C9.96815 7.53687 10.0572 7.5 10.15 7.5H10.85C10.9428 7.5 11.0318 7.53687 11.0975 7.60251C11.1631 7.66815 11.2 7.75717 11.2 7.85V8.55C11.2 8.64283 11.1631 8.73185 11.0975 8.79749C11.0318 8.86312 10.9428 8.9 10.85 8.9H10.15C10.0572 8.9 9.96815 8.86312 9.90251 8.79749C9.83687 8.73185 9.8 8.64283 9.8 8.55V7.85ZM9.8 10.65C9.8 10.5572 9.83687 10.4682 9.90251 10.4025C9.96815 10.3369 10.0572 10.3 10.15 10.3H10.85C10.9428 10.3 11.0318 10.3369 11.0975 10.4025C11.1631 10.4682 11.2 10.5572 11.2 10.65V11.35C11.2 11.4428 11.1631 11.5318 11.0975 11.5975C11.0318 11.6631 10.9428 11.7 10.85 11.7H10.15C10.0572 11.7 9.96815 11.6631 9.90251 11.5975C9.83687 11.5318 9.8 11.4428 9.8 11.35V10.65ZM6.3 7.85C6.3 7.75717 6.33687 7.66815 6.40251 7.60251C6.46815 7.53687 6.55717 7.5 6.65 7.5H7.35C7.44283 7.5 7.53185 7.53687 7.59749 7.60251C7.66313 7.66815 7.7 7.75717 7.7 7.85V8.55C7.7 8.64283 7.66313 8.73185 7.59749 8.79749C7.53185 8.86312 7.44283 8.9 7.35 8.9H6.65C6.55717 8.9 6.46815 8.86312 6.40251 8.79749C6.33687 8.73185 6.3 8.64283 6.3 8.55V7.85ZM6.3 10.65C6.3 10.5572 6.33687 10.4682 6.40251 10.4025C6.46815 10.3369 6.55717 10.3 6.65 10.3H7.35C7.44283 10.3 7.53185 10.3369 7.59749 10.4025C7.66313 10.4682 7.7 10.5572 7.7 10.65V11.35C7.7 11.4428 7.66313 11.5318 7.59749 11.5975C7.53185 11.6631 7.44283 11.7 7.35 11.7H6.65C6.55717 11.7 6.46815 11.6631 6.40251 11.5975C6.33687 11.5318 6.3 11.4428 6.3 11.35V10.65ZM2.8 7.85C2.8 7.75717 2.83687 7.66815 2.90251 7.60251C2.96815 7.53687 3.05717 7.5 3.15 7.5H3.85C3.94283 7.5 4.03185 7.53687 4.09749 7.60251C4.16313 7.66815 4.2 7.75717 4.2 7.85V8.55C4.2 8.64283 4.16313 8.73185 4.09749 8.79749C4.03185 8.86312 3.94283 8.9 3.85 8.9H3.15C3.05717 8.9 2.96815 8.86312 2.90251 8.79749C2.83687 8.73185 2.8 8.64283 2.8 8.55V7.85ZM2.8 10.65C2.8 10.5572 2.83687 10.4682 2.90251 10.4025C2.96815 10.3369 3.05717 10.3 3.15 10.3H3.85C3.94283 10.3 4.03185 10.3369 4.09749 10.4025C4.16313 10.4682 4.2 10.5572 4.2 10.65V11.35C4.2 11.4428 4.16313 11.5318 4.09749 11.5975C4.03185 11.6631 3.94283 11.7 3.85 11.7H3.15C3.05717 11.7 2.96815 11.6631 2.90251 11.5975C2.83687 11.5318 2.8 11.4428 2.8 11.35V10.65Z" stroke="#6B7280" strokeWidth="2" mask="url(#path-1-inside-1_518_12037)" />
                                  <path d="M14 3.3C14 2.9287 13.8525 2.5726 13.5899 2.31005C13.3274 2.0475 12.9713 1.9 12.6 1.9H11.2V1.2C11.2 1.01435 11.1263 0.836301 10.995 0.705025C10.8637 0.57375 10.6857 0.5 10.5 0.5C10.3143 0.5 10.1363 0.57375 10.005 0.705025C9.87375 0.836301 9.8 1.01435 9.8 1.2V1.9H7.7V1.2C7.7 1.01435 7.62625 0.836301 7.49497 0.705025C7.3637 0.57375 7.18565 0.5 7 0.5C6.81435 0.5 6.6363 0.57375 6.50503 0.705025C6.37375 0.836301 6.3 1.01435 6.3 1.2V1.9H4.2V1.2C4.2 1.01435 4.12625 0.836301 3.99497 0.705025C3.8637 0.57375 3.68565 0.5 3.5 0.5C3.31435 0.5 3.1363 0.57375 3.00503 0.705025C2.87375 0.836301 2.8 1.01435 2.8 1.2V1.9H1.4C1.0287 1.9 0.672601 2.0475 0.41005 2.31005C0.1475 2.5726 0 2.9287 0 3.3V4.7H14V3.3Z" stroke="#6B7280" strokeWidth="2" mask="url(#path-1-inside-1_518_12037)" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_518_12037">
                                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <Datetime
                              timeFormat="HH:mm:ss"
                              dateFormat="YYYY-MM-DD"
                              className="static"
                              inputProps={{ className: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 rounded-lg' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="todate" value="Đến ngày" />
                      </div>
                      <div className="relative">
                        <div className="flex">
                          <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <g clipPath="url(#clip0_518_12037)">
                                  <mask id="path-1-inside-1_518_12037" fill="white">
                                    <path d="M0 13.1C0 13.4713 0.1475 13.8274 0.41005 14.0899C0.672601 14.3525 1.0287 14.5 1.4 14.5H12.6C12.9713 14.5 13.3274 14.3525 13.5899 14.0899C13.8525 13.8274 14 13.4713 14 13.1V6.1H0V13.1ZM9.8 7.85C9.8 7.75717 9.83687 7.66815 9.90251 7.60251C9.96815 7.53687 10.0572 7.5 10.15 7.5H10.85C10.9428 7.5 11.0318 7.53687 11.0975 7.60251C11.1631 7.66815 11.2 7.75717 11.2 7.85V8.55C11.2 8.64283 11.1631 8.73185 11.0975 8.79749C11.0318 8.86312 10.9428 8.9 10.85 8.9H10.15C10.0572 8.9 9.96815 8.86312 9.90251 8.79749C9.83687 8.73185 9.8 8.64283 9.8 8.55V7.85ZM9.8 10.65C9.8 10.5572 9.83687 10.4682 9.90251 10.4025C9.96815 10.3369 10.0572 10.3 10.15 10.3H10.85C10.9428 10.3 11.0318 10.3369 11.0975 10.4025C11.1631 10.4682 11.2 10.5572 11.2 10.65V11.35C11.2 11.4428 11.1631 11.5318 11.0975 11.5975C11.0318 11.6631 10.9428 11.7 10.85 11.7H10.15C10.0572 11.7 9.96815 11.6631 9.90251 11.5975C9.83687 11.5318 9.8 11.4428 9.8 11.35V10.65ZM6.3 7.85C6.3 7.75717 6.33687 7.66815 6.40251 7.60251C6.46815 7.53687 6.55717 7.5 6.65 7.5H7.35C7.44283 7.5 7.53185 7.53687 7.59749 7.60251C7.66313 7.66815 7.7 7.75717 7.7 7.85V8.55C7.7 8.64283 7.66313 8.73185 7.59749 8.79749C7.53185 8.86312 7.44283 8.9 7.35 8.9H6.65C6.55717 8.9 6.46815 8.86312 6.40251 8.79749C6.33687 8.73185 6.3 8.64283 6.3 8.55V7.85ZM6.3 10.65C6.3 10.5572 6.33687 10.4682 6.40251 10.4025C6.46815 10.3369 6.55717 10.3 6.65 10.3H7.35C7.44283 10.3 7.53185 10.3369 7.59749 10.4025C7.66313 10.4682 7.7 10.5572 7.7 10.65V11.35C7.7 11.4428 7.66313 11.5318 7.59749 11.5975C7.53185 11.6631 7.44283 11.7 7.35 11.7H6.65C6.55717 11.7 6.46815 11.6631 6.40251 11.5975C6.33687 11.5318 6.3 11.4428 6.3 11.35V10.65ZM2.8 7.85C2.8 7.75717 2.83687 7.66815 2.90251 7.60251C2.96815 7.53687 3.05717 7.5 3.15 7.5H3.85C3.94283 7.5 4.03185 7.53687 4.09749 7.60251C4.16313 7.66815 4.2 7.75717 4.2 7.85V8.55C4.2 8.64283 4.16313 8.73185 4.09749 8.79749C4.03185 8.86312 3.94283 8.9 3.85 8.9H3.15C3.05717 8.9 2.96815 8.86312 2.90251 8.79749C2.83687 8.73185 2.8 8.64283 2.8 8.55V7.85ZM2.8 10.65C2.8 10.5572 2.83687 10.4682 2.90251 10.4025C2.96815 10.3369 3.05717 10.3 3.15 10.3H3.85C3.94283 10.3 4.03185 10.3369 4.09749 10.4025C4.16313 10.4682 4.2 10.5572 4.2 10.65V11.35C4.2 11.4428 4.16313 11.5318 4.09749 11.5975C4.03185 11.6631 3.94283 11.7 3.85 11.7H3.15C3.05717 11.7 2.96815 11.6631 2.90251 11.5975C2.83687 11.5318 2.8 11.4428 2.8 11.35V10.65Z" />
                                    <path d="M14 3.3C14 2.9287 13.8525 2.5726 13.5899 2.31005C13.3274 2.0475 12.9713 1.9 12.6 1.9H11.2V1.2C11.2 1.01435 11.1263 0.836301 10.995 0.705025C10.8637 0.57375 10.6857 0.5 10.5 0.5C10.3143 0.5 10.1363 0.57375 10.005 0.705025C9.87375 0.836301 9.8 1.01435 9.8 1.2V1.9H7.7V1.2C7.7 1.01435 7.62625 0.836301 7.49497 0.705025C7.3637 0.57375 7.18565 0.5 7 0.5C6.81435 0.5 6.6363 0.57375 6.50503 0.705025C6.37375 0.836301 6.3 1.01435 6.3 1.2V1.9H4.2V1.2C4.2 1.01435 4.12625 0.836301 3.99497 0.705025C3.8637 0.57375 3.68565 0.5 3.5 0.5C3.31435 0.5 3.1363 0.57375 3.00503 0.705025C2.87375 0.836301 2.8 1.01435 2.8 1.2V1.9H1.4C1.0287 1.9 0.672601 2.0475 0.41005 2.31005C0.1475 2.5726 0 2.9287 0 3.3V4.7H14V3.3Z" />
                                  </mask>
                                  <path d="M0 13.1C0 13.4713 0.1475 13.8274 0.41005 14.0899C0.672601 14.3525 1.0287 14.5 1.4 14.5H12.6C12.9713 14.5 13.3274 14.3525 13.5899 14.0899C13.8525 13.8274 14 13.4713 14 13.1V6.1H0V13.1ZM9.8 7.85C9.8 7.75717 9.83687 7.66815 9.90251 7.60251C9.96815 7.53687 10.0572 7.5 10.15 7.5H10.85C10.9428 7.5 11.0318 7.53687 11.0975 7.60251C11.1631 7.66815 11.2 7.75717 11.2 7.85V8.55C11.2 8.64283 11.1631 8.73185 11.0975 8.79749C11.0318 8.86312 10.9428 8.9 10.85 8.9H10.15C10.0572 8.9 9.96815 8.86312 9.90251 8.79749C9.83687 8.73185 9.8 8.64283 9.8 8.55V7.85ZM9.8 10.65C9.8 10.5572 9.83687 10.4682 9.90251 10.4025C9.96815 10.3369 10.0572 10.3 10.15 10.3H10.85C10.9428 10.3 11.0318 10.3369 11.0975 10.4025C11.1631 10.4682 11.2 10.5572 11.2 10.65V11.35C11.2 11.4428 11.1631 11.5318 11.0975 11.5975C11.0318 11.6631 10.9428 11.7 10.85 11.7H10.15C10.0572 11.7 9.96815 11.6631 9.90251 11.5975C9.83687 11.5318 9.8 11.4428 9.8 11.35V10.65ZM6.3 7.85C6.3 7.75717 6.33687 7.66815 6.40251 7.60251C6.46815 7.53687 6.55717 7.5 6.65 7.5H7.35C7.44283 7.5 7.53185 7.53687 7.59749 7.60251C7.66313 7.66815 7.7 7.75717 7.7 7.85V8.55C7.7 8.64283 7.66313 8.73185 7.59749 8.79749C7.53185 8.86312 7.44283 8.9 7.35 8.9H6.65C6.55717 8.9 6.46815 8.86312 6.40251 8.79749C6.33687 8.73185 6.3 8.64283 6.3 8.55V7.85ZM6.3 10.65C6.3 10.5572 6.33687 10.4682 6.40251 10.4025C6.46815 10.3369 6.55717 10.3 6.65 10.3H7.35C7.44283 10.3 7.53185 10.3369 7.59749 10.4025C7.66313 10.4682 7.7 10.5572 7.7 10.65V11.35C7.7 11.4428 7.66313 11.5318 7.59749 11.5975C7.53185 11.6631 7.44283 11.7 7.35 11.7H6.65C6.55717 11.7 6.46815 11.6631 6.40251 11.5975C6.33687 11.5318 6.3 11.4428 6.3 11.35V10.65ZM2.8 7.85C2.8 7.75717 2.83687 7.66815 2.90251 7.60251C2.96815 7.53687 3.05717 7.5 3.15 7.5H3.85C3.94283 7.5 4.03185 7.53687 4.09749 7.60251C4.16313 7.66815 4.2 7.75717 4.2 7.85V8.55C4.2 8.64283 4.16313 8.73185 4.09749 8.79749C4.03185 8.86312 3.94283 8.9 3.85 8.9H3.15C3.05717 8.9 2.96815 8.86312 2.90251 8.79749C2.83687 8.73185 2.8 8.64283 2.8 8.55V7.85ZM2.8 10.65C2.8 10.5572 2.83687 10.4682 2.90251 10.4025C2.96815 10.3369 3.05717 10.3 3.15 10.3H3.85C3.94283 10.3 4.03185 10.3369 4.09749 10.4025C4.16313 10.4682 4.2 10.5572 4.2 10.65V11.35C4.2 11.4428 4.16313 11.5318 4.09749 11.5975C4.03185 11.6631 3.94283 11.7 3.85 11.7H3.15C3.05717 11.7 2.96815 11.6631 2.90251 11.5975C2.83687 11.5318 2.8 11.4428 2.8 11.35V10.65Z" fill="#6B7280" />
                                  <path d="M14 3.3C14 2.9287 13.8525 2.5726 13.5899 2.31005C13.3274 2.0475 12.9713 1.9 12.6 1.9H11.2V1.2C11.2 1.01435 11.1263 0.836301 10.995 0.705025C10.8637 0.57375 10.6857 0.5 10.5 0.5C10.3143 0.5 10.1363 0.57375 10.005 0.705025C9.87375 0.836301 9.8 1.01435 9.8 1.2V1.9H7.7V1.2C7.7 1.01435 7.62625 0.836301 7.49497 0.705025C7.3637 0.57375 7.18565 0.5 7 0.5C6.81435 0.5 6.6363 0.57375 6.50503 0.705025C6.37375 0.836301 6.3 1.01435 6.3 1.2V1.9H4.2V1.2C4.2 1.01435 4.12625 0.836301 3.99497 0.705025C3.8637 0.57375 3.68565 0.5 3.5 0.5C3.31435 0.5 3.1363 0.57375 3.00503 0.705025C2.87375 0.836301 2.8 1.01435 2.8 1.2V1.9H1.4C1.0287 1.9 0.672601 2.0475 0.41005 2.31005C0.1475 2.5726 0 2.9287 0 3.3V4.7H14V3.3Z" fill="#6B7280" />
                                  <path d="M0 13.1C0 13.4713 0.1475 13.8274 0.41005 14.0899C0.672601 14.3525 1.0287 14.5 1.4 14.5H12.6C12.9713 14.5 13.3274 14.3525 13.5899 14.0899C13.8525 13.8274 14 13.4713 14 13.1V6.1H0V13.1ZM9.8 7.85C9.8 7.75717 9.83687 7.66815 9.90251 7.60251C9.96815 7.53687 10.0572 7.5 10.15 7.5H10.85C10.9428 7.5 11.0318 7.53687 11.0975 7.60251C11.1631 7.66815 11.2 7.75717 11.2 7.85V8.55C11.2 8.64283 11.1631 8.73185 11.0975 8.79749C11.0318 8.86312 10.9428 8.9 10.85 8.9H10.15C10.0572 8.9 9.96815 8.86312 9.90251 8.79749C9.83687 8.73185 9.8 8.64283 9.8 8.55V7.85ZM9.8 10.65C9.8 10.5572 9.83687 10.4682 9.90251 10.4025C9.96815 10.3369 10.0572 10.3 10.15 10.3H10.85C10.9428 10.3 11.0318 10.3369 11.0975 10.4025C11.1631 10.4682 11.2 10.5572 11.2 10.65V11.35C11.2 11.4428 11.1631 11.5318 11.0975 11.5975C11.0318 11.6631 10.9428 11.7 10.85 11.7H10.15C10.0572 11.7 9.96815 11.6631 9.90251 11.5975C9.83687 11.5318 9.8 11.4428 9.8 11.35V10.65ZM6.3 7.85C6.3 7.75717 6.33687 7.66815 6.40251 7.60251C6.46815 7.53687 6.55717 7.5 6.65 7.5H7.35C7.44283 7.5 7.53185 7.53687 7.59749 7.60251C7.66313 7.66815 7.7 7.75717 7.7 7.85V8.55C7.7 8.64283 7.66313 8.73185 7.59749 8.79749C7.53185 8.86312 7.44283 8.9 7.35 8.9H6.65C6.55717 8.9 6.46815 8.86312 6.40251 8.79749C6.33687 8.73185 6.3 8.64283 6.3 8.55V7.85ZM6.3 10.65C6.3 10.5572 6.33687 10.4682 6.40251 10.4025C6.46815 10.3369 6.55717 10.3 6.65 10.3H7.35C7.44283 10.3 7.53185 10.3369 7.59749 10.4025C7.66313 10.4682 7.7 10.5572 7.7 10.65V11.35C7.7 11.4428 7.66313 11.5318 7.59749 11.5975C7.53185 11.6631 7.44283 11.7 7.35 11.7H6.65C6.55717 11.7 6.46815 11.6631 6.40251 11.5975C6.33687 11.5318 6.3 11.4428 6.3 11.35V10.65ZM2.8 7.85C2.8 7.75717 2.83687 7.66815 2.90251 7.60251C2.96815 7.53687 3.05717 7.5 3.15 7.5H3.85C3.94283 7.5 4.03185 7.53687 4.09749 7.60251C4.16313 7.66815 4.2 7.75717 4.2 7.85V8.55C4.2 8.64283 4.16313 8.73185 4.09749 8.79749C4.03185 8.86312 3.94283 8.9 3.85 8.9H3.15C3.05717 8.9 2.96815 8.86312 2.90251 8.79749C2.83687 8.73185 2.8 8.64283 2.8 8.55V7.85ZM2.8 10.65C2.8 10.5572 2.83687 10.4682 2.90251 10.4025C2.96815 10.3369 3.05717 10.3 3.15 10.3H3.85C3.94283 10.3 4.03185 10.3369 4.09749 10.4025C4.16313 10.4682 4.2 10.5572 4.2 10.65V11.35C4.2 11.4428 4.16313 11.5318 4.09749 11.5975C4.03185 11.6631 3.94283 11.7 3.85 11.7H3.15C3.05717 11.7 2.96815 11.6631 2.90251 11.5975C2.83687 11.5318 2.8 11.4428 2.8 11.35V10.65Z" stroke="#6B7280" strokeWidth="2" mask="url(#path-1-inside-1_518_12037)" />
                                  <path d="M14 3.3C14 2.9287 13.8525 2.5726 13.5899 2.31005C13.3274 2.0475 12.9713 1.9 12.6 1.9H11.2V1.2C11.2 1.01435 11.1263 0.836301 10.995 0.705025C10.8637 0.57375 10.6857 0.5 10.5 0.5C10.3143 0.5 10.1363 0.57375 10.005 0.705025C9.87375 0.836301 9.8 1.01435 9.8 1.2V1.9H7.7V1.2C7.7 1.01435 7.62625 0.836301 7.49497 0.705025C7.3637 0.57375 7.18565 0.5 7 0.5C6.81435 0.5 6.6363 0.57375 6.50503 0.705025C6.37375 0.836301 6.3 1.01435 6.3 1.2V1.9H4.2V1.2C4.2 1.01435 4.12625 0.836301 3.99497 0.705025C3.8637 0.57375 3.68565 0.5 3.5 0.5C3.31435 0.5 3.1363 0.57375 3.00503 0.705025C2.87375 0.836301 2.8 1.01435 2.8 1.2V1.9H1.4C1.0287 1.9 0.672601 2.0475 0.41005 2.31005C0.1475 2.5726 0 2.9287 0 3.3V4.7H14V3.3Z" stroke="#6B7280" strokeWidth="2" mask="url(#path-1-inside-1_518_12037)" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_518_12037">
                                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <Datetime
                              timeFormat="HH:mm:ss"
                              dateFormat="YYYY-MM-DD"
                              className="static"
                              inputProps={{ className: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 rounded-lg' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="state" value="Trạng thái xử lý" />
                      <Select id="state" required className="mt-2">
                        <option>Tất cả</option>
                        <option>Đã xử lý</option>
                        <option>Chưa xử lý</option>
                      </Select>
                    </div>
                    <div className="mt-2">
                      <Accordion collapseAll
                        className="border-none"
                      >
                        <Accordion.Panel>
                          <Accordion.Title className="pl-0 pr-1 focus:ring-white focus:bg-white">Thông tin phương tiện</Accordion.Title>
                          <Accordion.Content className="pl-0 pt-2">
                            <div>
                              <Label htmlFor="state" value="Loại xe" />
                              <Select id="state" required className="mt-2">
                                <option>Chọn loại xe</option>
                                <option>Xe loại 1</option>
                                <option>Xe loại 2</option>
                              </Select>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="state" value="Cỡ xe" />
                              <Select id="state" required className="mt-2">
                                <option>Chọn cỡ xe</option>
                                <option>Xe loại 1</option>
                                <option>Xe loại 2</option>
                              </Select>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="state" value="Màu xe" />
                              <Select id="state" required className="mt-2">
                                <option>Chọn màu xe</option>
                                <option>Xe loại 1</option>
                                <option>Xe loại 2</option>
                              </Select>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="state" value="Màu biển" />
                              <Select id="state" required className="mt-2">
                                <option>Chọn màu biển</option>
                                <option>Xe loại 1</option>
                                <option>Xe loại 2</option>
                              </Select>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="state" value="Thương hiệu" />
                              <Select id="state" required className="mt-2">
                                <option>Chọn thương hiệu</option>
                                <option>Xe loại 1</option>
                                <option>Xe loại 2</option>
                              </Select>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="state" value="Độ rộng đầu xe (từ - đến) (m)" />
                              <div className="grid grid-cols-5 gap-4 mt-2">
                                <div className="block col-span-2">
                                  <TextInput id="username3" required />
                                </div>
                                <div className="col-span-1 text-center inline-block align-middle">
                                  <p className="inline-block align-middle"> - </p>
                                </div>
                                <div className="block col-span-2">
                                  <TextInput id="username3" required />
                                </div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Label htmlFor="state" value="Đặc điểm" />
                              <Textarea className="mt-2" id="comment" placeholder="Leave a comment..." required rows={3} />
                            </div>
                          </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                          <Accordion.Title className="pl-0 pr-1">Vận tốc và hướng đi</Accordion.Title>
                          <Accordion.Content>11212</Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                          <Accordion.Title className="pl-0 pr-1 pb-4">Camera</Accordion.Title>
                          <Accordion.Content>11212</Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    </div>
                  </form>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="block col-span-2">
                      <Button color="blue" size="sm">Áp dụng</Button>
                    </div>
                    <div className="block col-start-4 col-span-2 text-right ml-auto">
                      <Button className="font-normal" color="white" size="sm">Xóa lọc</Button>
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
          <div className="mb-1 block md:col-span-7 md:h-full">
            <div className="rounded bg-white md:h-full">
              <div className="header-table pt-4 pb-4">
                <div className="grid grid-cols-1 pr-5 md:pr-2 md:grid-cols-2 gap-4">
                  <div className="mb-1 block col-span-1 ml-4 md:mr-2">
                    <TextInput id="plate" type="text" icon={IoSearchOutline} placeholder="Search for license plate" required />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 py-4">
                <div className="block col-span-1 mt-2">
                  <div className="overflow-x-auto w-full">
                    <Drawer
                      bodyscrolling="true"
                      backdrop={false}
                      open={showDetailViolation}
                      onClose={handleCloseDetailViolation}
                      position="right"
                      theme={{
                        root: {
                          base: 'fixed z-40 overflow-y-auto bg-white pb-4 pt-4 transition-transform dark:bg-gray-800',
                          position: {
                            right: {
                              on: 'right-0 top-0 h-screen w-3/5 transform-none'
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
                          <Drawer.Header title="Chi tiết vi phạm ID: 1111" />
                        </div>
                        <div className="pt-1">
                          <Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge>
                        </div>
                      </div>
                      <HR className="mt-2 mb-0" />
                      <Drawer.Items>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                          <div className="md:col-span-2">
                            <div className="flex flex-col gap-4">
                              <div>
                                <Label htmlFor="fromdate" value="Biển số" />
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
                                  placeholder="30H2305"
                                  className="mt-2"
                                  required />
                              </div>
                              <div>
                                <Label htmlFor="fromdate" value="Hành vi vi phạm" />
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
                              <div>
                                <p className="text-gray-500 text-sm font-normal">Thời điểm</p>
                                <p className="text-gray-900 text-sm font-normal">2024/07/25 18:10:30</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm font-normal">Vị trí</p>
                                <p className="text-gray-900 text-sm font-normal">Điểm bắt phân làn đường KP. Tân Lộc, P. Phước Hòa, TX. Phú Mỹ_Km 50+828_QL51/VP1N009</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm font-normal">Căn cứ xử phạt</p>
                                <p className="text-gray-900 text-sm font-normal">Nghị định số 100/2019/NĐ-CP của Chính phủ: Quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ và đường sắt</p>
                              </div>
                              <div>
                                <div className="flex flex-row gap-2">
                                  <div>
                                    <Button color="blue" size="sm">
                                      <svg className="mr-2 h-5 w-5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="check">
                                          <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M10.0215 3.67592C10.134 3.78843 10.1972 3.94102 10.1972 4.10012C10.1972 4.25921 10.134 4.4118 10.0215 4.52432L5.22151 9.32432C5.109 9.4368 4.95641 9.49999 4.79731 9.49999C4.63822 9.49999 4.48563 9.4368 4.37311 9.32432L1.97311 6.92432C1.86382 6.81115 1.80334 6.65959 1.80471 6.50228C1.80608 6.34496 1.86918 6.19447 1.98042 6.08323C2.09167 5.97198 2.24216 5.90888 2.39947 5.90751C2.55679 5.90614 2.70835 5.96662 2.82151 6.07592L4.79731 8.05172L9.17312 3.67592C9.28563 3.56343 9.43822 3.50024 9.59731 3.50024C9.75641 3.50024 9.909 3.56343 10.0215 3.67592Z" fill="white" />
                                        </g>
                                      </svg>
                                      Áp dụng
                                    </Button>
                                  </div>
                                  <div>
                                    <Button color="light" size="sm">
                                      <svg className="mr-2 h-5 w-5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="ban">
                                          <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M8.08933 9.43395C7.39593 9.92682 6.55041 10.1582 5.70267 10.0871C4.85494 10.016 4.05979 9.64693 3.45821 9.04542C2.85663 8.44391 2.4875 7.6488 2.41628 6.80108C2.34506 5.95336 2.57634 5.1078 3.06913 4.41435L8.08933 9.43515V9.43395ZM8.93773 8.58555L3.91753 3.56595C4.61095 3.07276 5.45666 2.84113 6.30462 2.91217C7.15258 2.98321 7.94796 3.35232 8.54966 3.95402C9.15135 4.55572 9.52046 5.3511 9.5915 6.19906C9.66254 7.04702 9.43092 7.89273 8.93773 8.58615V8.58555ZM10.8031 6.49995C10.8031 7.77299 10.2974 8.99389 9.39724 9.89406C8.49706 10.7942 7.27616 11.3 6.00313 11.3C4.73009 11.3 3.50919 10.7942 2.60901 9.89406C1.70884 8.99389 1.20313 7.77299 1.20312 6.49995C1.20313 5.22691 1.70884 4.00601 2.60901 3.10584C3.50919 2.20566 4.73009 1.69995 6.00313 1.69995C7.27616 1.69995 8.49706 2.20566 9.39724 3.10584C10.2974 4.00601 10.8031 5.22691 10.8031 6.49995Z" fill="#111928" />
                                        </g>
                                      </svg>

                                      Loại bỏ
                                    </Button>
                                  </div>
                                </div>

                              </div>
                            </div>
                            <HR className="my-6" />
                            <div className="flex flex-col pb-3">
                              <div>
                                <p className="text-base font-semibold">Thông tin chủ sở hữu</p>
                              </div>
                              <div className="mt-3">
                                <p className="text-gray-500 text-sm font-normal">Chủ sở hũu</p>
                                <p className="text-gray-900 text-sm font-normal uppercase">hoàng anh</p>
                              </div>
                              <div className="mt-4">
                                <p className="text-gray-500 text-sm font-normal">Địa chỉ</p>
                                <p className="text-gray-900 text-sm font-normal">154 P. Bà Triệu, Nguyễn Du, Hai Bà Trưng, Hà Nội</p>
                              </div>
                              <div className="mt-6">
                                <p className="text-base font-semibold">Thông tin xe</p>
                              </div>
                              <div className="mt-3">
                                <p className="text-gray-500 text-sm font-normal">Loại xe</p>
                                <p className="text-gray-900 text-sm font-normal">Ô tô</p>
                              </div>
                              <div className="mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-gray-500 text-sm font-normal">Thương hiệu xe</p>
                                    <p className="text-gray-900 text-sm font-normal uppercase">honda</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500 text-sm font-normal">Số loại</p>
                                    <p className="text-gray-900 text-sm font-normal uppercase">city</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-gray-500 text-sm font-normal">Màu xe</p>
                                    <p className="text-gray-900 text-sm font-normal">Đen</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500 text-sm font-normal">Số chỗ</p>
                                    <p className="text-gray-900 text-sm font-normal uppercase">5 (Ngồi: 5)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:col-span-3 bg-gray-100 rounded pt-4">
                            <div className="flex flex-col gap-4">
                              <div>
                                <div className="flex flex-row gap-4 pl-4 pr-4">
                                  <div>
                                    <img src={image1} className="h-auto w-auto rounded-lg" />
                                  </div>
                                  <div>
                                    <img src={image2} className="h-auto w-auto rounded-lg" />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="flex flex-row gap-4 pl-4 pr-4">
                                  <div>
                                    <img src={noimage} className="h-auto w-auto rounded-lg" />
                                  </div>
                                  <div>
                                    <img src={noimage} className="h-auto w-auto rounded-lg" />
                                  </div>
                                </div>
                              </div>
                              <div className="pl-4 pr-4">
                                <ReactPlayer
                                  width="auto"
                                  url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Drawer.Items>
                    </Drawer>
                    <Table
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
                      <Table.Head className="font-semibold text-xs text-gr uppercase">
                        <Table.HeadCell>ID</Table.HeadCell>
                        <Table.HeadCell>THỜI ĐIỂM</Table.HeadCell>
                        <Table.HeadCell>BIỂN SỐ</Table.HeadCell>
                        <Table.HeadCell>VỊ TRÍ</Table.HeadCell>
                        <Table.HeadCell>TRẠNG THÁI</Table.HeadCell>
                        <Table.HeadCell>CẢNH BÁO</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y whitespace-nowrap	">
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          onClick={e => GetDetailViolation()}
                        >
                          <Table.Cell><p className="text-sm text-gray-900 font-semibold">14687</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">2024/07/24 17:47:07</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">30P1300</p></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Nút giao ngã tư Đội Cấn - Giang Văn Minh</p></Table.Cell>
                          <Table.Cell><Badge size="xs" className="bg-primary-100" href="#">Đã phát hiện</Badge></Table.Cell>
                          <Table.Cell><p className="text-sm text-gray-900 font-normal">Không chấp hành hiệu lệnh đèn tín hiệu giao thông</p></Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
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