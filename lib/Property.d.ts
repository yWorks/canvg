import { Axis } from './ViewPort';
import Document, { Element } from './Document';
export default class Property<T = any> {
    private readonly document;
    private readonly name;
    private value;
    static readonly textBaselineMapping: {
        'baseline': string;
        'before-edge': string;
        'text-before-edge': string;
        'middle': string;
        'central': string;
        'after-edge': string;
        'text-after-edge': string;
        'ideographic': string;
        'alphabetic': string;
        'hanging': string;
        'mathematical': string;
    };
    static empty(document: Document): Property<string>;
    constructor(document: Document, name: string, value: T);
    hasValue(): boolean;
    isString(regexp?: RegExp): boolean;
    isUrlDefinition(): boolean;
    isPixels(): boolean;
    setValue(value: T): this;
    getValue(def?: T): T;
    getNumber(def?: T): number;
    getString(def?: T): string;
    getDpi(): number;
    getRem(): number;
    getEm(): number;
    getUnits(): string;
    getPixels(axis?: Axis, processPercent?: boolean): number;
    getPixels(isFontSize?: boolean): number;
    getMilliseconds(): number;
    getRadians(): number;
    getDefinition<T extends Element>(): T;
    getFillStyleDefinition(element: Element, opacity: Property): string | CanvasPattern | CanvasGradient;
    getTextBaseline(): string;
    addOpacity(opacity: Property): Property<string>;
}
//# sourceMappingURL=Property.d.ts.map