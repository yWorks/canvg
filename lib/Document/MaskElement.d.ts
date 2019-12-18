import { RenderingContext2D } from '../types';
import Element from './Element';
export default class MaskElement extends Element {
    type: string;
    apply(ctx: RenderingContext2D, element: Element): void;
    render(_: RenderingContext2D): void;
}
//# sourceMappingURL=MaskElement.d.ts.map