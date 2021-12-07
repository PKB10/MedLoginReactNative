/*!
 @file MLNormalize.js

 @brief MLNormalize 
 @discussion This file contains functions required to nromalize pixels

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */

 import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 420;

export default function actuatedNormalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } 
  else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}