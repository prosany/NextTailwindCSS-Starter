import { PropsWithChildren } from 'react';
import { asap, inter, plusJakartaSans } from '@/assets/fonts';
import '@/styles/core.scss';

interface ContainerLayoutProps extends PropsWithChildren<{}> {}

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <body
      className={`${asap.variable} ${inter.variable} ${plusJakartaSans.variable} font-asap`}
    >
      {children}
    </body>
  );
};

export default ContainerLayout;
