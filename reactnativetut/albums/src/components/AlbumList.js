import React, {Component} from 'react';
import { View, Text} from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios'



class AlbumList extends Component{
    constructor(){
        super();

        this.state = {
            albumdata: []
        }
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res =>{
            this.setState({
                albumdata: res.data
            })
            console.log(res);
        })
    }
    renderAlbums() {
        return this.state.albumdata.map(item => 
        <Text key={item.title}>{item.title}</Text>
        )
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
}
}

export default AlbumList