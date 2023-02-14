import { makeProject } from '@motion-canvas/core/lib';

import transition from 'scenes/transition?scene';

export default makeProject({
	scenes: [transition],
	background: false, // switch to false when done
});
