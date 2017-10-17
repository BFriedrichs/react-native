// @flow
// whacky hacky stuff pulled straight from
// https://github.com/react-community/react-navigation/issues/707#issuecomment-321968848

import { StackNavigator } from 'react-navigation'

const StackModalNavigator = (routeConfigs: any, navigatorConfig: any) => {
  const CardStackNavigator = StackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }

  const ModalStackNavigator = StackNavigator({
    CardStackNavigator: { screen: CardStackNavigator },
    ...modalRouteConfig
  }, {
    headerMode: 'float',
    mode: 'modal',
    initialRouteName: 'CardStackNavigator'
  });

  return ModalStackNavigator;
};

export default StackModalNavigator