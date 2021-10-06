import React, {useState} from 'react';
import {Image, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet'

import CommonButton from '../../atoms/button';
import styles from './styles';


const ChooseImage = () => {
  const [image1, setImage1] = useState('/Users/ferdmas/Dev/work/SMPortalRN/src/data/image/addphoto.png');
  const [image2, setImage2] = useState('/Users/ferdmas/Dev/work/SMPortalRN/src/data/image/addphoto.png');
  const [image3, setImage3] = useState('/Users/ferdmas/Dev/work/SMPortalRN/src/data/image/addphoto.png');
  const [image4, setImage4] = useState('/Users/ferdmas/Dev/work/SMPortalRN/src/data/image/addphoto.png');
  const [image5, setImage5] = useState('/Users/ferdmas/Dev/work/SMPortalRN/src/data/image/addphoto.png');
  
  const sheetRef = React.useRef(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
        sheetRef.current.snapTo(2);
        console.log(image);
        setImage1(image.path);        
    //   props.onChange?.(image);
    });
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
        console.log(image);
         setImage1(image.path);
    //   props.onChange?.(image);
    });
  };

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
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <CommonButton 
        primaryBackground 
        primaryText 
        buttonText={"Take Photo"} 
        onPress={takePhotoFromCamera}/>
      <CommonButton 
        primaryBackground 
        primaryText 
        buttonText={"Choose From Library"} 
        onPress={choosePhotoFromLibrary}/>
      <CommonButton 
        primaryBackground={false} 
        primaryText={false} 
        buttonText={"Cancel"} 
        onPress={()=> sheetRef.current.snapTo(2)}/>
    </View>
  );

    
  // const AnimatedView = Animated.View;
  // const renderShadow = () => {
  //   const scrollY = new Animated.Value(0)
  //   const animatedShadowOpacity = Animated.interpolateNode(scrollY, {
  //     inputRange: [0, 1],
  //     outputRange: [0.5, 0],
  //   })

  //   return (
  //     <AnimatedView
  //       pointerEvents="none"
  //       style={[
  //         styles.shadowContainer,
  //         {
  //           opacity: animatedShadowOpacity,
  //         },
  //       ]}
  //     />
  //   )
  // }


  return (
    <>
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 24}}
      >
      <View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Image
              style={styles.image}
              // {...props}
              source={{uri : image1 }}
            />
        </TouchableOpacity>
      </View>
      {/* <View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Image
              style={styles.image}
              // {...props}
              source={{uri : image2 }}
            />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Image
              style={styles.image}
              // {...props}
              source={{uri : image3 }}
            />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Image
              style={styles.image}
              // {...props}
              source={{uri : image4 }}
            />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Image
              style={styles.image}
              // {...props}
              source={{uri : image5 }}
            />
        </TouchableOpacity>
      </View> */}
    </ScrollView>
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={[320, -100, -100]}
        renderHeader={renderHeader}
        renderContent={renderContent}
        initialSnap={2}
        enabledGestureInteraction={true}
        enabledBottomInitialAnimation={true}
      />
      {/* {renderShadow()} */}
    </>
  );
};

export default ChooseImage