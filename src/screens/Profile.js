import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    ImageBackground,
} from 'react-native';

const {width} = Dimensions.get('screen');

const IMAGES = {
  image1: require('../../img/Default.jpg'),
  image2: require('../../img/default.png'),
  image3: require('../../img/profile.png'),

};
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = width * 0.9;



const Profile = ({navigation}) => {
    const [images, setImages] = useState([
        { id: 1, image: IMAGES.image1 },
        { id: 2, image: IMAGES.image2 },
        { id: 3, image: IMAGES.image3 }
    ]);

    const tabBarheight = useBottomTabBarHeight();
    const tempIntrests = [{id: 1, item: 'Golf'}, {id: 2, item: 'Moveis'}, {id: 3, item: 'Running'}, {id: 4, item: 'Work-out'}, {id: 5, item: 'Star Wars'}, {id: 6, item: 'Lord of the Rings'}]
    const personalTraits = [{id: 1, item: 'Funny'}, {id: 2, item: 'Active'}, {id: 3, item: 'Humble'}]
    const lookFor = [{id: 1, item: 'Funny'}, {id: 2, item: 'Active'}, {id: 3, item: 'Humble'}]

    const allList = [{id: 1, list: tempIntrests, title: 'Hobbies'}, {id: 2, list: personalTraits,title: 'Personal Traits'}, {id: 3, list: lookFor, title: 'Looking for'}]
    const navigateToProfileSettings = () => {
        console.log("test");
        navigation.navigate("Profile Settings")
    }
    
    return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            
        </View>

        {/*Scrollable content*/}
        <View style={styles.scrollContainer}>
            <ScrollView
                indicatorStyle='white'
                contentContainerStyle={[
                    styles.scrollContentContainer,
                    {paddingBottom: tabBarheight}
                ]}
            >
           
           <View style={styles.imageWrapper}>
           
 
                
   
            </View>
                
            <View style={styles.border}>

            </View>
            <View style={{flex: 1, alignItems: 'flex-end', marginRight:25, width: Dimensions.get('screen').width}}>
            <Icon name="tool" size={35} style={{position: 'absolute'}} onPress={navigateToProfileSettings}></Icon>
            </View>
            
            <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 5}}>
                <Text style={styles.title}>Sebastian</Text> 
                <Text style={styles.title_age}>27</Text> 
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10, marginBottom: 5}}>
                <Text style={styles.title_smaller}>Munkedal</Text> 
            </View>
             
            <View style={styles.border}>

            </View>
        {allList.map((lst) => {
            return (
                <View key={lst.id} style={styles.flexBox}>
                <Text style={styles.itemBoxTitle}>{lst.title}</Text>
                <View  style={styles.itemBoxesContainer}>
                    {lst.list.map((item) => {
                        return (
                            <View key={item.id} style={styles.itemBoxes}>
                                <Text style={{fontFamily: 'sans-serif', color: 'grey', fontWeight: 'bold', paddingLeft: 5, paddingRight: 5}}>{item.item}</Text>

                            </View>
                            
                        )
                    })}
                </View>
                <View style={styles.border}>

                </View>
            </View>
            )
        })}        

            </ScrollView>
        </View>
    </View>
);
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        marginTop: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
        
    },
    border: {
        marginTop: 25,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: Dimensions.get('screen').width
    },
    imageWrapper: {
        height:250,
        marginTop: 10,      
        alignItems: 'center',
        display: 'flex',
    },
    profileImage: {
        width: 400,
        height: 400
    },
    title: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 25,
        marginRight: 10
    },
    title_smaller: {
        fontSize: 20,
        color: '#000000',
        fontSize: 17,
        marginRight: 10
    },
    title_age: {
        fontSize: 20,
        color: '#000000',
        fontSize: 25,
        marginRight: 10
    },
    flexBox: {
        alignSelf: 'flex-start',
        flexShrink: 1,
        width: Dimensions.get('screen').width,
        
        }, 
    itemBoxTitle: {
        marginBottom: 5, 
        marginLeft: 7,
        alignSelf: 'flex-start',
        fontFamily: 'sans-serif', 
        fontWeight: 'bold'
    },
    itemBoxesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    itemBoxes: {
        borderWidth: 2, 
        borderColor: 'lightgrey', 
        color: 'lightgrey', 
        margin: 5, 
        borderRadius: 25, 
        height: 25,
        marginLeft: 7,
    },
    scrollContainer: {
        flex: 1
    },
    scrollContentContainer: {
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 14
    },
    imageCard: {
        borderRadius: 14,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT
    },
    profile_Settings: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30
    }
})