import { RenderingContext2D } from '../types';
import Point from '../Point';
import { ITransform } from './types';
import Document, { Element } from '../Document';
import Translate from './Translate';
import Rotate from './Rotate';
import Scale from './Scale';
import Matrix from './Matrix';
import Skew from './Skew';
import SkewX from './SkewX';
import SkewY from './SkewY';
export { Translate, Rotate, Scale, Matrix, Skew, SkewX, SkewY };
interface ITransformConstructor {
    prototype: ITransform;
    new (document: Document, value: string, transformOrigin?: number[]): ITransform;
}
export default class Transform {
    private readonly document;
    static transformTypes: Record<string, ITransformConstructor>;
    static fromElement(document: Document, element: Element): Transform;
    private readonly transforms;
    constructor(document: Document, transform: string, transformOrigin?: string);
    apply(ctx: RenderingContext2D): void;
    unapply(ctx: RenderingContext2D): void;
    applyToPoint(point: Point): void;
}
//# sourceMappingURL=Transform.d.ts.map