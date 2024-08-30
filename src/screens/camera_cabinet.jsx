import { HR, Table, Select, Button, TextInput, Drawer, Label, Radio, Checkbox, Modal, Textarea, Pagination } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SettingsMapContainer from "../components/MapContainer";
import SidebarSettings from "../components/SidebarSettings";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export default function CameraCabinet() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [showFormAddCamera, setShowFormAddCamera] = useState(false);
  const handleCloseFormAddCamera = () => setShowFormAddCamera(false);
  const onShowFormAddCamera = () => setShowFormAddCamera(true);

  const [openModalDeleteCamera, setOpenModalDeleteCamera] = useState(false);
  const [classNameDrawer, setClassNameDrawer] = useState('');

  const [showDataTable, setShowDataTable] = useState(false);


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
      <section className="pb-3 h-screen">
        <div className="grid grid-cols-1 h-full md:grid-cols-12">
          <div className="pt-3 block md:col-span-2 pl-2">
            <SidebarSettings />
          </div>
          <div className="pl-4  block md:col-span-10 h-full bg-gray-100 pb-2">
            <div className="flex flex-col pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
                <div className="	text-sl font-semibold pt-4">Tủ camera</div>
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
                    </svg>Thêm tủ camera</Button>
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
                      <div className="mt-4 bg-gray-200 ">
                        111
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