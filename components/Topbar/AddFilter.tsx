import allFilters from '../../assets/data/filters.json';
import { Dialog, CheckBox } from '@rneui/base';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { manageFilters } from '../../store/actions';

export default function AddFilter(props: 
    { 
        appliedFilters: string[],
        visible: boolean,
        setVisible: React.Dispatch<React.SetStateAction<boolean>>,
        almostAppliedState: [string[], React.Dispatch<React.SetStateAction<string[]>>]
    }
) {
    const [almostApplied, setAlmostApplied] = props.almostAppliedState;
    const dispatch = useDispatch();
    
    const filterClicked = (name:string) => {
        if (almostApplied.includes(name))
            setAlmostApplied(i => i.filter(j => j != name));
        else setAlmostApplied(i => [...i, name]);
    }

    const closeDialog = () => props.setVisible(false);

    const applyFilters = useCallback(() => {
        dispatch(manageFilters('replaceFilters', almostApplied));
        closeDialog();
    }, [almostApplied]);
    

    return (
        <Dialog 
            isVisible={props.visible}
            overlayStyle={{ backgroundColor: '#d3d3d3' }}
        >
            <Dialog.Title 
                title='SELECT FILTERS' 
                titleStyle={ { color: '#3b444b' } } 
            />
            {
                allFilters.map((fil, i) => {
                    return <CheckBox
                        title={fil.toUpperCase()}
                        checked={almostApplied.includes(fil)}
                        key={i}
                        onPress={() => filterClicked(fil)}
                    />
                })
            }
            <Dialog.Actions>
                <Dialog.Button
                    title="CONFIRM"
                    onPress={applyFilters}
                />
                <Dialog.Button title="CANCEL" onPress={closeDialog} />
            </Dialog.Actions>
        </Dialog>
    )
}