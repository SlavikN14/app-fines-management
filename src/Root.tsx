import React, { PropsWithChildren } from 'react';
import SideBar from './components/SideBar';

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SideBar>
    { children }
  </SideBar>
);
