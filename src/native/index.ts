import type { DiscordNativeModules } from "./types";

export function getNativeModule<T = any>(...names: string[]): T {
    for (const name of names) {
        const module = global.__turboModuleProxy(name);
        if (module) return module as T;

        const legacyModule = global.nativeModuleProxy?.[name];
        if (legacyModule) return legacyModule as T;
    }

    throw new Error(`Native module "${names.join(", ")}" not found.`);
}

// Names are based on 259204 (Android), this is probably not the same on iOS
export const NativeCacheModule = __turboModuleProxy(
    'NativeCacheModule',
) as DiscordNativeModules.CacheModule

export const NativeFileModule = __turboModuleProxy(
    'NativeFileModule',
) as DiscordNativeModules.FileModule

export const NativeClientInfoModule = __turboModuleProxy(
    'NativeClientInfoModule',
) as DiscordNativeModules.ClientInfoModule

export const NativeDeviceModule = __turboModuleProxy(
    'NativeClientInfoModule',
) as DiscordNativeModules.ClientInfoModule

export const BundleUpdaterModule = getNativeModule("BundleUpdaterManager");

export const NativeThemeModule = __turboModuleProxy(
    'NativeThemeModule',
) as DiscordNativeModules.ThemeModule

// React Native
export const ImageLoader = getNativeModule("ImageLoader");