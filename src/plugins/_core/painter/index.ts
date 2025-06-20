import { definePlugin } from "#plugin-context";
import { Dev } from "@data/constants";
import { waitFor } from "@metro/internal/modules";
import { byProps } from "@metro/common/filters";
import patchDefinitionAndResolver from "./patches/resolver";
import { patchSelectivelySyncedUserSettingsStore } from "./patches/stores";

export default definePlugin({
    name: "Painter",
    description: "Provides themes functionalities within Wintry",
    authors: [Dev.Pylix],
    required: true,
    start() {
        waitFor(byProps(["SemanticColor"]), () => {
            patchDefinitionAndResolver();
            patchSelectivelySyncedUserSettingsStore();
        });
    },
});
