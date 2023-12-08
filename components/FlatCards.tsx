import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>

                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.text}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.text}>Sky</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.text}>Green</Text>
                </View>
            </View>
    </View>


        
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginLeft:10
    },
    container: {
        flex: 1,
        flexDirection:'row',
        padding:10,

    }
    ,
    card: {
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
    },
    cardOne: {
        backgroundColor: '#EF5354',
        color: 'white'

    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: 'green'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})
export default FlatCards;