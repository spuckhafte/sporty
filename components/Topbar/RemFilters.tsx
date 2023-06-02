import { Dialog, Icon } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { manageFilters } from '../../store/actions';
import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

export default function RemFilters(props: 
    { 
        appliedFilters: string[],
        visible: boolean,
        setVisible: React.Dispatch<React.SetStateAction<boolean>>,
        almostAppliedState: [string[], React.Dispatch<React.SetStateAction<string[]>>]
    }
) {
    const closeDialog = () => props.setVisible(false);
    
    return (
        <Dialog 
            isVisible={props.visible}
            overlayStyle={{ backgroundColor: 'white' }}
            onBackdropPress={closeDialog}
        >
            <Dialog.Title 
                title='APPLIED FILTERS' 
                titleStyle={ { color: '#3b444b' } } 
            />
            {
                props.appliedFilters.length > 0 ? 
                    props.appliedFilters.map(fil => {
                        return <FilterFlake 
                            fil={fil} 
                            almostAppliedState={props.almostAppliedState} 
                        />
                    })
                    // @ts-ignore
                    : <Text style={style.noFilterText}>NO FILTER APPLIED</Text>
            }
        </Dialog>
    )
}

function FilterFlake(
    { fil, almostAppliedState }: {
        fil:string,
        almostAppliedState: [string[], React.Dispatch<React.SetStateAction<string[]>>]
}
) {
    const dispatch = useDispatch();
    const [_, setAlmostApplied] = almostAppliedState;
    const filterClicked = (name:string) => {
        dispatch(manageFilters('removeFilter', name));
        setAlmostApplied(p => p.filter(i => i != name));
    }
    return <View style={style.flake}>
        <Text 
            numberOfLines={1} 
            style={style.flakeText}>
                {fil}
        </Text>
        <Pressable onPress={() => filterClicked(fil)}>
            <Icon
                name="cross"
                type='entypo'
                size={30}
            />
        </Pressable>
    </View>
}

const style = StyleSheet.create({
    flake: {
        display: 'flex',
        flexDirection: 'row',     
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flakeText: {
        width: '80%',
        marginLeft: 10,
        color: '#4a4a4a',
        fontWeight: 'bold'
    },
    noFilterText: {
        color: '#D3D3D3',
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 800
    }
});