import type { OptionDefinition } from "@plugins/types";
import type { ThemeDisplay } from "src/plugins/_core/painter/types.ts";

export interface BaseOptionRowProps<T extends string = string> {
    opt: OptionDefinition & { type: T };
    plugin: ThemeDisplay;
    settingKey: string;

    start: boolean;
    end: boolean;
}
