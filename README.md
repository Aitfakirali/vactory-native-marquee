# React Native Marquee View

React native Marquee is a npm library for creating auto scrolling view

https://github.com/Aitfakirali/vactory-native-marquee/assets/84398006/65e738ab-3e88-4f64-b251-8ff024343280

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
