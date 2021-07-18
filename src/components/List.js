import React from 'react';
import { View, FlatList } from 'react-native';
import { BLUE_COLOUR, WHITE_COLOUR } from '../../res/drawables';
import { Text } from '../components'
const List = (props) => {
    return (
        <FlatList
            vertical
            data={props.data}
            renderItem={({ item: rowData, index }) => {
                return (
                    <View style={{ height: 50, margin: 5, padding:5,borderRadius: 5, backgroundColor: BLUE_COLOUR }}>
                        <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                            <Text style={{ color: WHITE_COLOUR }}>{rowData.lastname}</Text>
                            <Text style={{ color: WHITE_COLOUR }}>{rowData.firstname}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
                            <Text style={{ color: WHITE_COLOUR }}>{rowData.middlename}</Text>
                            <Text style={{ color: WHITE_COLOUR }}>{rowData.role}</Text>
                        </View>

                    </View>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}
export default List;