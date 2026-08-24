import { ImageSourcePropType } from "react-native";

export type Category = {
    name: string;
    description: string;
    cover: string | ImageSourcePropType;
};
