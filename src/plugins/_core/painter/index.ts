import { definePlugin } from "#plugin-context";
import { Dev } from "@data/constants";
import { waitFor } from "@metro/internal/modules";
import { byProps } from "@metro/common/filters";
import patchDefinitionAndResolver from "./patches/resolver";
import { patchSelectivelySyncedUserSettingsStore } from "./patches/stores";
import { applyTheme, useThemeStore } from "./useThemeStore";

export default definePlugin({
    name: "Painter",
    description: "Provides themes functionalities within Lumi",
    authors: [Dev.Pylix, Dev.cocobo1],
    required: true,
    start() {
        waitFor(byProps(["SemanticColor"]), () => {
            patchDefinitionAndResolver();
            patchSelectivelySyncedUserSettingsStore();
            applyTheme(useThemeStore.getState().appliedTheme, false);
        });
    },
});
