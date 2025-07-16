import type { WintryTheme } from "src/plugins/_core/painter/types.ts";
import { View } from "react-native";
import { findAssetId } from "@api/assets";
import TitleComponent from "./TitleComponent";
import { t } from "@i18n";
import { RNGHScrollView } from "./common";
import { showSheet } from "@components/utils/sheets";
import { ThemeDetailsSheet } from "./ThemeDetailsSheet";
import { SheetAwareIconButton } from "./SheetAwareIconButton";
import IconButton from "@components/Discord/Button/IconButton";
import BottomSheet from "@components/Discord/Sheet/BottomSheet";
import ContextMenu from "@components/Discord/ContextMenu/ContextMenu";

interface ThemeSheetComponentProps {
    theme: WintryTheme;
}

export default function ThemeSheetComponent({ theme }: ThemeSheetComponentProps) {
    return (
        <BottomSheet contentStyles={{ paddingHorizontal: 16 }}>
            <RNGHScrollView contentContainerStyle={{ marginBottom: 24 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                        paddingVertical: 24,
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <TitleComponent theme={theme} />
                    <ContextMenu
                        items={[
                            {
                                label: t.settings.plugins.info_sheet.details(),
                                iconSource: findAssetId("CircleInformationIcon-primary"),
                                action: () => {
                                    showSheet("ThemeDetailsSheet", ThemeDetailsSheet, { theme }, "stack");
                                },
                            },
                        ]}
                    >
                        {props => (
                            <IconButton
                                {...props}
                                icon={findAssetId("MoreHorizontalIcon")}
                                variant="secondary"
                                size="sm"
                            />
                        )}
                    </ContextMenu>
                </View>
                {false && (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignContent: "center",
                            marginBottom: 12,
                        }}
                    >
                        <SheetAwareIconButton
                            label={t.settings.plugins.info_sheet.view_source()}
                            variant="secondary"
                            disabled={true} // Disabled until the plugin info page is implemented (if ever)
                            icon={findAssetId("img_account_sync_github_white")}
                            onPress={() => { }}
                        />
                        <SheetAwareIconButton
                            label={t.settings.plugins.info_sheet.more_info()}
                            variant="secondary"
                            disabled={true}
                            icon={findAssetId("LinkExternalSmallIcon")}
                            onPress={() => { }}
                        />
                    </View>
                )}
            </RNGHScrollView>
        </BottomSheet>
    );
}
