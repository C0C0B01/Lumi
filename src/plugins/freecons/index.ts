import { byProps } from "@metro/common/filters";
import { Dev } from "@data/constants";
import { definePlugin, patcher } from "#plugin-context";

const icons = byProps(["getOfficialAlternateIcons"])
const iconsIds = byProps(["FreemiumAppIconIds"])
//const FreemiumAppIcons = iconsIds.FreemiumAppIconIds
//let alternateIcons = icons.getOfficialAlternateIcons()
//let mainIcons = icons.getIcons()

export default definePlugin({
    name: "Free-App-Icons",
    description: "Allows for nitro app icons to be used, WIP",
    authors: [Dev.cocobo1,
    {
        name: "Dziurwa💕",
        id: 1001086404203389018n
    }
    ],

    //patches: [
    //    {
    //        id: "icons",
    //        target: byProps(["getIcons"]),
    //        patch(module, patcher) {
    //            patcher.instead(module, "getIcons", () => mainIcons);
    //        },
    //    },
    //    {
    //        id: "iconsIds",
    //        target: byProps(["getOfficialAlternateIcons"]),
    //        patch(module, patcher) {
    //            patcher.instead(module, "getOfficialAlternateIcons", () => alternateIcons);
    //        },
    //    },
    //    {
    //        id: "getIconById",
    //        target: byProps(["getIconById"]),
    //        patch(module, patcher) {
    //            patcher.after(module, "getIconById", (_, ret) => {
    //                ret.isPremium = false;
    //            });
    //        },
    //    },
    //],
});