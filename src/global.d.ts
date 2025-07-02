declare global {
    // Build constants
    const __DEV__: boolean;

    // ReactNative/Hermes globals
    var globalEvalWithSourceUrl: (script: string, sourceURL: string) => any;
    var nativePerformanceNow: typeof performance.now;
    var nativeModuleProxy: Record<string, any>;
    var WINTRY_START_TIME: number;
    var nativeModuleProxy: Record<string, unknown>
    function __turboModuleProxy(name: string): unknown

    interface Window {
        [key: string]: any;
        __fbBatchedBridge: any;
        wintry: any;
    }
}

export { };
