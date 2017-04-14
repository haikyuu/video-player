import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
} from 'react-native'

export default class VideoPlayerScreen extends Component{
	static navigationOptions = {
    	title: 'Video Player',
	};
	render(){
		console.log('this.props', this.props)
		return (
			<View>
				<Text>Video</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {

	}
})