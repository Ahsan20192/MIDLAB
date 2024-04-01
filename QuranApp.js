


// QuranApp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet } from 'react-native';
import { surahNames, surahDetails } from './QuranData';

const QuranApp = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const searchSurah = () => {
        const query = searchQuery.toLowerCase();
        const filteredNames = surahNames.filter(surah =>
            surah.english.toLowerCase().includes(query) ||
            surah.arabic.includes(query)
        );
        const filteredDetails = surahDetails.filter(detail =>
            filteredNames.some(name => name.english === detail.name)
        );
        const mergedResults = filteredNames.map((surah, index) => {
            return {
                ...surah,
                ...filteredDetails.find(detail => detail.name === surah.english)
            };
        });
        setSearchResults(mergedResults);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <View style={[styles.container, darkMode && styles.darkContainer]}>
            <Text style={[styles.title, darkMode && styles.darkTitle]}>Quran App</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={[styles.input, darkMode && styles.darkInput]}
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                    placeholder="Search Surah..."
                    placeholderTextColor={darkMode ? '#ccc' : '#333'}
                />
                <Button title="Search" onPress={searchSurah} color={darkMode ? 'black' : 'purple'} />
            </View>
          
            <FlatList
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.surahContainer}>
                        <Text style={[styles.surahName, darkMode && styles.darkSurahName]}>
                            {item.english} - {item.arabic}
                        </Text>
                        <View style={styles.detailsContainer}>
                            <Text style={[styles.surahDetail,  styles.darkSurahDetail]}>Number: {item.number}</Text>
                            <Text style={[styles.surahDetail,  styles.darkSurahDetail]}>Verses: {item.verses}</Text>
                            <Text style={[styles.surahDetail,  styles.darkSurahDetail]}>Revelation Type: {item.revelationType}</Text>
                        </View>
                    </View>
                )}
            />
              <ScrollView style={styles.scrollView}>
                {surahNames.map((surah, index) => (
                    <View key={index} style={styles.surahContainer}>
                        <Text style={[styles.surahName, darkMode && styles.darkSurahName]}>
                            {surah.english} - {surah.arabic}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <Button title={darkMode ? "Light Mode" : "Dark Mode"} onPress={toggleDarkMode} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#9b59b6', // Purple background color
        borderWidth: 2,
        borderColor: '#8e44ad', // Border color
        borderRadius: 10, // Border radius
    },
    darkContainer: {
        backgroundColor: '#333',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    darkTitle: {
        color: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        color: '#333',
        backgroundColor: '#fff',
    },
    darkInput: {
        color: '#fff',
        backgroundColor: '#555',
    },
    scrollView: {
        marginBottom: 20,
    },
    surahContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    surahName: {
        fontSize: 20, // Increased font size
        marginBottom: 10, // Increased spacing
        color: '#333',
        fontFamily: 'serif', // Added font family
        textAlign: 'center', // Centered text
        textDecorationLine: 'underline', // Underlined text
    },
    darkSurahName: {
        color: '#fff',
    },
    detailsContainer: {
        marginTop: 10,
    },
    surahDetail: {
        fontSize: 20,
        color: '#888',
    },
    darkSurahDetail: {
        color: 'white',
    },
});

export default QuranApp;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet } from 'react-native';
// import { surahNames, surahDetails } from './QuranData';

// const QuranApp = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [darkMode, setDarkMode] = useState(false);

//     const searchSurah = () => {
//         const query = searchQuery.toLowerCase();
//         const filteredNames = surahNames.filter(surah =>
//             surah.english.toLowerCase().includes(query) ||
//             surah.arabic.includes(query)
//         );
//         const filteredDetails = surahDetails.filter(detail =>
//             filteredNames.some(name => name.english === detail.name)
//         );
//         const mergedResults = filteredNames.map((surah, index) => {
//             return {
//                 ...surah,
//                 ...filteredDetails.find(detail => detail.name === surah.english)
//             };
//         });
//         setSearchResults(mergedResults);
//     };

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     return (
//         <View style={[styles.container, darkMode && styles.darkContainer]}>
//             <Text style={[styles.title, darkMode && styles.darkTitle]}>Quran App</Text>
//             <View style={styles.searchContainer}>
//                 <TextInput
//                     style={[styles.input, darkMode && styles.darkInput]}
//                     value={searchQuery}
//                     onChangeText={text => setSearchQuery(text)}
//                     placeholder="Search Surah..."
//                     placeholderTextColor={darkMode ? '#ccc' : '#333'}
//                 />
//                 <Button title="Search" onPress={searchSurah} color={darkMode ? 'black' : 'purple'} />
//             </View>
//             <ScrollView style={styles.scrollView}>
//                 {surahNames.map((surah, index) => (
//                     <View key={index} style={styles.surahContainer}>
//                         <Text style={[styles.surahName, darkMode && styles.darkSurahName]}>
//                             {surah.english} - {surah.arabic}
//                         </Text>
//                     </View>
//                 ))}
//             </ScrollView>
//             <FlatList
//                 data={searchResults}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.surahContainer}>
//                         <Text style={[styles.surahName, darkMode && styles.darkSurahName]}>
//                             {item.english} - {item.arabic}
//                         </Text>
//                         <Text style={[styles.surahDetail, darkMode && styles.darkSurahDetail]}>Number: {item.number}</Text>
//                         <Text style={[styles.surahDetail, darkMode && styles.darkSurahDetail]}>Verses: {item.verses}</Text>
//                         <Text style={[styles.surahDetail, darkMode && styles.darkSurahDetail]}>Revelation Type: {item.revelationType}</Text>
//                     </View>
//                 )}
//             />
//             <Button title={darkMode ? "Light Mode" : "Dark Mode"} onPress={toggleDarkMode} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#9b59b6', // Purple background color
//         borderWidth: 2,
//         borderColor: '#8e44ad', // Border color
//         borderRadius: 10, // Border radius
//     },
//     darkContainer: {
//         backgroundColor: '#333',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 20,
//         color: '#fff',
//     },
//     darkTitle: {
//         color: '#fff',
//     },
//     searchContainer: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
//     input: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginRight: 10,
//         color: '#333',
//         backgroundColor: '#fff',
//     },
//     darkInput: {
//         color: '#fff',
//         backgroundColor: '#555',
//     },
//     scrollView: {
//         marginBottom: 20,
//     },
//     surahContainer: {
//         marginBottom: 20,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         padding: 10,
//     },
//     surahName: {
//         fontSize: 20, // Increased font size
//         marginBottom: 10, // Increased spacing
//         color: '#333',
//         fontFamily: 'serif', // Added font family
//         textAlign: 'center', // Centered text
//         textDecorationLine: 'underline', // Underlined text
//     },
//     darkSurahName: {
//         color: '#fff',
//     },
//     surahDetail: {
//         fontSize: 14,
//         color: '#888',
//     },
//     darkSurahDetail: {
//         color: '#ccc',
//     },
// });

// export default QuranApp;


