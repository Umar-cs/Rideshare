import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

const History = () => {
  const [History, setHistory] = useState([
    { key: 1, item: '11/8/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 2, item: '22/8/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 3, item: '14/6/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 4, item: '16/5/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 5, item: '19/5/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 6, item: '07/5/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 7, item: '02/3/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 8, item: '17/3/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
    { key: 9, item: '05/2/2022', location: '123, Xyz Apt', receiverID: '#2930', Quantity: '150 Rupees' },
  ])

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>History</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      {/* Body */}
      <ScrollView>
        {
          History.map((i) => {
            return (
              <View style={{ backgroundColor: 'white', padding: 15 }} key={i.key}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                  <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>Date: {i.item}</Text>

                  <View style={{ height: 15, width: 120, alignItems: "center", justifyContent: 'center', }}>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>Rider ID: {i.receiverID}</Text></View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                  <View><Text style={{ color: '#6A6A6A', fontSize: 14, }}>Location: {i.location}</Text></View>

                  <View style={{ height: 15, width: 100, alignItems: "center", justifyContent: 'center', }}>
                    <Text style={{ fontSize: 14, color: '#6A6A6A' }}>Fare: {i.Quantity}</Text></View>
                </View>

                <View style={{ backgroundColor: '#D1D1D1', height: 2, marginTop: 10 }}>

                </View>

              </View>
            )
          })

        }

      </ScrollView>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})