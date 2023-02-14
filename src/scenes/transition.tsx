import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle, Shape, Node } from '@motion-canvas/2d/lib/components';
import { createRef, Reference } from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';
import { easeInOutCubic, tween } from '@motion-canvas/core/lib/tweening';

export default makeScene2D(function* (view) {
	const circle1 = createRef<Circle>();
	const circle2 = createRef<Circle>();
	const circle3 = createRef<Circle>();
	const circle4 = createRef<Circle>();

	const props = {
		x: -2000,
		y: -1000,
		width: 2000,
		height: 4000,
	};

	view.add(
		<Node>
			<Circle ref={circle1} fill='#ff8c7c' {...props} />
			<Circle ref={circle2} fill='#161116' {...props} />
			<Circle ref={circle3} fill='#312631' {...props} />
			<Circle ref={circle4} fill='#453345' {...props} />
		</Node>
	);

	yield* all(
		circleMover(circle1, 3.5),
		circleMover(circle2, 3),
		circleMover(circle3, 2.3),
		circleMover(circle4, 2.6)
	);
});

function* circleMover<T extends Shape>(node: Reference<T>, timing: number) {
	yield* tween(timing, (value) => {
		node().absoluteRotation(easeInOutCubic(value, 0, 100));
		node().position.x(easeInOutCubic(value, -2000, 2000));
		node().position.y(easeInOutCubic(value, -1000, 2000));
	});
}
