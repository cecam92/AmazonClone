import React, {useState, useCallback} from 'react';
import {Text, FlatList, Image, View, useWindowDimensions} from 'react-native';
import {styles} from './styles';

interface CarouselProps {
  images: string[];
}

const ImageCarousel = ({images}: CarouselProps) => {
  const {width} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.slider}>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 90,
        }}
        onViewableItemsChanged={onFlatListUpdate}
        keyExtractor={index => index}
        renderItem={({item, index}) => (
          <Image
            key={index}
            source={{uri: item}}
            style={[styles.image, {width: width - 40}]}
          />
        )}>
        <Text />
      </FlatList>
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
