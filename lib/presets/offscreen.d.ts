/**
 * Options preset for `OffscreenCanvas`.
 */
export declare function offscreen(): {
    window: null;
    ignoreAnimation: boolean;
    ignoreMouse: boolean;
    createCanvas(width: number, height: number): OffscreenCanvas;
    createImage(url: string): Promise<ImageBitmap>;
};
//# sourceMappingURL=offscreen.d.ts.map