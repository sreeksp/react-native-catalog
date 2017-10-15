import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardsSection from './CardsSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    
    const { thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle } = styles;
    //destructuring the props when we have multiple references
    return (
        <Card>
            <CardsSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}    
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>    
            </CardsSection>

            <CardsSection>
                <Image
                    style={imageStyle}    
                    source={{ uri: image }}
                />
            </CardsSection>

            <CardsSection>
                <Button propsUrl={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardsSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
export default AlbumDetail;
