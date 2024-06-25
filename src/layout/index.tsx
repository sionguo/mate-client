import { Outlet } from 'react-router-dom';

import { Group, Stack, Text } from '@mantine/core';

import SideBar from './SideBar';

const Layout = () => {
  return (
    <Group w="100vw" h="100vh">
      {/* 左边 */}
      <SideBar />
      {/* 右边 */}
      <Stack align="center" justify="flex-start">
        <Text>Header</Text>
        <Outlet />
      </Stack>
    </Group>
  );
};
export default Layout;
