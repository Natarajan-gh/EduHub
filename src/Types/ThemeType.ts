import "@rneui/themed";
import { GetStartStyle } from "../Styles/GetstartStyle";
import { HomeStyle } from "../Styles/HomeStyle";
import { CollectorStyle } from "../Styles/CollectorStyle";

declare module "@rneui/themed" {
    export interface Theme {
        GetStartStyle: typeof GetStartStyle,
        HomeStyle: typeof HomeStyle,
        CollectorStyle: typeof CollectorStyle,
    }
}