import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import data from './data'
import renderItem, { ITEM_WIDTH, SLIDER_WIDTH } from './Card'
const ScreenHeight = Dimensions.get("window").height;

const CarouselCards = () => {
  const [active, setActive] = useState(0)

  return (
    <View>
      <Carousel
        style={styles.slider}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={'tinder'}
        layoutCardOffset={9}
        onSnapToItem={(index) => setActive(index)}
        useScrollView
        inactiveSlideShift={0}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={active}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.8}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  slider: {
    height: ScreenHeight,
    alignItems: 'end',
    justifyContent: 'center',
    height: 100,
    padding: 50
  },
});

export default CarouselCards