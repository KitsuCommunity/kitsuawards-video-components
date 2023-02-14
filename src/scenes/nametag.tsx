import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import {
	Layout,
	Rect,
	Text,
	Image,
	Circle,
} from '@motion-canvas/2d/lib/components';
import { createRef } from '@motion-canvas/core/lib/utils';
import { all, waitFor } from '@motion-canvas/core/lib/flow';
import {
	easeInBack,
	easeInOutCubic,
	map,
	tween,
} from '@motion-canvas/core/lib/tweening';
import image from 'assets/Reina.jpeg';

const USERNAME = 'Reina';
const TAG = '@Reinachan';
const PRONOUNS = 'she / her';
const PICTURE = image;

const fontFamily = 'Inter';
const HIGHLIGHT = '#FF8C7C';
const BACKGROUND = '#312631';

export default makeScene2D(function* (view) {
	const background = createRef<Layout>();
	const highlight = createRef<Rect>();

	view.add(
		<Layout
			layout
			width={1920}
			height={1080}
			alignItems='end'
			justifyContent='end'>
			<Layout layout justifyContent='end' margin={[0, 80, 80, 0]}>
				<Layout clip width='0%' ref={background}>
					<Rect
						height={122}
						width='100%'
						padding={[11, 25, 11, 20]}
						fill={BACKGROUND}
						layout
						gap={25}
						radius={{
							top: 5,
							left: 5,
							bottom: 0,
							right: 0,
						}}
						clip>
						<Circle width={100} height={100} fill='#000' clip>
							<Image src={PICTURE} width={100} height={100} />
						</Circle>

						<Layout layout alignItems='center' gap={30}>
							<Layout
								layout
								direction='column'
								gap={2}
								justifyContent='center'
								height='100%'>
								<Text
									fill='#ffffff'
									fontFamily={fontFamily}
									fontSize={40}
									fontWeight={700}
									lineHeight={48}
									margin={0}
									padding={0}>
									{USERNAME}
								</Text>
								<Text
									fill='#D5D5D5'
									fontFamily={fontFamily}
									fontSize={25}
									fontWeight={400}
									lineHeight={30}
									margin={0}
									padding={0}>
									{TAG}
								</Text>
							</Layout>

							<Rect
								fill={HIGHLIGHT}
								padding={[4, 9]}
								radius={5}
								height={38}
								layout>
								<Text
									fill={BACKGROUND}
									fontFamily={fontFamily}
									fontSize={25}
									fontWeight={700}
									lineHeight={30}
									margin={0}
									padding={0}>
									{PRONOUNS}
								</Text>
							</Rect>
						</Layout>
					</Rect>
				</Layout>

				<Layout>
					<Rect
						ref={highlight}
						width={27}
						height={122}
						fill={HIGHLIGHT}
						radius={{
							top: 0,
							left: 0,
							bottom: 5,
							right: 5,
						}}
						opacity={0}
					/>
				</Layout>
			</Layout>
		</Layout>
	);

	yield* waitFor(0.1);
	yield* tween(0.3, (value) => {
		highlight().opacity(easeInOutCubic(value, 0, 1));
	});
	yield* waitFor(0.1);
	yield* tween(0.4, (value) => {
		background().size.x(`${easeInOutCubic(value, 0, 100)}%`);
	});
	yield* waitFor(3);
	yield* tween(0.4, (value) => {
		background().size.x(`${easeInOutCubic(value, 100, 0)}%`);
	});
	yield* waitFor(0.1);
	yield* tween(0.1, (value) => {
		highlight().opacity(easeInOutCubic(value, 1, 0));
	});
	yield* waitFor(0.1);
});
