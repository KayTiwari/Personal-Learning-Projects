import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class AlbumDetail extends Component {
  render(props) {
    return (
      <View>
        <Text>{props.album.title}</Text>
      </View>
    )
  }
}
