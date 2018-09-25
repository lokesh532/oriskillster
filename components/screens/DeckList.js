import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  ScrollView
} from "react-native";
import databaseApi from "../../api/databaseApi.js";
import Icon from "react-native-vector-icons/Ionicons";
import RecentCards from "./cards/RecentCards";
import PathCards from "./cards/PathCards";

const numColumns = 2;
const size = Dimensions.get("window").width / numColumns;

const images = [];

export default class DeckList extends Component {
  constructor(props) {
    super(props);
    //  this.itemRef = props.itemRef;
    this.state = {
      data: []
    };
  }

  // componentDidMount() {
  //   this.itemRef.on("value", data => {
  //     let items = [];
  //     data.forEach(child => {
  //       items.push({
  //         name: child.val().name,
  //         id: child.val().id,
  //         subjects: child.val().subjects
  //       });
  //     });
  //     console.log("items" + JSON.stringify(items));
  //     this.setState({
  //       data: items
  //     });
  //   });
  // }

  componentWillMount() {
    this.startHeaderHeight = 80;
    if ((Platform.OS = "android")) {
      this.startHeaderHeight = 70 + StatusBar.currentHeight;
    }
    databaseApi.getAllSubjects().then(data => {
      this.setState({ data: data });
    });
  }

  _onPress = item => {
    if (this.state.data[item.id - 1].subjects && this.state.data[item.id - 1].subjects == null) {
      console.log("go to quiz");
      this.props.navigation.navigate("Quiz");
    } else {
      this.setState({
        data: this.state.data[item.id - 1].subjects
      });
    }
  };

  render() {
    const cards = [];
    console.log("data state :" + JSON.stringify(this.state.data));
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: this.startHeaderHeight,
            backgroundColor: "white",
            borderBottomColor: "#dddddd"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "white",
              marginHorizontal: 10,
              marginVertical: 10,
              elevation: 1,
              marginTop: Platform.OS == "android" ? 30 : null,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#d6d7da"
            }}
          >
            <Icon name="ios-search" size={30} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Try React"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                height: 35,
                marginHorizontal: 10,
                fontWeight: "700",
                backgroundColor: "white"
              }}
            />
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                paddingHorizontal: 20
              }}
            >
              Recent Activity...
            </Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <RecentCards
                  imageUri={require("../../assets/home.jpg")}
                  name="Home"
                />
                <RecentCards
                  imageUri={require("../../assets/experiences.jpg")}
                  name="Experiences"
                />
                <RecentCards
                  imageUri={require("../../assets/restaurant.jpg")}
                  name="Resturant"
                />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>Paths...</Text>
              <View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    paddingTop: 20
                  }}
                >
                  <FlatList
                    data={this.state.data}
                    renderItem={({ item, separators }) => (
                          <PathCards  name={item.name} item={item} onPress={this._onPress} />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={numColumns}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    margin: 3,
    backgroundColor: "#fccdd3",
    elevation: 3,
    alignItems: "center"
  },
  itemContainer: {
    width: size,
    height: size
  },
  tabBar: {
    height: 55,
    backgroundColor: "#98dafc",
    paddingHorizontal: 15,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabItem: {
    alignItems: "center"
  }
});
