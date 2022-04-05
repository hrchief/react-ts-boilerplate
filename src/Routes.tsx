import React from 'react';
import Home from './pages/Home'
import HooksTutorial from './pages/HooksTutorial'

const Teams: React.FC = () => {
  return (
    <h1>Teams</h1>
  );
};

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/Hooks',
    sidebarName: 'Hooks',
    component: HooksTutorial
  },
  {
    path: '/teams',
    sidebarName: 'Teams',
    component: Teams
  },
];

export default Routes;