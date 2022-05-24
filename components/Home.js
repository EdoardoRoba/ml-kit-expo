import React from 'react';
import axios from "axios";
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

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
        backgroundColor: 'transparent',
    },
});

export default function Home() {

    const [artist, setArtist] = React.useState("");
    const [song, setSong] = React.useState("");
    const [lyrics, setLyrics] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const url = "https://api.lyrics.ovh/v1/{artist}/{song}"

    const searchLyrics = () => {
        setIsLoading(true)
        axios.get(url.replace("{artist}", artist).replace("{song}", song))
            .then(response => {
                setIsLoading(false)
                setLyrics(response.data.lyrics)
            }).catch(error => {
                setIsLoading(false)
                setLyrics("LYRICS NOT FOUND")
                console.log(error)
            });
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 30, fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Find the lyrics of your song!</Text>
            <View style={{ width: "80%", marginTop: 20 }}>
                <TextInput
                    label="artist"
                    mode="outlined"
                    value={artist}
                    onChangeText={inputArtist => setArtist(inputArtist)}
                />
                <TextInput
                    label="song"
                    mode="outlined"
                    value={song}
                    onChangeText={inputSong => setSong(inputSong)}
                />
            </View>
            <Button style={{ marginTop: 20 }} disabled={artist === "" || song === ""} onPress={() => {
                searchLyrics()
            }}>Search</Button>
            {
                !isLoading ? null : <View style={styles.overlayLoadingContainer}>
                    <ActivityIndicator size="large" color="green" animating={true} />
                </View>
            }
            <SafeAreaView style={{ maxWidth: 300, maxHeight: 400, alignItems: "center" }}>
                <ScrollView showsVerticalScrollIndicator={false} persistentScrollbar={true}>
                    <Pressable style={{ width: 300, alignItems: "center" }}>
                        <View style={{ maxWidth: 300 }}>
                            <Text>{lyrics}</Text>
                        </View>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
