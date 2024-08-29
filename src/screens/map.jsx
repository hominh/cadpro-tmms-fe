import { HR, TextInput, Button, Label, Select, Accordion, Textarea, Sidebar, Drawer, ToggleSwitch, Timeline } from "flowbite-react";
import { useState, useEffect } from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { MapContainer, TileLayer} from 'react-leaflet'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { IoSearchOutline } from "react-icons/io5";
import { isMobile } from 'react-device-detect';
import { HiBars2, HiSquaresPlus } from "react-icons/hi2";
import { Icon } from "leaflet";
import camfixed from '../assets/cam-fixed.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import ReactPlayer from 'react-player'

export default function Map() {
  const [switchImage, setSwitchImage] = useState(false);
  const [switchCamera, setSwitchCamera] = useState(false);
  const [switchViolationVehicle, setSwitchViolationVehicle] = useState(false);
  const [switchTrafficcounter, setSwitchTrafficcounter] = useState(false);
  const [switchTrafficlight, setSwitchTrafficlight] = useState(false);
  const [switchTrafficvolume, setSwitchTrafficvolume] = useState(false);
  const [switchCameracabinet, setSwitchCameracabinet] = useState(false);
  const [switchInformationcabinet, setSwitchInformationcabinet] = useState(false);
  const [switchControlcabinet, setSwitchControlcabinet] = useState(false);
  const [switchPowercabinet, setSwitchPowercabinet] = useState(false);
  const [switchArea, setSwitchArea] = useState(false);
  const [switchGreenWaveLine, setSwitchGreenWaveLine] = useState(false);
  const [switchWarning, setSwitchWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const [position, setPosition] = useState('left');
  const [classNameDrawer, setClassNameDrawer] = useState('');
  const [centerMap, setCenterMap] = useState([10.502307, 107.169205]);
  const [positionMap1, setPositionMap1] = useState([10.502307, 107.169205]);

  const [activeViolationTime1h, setActiveViolationTime1h] = useState(false);
  const [activeViolationTime6h, setActiveViolationTime6h] = useState(false);
  const [activeViolationTime12h, setActiveViolationTime12h] = useState(false);
  const [activeViolationTime48h, setActiveViolationTime48h] = useState(false);
  const [activeViolationTime72h, setActiveViolationTime72h] = useState(false);
  const [activeViolationTime1w, setActiveViolationTime1w] = useState(false);

  const [showFilterDetailBlock, setShowFilterDetailBlock] = useState(true);
  const [showTimeLineVehicle, setShowTimeLineVehicle] = useState(false);

  const onSetActiveViolationTime1h = () => {
    setActiveViolationTime1h(!activeViolationTime1h);
  };

  const onSetActiveViolationTime6h = () => {
    setActiveViolationTime6h(!activeViolationTime6h);
  };

  const onSetActiveViolationTime12h = () => {
    setActiveViolationTime12h(!activeViolationTime12h);
  };

  const onSetActiveViolationTime48h = () => {
    setActiveViolationTime48h(!activeViolationTime48h);
  };

  const onSetActiveViolationTime72h = () => {
    setActiveViolationTime72h(!activeViolationTime72h);
  };

  const onSetActiveViolationTime1w = () => {
    setActiveViolationTime1w(!activeViolationTime1w);
  };

  const customIcon = new Icon({
    iconUrl: camfixed,
    iconSize: [24, 16]
  });

  const onShowTimeLineVehicle = () => {
    setShowTimeLineVehicle(!showTimeLineVehicle);
  };

  const handlePosition = () => {
    if (isMobile) {
      setIsOpen(false);
      setPosition('bottom');
      setClassNameDrawer('h-full fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800');
    }
    else {
      setIsOpen(true)
      setPosition('left');
      setClassNameDrawer('bg-white transition-transform dark:bg-gray-800');
    }
  };

  useEffect(() => {
    handlePosition();
  }, []);

  return (
    <>
      <div>
        <HR className="my-0" />
      </div>
      <div className="flex h-full md:overflow-y-auto">
        <div className="flex h-full basis-2/5 z-50">
          <Drawer
            edge
            className="flex md:w-full md:h-full"
            bodyscrolling="true"
            backdrop={false}
            open={isOpen}
            onClose={handleClose}
            position={position}
            theme={{
              root: {
                base: `${classNameDrawer}`,
                edge: "bottom-12",
              },
              header: {
                inner: {
                  closeButton: 'absolute end-4.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
                  titleText: 'mb-4 inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-400',
                  titleIcon: 'hidden'
                }
              }
            }}
          >
            {isMobile ? (
              <Drawer.Header
                closeIcon={HiBars2}
                titleIcon={HiSquaresPlus}
                onClick={() => setIsOpen(!isOpen)}
                className=""
              />
            ) : null}
            <Drawer.Items className="w-full">
              <div className="flex flex-row gap-6 h-full md:mt-0 mt-4">
                <div className="basis-2/5">
                  <section className="md:pl-4 pt-4 sm:px-4">
                    <p className="font-medium text-sm text-gray-500">Chức năng</p>
                  </section>
                  <div className="md:ml-3">
                    <Sidebar
                      className="h-auto w-auto mr-4 ml-3 pt-3"
                      theme={{
                        root: {
                          inner: 'overflow-y-auto overflow-x-hidden rounded dark:bg-gray-800'
                        },
                        edge: "bottom-16",
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
                          <Sidebar.Item key={1} id="1" className="">
                            Theo dõi phương tiện
                          </Sidebar.Item>
                          <Sidebar.Item key={2} id="2" className="">
                            Theo dõi vi phạm
                          </Sidebar.Item>
                        </Sidebar.ItemGroup>
                      </Sidebar.Items>
                    </Sidebar>
                    <HR className="mt-2 mb-4" />
                    <p className="font-medium text-sm text-gray-500">Lớp bản đồ</p>
                    <div className="mt-3 flex flex-col gap-3">
                      <ToggleSwitch
                        color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }}
                        checked={switchCamera} onChange={setSwitchCamera} label="Camera" />
                      <div className={`${switchCamera ? "block opacity-100" : "hidden opacity-0"} transition-opacity ease-in-out delay-150 duration-300 flex flex-col gap-3 ml-2 `}>
                        <div className="flex items-center gap-2">
                          <img src={camfixed} className="h-auto w-auto" />
                          <Label htmlFor="fromdate" value="Camera đo đếm lưu lượng" />
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect y="0.625" width="24" height="15.75" fill="url(#pattern0_916_1858)" />
                            <defs>
                              <pattern id="pattern0_916_1858" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_916_1858" transform="scale(0.03125 0.047619)" />
                              </pattern>
                              <image id="image0_916_1858" width="32" height="21" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAYAAAAnzezqAAAABHNCSVQICAgIfAhkiAAAActJREFUSIntlj1Im0Ecxp//3b0mJtGXhKQEjBQcCqVFEOxkKFRrC5WCUOjg0M3FQQguugiu1cmPVeji4uqoYmkCQqHFUukoFq0fCTHRqDHJ3d9BxBr8GJJXF5/1eeD3O+6Go3BH4oUQoVfg2ggIAhWGDOeFOlwtHq3NbX97l7xu52uZDtl2axdFOv9+Bckn4JpwpfCLFFOgg6mTwspYculjrry1o3N+j3r8QUr/oGLURokrP/nlWEGwPaBU0zyA+P+Nr2U85LOexiC9vSAZVGAQqLr4s0gfG/0cQAIAA6BA83iD2347Qaq++3ylnECfRxA/AiCCbXGPW3jekCs8yWRdumpHBchY7vpIzHa5An0s/P0gFSrfOCrArIW3sfMlZHCQQN6rNlV+fGUCKCkha55dB3dcAACKJW/dTb3jArflQeBBwFEBgmAGSvcmAAhNOvMDbI7vRYBImvzW8hLMwQizTt25ABMK+xsj2Y3FoTE+/t0D1uk7FYDQ6wAMMKv/JV4vcP57O/TeDMMcXQiQ3nWGbvIE8wdnfwEAMJvx9yuZ1HKMdG6UuZQEAEEi84VIF6qJZphDY9LDm1b6Z3mX+/VpV2dXP6O4MwDm7CmU3Z3Pes79OwAAAABJRU5ErkJggg==" />
                            </defs>
                          </svg>

                          <Label htmlFor="fromdate" value="Camera bắt vi phạm" />
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect y="0.625" width="24" height="15.75" fill="url(#pattern0_916_1863)" />
                            <defs>
                              <pattern id="pattern0_916_1863" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_916_1863" transform="scale(0.03125 0.047619)" />
                              </pattern>
                              <image id="image0_916_1863" width="32" height="21" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAYAAAAnzezqAAAABHNCSVQICAgIfAhkiAAAAeFJREFUSIntlj1oU1EYht/z0yZpvL1pSILUgoOiQ1UQrA6KErFFdBHEpUOhg4tCIGRpFiWrdqo/WwQRXLp2tKDSQq1gaUXroFKlS9NY2ia5Dcn9vuNQWjVaHby3Xfqu7wvPczhnOKJr8klXIBpNqqZghxGQ+P9UuVp9V/n4aWTqUmpxq9HxR9l46MTJy+Lc19EXQspDQjft9QAOADBERXbKD4rzc4PvkzfLjf3RkYdtkf3tV1WrPaDRHDgj4MnJNyOUismwlbHa4s8AjP3cHRzKxiOHD6RVKHhdaBXTAhBewjclpNwj6nQEwDgAA0AcG7q9z+45dU9b4SsbO+0HfCNKiAQAeXos32Ja7J5AInYfWv9y1b4KsFLBjvQ1W0UTN2SrlYLW8caNrwKGINu7k2dVxB6AlOE/bTx9fL+lVtdoDnRuBfdfAABCQetvtf8C/8iuwK6ArwJCCgM27o4JGC3JLZffgHltRwSEklyYeP2cHCdnXCpuvwCjNp/Lr7zM5gfrHz73GqKlbRWApC8AGMPDNH6hf9R5O32eVlefGmbnhwBRwRe44SqxO4v1vwAA8OTF1PTyxKs0V9buGpcW1x2d0mPDVPMUzlxxS6Vb3xaWphqrmb5coTI7d8ddKGZgeOU7baaqG1KY37YAAAAASUVORK5CYII=" />
                            </defs>
                          </svg>

                          <Label htmlFor="fromdate" value="Camera quan sát" />
                        </div>
                      </div>
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchViolationVehicle} onChange={setSwitchViolationVehicle} label="Cảnh báo xe vi phạm" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchTrafficcounter} onChange={setSwitchTrafficcounter} label="Điểm đếm giao thông" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchTrafficlight} onChange={setSwitchTrafficlight} label="Đèn tín hiệu giao thông" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchTrafficvolume} onChange={setSwitchTrafficvolume} label="Lưu lượng giao thông" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchCameracabinet} onChange={setSwitchCameracabinet} label="Tủ camera" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchInformationcabinet} onChange={setSwitchInformationcabinet} label="Tủ thông tin" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchControlcabinet} onChange={setSwitchControlcabinet} label="Tủ điều khiển" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchPowercabinet} onChange={setSwitchPowercabinet} label="Tủ nguồn" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchArea} onChange={setSwitchArea} label="Khu vực" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchGreenWaveLine} onChange={setSwitchGreenWaveLine} label="Tuyến làn sóng xanh" />
                      <ToggleSwitch color="blue"
                        theme={{
                          toggle: {
                            base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                            checked: {
                              color: {
                                blue: 'border-blue-700 bg-blue-700'
                              }
                            }
                          }
                        }} checked={switchWarning} onChange={setSwitchWarning} label="Cảnh báo" />

                    </div>
                  </div>
                </div>
                <div className="flex basis-3/5 border-l mt-3">
                  <div className="flex flex-col w-full">
                    <div className="pr-6">
                      <div className="flex flex-row gap-2 pb-3.5">
                        <div className="grow pl-4 pr-4">
                          <TextInput
                            sizing="sm"
                            id="plate"
                            type="text"
                            icon={IoSearchOutline}
                            placeholder="Tìm kiếm" required />
                        </div>
                        <Button color="blue" size="xs" className="pl-4 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clipPath="url(#clip0_916_2652)">
                              <path d="M6.40008 13.3C5.13426 13.3 3.89687 12.9246 2.84439 12.2214C1.7919 11.5182 0.971586 10.5186 0.48718 9.34917C0.00277303 8.17973 -0.12397 6.8929 0.122979 5.65142C0.369927 4.40994 0.979475 3.26957 1.87454 2.37452C2.76961 1.47946 3.90999 0.869922 5.15148 0.622977C6.39298 0.376032 7.67982 0.502773 8.84928 0.987174C10.0187 1.47157 11.0183 2.29188 11.7215 3.34435C12.4248 4.39683 12.8002 5.6342 12.8002 6.9C12.7982 8.5968 12.1233 10.2236 10.9235 11.4234C9.72367 12.6232 8.0969 13.2981 6.40008 13.3ZM6.40008 2.1C5.45072 2.1 4.52267 2.38152 3.73331 2.90895C2.94394 3.43638 2.32871 4.18604 1.9654 5.06312C1.6021 5.9402 1.50704 6.90532 1.69225 7.83643C1.87746 8.76754 2.33463 9.62282 3.00593 10.2941C3.67723 10.9654 4.53251 11.4226 5.46363 11.6078C6.39475 11.793 7.35988 11.6979 8.23698 11.3346C9.11407 10.9713 9.86374 10.3561 10.3912 9.56674C10.9186 8.77738 11.2001 7.84935 11.2001 6.9C11.1989 5.62735 10.6927 4.40719 9.79283 3.50729C8.89292 2.60739 7.67274 2.10127 6.40008 2.1Z" fill="white" />
                              <path d="M15.2002 16.5C14.988 16.5 14.7846 16.4156 14.6346 16.2656L11.4345 13.0656C11.2888 12.9147 11.2082 12.7126 11.21 12.5029C11.2118 12.2931 11.2959 12.0925 11.4443 11.9441C11.5926 11.7958 11.7932 11.7117 12.003 11.7099C12.2128 11.708 12.4148 11.7887 12.5657 11.9344L15.7658 15.1344C15.8776 15.2463 15.9538 15.3888 15.9846 15.544C16.0155 15.6991 15.9996 15.86 15.9391 16.0061C15.8786 16.1523 15.7761 16.2772 15.6445 16.3651C15.513 16.453 15.3584 16.5 15.2002 16.5Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_916_2652">
                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Button>

                      </div>
                    </div>
                    <div className={`${showFilterDetailBlock ? "block opacity-100" : "hidden opacity-0"} h-full overflow-hidden flex flex-col pl-4 pr-4`}>
                      <div className="mt-3 flex h-full overflow-hidden">
                        <div className="flex flex-col md:overflow-y-scroll relative w-full pr-2">
                          <div className="flex flex-col">
                            <div className="">
                              <Label htmlFor="time" value="Thời gian" />
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex items-stretch mt-1 gap-3">
                                <div className="flex-1 flex items-center">
                                  <Button
                                    className={`${activeViolationTime1h ? "border-blue-500 text-blue-500" : ""}`}
                                    onClick={() => onSetActiveViolationTime1h()}
                                    theme={{
                                      base: 'group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none bg',
                                      color: {
                                        light: 'border bg-white text-gray-900 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 w-full border-gray-200'
                                      }
                                    }}
                                    color="light">
                                    1H
                                  </Button>

                                </div>
                                <div className="flex-1 flex items-center">
                                  <Button
                                    className={`${activeViolationTime6h ? "border-blue-500 text-blue-500" : ""}`}
                                    onClick={() => onSetActiveViolationTime6h()}
                                    theme={{
                                      color: {
                                        light: 'border border-gray-200 bg-white text-gray-900 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 w-full'
                                      }
                                    }}
                                    color="light">
                                    6H
                                  </Button>
                                </div>
                                <div className="flex-1 flex items-center">
                                  <Button
                                    className={`${activeViolationTime12h ? "border-blue-500 text-blue-500" : ""}`}
                                    onClick={() => onSetActiveViolationTime12h()}
                                    theme={{
                                      color: {
                                        light: 'border border-gray-200 bg-white text-gray-900 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 w-full'
                                      }
                                    }}
                                    color="light">
                                    12H
                                  </Button>
                                </div>

                              </div>
                              <div className="flex items-stretch mt-1 gap-3">
                                <div className="flex-1 flex items-center">
                                  <Button
                                    className={`${activeViolationTime48h ? "border-blue-500 text-blue-500" : ""}`}
                                    onClick={() => onSetActiveViolationTime48h()}
                                    theme={{
                                      color: {
                                        light: 'border border-gray-200 bg-white text-gray-900 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 w-full'
                                      }
                                    }}
                                    color="light">
                                    48H
                                  </Button>

                                </div>
                                <div className="flex-1 flex items-center">
                                  <Button
                                    className={`${activeViolationTime72h ? "border-blue-500 text-blue-500" : ""}`}
                                    onClick={() => onSetActiveViolationTime72h()}
                                    theme={{
                                      color: {
                                        light: 'border border-gray-200 bg-white text-gray-900 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 w-full'
                                      }
                                    }}
                                    color="light">
                                    72H
                                  </Button>
                                </div>
                                <div className="flex-1 flex items-center">
                                  <Button
                                    className={`${activeViolationTime1w ? "border-blue-500 text-blue-500" : ""}`}
                                    onClick={() => onSetActiveViolationTime1w()}
                                    theme={{
                                      color: {
                                        light: 'border border-gray-200 bg-white text-gray-900 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 w-full'
                                      }
                                    }}
                                    color="light">
                                    1 tuần
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="fromdate" value="Từ ngày" />
                            </div>
                            <div className="relative mt-2">
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
                                    inputProps={{ className: 'px-3 py-1.5 text-sm block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 rounded-lg' }}
                                  />

                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="fromdate" value="Đến ngày" />
                            </div>
                            <div className="relative mt-2">
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
                                    inputProps={{ className: 'px-3 py-1.5 text-sm block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 rounded-lg' }}
                                  />

                                </div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Accordion
                                className="border-none"
                              >
                                <Accordion.Panel>
                                  <Accordion.Title className="pl-0 pr-1 focus:ring-white focus:bg-white">Thông tin phương tiện</Accordion.Title>
                                  <Accordion.Content className="pl-0 pt-2">
                                    <div>
                                      <Label htmlFor="state" value="Loại xe" />
                                      <Select
                                        theme={{
                                          field: {
                                            select: {
                                              sizes: {
                                                md: 'px-2.5 py-2 text-sm'
                                              }
                                            }
                                          }
                                        }}
                                        id="state" required className="mt-2">
                                        <option>Chọn loại xe</option>
                                        <option>Xe loại 1</option>
                                        <option>Xe loại 2</option>
                                      </Select>
                                    </div>
                                    <div className="mt-2">
                                      <Label htmlFor="state" value="Cỡ xe" />
                                      <Select
                                        theme={{
                                          field: {
                                            select: {
                                              sizes: {
                                                md: 'px-2.5 py-2 text-sm'
                                              }
                                            }
                                          }
                                        }}
                                        id="state" required className="mt-2">
                                        <option>Chọn cỡ xe</option>
                                        <option>Xe loại 1</option>
                                        <option>Xe loại 2</option>
                                      </Select>
                                    </div>
                                    <div className="mt-2">
                                      <Label htmlFor="state" value="Màu xe" />
                                      <Select
                                        theme={{
                                          field: {
                                            select: {
                                              sizes: {
                                                md: 'px-2.5 py-2 text-sm'
                                              }
                                            }
                                          }
                                        }}
                                        id="state" required className="mt-2">
                                        <option>Chọn màu xe</option>
                                        <option>Xe loại 1</option>
                                        <option>Xe loại 2</option>
                                      </Select>
                                    </div>
                                    <div className="mt-2">
                                      <Label htmlFor="state" value="Màu biển" />
                                      <Select
                                        theme={{
                                          field: {
                                            select: {
                                              sizes: {
                                                md: 'px-2.5 py-2 text-sm'
                                              }
                                            }
                                          }
                                        }}
                                        id="state" required className="mt-2">
                                        <option>Chọn màu biển</option>
                                        <option>Xe loại 1</option>
                                        <option>Xe loại 2</option>
                                      </Select>
                                    </div>
                                    <div className="mt-2">
                                      <Label htmlFor="state" value="Thương hiệu" />
                                      <Select
                                        theme={{
                                          field: {
                                            select: {
                                              sizes: {
                                                md: 'px-2.5 py-2 text-sm'
                                              }
                                            }
                                          }
                                        }}
                                        id="state" required className="mt-2">
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
                              </Accordion>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-4 border-t pb-3 pt-3">
                        <div className="flex flex-row gap-2">
                          <div className="grow">
                            <Button theme={{
                              size: {
                                md: 'px-3 py-2 text-sm'
                              }
                            }}
                              onClick={() => setShowFilterDetailBlock(false)}
                              color="blue" size="md">Áp dụng</Button>
                          </div>
                          <div>
                            <Button theme={{
                              size: {
                                md: 'px-3 py-2 text-sm'
                              }
                            }} color="light" size="md">Xóa lọc</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${!showFilterDetailBlock ? "block opacity-100" : "hidden opacity-0"} h-full overflow-hidden flex flex-col`}>
                      <div className="mt-3 flex w-full h-full overflow-hidden">
                        <div className="flex flex-col md:overflow-y-scroll relative w-full pr-2">
                          <div className="flex flex-col">
                            <div className="pl-4 pr-4">
                              <Button
                                onClick={() => setShowFilterDetailBlock(true)}
                                size="md"
                                theme={{
                                  color: {
                                    light: 'border border-gray-300 bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-white'
                                  },
                                  size: {
                                    md: 'px-3 py-2 text-sm'
                                  }
                                }}
                                className="border-blue-500 text-blue-500"
                                color="light"><svg className="mr-2 h-5 w-5" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_1225_5655)">
                                    <path d="M0.148759 1.66364L4.50428 7.40909V10.3182L7.49572 12.5V7.40909L11.8512 1.66364C11.9343 1.55539 11.9848 1.42664 11.9971 1.29187C12.0094 1.15709 11.9829 1.02163 11.9208 0.900727C11.8587 0.779822 11.7633 0.678264 11.6454 0.607472C11.5274 0.536681 11.3916 0.499464 11.2532 0.500006H0.74675C0.60837 0.499464 0.47258 0.536681 0.354649 0.607472C0.236717 0.678264 0.141321 0.779822 0.0791882 0.900727C0.0170552 1.02163 -0.0093507 1.15709 0.00293967 1.29187C0.01523 1.42664 0.0657292 1.55539 0.148759 1.66364Z" fill="#1A56DB" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1225_5655">
                                      <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Chỉnh bộ lọc (3)</Button>
                            </div>
                            <HR className="w-full mt-3 mb-0" />
                            <div className="flex flex-col">
                              <div className="pb-3 pt-3 bg-gray-50 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                              <div className="pb-3 pt-3 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                              <div className="pb-3 pt-3 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                              <div className="pb-3 pt-3 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                              <div className="pb-3 pt-3 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                              <div className="pb-3 pt-3 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                              <div className="pb-3 pt-3 w-full" onClick={() => onShowTimeLineVehicle()}>
                                <div className="font-semibold text-sm pl-4 pr-4">60-S70727</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4">07/29/2024 12:01:10</div>
                                <div className="tex-sm font-normal text-gray-600 pl-4 pr-4"><p className="overflow-hidden line-clamp-1">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer.Items>
          </Drawer>
        </div>
        <div className="flex h-full basis-3/5 relative">
          <div className={`${showTimeLineVehicle ? "block opacity-100" : "hidden opacity-0"} absolute top-0 left-0 z-30 border-l bg-white w-2/5 h-full`}>
            <div className="flex flex-col h-full overflow-hidden mt-3 pr-4">
              <div className="flex flex-row">
                <div className="grow text-lg font-semibold pl-4">Chi tiết phương tiện</div>
                <div onClick={() => setShowTimeLineVehicle(false)} className="pr-2 cursor-grab">x</div>
              </div>
              <HR className="mt-3 mb-3" />
              <div className="overflow-y-scroll">
                <div className="mt-4 ml-4 text-sm font-semibold">
                  Dòng thời gian
                </div>
                <Timeline className="ml-5 mt-3">
                  <Timeline.Item>
                    <div className="text-center absolute -left-3 mt-0 h-7 w-7 rounded-full border border-white bg-blue-200 dark:border-gray-900 dark:bg-gray-700">
                      <p className="text-blue-500">1</p>
                    </div>
                    <Timeline.Content>
                      <Timeline.Time className="font-semibold text-gray-900 text-sm">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</Timeline.Time>
                      <Timeline.Title className="font-normal text-gray-500 text-sm">09/04/2024 12:53:43 - khoảng 2 giờ</Timeline.Title>
                      <Timeline.Body className="pt-3">
                        <ToggleSwitch
                          color="blue"
                          theme={{
                            toggle: {
                              base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                              checked: {
                                color: {
                                  blue: 'border-blue-700 bg-blue-700'
                                }
                              }
                            }
                          }}
                          checked={switchImage} onChange={setSwitchImage} label="Hiện hình ảnh" />
                        <div className={`${switchImage ? "block opacity-100" : "hidden opacity-0"} transition-opacity ease-in-out delay-150 duration-300 md:col-span-2 pt-4 `}>
                          <div className="flex flex-col gap-4">
                            <div>
                              <div className="flex flex-row gap-4 pr-4">
                                <div>
                                  <img src={image1} className="h-auto w-auto rounded-lg" />
                                </div>
                                <div>
                                  <img src={image2} className="h-auto w-auto rounded-lg" />
                                </div>
                              </div>
                            </div>
                            <div className="pr-4">
                              <ReactPlayer
                                width="auto"
                                url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                            </div>
                          </div>
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <div className="text-center absolute -left-3 mt-0 h-7 w-7 rounded-full border border-white bg-blue-200 dark:border-gray-900 dark:bg-gray-700">
                      <p className="text-blue-500">2</p>
                    </div>
                    <Timeline.Content>
                      <Timeline.Time className="font-semibold text-gray-900 text-sm">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</Timeline.Time>
                      <Timeline.Title className="font-normal text-gray-500 text-sm">09/04/2024 12:53:43 - khoảng 2 giờ</Timeline.Title>
                      <Timeline.Body className="pt-3">
                        <ToggleSwitch
                          color="blue"
                          theme={{
                            toggle: {
                              base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                              checked: {
                                color: {
                                  blue: 'border-blue-700 bg-blue-700'
                                }
                              }
                            }
                          }}
                          checked={switchImage} onChange={setSwitchImage} label="Hiện hình ảnh" />
                        <div className={`${switchImage ? "block opacity-100" : "hidden opacity-0"} transition-opacity ease-in-out delay-150 duration-300 md:col-span-2 pt-4 `}>
                          <div className="flex flex-col gap-4">
                            <div>
                              <div className="flex flex-row gap-4 pr-4">
                                <div>
                                  <img src={image1} className="h-auto w-auto rounded-lg" />
                                </div>
                                <div>
                                  <img src={image2} className="h-auto w-auto rounded-lg" />
                                </div>
                              </div>
                            </div>
                            <div className="pr-4">
                              <ReactPlayer
                                width="auto"
                                url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                            </div>
                          </div>
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                  <Timeline.Item>
                    <div className="text-center absolute -left-3 mt-0 h-7 w-7 rounded-full border border-white bg-blue-200 dark:border-gray-900 dark:bg-gray-700">
                      <p className="text-blue-500">3</p>
                    </div>
                    <Timeline.Content>
                      <Timeline.Time className="font-semibold text-gray-900 text-sm">Nút giao Long Sơn_Xã Tân Hải, TX. Phú Mỹ_Km 56+930_QL51/VP5N012</Timeline.Time>
                      <Timeline.Title className="font-normal text-gray-500 text-sm">09/04/2024 12:53:43 - khoảng 2 giờ</Timeline.Title>
                      <Timeline.Body className="pt-3">
                        <ToggleSwitch
                          color="blue"
                          theme={{
                            toggle: {
                              base: 'relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all',
                              checked: {
                                color: {
                                  blue: 'border-blue-700 bg-blue-700'
                                }
                              }
                            }
                          }}
                          checked={switchImage} onChange={setSwitchImage} label="Hiện hình ảnh" />
                        <div className={`${switchImage ? "block opacity-100" : "hidden opacity-0"} transition-opacity ease-in-out delay-150 duration-300 md:col-span-2 pt-4 `}>
                          <div className="flex flex-col gap-4">
                            <div>
                              <div className="flex flex-row gap-4 pr-4">
                                <div>
                                  <img src={image1} className="h-auto w-auto rounded-lg" />
                                </div>
                                <div>
                                  <img src={image2} className="h-auto w-auto rounded-lg" />
                                </div>
                              </div>
                            </div>
                            <div className="pr-4">
                              <ReactPlayer
                                width="auto"
                                url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                            </div>
                          </div>
                        </div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </Timeline>
              </div>
            </div>
          </div>
          <div className="absolute z-20 bg-blue-50 w-full min-h-screen">
            <MapContainer className="w-full min-h-screen" center={centerMap} zoom={12} scrollWheelZoom={true}>
              <TileLayer
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
      </div>
    </>
  );
}