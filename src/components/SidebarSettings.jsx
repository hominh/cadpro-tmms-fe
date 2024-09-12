import { Sidebar } from "flowbite-react";
import { useState, useEffect } from "react";
export default function SidebarSettings(activeItem) {
  const [activeItemSidebarSetting, setActiveItemSidebarSetting] = useState('');
  useEffect(() => {
		setActiveItemSidebarSetting(activeItem.activeItem);
	}, []);
  return (
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
          <Sidebar.Item key={1} href="/#camera" className={`${activeItemSidebarSetting === 'camera_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Camera
          </Sidebar.Item>
          <Sidebar.Item key={2} href="/#camera-cabinet" className={`${activeItemSidebarSetting === 'camera_cabinet_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Tủ camera
          </Sidebar.Item>
          <Sidebar.Item key={3} href="/#information-cabinet" className={`${activeItemSidebarSetting === 'information_cabinet_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Tủ thông tin
          </Sidebar.Item>
          <Sidebar.Item key={4} href="/#power-cabinet" className={`${activeItemSidebarSetting === 'power_cabinet_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Tủ nguồn
          </Sidebar.Item>
          <Sidebar.Item key={5} className={`${activeItemSidebarSetting === 'control_cabinet' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Tủ điều khiển
          </Sidebar.Item>
          <Sidebar.Item key={6} className={`${activeItemSidebarSetting === 'traffic_lights_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Đèn tín hiệu giao thông
          </Sidebar.Item>
          <Sidebar.Item key={7} className={`${activeItemSidebarSetting === 'counting_vehicle_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Điểm đếm xe
          </Sidebar.Item>
          <Sidebar.Item key={8} className={`${activeItemSidebarSetting === 'area_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Khu vực
          </Sidebar.Item>
          <Sidebar.Item key={9} className={`${activeItemSidebarSetting === 'control_cabinet_plan_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Kế hoạch tủ điều khiển
          </Sidebar.Item>
          <Sidebar.Item key={10} className={`${activeItemSidebarSetting === 'blue_wave_line_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Tuyến làn sóng xanh
          </Sidebar.Item>
          <Sidebar.Item key={11} className={`${activeItemSidebarSetting === 'blue_wave_strategy_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Chiến lược làn sóng xanh
          </Sidebar.Item>
          <Sidebar.Item key={12} className={`${activeItemSidebarSetting === 'system_log_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Xem log hệ thống
          </Sidebar.Item>
          <Sidebar.Item key={13} className={`${activeItemSidebarSetting === 'user_managament_item' ? "flex items-center justify-center rounded-lg pr-0 pl-2 pt-1.5 pb-1.5 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" : ""}`}>
            Quản lý người dùng
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}