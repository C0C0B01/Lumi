import type { DiscordNativeModules } from "./types";

export function getNativeModule<T = any>(...names: string[]): T {
    const moduleProxy = window.nativeModuleProxy;
    const module = names.find(name => moduleProxy[name] !== null)!;
    return moduleProxy[module];
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