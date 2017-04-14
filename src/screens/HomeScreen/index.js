import React, { Component } from 'react'
import {
	View,
	Button,
	Text,
	StyleSheet,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'


export default class HomeScreen extends Component{
	static navigationOptions = {
    	title: 'Welcome',
	};
	constructor(props){
		super(props)
		this.state = {
			source: ''
		}
		this.onPressBrowse = this.onPressBrowse.bind(this)
	}
	onPressBrowse(){
		console.log('onPress');

		const { navigate } = this.props.navigation;
		var options = {
		  title: 'Select Avatar',
		  mediaType: 'video'
		};
		ImagePicker.showImagePicker(options, (response) => {
		  console.log('Response = ', response);

		  if (response.didCancel) {
		    console.log('User cancelled image picker');
		  }
		  else if (response.error) {
		    console.log('ImagePicker Error: ', response.error);
		  }
		  else if (response.customButton) {
		    console.log('User tapped custom button: ', response.customButton);
		  }
		  else {
		    let source = { uri: response.uri };

		    // You can also display the image using data:
		    // let source = { uri: 'data:image/jpeg;base64,' + response.data };
			
			navigate('VideoPlayer', { video: response })

		    this.setState({
		      source,
		    });
		  }
		});

	}
	render(){

		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Browse a video from your gallery
				</Text>

				<Button 
					title='browse'
					onPress={this.onPressBrowse}
					color="#841584"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-around',
	},
	title:{
		fontSize: 20,
		textAlign: 'center',
	},
	button:{
		alignSelf: 'center',
	},
})