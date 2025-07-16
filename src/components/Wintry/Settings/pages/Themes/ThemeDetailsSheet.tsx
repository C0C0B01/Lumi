import type { WintryTheme } from "src/plugins/_core/painter/types.ts";
import { t } from "@i18n";
import { RNGHScrollView } from "./common";
import { Stack, TableRow, TableRowGroup, Text } from "@components/Discord";
import BottomSheet from "@components/Discord/Sheet/BottomSheet";

interface ThemeDetailsSheetProps {
    theme: WintryTheme;
}

export function ThemeDetailsSheet({ theme }: ThemeDetailsSheetProps) {
    return (
        <BottomSheet bodyStyles={{ gap: 12 }} contentStyles={{ paddingHorizontal: 16 }}>
            <Stack
                style={{ marginTop: 8, flexWrap: "nowrap" }}
                spacing={8}
                justify="center"
                align="center"
                direction="horizontal"
            >
                <Text variant="heading-xl/semibold">{theme.display.name}</Text>
                <Text variant="heading-sm/semibold" color="text-muted">
                    ({theme.display.authors.map(authors => authors.name).join(", ")})
                </Text>
            </Stack>
            <RNGHScrollView contentContainerStyle={{ marginBottom: 12 }}>
                <TableRowGroup title={t.settings.plugins.info_sheet.details()}>
                    <TableRow
                        label={t.settings.plugins.info_sheet.id()}
                        trailing={<TableRow.TrailingText text={theme.display.authors.map(authors => authors.name).join(", ")} />}
                    />
                    {/* TODO: Implement this */}
                    {false && (
                        <TableRow
                            label={t.settings.plugins.info_sheet.version()}
                            trailing={<TableRow.TrailingText text={"<insert version here>"} />}
                        />
                    )}
                    <TableRow
                        label={t.settings.plugins.info_sheet.authors()}
                        trailing={
                            <TableRow.TrailingText
                                text={theme.display.authors.map(author => `${author.name} (${author.id})`).join(", ")}
                            />
                        }
                    />
                </TableRowGroup>
            </RNGHScrollView>
        </BottomSheet>
    );
}
