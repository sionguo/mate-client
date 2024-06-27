import { Helmet } from 'react-helmet';
import { Outlet, matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { flattenRoutes } from '@/route';

import SideBar from './SideBar';

import styles from './Layout.module.css';

const Layout = () => {
  const { pathname } = useLocation();
  function getTitle(path: string): string {
    const r = flattenRoutes.find(route => {
      return route.path === path;
    });
    const paths = [r?.name]; // 首先将原路径放入数组
    let currentPath = path;

    while (currentPath.includes('/')) {
      // 如果当前路径中还有'/'
      // 移除最后一个 '/' 后的字符，得到上一级路径
      currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
      if (currentPath) {
        // 避免添加空字符串（当路径仅为'/'时）
        const rr = flattenRoutes.find(route => {
          return route.path === currentPath;
        });
        paths.push(rr?.name);
      }
    }

    // 添加根路径
    if (path !== '/') {
      paths.push('Mate');
    }

    return paths.join(' - '); // 反转数组，使路径按从具体到最上级的顺序排列
  }

  return (
    <>
      <Helmet>
        <title>{getTitle(pathname)}</title>
      </Helmet>
      <div className={styles.wrapper}>
        {/* 左边 */}
        <SideBar />
        {/* 右边 */}
        <div className={styles.mainPanel}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
