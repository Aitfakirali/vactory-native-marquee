import React, {
	useEffect,
	useImperativeHandle,
	useRef,
	useMemo,
	cloneElement,
	forwardRef,
	useCallback,
} from "react"
import { Animated, Easing, PixelRatio, ScrollView, View } from "react-native"

const MarqueeView = forwardRef(
	(
		{ style, children, speed = 0.1, delay = 0, autoPlay = true, playing, isLTR = false },
		ref
	) => {
		const containerWidth = useRef(0)
		const contentWidth = useRef(0)
		const offsetX = useRef(new Animated.Value(0))
		const contentRef = useRef(null)
		const isPlaying = useRef(autoPlay)
		const animatedValue = useRef(null)
		const reset = useRef(false)
		const requestStart = useRef(false)
		const firstStart = useRef(true)
		const reverseDirection = useRef(isLTR)

		useEffect(() => {
			offsetX.current.addListener(({ value }) => {
				const outScreenValue = containerWidth.current
				if (
					value.toFixed(1) >= outScreenValue &&
					!reset.current &&
					reverseDirection.current
				) {
					reset.current = true
					animatedValue.current = Animated.timing(offsetX.current, {
						toValue: -contentWidth.current,
						duration: 0,
						delay,
						easing: Easing.linear,
						useNativeDriver: true,
					}).start(() => {
						start(outScreenValue)
					})
				}
				if (
					value.toFixed(1) <= -contentWidth.current &&
					!reset.current &&
					!reverseDirection.current
				) {
					reset.current = true
					animatedValue.current = Animated.timing(offsetX.current, {
						toValue: outScreenValue,
						duration: 0,
						delay,
						easing: Easing.linear,
						useNativeDriver: true,
					}).start(() => {
						start(outScreenValue)
					})
				}
			})
			return () => {
				offsetX.current.removeAllListeners()
				contentRef.current = null
			}
		})

		useImperativeHandle(
			ref,
			() => ({
				start,
				stop,
				changeDirection,
			}),
			[]
		)

		useEffect(() => {
			if (isPlaying.current && !playing) {
				stop()
			}
			if (!isPlaying.current && playing) {
				start()
			}
			return () => {}
		}, [playing])

		const stop = () => {
			animatedValue.current?.stop?.()
			isPlaying.current = false
		}

		const changeDirection = (isLTR) => {
			stop()
			reverseDirection.current = isLTR
			start()
		}

		const start = (currentOffset = 0) => {
			const value = -(contentWidth.current * 2)
			const durationByValue =
				PixelRatio.getPixelSizeForLayoutSize(-value + currentOffset) / speed
			// Check speed with different value
			// const averageSpeed = (currentOffset - value) / durationByValue;
			if (!contentWidth.current) {
				requestStart.current = true
				return
			}

			if (reverseDirection.current && firstStart.current) {
				offsetX.current.setValue(value / 2)
			}

			animatedValue.current = Animated.timing(offsetX.current, {
				toValue: !reverseDirection.current ? value : -value / 2,
				duration: durationByValue,
				delay,
				easing: Easing.linear,
				useNativeDriver: true,
			})
			isPlaying.current = true
			reset.current = false
			requestStart.current = false
			firstStart.current = false
			animatedValue.current.start()
		}

		const childrenCloned = useMemo(
			() =>
				cloneElement(children, {
					...children.props,
					style: {
						...children.props?.style,
						flexDirection: "row-reverse",
					},
					onLayout: ({
						nativeEvent: {
							layout: { width, x },
						},
					}) => {
						if (width === contentWidth.current) {
							return
						}
						contentWidth.current = width
						if (autoPlay || requestStart.current) {
							start()
						}
					},
					ref: (refValue) => (contentRef.current = refValue),
				}),
			[children]
		)

		const measureContainerView = useCallback(
			({
				nativeEvent: {
					layout: { width },
				},
			}) => {
				if (containerWidth.current === width) {
					return
				}
				containerWidth.current = width
			},
			[]
		)

		return (
			<View onLayout={measureContainerView} style={style}>
				<ScrollView
					horizontal={true}
					bounces={false}
					scrollEnabled={false}
					// contentContainerStyle={{ flex: 1 }} | Fix issue android when content not out of screen
					showsHorizontalScrollIndicator={false}
				>
					<Animated.View
						style={{
							transform: [{ translateX: offsetX.current }],
						}}
					>
						{childrenCloned}
					</Animated.View>
				</ScrollView>
			</View>
		)
	}
)


export default MarqueeView