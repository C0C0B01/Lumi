declare global {
    // Build constants
    const __DEV__: boolean;

    // ReactNative/Hermes globals
    var __turboModuleProxy: (name: string) => unknown;
    var globalEvalWithSourceUrl: (script: string, sourceURL: string) => any;
    var nativePerformanceNow: typeof performance.now;
    var nativeModuleProxy: Record<string, any>;

    var WINTRY_START_TIME: number;
    var nativeModuleProxy: Record<string, unknown>
    function __turboModuleProxy(name: string): unknown

    interface Window {
        [key: string]: any;
        wintry: any;
    }
}

export { };
