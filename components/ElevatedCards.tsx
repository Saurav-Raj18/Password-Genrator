import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View style={{flex:1}}>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.cardElevated]}>
                   <Text style={styles.text}>Tap</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                   <Text style={styles.text}>me</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                   <Text style={styles.text}>to</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                   <Text style={styles.text}>scroll</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                   <Text style={styles.text}>more...</Text>
                </View>
            </ScrollView>

        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginLeft: 10
    },
    card:{
       // flex:1,
        width:100,
        height:100,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        margin:8
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#EF5354',
        shadowOpacity:1,
        shadowRadius:10
    },
    container:{
        padding:8,
        flex:1,        
    },
    text:{
        color:'black',
        fontWeight:'bold'
    }
})