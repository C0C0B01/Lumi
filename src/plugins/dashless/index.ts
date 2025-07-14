import { ReactNative } from "src/metro/common/libraries/index.ts";
import { after } from "src/patcher/index.ts";
import { definePlugin, definePluginSettings, logger } from "#plugin-context";
import { Dev } from "@data/constants";

export default definePlugin({
  name: "Dashless",
  description: "Changes dashes in text channel names to spaces",
  authors: [Dev.cocobo1,
  {
    "name": "Awesomegamergame",
    "id": 504401951623086081n
  }],
});

const { View } = ReactNative;

const log = (data?: any) => {
  logger.info(data);
};

// Function to recursively traverse and modify children
const traverseAndModify = (node: any): any => {
  if (typeof node === "string") {
    return node.replace(/-/g, " ");
  }

  if (Array.isArray(node)) {
    return node.map(traverseAndModify);
  }

  if (node && typeof node === "object" && node.props && node.props.children) {
    return {
      ...node,
      props: {
        ...node.props,
        children: traverseAndModify(node.props.children),
      },
    };
  }

  return node;
};

const patchRender = () => {
  return after(View, "render", (_, res) => {
    //log("View render patched");

    const modifiedTree = traverseAndModify(res);

    //log("React tree modified");

    return modifiedTree;
  });
};

const unpatchRender = patchRender();

export const onUnload = () => {
  unpatchRender();
};
