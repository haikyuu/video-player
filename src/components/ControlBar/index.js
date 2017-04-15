import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import {
	ionicon,
} from '@utils'


const { width, height } = Dimensions.get('window')
export default class ControlBar extends Component{
	render(){
		const { muted, paused, onPlay, onMute, style } = this.props
		return (
			<View style={[styles.container, style]}>
				<View style={styles.muteButtonContainer}>
					<Icon.Button
					 style={[styles.button, styles.muteButton]}
					 name={muted? ionicon('volume-mute'): ionicon('volume-up')}
					 onPress={onMute}
					 backgroundColor='#101010'
					 size={40}
					/>
				</View>
				<Icon.Button
				 style={[styles.button, styles.playButton]}
				 name={paused ?ionicon('play'): ionicon('pause')}
				 onPress={onPlay}
				 backgroundColor='#101010'
				 size={40}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		backgroundColor: '#101010',
		width: '100%',
		position: 'relative'
	},
	muteButtonContainer: {
		width: 100,
	},
	button:{
		backgroundColor: 'transparent',
	},
	playButton:{
		alignSelf: 'center',
		marginLeft: width/2 - 120,
	},
	muteButton: {

	},
})