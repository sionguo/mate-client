import { useAuth } from 'react-oidc-context';
import { Link, useLocation } from 'react-router-dom';

import { routes } from '@/route';
import {
  ActionIcon,
  Avatar,
  Group,
  Menu,
  ScrollArea,
  Stack,
  Title,
  Tooltip,
  UnstyledButton,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconPower, IconSun } from '@tabler/icons-react';

import styles from './SideBar.module.css';

const SideBar = () => {
  const { pathname } = useLocation();
  const active = routes.find(r => pathname.includes(r.path));
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const auth = useAuth();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.aside}>
            <div className={styles.logo}>{/* <MantineLogo type="mark" size={30} /> */}</div>
            <ScrollArea className={styles.appPanel}>
              {routes.map(route => (
                <Tooltip
                  label={route?.name}
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
            <Stack className={styles.setting}>
              <ActionIcon onClick={toggleColorScheme} variant="gradient" size="calc(2.375rem * var(--mantine-scale))">
                {colorScheme === 'light' ? (
                  <IconMoonStars style={{ width: '70%', height: '70%' }} stroke={1.5} />
                ) : (
                  <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />
                )}
              </ActionIcon>
              <Menu position="right" withArrow>
                <Menu.Target>
                  <Avatar variant="gradient" size="md" radius="sm">
                    {auth.user?.profile.name?.charAt(0)}
                  </Avatar>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<IconPower style={{ width: rem(14), height: rem(14) }} />}
                    onClick={() => {
                      void auth.signoutRedirect();
                    }}
                  >
                    退出登录
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Stack>
          </div>

          {active?.children && (
            <div className={styles.main}>
              <div className={styles.title}>
                <Title order={4}>{active?.name}</Title>
              </div>

              {active?.children.map(route => (
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
