import { NavigationProp, useNavigation } from "@react-navigation/core"

interface navigationScreen {
    login: undefined,
    home: undefined,
    collector: undefined
};

export const useTypedNavigation = () => {
    return useNavigation<NavigationProp<navigationScreen>>();
}