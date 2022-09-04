import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';
import {FlatListData} from '../Components/FlatlistData/FlatListData';
import {Macbook} from '../Components/FlatlistData/FlatListData';
import {RecentlyViewed} from '../Components/FlatlistData/FlatListData';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff',}}>
      <ScrollView>
      <View>
        <TextInput
          style={{
            width: '94%',
            color: '#000',
            backgroundColor: '#f8faf9',
            fontWeight: 'bold',
            borderRadius: 7,
            paddingLeft: 15,
            paddingTop: 5,
            paddingBottom: 5,
            marginLeft: 10,
            marginTop: 10,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
          placeholder="Search"
        />
      </View>
      <View style={{marginTop: 20, marginLeft: 10}}>
        <FlatList
          horizontal
          keyExtractor={key => {
            return key.index;
          }}
          data={FlatListData}
          renderItem={({item}) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={item.image}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 5,
                    backgroungColor: '#000',
                  }}
                />
                <Text
                  style={{
                    textAlign: 'right',
                    marginLeft: 15,
                    marginRight: 15,
                    marginTop: 9,
                    fontWeight: 'bold',
                    color: '#000',
                  }}>
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{marginTop: 40, marginLeft: 10}}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text
            style={{
              marginLeft: 10,
              color: '#000',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Hot Sales
          </Text>
          <Text style={{textAlign: 'right', marginLeft: 230}}>See all</Text>
        </View>
        <FlatList
          horizontal
          keyExtractor={key => {
            return key.index;
          }}
          data={Macbook}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  source={item.image}
                  style={{
                    width: 175,
                    height: 175,
                    borderRadius: 15,
                    marginRight: 20,
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      textAlign: 'left',
                      marginLeft: 5,
                      marginRight: 30,
                      marginTop: 15,
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 13,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 15,
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 13,
                    }}>
                    {item.price}
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'left',
                    marginTop: 15,
                    fontSize: 13,
                    width: 175,
                  }}>
                  {item.detail}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{marginTop: 40, marginLeft: 10,}}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text
            style={{
              marginLeft: 10,
              color: '#000',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Recently Viewed
          </Text>
          <Text style={{textAlign: 'right', marginLeft: 175}}>See all</Text>
        </View>
        <FlatList
          numColumns={2}
          keyExtractor={key => {
            return key.index;
          }}
          data={RecentlyViewed}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  source={item.image}
                  style={{
                    width: 175,
                    height: 175,
                    borderRadius: 15,
                    marginRight: 20,
                  }}
                />
                  <Text
                    style={{
                      textAlign: 'left',
                      marginLeft: 5,
                      marginRight: 30,
                      marginTop: 15,
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 13,
                    }}>
                    {item.name}
                  </Text>
                  
                <Text
                  style={{
                    textAlign: 'left',
                    marginTop: 15,
                    fontSize: 10,
                    width: 175,
                  }}>
                  {item.detail}
                </Text>
                <Text
                    style={{
                      marginTop: 15,
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: 20,
                      marginBottom:20
                    }}>
                    {item.price}
                  </Text>
              </View>
            );
          }}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
