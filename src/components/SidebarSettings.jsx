import { Sidebar } from "flowbite-react";
export default function SidebarSettings() {
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
  );
}