import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Icon } from "@rneui/base";
import { SearchBar } from "@rneui/themed";
import { useSelector } from 'react-redux';
import { Store } from '../../types';
import { useState } from 'react';
import AddFilter from './AddFilter';


export default function TopBar() {
    const [addFiltVis, setAddFiltVis] = useState(false);
    const filters:string[] = useSelector((state:Store) => state.appliedFilters);
    return (
        <View>
            <View id="details" style={style.locationNpfp}>
                <View id="location-details" style={style.location}>
                    <Icon name="location" type="entypo" />
                    <Text style={style.locationName}>Haldwani</Text>
                </View>
                <Image 
                    source={require('../../assets/fake_pfp.jpg')}
                    style={style.pfp}
                ></Image>
            </View>
            <SearchBar 
                lightTheme={true} 
                placeholder="Enter your city..."
                containerStyle={style.searchBar}
            />
            <View id="filters" style={style.filters}>
                <Pressable 
                    style={style.addFilters} 
                    onPress={() => setAddFiltVis(true)}
                >
                    <Icon 
                        name='filter'
                        type='antdesign'
                        size={20}
                        />
                </Pressable>            
                <View style={style.appliedFilters} >
                    {
                        filters.length == 0 ? <NoFilterText />
                        : filters.map((i, l) => <AFilter name={i} key={l} />)
                    }
                </View>
                <Pressable style={style.addFilters}>
                    <Icon 
                        name='angle-right'
                        type='fontisto'
                        size={15}
                        color={filters.length == 0 ? 'gray' : 'black'}
                    />
                </Pressable>   
            </View>
            <AddFilter 
                appliedFilters={filters}
                visible={addFiltVis}
                setVisible={setAddFiltVis}
            />
        </View>
    )
}

function NoFilterText() {
    return <Text style={style.noFilterText}>NO FILTERS APPLIED</Text>;
}

function AFilter(props:{ name:string }) {
    return (
        <View style={style.aFilter}>
            <Text style={style.aFilterText}>{props.name.toUpperCase()}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    locationNpfp: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 10,
    },
    location: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationName: {
        fontSize: 20,
        marginLeft: 5
    },
    pfp: {
        height: 40,
        width: 40,
        borderRadius: 100
    },
    searchBar: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
    },
    filters: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '10%'
    },
    appliedFilters: {
        width: '100%',
        borderColor: '#D3D3D3',
        borderWidth: 0.5,
        borderRadius: 100,
        marginHorizontal: 5,
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
        overflow: 'scroll',
    },
    addFilters: {
        padding: 0,
        backgroundColor: '#D3D3D3',
        borderRadius: 200,
        width: 25,
        height: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noFilterText: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: '#D3D3D3'
    },
    aFilter: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D3D3D3',
        borderColor: '#D3D3D3',
        borderWidth: 0.5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginRight: 1
    },
    aFilterText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

function testView() {
    return { 
        borderStyle: 'solid',
        borderBottomColor: 'red',
        borderBottomWidth: 1 
    }
}