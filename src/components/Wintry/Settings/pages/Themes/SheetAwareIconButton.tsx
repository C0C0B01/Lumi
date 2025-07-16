import IconButton from "@components/Discord/Button/IconButton";
import { hideSheet } from "@components/utils/sheets";
import type { ComponentProps } from "react";

export function SheetAwareIconButton(props: ComponentProps<typeof IconButton>) {
    const { onPress } = props;
    props.onPress &&= () => {
        hideSheet("ThemeSheetComponent");
        onPress?.();
    };

    return <IconButton {...props} />;
}
