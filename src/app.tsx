import { SafeAreaView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 20,
    },
    text: {
        fontSize: 20,
    },
});

export function App(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Hello,World!!</Text>
        </SafeAreaView>
    );
}
