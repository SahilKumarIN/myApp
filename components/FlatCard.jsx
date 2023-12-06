import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
    return (

        <View>
            <Text style={styles.heading}>FlatCard</Text>
            <ScrollView
                horizontal >
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Welcome</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>To</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>React-Native</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>App</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Created</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText} >By</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Sahil</Text>
                    </View>


                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 8
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: '#f1aead',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'orange',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowWidth: 10,
        marginHorizontal: 10,
        marginVertical: 6,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
    },
    cardText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    }

})