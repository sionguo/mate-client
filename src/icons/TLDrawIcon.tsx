import { rem } from '@mantine/core';

interface TLDrawIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function TLDrawIcon({ size, style, ...others }: TLDrawIconProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      width="32"
      height="32"
      viewBox="-4 0 40 40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <g clipPath="url(#clip0_1094_102908)">
        <path
          strokeWidth={5}
          d="M0.501953 4.4032C0.501953 2.4611 2.01005 0.886719 3.87037 0.886719H29.1335C30.9939 0.886719 32.502 2.4611 32.502 4.4032V29.3702C32.502 31.3123 30.9939 32.8867 29.1335 32.8867H3.87037C2.01005 32.8867 0.501953 31.3123 0.501953 29.3702V4.4032Z"
          fill="transparent"
        />
        <path
          strokeWidth={1}
          d="M19.1433 10.0387C19.1433 10.8121 18.879 11.4683 18.3503 12.0073C17.8217 12.5463 17.1781 12.8158 16.4196 12.8158C15.6381 12.8158 14.983 12.5463 14.4544 12.0073C13.9258 11.4683 13.6614 10.8121 13.6614 10.0387C13.6614 9.2654 13.9258 8.60922 14.4544 8.07022C14.983 7.53122 15.6381 7.26172 16.4196 7.26172C17.1781 7.26172 17.8217 7.53122 18.3503 8.07022C18.879 8.60922 19.1433 9.2654 19.1433 10.0387ZM13.627 19.771C13.627 18.9977 13.8913 18.3415 14.4199 17.8025C14.9716 17.2401 15.6381 16.9588 16.4196 16.9588C17.1551 16.9588 17.7987 17.2401 18.3503 17.8025C18.9019 18.3415 19.2237 18.9508 19.3157 19.6304C19.4995 20.8959 19.2697 22.1496 18.6261 23.3917C18.0055 24.6337 17.1091 25.5828 15.9369 26.239C15.2933 26.614 14.7647 26.6023 14.351 26.2039C13.9602 25.8289 14.0752 25.3836 14.6957 24.8681C15.0405 24.6103 15.3278 24.2822 15.5577 23.8838C15.7875 23.4854 15.9369 23.0753 16.0059 22.6535C16.0289 22.466 15.9484 22.3723 15.7645 22.3723C15.3048 22.3488 14.8336 22.0911 14.351 21.5989C13.8683 21.1068 13.627 20.4975 13.627 19.771Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1094_102908">
          <rect width="32" height="32" fill="transparent" transform="translate(0.501953 0.886719)" />
        </clipPath>
      </defs>
    </svg>
  );
}
