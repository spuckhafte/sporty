import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Button, Icon, color } from "@rneui/base";
import { useState } from "react";
import { Gym } from "../../types";
import { testView } from "../Topbar/Topbar";
import gymDetails from '../../assets/fake/fake_gym.json';

export default function Card({ gym }: { gym: Gym }) {
    const [showMore, setShowMore] = useState(false);
    
    return (
        <View style={
            [
                styles.card, 
                +gym.id == Object.keys(gymDetails).length ? { marginBottom: 120 } : {}
            ]
        }>
            <Image 
                source={{ uri: gym.imgs[0] }}
                style={styles.mainImg}
                resizeMode="stretch"
                borderRadius={5}
            />
            <View style={{ paddingHorizontal: 5 }}>
                <View style={styles.showLess}>
                    <View>
                        <Text style={styles.gymname}>{gym.name}</Text>
                        <ShowRating stars={+gym.rating} total={gym.totalRatings} /> 
                    </View>
                    
                    <Pressable onPress={() => setShowMore(s => !s)}>
                        <Icon 
                            name={`chevron-with-circle-${showMore ? 'up' : 'down'}`}
                            type="entypo"
                            size={30}
                        />
                    </Pressable>
                </View>
                
                { showMore ? <CardDetails gym={gym}/> : null }
            </View>
        </View>
    )
}


function CardDetails({ gym }: { gym: Gym }) {
    return <View 
        style={styles.showMore} 
    >
        <Text style={styles.address}>
            {
                `${gym.area}, ${gym.city}, ${gym.state}`.trim()
            }
        </Text>
        <View style={styles.cardActions}>
            <Pressable style={styles.exploreBtn}>
                <Text style={styles.exploreBtnText}>Explore</Text>
            </Pressable>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Button 
                    radius={100} 
                    color={'success'}
                    size="sm"
                    buttonStyle={{ marginRight: 5 }}
                >
                        <Icon name="call" type="ionicon"/>
                </Button>
                <Button 
                    radius={100} 
                    color={'warning'}
                    size="sm"
                >
                    <Icon name="direction" type="entypo"/>
                </Button>
            </View>
        </View>
    </View>
}

function ShowRating({ stars, total }: { stars:number, total:number }) {
    return <View style={{ 
        display: 'flex', 
        flexDirection: 'row', 
    }}>
        {
            [1, 2, 3, 4, 5].map(star => {
                return star <= stars 
                    ? <Icon name="star" type="entypo" size={15} key={star}/>
                    : <Icon name="star-outlined" type="entypo" size={15} key={star}/>
            })
        }
        <Text style={styles.totalRatings}> {total} </Text>
    </View>
}


const styles = StyleSheet.create({
    card: {
        width: '95%',
        marginBottom: 15
    },
    mainImg: {
        width: '100%',
        height: 200,
    },
    gymname: {
        fontSize: 20,
        fontWeight: "bold",
    },
    showLess: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    showMore: {
        marginVertical: 5,
    },
    address: {
        textTransform: "capitalize",
        fontWeight: "300"
    },
    totalRatings: { 
        fontWeight: "400", 
        marginLeft: 4,
        fontSize: 10,
        borderRadius: 100,
        padding: 2,
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#d3d3d3'
    },
    cardActions: {
        display: 'flex', 
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    exploreBtn: {
        width: "75%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0275d8',
        borderRadius: 5
    },
    exploreBtnText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    }
});