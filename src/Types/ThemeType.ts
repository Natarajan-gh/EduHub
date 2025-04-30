import "@rneui/themed";
import { GetStartStyle } from "../Styles/GetstartStyle";

declare module "@rneui/themed" {
    export interface Theme {
        GetStartStyle: typeof GetStartStyle,
    }
}