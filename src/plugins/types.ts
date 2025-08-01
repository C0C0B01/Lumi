import type { SetRequired } from "type-fest";
import type { Dev } from "@data/constants";
import type usePluginStore from "@stores/usePluginStore";
import type { Filter } from "@metro/common/filters";
import type { ContextualPatcher } from "@patcher/contextual";
import type { WithThis } from "@utils/types";
import type { AddonMetadata } from "@components/Wintry/Settings/pages/Addon";

export interface PluginState {
    running: boolean;
}

export interface PluginSettings {
    enabled: boolean;
    [key: string]: any;
}

export interface PluginPatch {
    id?: string;
    target: Filter<any>;
    predicate?: () => boolean;
    patch: (module: any, patcher: ContextualPatcher) => void;
}

export interface WintryPluginDefinition<D extends DefinedOptions<O>, O extends OptionDefinitions> {
    // Runtime properties. Please update RequiredRuntimePropertyKey if you add more required properties.
    readonly $id?: string;
    readonly $settings?: D;
    readonly $state?: PluginState;
    readonly $path?: string;
    readonly $isToggleable?: () => boolean;

    readonly name: string;
    readonly description: string;
    readonly authors: Dev[];

    readonly required?: boolean;
    readonly preenabled?: boolean;

    /**
     * A check if the plugin can be started/stopped without a restart.
     * If true, the plugin will not load/unload.
     */
    readonly requiresRestart?: (start: boolean, state: PluginState) => boolean;

    /**
     * Checks whether the plugin is supported for the current platform. Value returned must be consistent.
     * @returns non-false if the plugin is available to be started.
     */
    readonly isAvailable?: () => boolean;

    readonly patches?: PluginPatch[];

    /**
     * This is called once the index module is loaded and you can force lookup modules from here.
     */
    readonly start?: () => void;

    /**
     * Called when the plugin is stopped whether by user action or due to an error.
     * Cleanup any patches you made here IN THE CASE where the patches can be redone without a restart.
     * Otherwise, try to use plugin's state to hide the plugin effects (from the patches).
     */
    readonly cleanup?: () => void;

    /**
     * Called when the plugin is stopped by user action.
     * Return true to manually handle the plugin stop.
     * @param stop Function to stop the plugin
     */
    readonly onStopRequest?: (stop: () => void) => boolean;
}

type RequiredRuntimePropertyKey = "id" | "state" | "path" | "isToggleable";

interface InternalRuntimeMethods {
    asAddonMetadata(): AddonMetadata;
}

// Allows defining a plugin without the state property and allow extra properties
export type WintryPluginInstance<
    O extends OptionDefinitions = OptionDefinitions,
    D extends DefinedOptions<O> = DefinedOptions<O>,
> = SetRequired<WintryPluginDefinition<D, O>, `$${RequiredRuntimePropertyKey}`> & InternalRuntimeMethods;

export type LooseWintryPlugin<P> = WithThis<P, WintryPluginInstance>;

export type OptionDefinitions = Record<string, OptionDefinition>;
export type OptionDefinition =
    | StringOptionDefinition
    | BooleanOptionDefinition
    | SelectOptionDefinition
    | RadioOptionDefinition
    | SliderOptionDefinition
    | SelectOptionDefinition;

export type OptionDefToType<T extends OptionDefinition> = T extends StringOptionDefinition
    ? string
    : T extends BooleanOptionDefinition
    ? boolean
    : T extends RadioOptionDefinition
    ? T["options"][number]["value"]
    : T extends SelectOptionDefinition
    ? T["options"][number]["value"][]
    : T extends SliderOptionDefinition
    ? T["points"][number]
    : never;

type OptionDefaultType<O extends OptionDefinition> = O extends RadioOptionDefinition | SelectOptionDefinition
    ? O["options"] extends { default?: boolean }[]
    ? O["options"][number]["value"]
    : undefined
    : O extends { default: infer T }
    ? T
    : undefined;

export type SettingsStore<D extends OptionDefinitions> = {
    [K in keyof D]: OptionDefToType<D[K]> | OptionDefaultType<D[K]>;
};

export interface DefinedOptions<Def extends OptionDefinitions> {
    pluginId: string;
    definition: Def;
    get: () => SettingsStore<Def>;
    use: <T>(selector: (state: SettingsStore<Def>) => T) => T;
    subscribe: <T>(
        selector: (state: SettingsStore<Def>) => T,
        listener: (state: T, prevState: T) => void,
        options?: Parameters<typeof usePluginStore.subscribe>[2],
    ) => () => void;
    unsubscribeAll: () => void;
}

type OptionType = "string" | "boolean" | "select" | "radio" | "slider";

interface OptionDefinitionBase {
    type: OptionType;
    label: string;
    description?: string;
    icon?: string | { uri: string };
}

interface StringOptionDefinition extends OptionDefinitionBase {
    type: "string";
    placeholder?: string;
    default?: string;
    textArea?: boolean;
    validate?: (value: string) => boolean;
}

interface BooleanOptionDefinition extends OptionDefinitionBase {
    type: "boolean";
    default?: boolean;
}

interface SelectOptionDefinition extends OptionDefinitionBase {
    type: "select";
    options: SelectRadioOptionRow[];
}

interface RadioOptionDefinition extends OptionDefinitionBase {
    type: "radio";
    options: SelectRadioOptionRow[];
}

interface SliderOptionDefinition extends OptionDefinitionBase {
    type: "slider";
    points: (string | number)[];
    default?: string | number;
}

interface SelectRadioOptionRow {
    label: string;
    description?: string;
    icon?: string | { uri: string };
    value: string | number | boolean;
    default?: boolean;
}
