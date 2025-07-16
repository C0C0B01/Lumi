import { definePlugin } from "#plugin-context";
import { Dev } from "@data/constants";
import { waitFor } from "@metro/internal/modules";
import { byProps } from "@metro/common/filters";
import patchDefinitionAndResolver from "@plugins/_core/painter/patches/resolver";
import { patchSelectivelySyncedUserSettingsStore } from "@plugins/_core/painter/patches/stores";

export default definePlugin({
	name: "Painter Plus",
	description: "Provides Themes+ functionality to Painter",
	authors: [
		{
			name: "Nexpid",
			id: 853550207039832084n,
		},
		Dev.cocobo1
	],
	required: true,
	start() {
		waitFor(byProps(["SemanticColor"]), () => {
			patchDefinitionAndResolver();
			patchSelectivelySyncedUserSettingsStore();
		});
	},
});

export enum PatchType {
	Icons = "icons",
	CustomIconOverlays = "custom_icon_overlays",
	MentionLineColor = "mention_line_color",
	Iconpack = "iconpack",
}

export enum InactiveReason {
	NoTheme = "no_theme",
	ThemesPlusUnsupported = "themes_plus_unsupported",
	NoIconpacksList = "no_iconpacks_list",
	NoIconpackConfig = "no_iconpack_config",
	NoIconpackFiles = "no_iconpack_files",
}

export enum ConfigIconpackMode {
	Automatic = "automatic",
	Manual = "manual",
	Disabled = "disabled",
}

export let enabled = false;