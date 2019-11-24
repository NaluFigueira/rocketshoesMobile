/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import colors from './styles/colors';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigaton => ({
        header: <Header {...navigaton} />,
      }),
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
