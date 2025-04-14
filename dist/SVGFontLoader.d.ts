import { Document } from './Document';
export declare class SVGFontLoader {
    private readonly document;
    loaded: boolean;
    loadingPromise: Promise<void>;
    constructor(document: Document);
    load(fontFamily: string, url: string): Promise<void>;
    private loadCore;
}
//# sourceMappingURL=SVGFontLoader.d.ts.map