import React, {useRef} from 'react'
import { View, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import CommonButton from '../../atoms/button'
import styles from './styles'

interface bottomOptionProp {
    panelTitle: string,
    panelSubtitle: string,
    snapPoints: string[],
    button1: object,
    button2: object,
    button3?: object,
    callBackNode?: Animated.Value<number>,
}

const BottomOption = (props: bottomOptionProp, ref: any) => {
    // const sheetRef = useRef(null)
    const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
    );

    const renderContent = () => (
        <View style={styles.panel}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.panelTitle}>{props.panelTitle}</Text>
          <Text style={styles.panelSubtitle}>{props.panelSubtitle}</Text>
        </View>
        {props.button1}
        {props.button2}
        {props.button3}
      </View>
    );

    return (
        <>
        {/* <CommonButton primaryBackground primaryText buttonText={props.buttonText} onPress={() => sheetRef.current.snapTo(0)}/> */}
        <BottomSheet
        ref={ref}
        snapPoints={props.snapPoints}
        renderHeader={renderHeader}
        renderContent={renderContent}
        initialSnap={1}
        enabledGestureInteraction={true}
        enabledBottomInitialAnimation={true}
        callbackNode={props.callBackNode}
        />
        </>
    )
}

const forwardedBottomOption = React.forwardRef(BottomOption)

export default forwardedBottomOption
