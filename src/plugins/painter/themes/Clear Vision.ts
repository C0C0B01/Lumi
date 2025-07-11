import type { AddonMetadata } from "@components/Wintry/Settings/pages/Addon";
import type { WintryTheme } from "../types";

export const CLEAR_VISION_THEME: WintryTheme = {
    id: "clear.vision",
    type: "theme",
    display: {
        name: "ClearVision",
        description: "Clear Vision paints serenity across the canvas of our Discord realm.",
        authors: [
            {
                name: "Taki_Shiwa",
                id: "466968658997149706",
            },
        ],
    },
    main: {
        base: "dark",
        colors: {
            semantic: {
                ACTIVITY_CARD_BACKGROUND: { value: "#fb4934" },

                BACKGROUND_FLOATING: { value: "#102b47" },

                BACKGROUND_MENTIONED: { value: "#bdae931a" },

                BACKGROUND_MENTIONED_HOVER: {
                    value:
                        "#bdae931a"
                },

                BACKGROUND_MESSAGE_HOVER: {
                    value:
                        "#bdae931a"
                },
                BACKGROUND_MOBILE_PRIMARY: {
                    value:
                        "#061428",
                },
                BACKGROUND_MOBILE_SECONDARY: {
                    value:
                        "#061428",
                },
                BACKGROUND_ACCENT: {
                    value:
                        "#86b4ea",
                },
                BACKGROUND_MODIFIER_ACCENT: {
                    value:
                        "#114d917a",
                },
                BACKGROUND_MODIFIER_ACTIVE: {
                    value:
                        "#2678d626",
                },
                BACKGROUND_MODIFIER_HOVER: {
                    value:
                        "#2678d626",
                },
                BACKGROUND_MODIFIER_SELECTED: {
                    value:
                        "#2678d699",
                },
                BACKGROUND_NESTED_FLOATING: {
                    value:
                        "#0a2848",
                },
                BACKGROUND_PRIMARY: {
                    value:
                        "#061428",
                },
                BACKGROUND_SECONDARY: {
                    value:
                        "#242437",
                },
                BACKGROUND_SECONDARY_ALT: {
                    value:
                        "#000000",
                },
                BACKGROUND_TERTIARY: {
                    value:
                        "#04122e",
                },
                "BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "CHANNELS_DEFAULT": {
                    value:
                        "#575a68",
                },
                "CHANNEL_ICON": {
                    value:
                        "#2780E64d",
                },
                "CHAT_BACKGROUND": {
                    value:
                        "#00000099",
                },
                "CHANNEL_TEXT_AREA_PLACEHOLDER": {
                    value:
                        "#81b6ef",
                },
                "CHANNELTEXTAREA_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_CARD_BG": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_CARD_EDITABLE_BG": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_STORE_BG": {
                    value:
                        "#dcddde",
                },
                "DEPRECATED_TEXT_INPUT_BG": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_TEXT_INPUT_BORDER": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_TEXT_INPUT_BORDER_DISABLED": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_TEXT_INPUT_BORDER_HOVER": {
                    value:
                        "#0a2848",
                },
                "DEPRECATED_TEXT_INPUT_PREFIX": {
                    value:
                        "#0a2848",
                },
                "ELEVATION_HIGH": {
                    value:
                        "#0a2848",
                },
                "ELEVATION_LOW": {
                    value:
                        "#0a2848",
                },
                "ELEVATION_MEDIUM": {
                    value:
                        "#0a2848",
                },
                "ELEVATION_STROKE": {
                    value:
                        "#0a2848",
                },
                "FOCUS_PRIMARY": {
                    value:
                        "#0a2848",
                },
                "GUILD_HEADER_TEXT_SHADOW": {
                    value:
                        "#0a2848",
                },
                "HEADER_PRIMARY": {
                    value:
                        "#dcddde",
                },
                "HEADER_SECONDARY": {
                    value:
                        "#2780E6",
                },
                "INFO_DANGER_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "INFO_DANGER_FOREGROUND": {
                    value:
                        "#061428",
                },
                "INFO_DANGER_TEXT": {
                    value:
                        "#fb4934",
                },
                "INFO_HELP_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "INFO_HELP_FOREGROUND": {
                    value:
                        "#071e36",
                },
                "INFO_HELP_TEXT": {
                    value:
                        "#dcddde",
                },
                "INFO_POSITIVE_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "INFO_POSITIVE_FOREGROUND": {
                    value:
                        "#071e36",
                },
                "INFO_POSITIVE_TEXT": {
                    value:
                        "#dcddde",
                },
                "INFO_WARNING_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "INFO_WARNING_FOREGROUND": {
                    value:
                        "#071e36",
                },
                "INFO_WARNING_TEXT": {
                    value:
                        "#dcddde",
                },
                "INPUT_BACKGROUND": {
                    value:
                        "#102b47",
                },
                "INTERACTIVE_ACTIVE": {
                    value:
                        "#2780E6",
                },
                "INTERACTIVE_HOVER": {
                    value:
                        "#061428",
                },
                "INTERACTIVE_MUTED": {
                    value:
                        "#3f414c",
                },
                "INTERACTIVE_NORMAL": {
                    value:
                        "#81b6ef",
                },
                "LOGO_PRIMARY": {
                    value:
                        "#83a598",
                },
                "MODAL_FOOTER_BACKGROUND": {
                    value:
                        "#0a2848",
                },
                "SCROLLBAR_AUTO_THUMB": {
                    value:
                        "#061428",
                },
                "SCROLLBAR_AUTO_TRACK": {
                    value:
                        "#061428",
                },
                "SCROLLBAR_THIN_THUMB": {
                    value:
                        "#061428",
                },
                "SCROLLBAR_THIN_TRACK": {
                    value:
                        "#061428",
                },
                "STATUS_DANGER_BACKGROUND": {
                    value:
                        "#fb4934",
                },
                "STATUS_DANGER_TEXT": {
                    value:
                        "#83a598",
                },
                "STATUS_POSITIVE_BACKGROUND": {
                    value:
                        "#689d6a",
                },
                "STATUS_POSITIVE_TEXT": {
                    value:
                        "#dcddde",
                },
                "STATUS_WARNING_BACKGROUND": {
                    value:
                        "#fab387",
                },
                "STATUS_WARNING_TEXT": {
                    value:
                        "#fb4934",
                },
                "TEXTBOX_MARKDOWN_SYNTAX": {
                    value:
                        "#076678",
                },
                "TEXT_DANGER": {
                    value:
                        "#fb4934",
                },
                "TEXT_LINK": {
                    value:
                        "#2780E6",
                },
                "TEXT_LINK_LOW_SATURATION": {
                    value:
                        "#dcddde",
                },
                "TEXT_MUTED": {
                    value:
                        "#2678d6",
                },
                "TEXT_NORMAL": {
                    value:
                        "#dcddde",
                },
                "TEXT_POSITIVE": {
                    value:
                        "#689d6a",
                },
                "TEXT_WARNING": {
                    value:
                        "#fb4934",
                }
            },
            raw: {
                "BG_GRADIENT_CRIMSON_MOON_2": "#000000",
                "PRIMARY_100": "#3789E6",
                "PRIMARY_130": "#dbeafa",
                "PRIMARY_200": "#7eb3f0",
                "PRIMARY_230": "#7eb3f0",
                "PRIMARY_300": "#3789E6",
                "PRIMARY_360": "#2780E6",
                "PRIMARY_400": "#0f4480",
                "PRIMARY_460": "#061428",
                "PRIMARY_500": "#114d91",
                "PRIMARY_560": "#102b47",
                "PRIMARY_600": "#061428",
                "PRIMARY_630": "#000000",
                "PRIMARY_660": "#000000",
                "PRIMARY_700": "#000000",
                "PRIMARY_800": "#000000",
                "PRIMARY_900": "#0a2848",
                "BLACK_500": "#000000",
                "BLACK_530": "#000000",
                "BLACK_560": "#000000",
                "BLACK_600": "#000000",
                "BLACK_630": "#000000",
                "BLACK_660": "#000000",
                "BLACK_700": "#000000",
                "BLACK_730": "#000000",
                "BLACK_760": "#000000",
                "BLACK_800": "#000000",
                "BLACK_830": "#000000",
                "BLACK_860": "#000000",
                "BLACK_900": "#000000",
                "BRAND_230": "#ff0000",
                "BRAND_260": "#86b4ea",
                "BRAND_360": "#4b96e7",
                "BRAND_500": "#2780E6",
                "BRAND_560": "#3789E6",
                "RED_400": "#2780E6",
                "RED_430": "#2780E6",
                "RED_460": "#2780E6",
                "GREEN_360": "#689d6a",
                "WHITE_500": "#dcddde",
                "YELLOW_300": "#2780E6"
            },
        },
    },
    asAddonMetadata(): AddonMetadata {
        throw new Error("Function not implemented.");
    },
};
