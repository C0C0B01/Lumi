import { definePlugin, definePluginSettings, logger } from "#plugin-context";
import {
    _registeredSettingItems,
    _registeredSettingSections,
    registerSettingRenderer,
    registerSettingSection,
    type SettingRendererConfig,
} from "@api/settings";
import { TableRow } from "@components/Discord";
import Tag from "@components/Wintry/Tag";
import { Dev } from "@data/constants";
import { getVersions } from "@debug/info";
import { t } from "@i18n";
import { byName, byProps } from "@metro/common/filters";
import { PaintPaletteIcon, PuzzlePieceIcon, WrenchIcon } from "@metro/common/icons";
import { NavigationNative } from "@metro/common/libraries";
import { useUpdaterStore } from "@stores/useUpdaterStore";
import { findInReactTree } from "@utils/objects";
import { memoize } from "es-toolkit";
import { memo, useLayoutEffect } from "react";

const settings = definePluginSettings({
    onTop: {
        label: "Put on top",
        description: "Put the settings on top of the settings list",
        type: "boolean",
        default: false,
    },
});

export default definePlugin({
    name: "Settings",
    description: "Provides a settings interface and debug information",
    authors: [Dev.Pylix, Dev.cocobo1],
    required: true,

    patches: [
        {
            id: "add-renderer",
            target: byProps(["SETTING_RENDERER_CONFIG"]),
            patch(module, patcher) {
                const origRendererConfig = module.SETTING_RENDERER_CONFIG as SettingRendererConfig;

                Object.defineProperty(module, "SETTING_RENDERER_CONFIG", {
                    enumerable: true,
                    configurable: true,
                    get: () => ({
                        ...origRendererConfig,
                        ..._registeredSettingItems,
                    }),
                    set: value => {
                        Object.defineProperty(module, "SETTING_RENDERER_CONFIG", {
                            writable: true,
                            value,
                        });
                    },
                });

                patcher.attachDisposer(() => {
                    module.SETTING_RENDERER_CONFIG = origRendererConfig;
                });
            },
        },
        {
            id: "overview-screen",
            target: byName("SettingsOverviewScreen", { returnEsmDefault: false }),
            patch(module, patcher) {
                patcher.after(module, "default", (_, ret) => {
                    const { props } = findInReactTree(ret, i => i.props?.sections);
                    if (!props) {
                        logger.warn("Failed to find settings sections in SettingsOverviewScreen");
                        return;
                    }

                    if (!settings.get().onTop) {
                        try {
                            const accountSectionIndex = props.sections.findIndex((i: any) =>
                                i.settings.includes("ACCOUNT"),
                            );
                            if (accountSectionIndex !== -1) {
                                props.sections = [
                                    ...props.sections.slice(0, accountSectionIndex + 1),
                                    ..._registeredSettingSections,
                                    ...props.sections.slice(accountSectionIndex + 1),
                                ];
                                return;
                            }
                        } catch (e) {
                            logger.warn`Failed to insert settings sections next to account section: ${e}`;
                        }
                    }

                    props.sections = [..._registeredSettingSections, ...props.sections];
                });
            },
        },
    ],

    start() {
        setImmediate(() => {
            // Hack that allows pushing custom pages without having to register the setting renderer
            // by passing the component through the route params
            registerSettingRenderer("LUMI_CUSTOM_PAGE", {
                type: "route",
                title: () => "",
                unsearchable: true,
                screen: {
                    route: "LUMI_CUSTOM_PAGE",
                    getComponent: memoize(() =>
                        memo(() => {
                            const navigation = NavigationNative.useNavigation();
                            const route = NavigationNative.useRoute();

                            const { render: PageComponent, ...args } = route.params;

                            // biome-ignore lint/correctness/useExhaustiveDependencies: This is fine
                            useLayoutEffect(() => void navigation.setOptions({ ...args }), [navigation]);

                            // TODO: Wrap with ErrorBoundary
                            return <PageComponent />;
                        }),
                    ),
                },
            });

            registerSettingSection({
                label: t.wintry(),
                settings: [
                    registerSettingRenderer("LUMI", {
                        type: "route",
                        title: () => t.wintry(),
                        IconComponent: () => <TableRow.Icon source={require("@assets/ic_lumi.png")} />,
                        useTrailing: () => {
                            const availableUpdate = useUpdaterStore(s => s.availableUpdate);
                            if (availableUpdate) return <Tag text={t.updater.update_tag()} />;

                            const { version, shortRevision, branch } = getVersions().bunny;
                            return `${version}-${shortRevision} (${branch})`;
                        },
                        screen: {
                            route: "LUMI",
                            getComponent: () => require("@components/Wintry/Settings/pages/Wintry").default
                        },
                    }),
                    registerSettingRenderer("LUMI_PLUGINS", {
                        type: "route",
                        title: () => t.settings.sections.plugins(),
                        IconComponent: PuzzlePieceIcon,
                        screen: {
                            route: "LUMI_PLUGINS",
                            getComponent: () => require("@components/Wintry/Settings/pages/Plugins").default
                        },
                    }),
                    registerSettingRenderer("LUMI_THEMES", {
                        type: "route",
                        title: () => t.settings.sections.themes(),
                        IconComponent: PaintPaletteIcon,
                        screen: {
                            route: "LUMI_THEMES",
                            getComponent: () => require("@components/Wintry/Settings/pages/Themes").default
                        },
                    }),
                    registerSettingRenderer("LUMI_DEVELOPER", {
                        type: "route",
                        title: () => t.settings.sections.developer(),
                        IconComponent: WrenchIcon,
                        screen: {
                            route: "LUMI_DEVELOPER",
                            getComponent: () => require("@components/Wintry/Settings/pages/Developer").default
                        },
                    }),
                ],
            });
        });
    },
});
