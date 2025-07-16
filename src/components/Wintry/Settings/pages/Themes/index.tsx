import type { ThemeDisplay, WintryTheme } from "@plugins/_core/painter/types";
import AddonPage from "../Addon";
import { createAddonCollectionManager } from "../Addon/AddonCollectionManager";
import { applyTheme, useThemeStore } from "@plugins/_core/painter/useThemeStore";
import { showSheet } from "@components/utils/sheets";

const themeCollectionManager = createAddonCollectionManager<WintryTheme, "A-Z" | "Z-A", string>({
    data: () => useThemeStore.getState().themes,
    defaultFilterOptions: [],
    defaultSortOption: "A-Z",
    sortOptions: [
        {
            key: "A-Z",
            label: () => "A-Z",
            compareFn: (a, b) => {
                const meta = a.asAddonMetadata();
                return meta.name.localeCompare(meta.name);
            },
        },
        {
            key: "Z-A",
            label: () => "Z-A",
            compareFn: (a, b) => {
                const meta = a.asAddonMetadata();
                return meta.name.localeCompare(meta.name);
            },
        },
    ],
    filterOptions: [],
});

export default function Themes() {
    return (
        <AddonPage<WintryTheme>
            collectionManager={themeCollectionManager}
            onPressInfo={theme => {
                showSheet("ThemeSheetComponent", import("./ThemeSheetComponent"), { theme });
            }}
            useCanHandleAddon={() => true}
            useToggler={id => {
                const enabled = useThemeStore(s => s.appliedTheme === id);
                return [enabled, () => (enabled ? applyTheme(null, true) : applyTheme(id, true))];
            }}
        />
    );
}
