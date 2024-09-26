import Document from './Document';
export default class SVGFontLoader {
    private readonly document;
    loaded: boolean;
    loadingPromise: Promise<void>;
    constructor(document: Document);
    load(fontFamily: string, url: string): Promise<void>;
    private loadCore;
}
//# sourceMappingURL=SVGFontLoader.d.ts.map