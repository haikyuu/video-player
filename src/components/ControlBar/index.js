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
		const { muted, paused, onPlay, onMute, style, currentTime } = this.props
		let progress = 0
		if (currentTime) {
			progress = (currentTime.currentTime / currentTime.playableDuration) * 100
		}
		return (
			<View style={[style, styles.container]}>

				<View style={styles.progressContainer}>
					<View style={[styles.progressBeforeCursor, {width: `${progress}%`}]} />

					<View style={styles.progressCursor} />

					<View style={[styles.progressAfterCursor, {flex: 1}]} />
				</View>

				<View style={[styles.buttonsContainer]}>
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
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width: '100%',
		backgroundColor: '#101010',
	},

	progressContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 5,
		zIndex: 20,
	},
	progressBeforeCursor: {
		backgroundColor: 'steelblue',
	},
	progressCursor: {
		width: 2,
		backgroundColor: 'white',
		height: 12,
		marginTop: -3.5,
	},
	progressAfterCursor: {
		backgroundColor: 'lightblue',
	},

	buttonsContainer:{
		flexDirection: 'row',
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
		//todo: fix as it'll probably break in other devices
		marginLeft: width/2 - 120, 
	},
	muteButton: {

	},
})