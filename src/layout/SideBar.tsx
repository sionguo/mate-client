import { Link, useLocation } from 'react-router-dom';

import { RouteConfig, routes } from '@/route';
import {
  ActionIcon,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

import styles from './SideBar.module.css';

const SideBar = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const { pathname } = useLocation();
  const active = routes.find(r => pathname.includes(r.path));

  const generateLink = (routes: RouteConfig[]) => {
    return routes.map(r => (
      <UnstyledButton key={r.path} component={Link} to={r.path}>
        <Group wrap="nowrap" align="flex-start" className={styles.asideLink}>
          <r.icon />
          <Text size="sm" fw={500}>
            {r.name}
          </Text>
        </Group>
      </UnstyledButton>
    ));
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.aside}>
            <div className={styles.logo}>{/* <MantineLogo type="mark" size={30} /> */}</div>
            <ScrollArea>
              {routes.map(route => (
                <Tooltip
                  label={route.name}
                  position="right"
                  withArrow
                  transitionProps={{ duration: 0 }}
                  key={route.path}
                >
                  <UnstyledButton
                    className={styles.mainLink}
                    component={Link}
                    to={route.path}
                    data-active={pathname.startsWith(route.path) || undefined}
                  >
                    <route.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
                  </UnstyledButton>
                </Tooltip>
              ))}
            </ScrollArea>
          </div>

          {active?.children && (
            <div className={styles.main}>
              <div className={styles.title}>
                <Title order={4}>{active?.name}</Title>
              </div>

              {active?.children.map(route => (
                // <UnstyledButton
                //   className={styles.link}
                //   data-active={pathname === route.path || undefined}
                //   key={route.path}
                //   component={Link}
                //   to={route.path}
                // >
                //   <route.icon className={styles.linkIcon} stroke={1.5} />
                //   <span> {route.name}</span>
                // </UnstyledButton>
                <Link
                  className={styles.link}
                  data-active={route.path === pathname || undefined}
                  to={route.path}
                  key={route.path}
                >
                  <route.icon className={styles.linkIcon} stroke={1.5} />
                  <span>{route.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default SideBar;
