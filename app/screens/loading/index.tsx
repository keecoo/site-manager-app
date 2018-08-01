import * as React from "react";
import { View, ActivityIndicator } from "react-native";

class LoadingScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}
export default LoadingScreen;
