import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends Component {
  render(props) {
    return (
      <Card>
        <CardSection>
        <Text>{props.album.title}</Text>
        </CardSection>
      </Card>
    )
  }
}
