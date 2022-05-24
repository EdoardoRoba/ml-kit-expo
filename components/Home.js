// import { axiosInstance, beUrl } from "../config.js"
import React from 'react';
import { StyleSheet, View, Text, LogBox } from 'react-native';
import { TextInput } from 'react-native-paper';
import { utils } from '@react-native-firebase/app';
import vision from '@react-native-firebase/ml-vision';
// LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200
    },
    overlayLoadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'transparent'
    },
});

export default function Home() {

    // React.useEffect(() => {
    //     AppState.addEventListener("change", _handleAppStateChange);

    //     return () => {
    //         AppState.removeEventListener("change", _handleAppStateChange);
    //     };
    // }, []);

    // const processImage = async (localPath) => {
    //     const labels = await vision().cloudImageLabelerProcessImage(localPath);

    //     labels.forEach(label => {
    //         console.log('Service labelled the image: ', label.text);
    //         console.log('Confidence in the label: ', label.confidence);
    //     });
    // }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 30, fontSize: 30, fontWeight: "bold" }}>Benvenuto!</Text>
            <Text style={{ marginTop: 40, fontSize: 15 }}>Seleziona la sezione che vuoi visitare</Text>
        </View>
    );
}
