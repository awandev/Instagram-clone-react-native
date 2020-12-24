import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'
const ProfilePicture = () => (
    <View style={styles.container}>
        <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/23.jpg' }}
            style={styles.image}
        />
    </View>
)

export default ProfilePicture;