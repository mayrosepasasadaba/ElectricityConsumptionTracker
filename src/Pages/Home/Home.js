import React from "react";
import { Text, View } from "react-native";
import Navbar from "../../Components/Navbar/Navbar";

export default function Home () {
    return (
        // <Navbar>
            <View>
                <Navbar>
                    <Text>
                    Welcome to the Homepage.
                </Text>
                </Navbar>
            </View>
        // </Navbar>
    )
}