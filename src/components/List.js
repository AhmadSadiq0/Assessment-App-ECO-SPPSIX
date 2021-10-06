import React from 'react';
import { View, FlatList } from 'react-native';
import { BLUE_COLOUR, WHITE_COLOUR } from '../../res/drawables';
import { Text } from '../components'
import { ROLE_LISTINGS } from '../../res/strings'
const List = (props) => {
    return (
        <FlatList
            vertical
            data={props.data}
            renderItem={({ item: rowData, index }) => {
                return (
                    <View style={{ margin: 5, padding: 5, borderRadius: 5, backgroundColor: BLUE_COLOUR }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ color: WHITE_COLOUR, width: '50%' }}>Last name: {rowData.lastname}</Text>
                            <Text style={{ color: WHITE_COLOUR, width: '50%' }}>First name: {rowData.firstname}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            {/* <Text style={{ color: WHITE_COLOUR, width: '50%' }}>Middle name: {rowData.middlename}</Text> */}
                            <Text style={{ color: WHITE_COLOUR, width: '100%' }}>Role: {ROLE_LISTINGS[rowData.role - 1].label}</Text>
                        </View>

                    </View>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}
export default List;