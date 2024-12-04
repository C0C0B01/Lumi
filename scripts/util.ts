// @ts-nocheck
import chalk from "chalk";

export function printBuildSuccess(hash: string, branch: string, timeTook: number, minified?: boolean) {
    console.info(
        [
            chalk.bold.greenBright(`✔ Built bundle${minified ? " (minified)" : ""}`),
            hash && chalk.bold.blueBright(`(${hash})`),
            !branch && chalk.bold.cyanBright("(local)"),
            timeTook && chalk.gray(`in ${timeTook.toFixed(3)}ms`),
        ]
            .filter(Boolean)
            .join(" "),
    );
}
