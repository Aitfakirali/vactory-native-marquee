import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MarqueeView from '@aitfakirali/react-native-marquee';
import { useRef } from 'react';

export default function App() {
  const marqueeRef = useRef();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          paddingVertical: 30,
        }}>
        <MarqueeView ref={marqueeRef} speed={0.5}>
          <View>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
            <Text
              style={{
                marginHorizontal: 20,
              }}>
              Open up App.js to start working on your app!
            </Text>
          </View>
        </MarqueeView>
        <StatusBar style="auto" />
      </View>
      <Button
        onPress={() => {
          marqueeRef.current?.stop();
        }}
        title="stop"></Button>
      <Button
        onPress={() => {
          marqueeRef.current?.start();
        }}
        title="start"></Button>
      <Button
        onPress={() => {
          marqueeRef.current?.changeDirection(true);
        }}
        title="change to LTR"></Button>

      <Button
        onPress={() => {
          marqueeRef.current?.changeDirection(false);
        }}
        title="change to RTL"></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
