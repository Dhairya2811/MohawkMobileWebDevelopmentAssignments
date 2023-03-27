import {StyleSheet, Text, View, Image } from 'react-native';

export default function MovieDisplay({ movie }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Image source={{uri: movie.Poster}} style={styles.image}/>
        <View style={styles.movieInfo}>
            <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Year:</Text>
                <Text style={styles.infoText}>{movie.Year}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Type:</Text>
                <Text style={styles.infoText}>{movie.Type}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>IMDB ID:</Text>
                <Text style={styles.infoText}>{movie.imdbID}</Text>
            </View>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#262626",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 5,
        borderRadius: 15,
        marginTop: 15,
    },
    title:{
        fontWeight: "bold",
        fontSize: 27,
        color: "#DAA520",
        textAlign: 'center'
    },
    image:{
        height: 300,
        width: 200,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    movieInfo:{

    },
    infoRow:{
        flexDirection: 'row',
        width: "100%",
        justifyContent: "center"
    },
    infoTitle:{
        color: "#DAA520",
        marginRight: 5,
        fontSize: 19,
        fontWeight: 'bold',
    },
    infoText:{
        color: "#DAA520",
        fontSize: 15,
        verticalAlign: 'middle',
        marginTop: 2,
    },
});

/**
 * {"Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg", 
 * "Title": "Harry Potter and the Deathly Hallows: Part 2", 
 * "Type": "movie", 
 * "Year": "2011", 
 * "imdbID": "tt1201607"}
 */