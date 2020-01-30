import React from 'react';
import { Scene, Actions, Stack } from 'react-native-router-flux';
import Principal from './components/principal/Principal';

export const Scenes = Actions.create(
	<Scene key='root'>
		<Stack key='principal' hideNavBar>
            <Scene key='principal' component={Principal} title={'Principal'} hideNavBar />
		</Stack>
	</Scene>
);
