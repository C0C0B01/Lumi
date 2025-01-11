import type { ReactNode, RefObject, MutableRefObject, PropsWithoutRef, FC } from "react";
import type * as RN from "react-native";
import type { LiteralUnion } from "type-fest";
import type { TextStyles, ThemeColors } from "./styles";

// Abandon all hope, ye who enter here
type Style = RN.StyleProp<RN.ViewStyle & RN.ImageStyle & RN.TextStyle>;

type InteractiveSize = "sm" | "md" | "lg";

// Buttons
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive" | "active";

interface ButtonProps {
    disabled?: boolean;
    onPress: () => void;
    loading?: boolean;
    variant?: LiteralUnion<ButtonVariant, string>;
    text?: string;
    size?: LiteralUnion<InteractiveSize, string>;
    iconPosition?: "start" | "end";
    scaleAmountInPx?: number;
    icon?: RN.ImageSourcePropType | ReactNode;
    style?: Style;
    grow?: boolean;
}

export type Button = React.ForwardRefExoticComponent<ButtonProps>;

interface TwinButtonsProps {
    children: ReactNode;
}

export type TwinButtons = React.ComponentType<TwinButtonsProps>;

// Segmented Control
interface SegmentedControlItem {
    id: string;
    label: string;
    page?: JSX.Element | null;
}

export interface SegmentedControlStateArgs {
    items: SegmentedControlItem[];
    pageWidth: number;
    defaultIndex?: number;
}

// Not a real type, replace with proper Reanimated type when available
type SharedValue<T> = unknown;

export interface SegmentedControlState {
    activeIndex: SharedValue<number>;
    pagerRef: RefObject<unknown>;
    scrollTarget: SharedValue<number>;
    scrollOverflow: SharedValue<number>;
    scrollOffset: SharedValue<number>;
    items: SegmentedControlItem[];
    itemDimensions: SharedValue<unknown[]>;
    pageWidth: number;
    pressedIndex: SharedValue<number>;
    onPageChangeRef: MutableRefObject<unknown>; // { current: undefined }
    setActiveIndex: (index: number) => void;
    setItemDimensions: (index: number, dimensions: unknown[]) => void;
    useReducedMotion: boolean;
}

interface SegmentedControlProps {
    state: SegmentedControlState;
    variant?: string;
}

export type SegmentedControl = React.FC<SegmentedControlProps>;

interface SegmentedControlPagesProps {
    state: SegmentedControlState;
}

export type SegmentedControlPages = React.FC<SegmentedControlPagesProps>;

interface CompatSegmentedControlProps {
    values: string[];
    selectedSegmentIndex?: number;
    onValueChange?: (index: number) => void;
    onSetActiveIndex?: (index: number) => void;
}

export type CompatSegmentedControl = React.FC<CompatSegmentedControlProps>;

// TODO: Confirm if this is real
interface TextInputProps extends Omit<RN.TextInputProps, "onChange" | "onChangeText" | "value"> {
    defaultValue?: string;
    description?: string;
    editable?: boolean;
    errorMessage?: string;
    focusable?: boolean;
    grow?: boolean;
    isCentered?: boolean;
    isClearable?: boolean;
    isDisabled?: boolean;
    isRound?: boolean;
    label?: string;
    leadingIcon?: React.FC<any>;
    leadingPressableProps?: RN.PressableProps;
    leadingText?: string;
    onChange?: (text: string) => void;
    size?: "sm" | "md" | "lg";
    state?: "error" | "default";
    style?: Style;
    trailingIcon?: React.FC<any>;
    trailingPressableProps?: RN.PressableProps;
    trailingText?: string;
    value?: string | null;
}

export type TextInput = React.FC<TextInputProps>;

interface RowButtonProps {
    variant?: LiteralUnion<ButtonVariant, string>;
    style?: Style;
    icon?: RN.ImageSourcePropType | ReactNode;
    label: string | ReactNode;
    subLabel?: string | ReactNode;
    onPress: () => void;
    disabled?: boolean;
}

export type RowButton = React.FC<RowButtonProps>;

interface StackProps {
    /** defaults to vertical */
    direction?: "vertical" | "horizontal";
    /** defaults to 8 */
    spacing?: number;
}

export type Stack = React.FC<React.PropsWithChildren<StackProps> & RN.ViewProps>;

interface FABProps {
    icon: RN.ImageSourcePropType | ReactNode;
    style?: Style;
    onPress: () => void;
    positionBottom?: number;
}

export type FloatingActionButton = React.FC<FABProps>;

interface ActionSheetProps {
    scrollable?: boolean;
}

export type ActionSheet = React.FC<React.PropsWithChildren<ActionSheetProps>>;

type TextProps = React.ComponentProps<typeof RN.Text> & {
    variant?: TextStyles;
    color?: ThemeColors;
    lineClamp?: number;
    maxFontSizeMultiplier?: number;
    style?: RN.StyleProp<RN.TextStyle>;
};

export type Text = React.FC<TextProps>;

interface IconButtonProps {
    label?: string;
    icon: RN.ImageSourcePropType | ReactNode;
    onPress: () => void;
    disabled?: boolean;
    size?: InteractiveSize;
    variant?: ButtonVariant;
    style?: Style;
}

export type IconButton = React.FC<IconButtonProps>;

export type PressableScale = React.FC<PropsWithoutRef<typeof RN.Pressable>>;

interface TableRowBaseProps {
    arrow?: boolean;
    label: string | ReactNode;
    subLabel?: string | ReactNode;
    variant?: LiteralUnion<"danger", string>;
    icon?: JSX.Element | false | null;
    disabled?: boolean;
    trailing?: ReactNode | React.ComponentType<any>;
}

interface TableRowProps extends TableRowBaseProps {
    onPress?: () => void;
}

export type TableRow = React.FC<TableRowProps> & {
    Icon: TableRowIcon;
    TrailingText: TableRowTrailingText;
    Arrow: FC;
};

interface TableRowTrailingTextProps {
    text: string;
}

export type TableRowTrailingText = FC<TableRowTrailingTextProps>;

interface TableRowIconProps {
    style?: RN.StyleProp<RN.ImageStyle>;
    variant?: LiteralUnion<"danger", string>;
    source: RN.ImageSourcePropType | undefined;
}

export type TableRowIcon = React.FC<TableRowIconProps>;

interface TableRowGroupProps {
    title: string;
    children: ReactNode;
}

export type TableRowGroup = React.FC<TableRowGroupProps>;

interface TableRadioGroupProps {
    title: string;
    value: string;
    hasIcons?: boolean;
    onChange: <T extends string>(type: T) => void;
    children: ReactNode;
}

export type TableRadioGroup = FC<TableRadioGroupProps>;

interface TableRadioRowProps extends TableRowBaseProps {
    value: string;
}

export type TableRadioRow = FC<TableRadioRowProps>;

interface TableSwitchRowProps extends TableRowBaseProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}

export type TableSwitchRow = FC<TableSwitchRowProps>;

interface TableCheckboxRowProps extends TableRowBaseProps {
    checked: boolean;
    onPress: () => void;
}

export type TableCheckboxRow = FC<TableCheckboxRowProps>;

interface ContextMenuItem {
    label: string;
    variant?: LiteralUnion<"destructive", string>;
    iconSource?: number;
    action: () => unknown;
}

interface ContextMenuProps {
    triggerOnLongPress?: boolean;
    items: ContextMenuItem[] | ContextMenuItem[][];
    align?: "left" | "right" | "above" | "below" | "auto" | null;
    title?: string;
    children: React.FC<Record<"onPress" | "onLongPress" | "accessibilityActions" | "onAccessibilityAction", any>>;
}

export type ContextMenu = FC<ContextMenuProps>;
