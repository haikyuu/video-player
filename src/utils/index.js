import {
	Platform,
} from 'react-native'

let ionicon = icon => (Platform.OS === 'ios'? `ios-${icon}`: `md-${icon}`)
ionicon.outline = icon => (Platform.OS === 'ios'? `ios-${icon}-outline`: `md-${icon}`)

export {
	ionicon,
}