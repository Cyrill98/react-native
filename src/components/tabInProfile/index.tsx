import React, {useState} from 'react'
import { View, Animated, Text,useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import MainCard from '../mainCard'
import items from '../../data/productDetails'
import defaultStyle from '../../globalstyles/defaultStyles'
import ReviewCard from '../reviewCard'

const FirstRoute = () => {
    const user = "@lsyakiru"
    const userData = items.filter(x => x.donor.includes(user) || x.taker.includes(user))
    return (
    <View style={{flex: 1}}>
         <FlatList
                data= {userData}
                renderItem={({item}) => <MainCard item={item}/>}
                numColumns={2}
                showsVerticalScrollIndicator= {false}
                // ListHeaderComponent={<Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingVertical: 16, marginLeft: 24}]}>Your Daily Picks</Text>}
                />
    </View>
    )
}

const SecondRoute = () => {
    const user = "@lsyakiru"
    const userData = items.filter(x => x.itemStatus.includes('Completed')).filter(x => x.donor.includes(user) || x.taker.includes(user)).filter(x => x.donorReviewToTaker !== '')
    return (
    <View style={{flex: 1}}>
         <FlatList
                data= {userData}
                renderItem={({item}) => <ReviewCard item={item}/>}
                showsVerticalScrollIndicator= {false}
                // ListHeaderComponent={<Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingVertical: 16, marginLeft: 24}]}>Your Daily Picks</Text>}
                />
    </View>
    )
}

const renderScene = SceneMap ({
    first: FirstRoute,
    second: SecondRoute
})

const renderTabBar = (props) => {
    return(
    <TabBar
        {...props}
        indicatorStyle={{backgroundColor: defaultStyle.color.primary}}
        style={{backgroundColor: defaultStyle.color.backgroundLight, marginBottom: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20}}
        activeColor={defaultStyle.color.text}
        inactiveColor={'gray'}
    />
    )
}



const ProfileTabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: 'Items'},
        {key: 'second', title: 'Reviews'}
    ]);

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            // initialLayout={{width: layout.width}}
        />
    )
}

export default ProfileTabs
