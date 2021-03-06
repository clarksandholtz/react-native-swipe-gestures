declare module 'react-native-swipe-gestures' {
  import { Component } from 'react';
  import {
    PanResponderGestureState,
    ViewProps,
    PanResponderInstance
  } from 'react-native';

  export interface GestureRecognizerProps extends ViewProps {
    config?: GestureRecognizerConfig;
    onSwipe?(gestureName: string, gestureState: PanResponderGestureState): void;
    onSwipeUp?(gestureState: PanResponderGestureState): void;
    onSwipeDown?(gestureState: PanResponderGestureState): void;
    onSwipeLeft?(gestureState: PanResponderGestureState): void;
    onSwipeRight?(gestureState: PanResponderGestureState): void;
    panResponder?: PanResponderInstance
  }

  interface GestureRecognizerConfig {
    /**
     * Velocity that has to be breached in order for swipe to be triggered (vx and vy properties of gestureState)
     * @default 0.3
     */
    velocityThreshold?: number;

    /**
     * Absolute offset that shouldn't be breached for swipe to be triggered (dy for horizontal swipe, dx for vertical swipe)
     * @default 80
     */
    directionalOffsetThreshold?: number;

    /**
     * Absolute distance that should be breached for the gesture to not be considered a click (dx or dy properties of gestureState)
     * @default 5
     */
    gestureIsClickThreshold?: number;
  }

  class GestureRecognizer extends Component<GestureRecognizerProps> {}

  // This is hacky and dumb. I just need to switch this repo to typescript.
  export enum swipeDirections {
    SWIPE_UP = "SWIPE_UP",
    SWIPE_DOWN = "SWIPE_DOWN",
    SWIPE_LEFT = "SWIPE_LEFT",
    SWIPE_RIGHT = "SWIPE_RIGHT"
  }

  export default GestureRecognizer;
}
