import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import PostBottomHeader from '../../components/post/PostBottomHeader';

import {useState, useRef} from 'react';

import {TouchableOpacity} from 'react-native';

import {BlurView} from '@react-native-community/blur';

import Video from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { TypographyColors } from '../../constants/theme';

const Post = ({item}) => {
  const images = item.postContent
    .map(content =>
      content.img
        ? content.img.map(url => ({
            url,
            props: {className: 'h-full w-full rounded-lg'},
          }))
        : [],
    )
    .flat();

  
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const maxLength = 150;
  const formatedDescription =
    description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;

  const renderImageItem = images => {
    const imageCount = images.length;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = index => {
      setSelectedImageIndex(index);
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
    };

    return (
      <>
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={closeModal}>
          <ImageViewer
            imageUrls={images.map(content => ({url: content.url}))}
            index={selectedImageIndex}
            enableSwipeDown={true}
            onSwipeDown={closeModal}
          />
        </Modal>
        <View
          style={{width: '100%', height: 200}}
          className="rounded-lg overflow-hidden">
          {imageCount <= 2 ? (
            // Render a single row with one or two columns
            <View style={{flexDirection: 'row', flex: 1}}>
              {images.map((content, index) => (
                <TouchableOpacity
                  key={content.url}
                  onPress={() => openModal(index)}
                  className="flex-1">
                  <Image
                    source={{uri: content.url}}
                    style={{
                      flex: 1,
                      height: '100%',
                      marginRight: imageCount === index + 1 ? 0 : 2,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            // Render two rows
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <TouchableOpacity
                  onPress={() => openModal(0)}
                  className="flex-1">
                  <Image
                    source={{uri: images[0].url}}
                    style={{flex: 1, height: '100%', marginBottom: 2}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                {images.slice(1, 3).map((content, index) => (
                  <TouchableOpacity
                    key={content.url}
                    onPress={() => openModal(index + 1)}
                    className="flex-1">
                    <Image
                      source={{uri: content.url}}
                      style={{
                        flex: 1,
                        height: '100%',
                        marginRight: imageCount === index + 2 ? 0 : 2,
                      }}
                    />
                  </TouchableOpacity>
                ))}
                {imageCount > 3 ? (
                  <TouchableOpacity
                    onPress={() => openModal(3)}
                    style={{flex: 1}}>
                    <BlurView
                      blurType="light"
                      blurAmount={2}
                      style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                      }}>
                      <Text
                        style={{
                          fontLight: 'font-light',
                          color: 'white',
                          fontSize: 20,
                        }}>
                        +{imageCount - 3}
                      </Text>
                    </BlurView>
                    <Image
                      source={{uri: images[3].url}}
                      style={{flex: 1, height: '100%'}}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          )}
        </View>
      </>
    );
  };

  return (
    <View className="flex-1 bg-white shadow-sm p-2 my-1 rounded-2xl">
      <View>
        <View className="justify-between flex-row items-center">
          <View className="flex-row items-center">
            <Image
              className="w-[40] h-[40] rounded-full mr-[5]"
              source={require('../../assets/images/avatar-male.jpg')}
            />
            <View className="justify-center">
              <Text className="font-bold">Username</Text>
              <Text className="font-light opacity-50 text-xs">@user.name</Text>
            </View>
          </View>

          <View className="flex-row mr-2 space-x-2 items-center">
            <TouchableOpacity
              className="p-1 rounded-lg flex-row items-center space-x-1 max-w-[150] overflow-hidden"
              style={{
                backgroundColor: '#EEF0FF',
              }}>
              <SimpleLineIcons
                name="location-pin"
                color={TypographyColors.purple}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: TypographyColors.purple,
                }}>
                {item.location}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="my-2">{formatedDescription}</Text>
      </View>

      {item.postContent.map((content, index) => (
        <React.Fragment key={index}>
          {content.video ? (
            <View className="w-full h-[200] rounded-2xl overflow-hidden">
              <TouchableOpacity className="flex-1" activeOpacity={1}>
                <Video
                  source={require('../../assets/video/v_2.mp4')}
                  style={{
                    flex: 1,
                    height: '100%',
                    width: '100%',
                  }}
                  ref={ref => {
                    this.player = ref;
                  }}
                  onBuffer={this.onBuffer}
                  onError={this.videoError}
                  resizeMode="contain" // Adjust the video's aspect ratio to fit the container
                  repeat={true} // Repeat the video when it reaches the end
                  controls={true}
                  paused={true} // Show default video controls (play/pause, seek bar, etc.)
                  fullscreenAutorotate={true} // Allow automatic screen rotation during fullscreen playback
                  fullscreenOrientation="landscape" // Set the fullscreen orientation (landscape/portrait)
                />
              </TouchableOpacity>
            </View>
          ) : null}
          {content.img ? renderImageItem(images) : null}
        </React.Fragment>
      ))}

      <PostBottomHeader />
    </View>
  );
};

export default Post;