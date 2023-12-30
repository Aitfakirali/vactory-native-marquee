# React Native Marquee View

React native Marquee is a npm library for creating auto scrolling view

![Demo](https://res.cloudinary.com/dtnw4la0z/image/upload/v1703955765/ezgif.com-video-to-gif-converter_cvakad.gif)

## Installation

Using [npm](https://www.npmjs.com)

```sh
npm install @aitfakirali/react-native-marquee
```

using yarn

```sh
yarn add @aitfakirali/react-native-marquee
```

## Usage

```javascript
import MarqueeView from '@aitfakirali/react-native-marquee';

export const ExampleComponent = () => {
  return (
    <MarqueeView ref={marqueeRef} speed={0.5}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </MarqueeView>
  );
};
```

## Props

| name       | description                                    | required | type                   | default |
| ---------- | ---------------------------------------------- | -------- | ---------------------- | ------- |
| `children` | React View Component                           | YES      | `React.ReactNode`      | 1       |
| `speed`    | Animation speed                                | NO       | `number`               | 0.1     |
| `style`    | View style to be applied to Marquee container. | NO       | `StyleProp<ViewStyle>` |         |

## License

This module is [MIT licensed](./LICENSE)

---
