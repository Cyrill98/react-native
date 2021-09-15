import React, {useState} from 'react'
import { View, Image, Text, FlatList, useWindowDimensions } from 'react-native'

import styles from '../imageCarousel/styles.ios'

const ImageCarousel = ({images}: {images: string[]}) => {
    const windowWidth = useWindowDimensions().width;

    return (
        <View style={styles.root}>
            <FlatList 
                data={images}
                renderItem={({item}) => (
                    <Image style={[styles.image, {width: windowWidth}]} source={{uri:item}}/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                // viewabilityConfig={{
                //     viewAreaCoveragePercentThreshold: 50,
                // }}
            />
        </View>
    )
}

export default ImageCarousel
