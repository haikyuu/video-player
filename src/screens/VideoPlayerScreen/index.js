import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
} from 'react-native'
import Video from 'react-native-video'

const { width, height } = Dimensions.get('window')
export default class VideoPlayerScreen extends Component{
	static navigationOptions = {
    	title: 'Video Player',
	};
	render(){
		console.log('this.props', this.props)
		const video = this.props.navigation.state.params.video

		return (
			<View style={styles.container}>
				<Video source={{uri: video.uri}}   // Can be a URL or a local file.
			       ref={(ref) => {
			         this.player = ref
			       }}                                      // Store reference
			       rate={1.0}                              // 0 is paused, 1 is normal.
			       volume={1.0}                            // 0 is muted, 1 is normal.
			       muted={false}                           // Mutes the audio entirely.
			       paused={false}                          // Pauses playback entirely.
			       resizeMode="contain"                      // Fill the whole screen at aspect ratio.*
			       repeat={true}                           // Repeat forever.
			       playInBackground={false}                // Audio continues to play when app entering background.
			       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
			       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
			       // onLoadStart={this.loadStart}            // Callback when video starts to load
			       // onLoad={this.setDuration}               // Callback when video loads
			       // onProgress={this.setTime}               // Callback every ~250ms with currentTime
			       // onEnd={this.onEnd}                      // Callback when playback finishes
			       // onError={this.videoError}               // Callback when video cannot be loaded
			       // onBuffer={this.onBuffer}                // Callback when remote video is buffering
			       // onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
			       style={styles.backgroundVideo} />
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		height: height * .8
	},
	backgroundVideo:{
		position: 'absolute',
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	}
})