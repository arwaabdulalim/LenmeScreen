import {
  Canvas,
  Circle,
  Path,
  Skia,
  useSharedValueEffect,
  useValue,
} from '@shopify/react-native-skia';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import React from 'react';
import {Dimensions, View} from 'react-native';
import styles from './styles';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';
import {polar2Canvas} from 'react-native-redash';
import colors from '../../config/themes/colors';

const {width} = Dimensions.get('window');

const CoinSlider = () => {
  const strokeWidth = 40;
  const center = width / 2.5;
  const r = (width - strokeWidth) / 2 - 80;
  const startAngle = Math.PI;
  const endAngle = 2 * Math.PI;
  const x1 = center - r * Math.cos(startAngle);
  const y1 = -r * Math.sin(startAngle) + center;
  const x2 = center - r * Math.cos(endAngle);
  const y2 = -r * Math.sin(endAngle) + center;
  const rawPath = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;
  const rawForegroundPath = `M ${x2} ${y2} A ${r} ${r} 1 0 1 ${x1} ${y1}`;
  const skiaBackgroundPath = Skia.Path.MakeFromSVGString(rawPath);
  const skiaForegroundPath = Skia.Path.MakeFromSVGString(rawForegroundPath);

  const movableCx = useSharedValue(x2);
  const movableCy = useSharedValue(y2);
  const previousPositionX = useSharedValue(x2);
  const previousPositionY = useSharedValue(y2);
  const percentComplete = useSharedValue(0);

  const skiaCx = useValue(x2);
  const skiaCy = useValue(y2);
  const skiaPercentComplete = useValue(0);

  const gesture = Gesture.Pan()
    .onUpdate(({translationX, translationY, absoluteX}) => {
      const oldCanvasX = translationX + previousPositionX.value;
      const oldCanvasY = translationY + previousPositionY.value;

      const xPrime = oldCanvasX - center;
      const yPrime = -(oldCanvasY - center);
      const rawTheta = Math.atan2(yPrime, xPrime);

      let newTheta;

      if (absoluteX < width / 2 && rawTheta < 0) {
        newTheta = Math.PI;
      } else if (absoluteX > width / 2 && rawTheta <= 0) {
        newTheta = 0;
      } else {
        newTheta = rawTheta;
      }

      const percent = 1 - newTheta / Math.PI;
      percentComplete.value = percent;

      const newCoords = polar2Canvas(
        {
          theta: newTheta,
          radius: r,
        },
        {
          x: center,
          y: center,
        },
      );

      movableCx.value = newCoords.x;
      movableCy.value = newCoords.y;
    })
    .onEnd(() => {
      previousPositionX.value = movableCx.value;
      previousPositionY.value = movableCy.value;
    });

  useSharedValueEffect(
    () => {
      skiaCx.current = movableCx.value;
      skiaCy.current = movableCy.value;
      skiaPercentComplete.current = percentComplete.value;
    },
    movableCx,
    movableCy,
    percentComplete,
  );

  if (!skiaBackgroundPath || !skiaForegroundPath) {
    return <View />;
  }

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <View style={styles.container}>
          <Canvas style={styles.canvas}>
            <Path
              path={skiaBackgroundPath}
              style="stroke"
              strokeWidth={strokeWidth}
              strokeCap="round"
              color={colors.ghost}
            />
            <Path
              path={skiaForegroundPath}
              style="stroke"
              strokeWidth={strokeWidth}
              strokeCap="round"
              color={colors.black}
              start={0}
              end={skiaPercentComplete}
            />
            <Circle cx={skiaCx} cy={skiaCy} r={15} color="white" style="fill" />
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default CoinSlider;
