import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Layout from '@/layout';
import { IconAutomation, IconDashboard, IconFiles, IconList, IconListCheck } from '@tabler/icons-react';

export interface RouteConfig {
  name: string;
  path: string;
  icon: React.ComponentType<any>;
  component: JSX.Element;
  children?: RouteConfig[];
}
/**
 * 生成路由树
 * @param routes 路由
 * @returns 路由树
 */
const generateRoutes = (routes: RouteConfig[]): JSX.Element[] => {
  return routes.map((route, idx) => {
    const { path, component, children } = route;

    if (children && children.length > 0) {
      // 如果有子路由，递归生成子Route
      return (
        <Route path={path} key={path} element={component}>
          <Route>{generateRoutes(children)}</Route>
          <Route path={path} element={<Navigate to={children[0].path} replace />} />
        </Route>
      );
    } else {
      // 如果没有子路由，直接返回Route
      return <Route path={path} key={path} element={component} index={idx === 0} />;
    }
  });
};

export const routes: RouteConfig[] = [
  { name: '控制台', path: '/dashboard', icon: IconDashboard, component: <>控制台</> },
  {
    name: '任务',
    path: '/tasks',
    icon: IconListCheck,
    component: <Outlet />,
    children: [
      { name: '任务列表', path: '/tasks/list', icon: IconList, component: <>任务列表</> },
      { name: '任务列表', path: '/tasks/a', icon: IconList, component: <>任务列表</> },
    ],
  },
  { name: '文件', path: '/files', icon: IconFiles, component: <>文件</> },
  { name: '自动化', path: '/automation', icon: IconAutomation, component: <>自动化</> },
];

export const routeTree = (
  <Routes>
    <Route element={<Layout />}>{generateRoutes(routes)}</Route>
    <Route path="/" element={<Navigate to={routes[0].path} replace />} />
  </Routes>
);
