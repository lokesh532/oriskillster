import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";

const numColumns = 2;
const size = Dimensions.get("window").width / numColumns - 20;

class RecentCards extends Component {

    onPress=()=>{
      this.props.onPress(this.props.item);
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.itemContainer} onPress={this.onPress}>
                <View style={styles.cardItem}>
                    <View style={{ flex: 2 }}>
                        <Image source={require("../../../assets/home.jpg")}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                        <Text>{this.props.name}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}
export default RecentCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardItem: {
        flex: 1,
        margin: 0
    },
    itemContainer: {
        width: size,
        height: size,
        borderWidth: 0.5,
        margin: 3,
        borderColor: '#dddddd'
    }
});
