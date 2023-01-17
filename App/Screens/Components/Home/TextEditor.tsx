import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  actions,
  RichEditor,
  RichToolbar,
  defaultActions,
} from 'react-native-pell-rich-editor';
import {height} from '@Utils/Constant';
import BottomModalContainer from '@CommonComponent/BottommodalContainer';
import {CustomText} from '@CommonComponent/index';

const styles = StyleSheet.create({});

const TextEditor = () => {
  const richText = useRef<any>();

  const [descriptionText, setDescriptionText] = React.useState<string>('');

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const onEditorInitialized = () => {
    richText.current?.registerToolbar(function (items: any) {
      console.log(
        'Toolbar click, selected items (insert end callback):',
        items,
      );
    });
  };
  const insertCheckBox = () => {
    richText?.current?.insertHTML('<input type="checkbox" /><br>');
  };

  const insertVideo = () => {
    // you can easily add videos from your gallery
    // https://assets.mixkit.co/videos/preview/mixkit-women-taking-photos-on-a-balcony-3191-large.mp4
    // richText.current?.insertVideo(
    //   'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4',
    //   'width:100 height:300',
    // );
    richText.current?.insertHTML(
      '<video width="320" height="240" controls autoplay  muted><source src="https://assets.mixkit.co/videos/preview/mixkit-women-taking-photos-on-a-balcony-3191-large.mp4" type="video/mp4"></video><br>',
    );
  };

  const insertAudio = () => {
    richText.current?.insertHTML(
      "<audio controls><source src='https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4' type='audio/mpeg'></audio><br>",
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, height: height * 0.8}}>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText>Description:</CustomText>
            <Pressable
              onPress={() => {
                richText.current?.setContentHTML('');
              }}>
              <CustomText>clear</CustomText>
            </Pressable>

            <Pressable onPress={() => setShowModal(true)}>
              <CustomText>Show</CustomText>
            </Pressable>
          </View>
          <RichEditor
            ref={richText}
            useContainer={true}
            placeholder="Enter some text..."
            editorInitializedCallback={() => onEditorInitialized()}
            showsVerticalScrollIndicator={false}
            allowsLinkPreview
            // editorStyle={{
            //   backgroundColor: 'rgba(34,34,34, .5)',
            //   color: 'white',
            // }}
            onChange={descriptionText => {
              console.log('descriptionText:', descriptionText);
              setDescriptionText(descriptionText);
            }}
            initialContentHTML={descriptionText}
          />
        </ScrollView>
        <View>
          <RichToolbar
            editor={richText}
            selectedIconTint={'#2095F2'}
            disabledIconTint={'#bfbfbf'}
            actions={[
              'insertAudio',
              'insertVideo',
              actions.setStrikethrough,
              actions.code,
              actions.outdent,
              actions.removeFormat,
              actions.indent,
              actions.setBold,
              actions.setItalic,
              actions.insertLink,
              actions.insertImage,
              actions.undo,
              actions.setUnderline,
              actions.insertVideo,
              actions.keyboard,
              actions.heading1,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.checkboxList,
              actions.undo,
              actions.redo,
              actions.blockquote,
              actions.alignLeft,
              actions.alignCenter,
              actions.alignRight,
              actions.alignFull,
              'insertCheckBox',

              //   ...defaultActions,
              //   actions.insertImage,
            ]}
            iconMap={{
              insertAudio: ({tintColor}) => (
                <CustomText style={[{color: tintColor}]}>A</CustomText>
              ),
              [actions.heading1]: ({tintColor}) => (
                <CustomText style={[{color: tintColor}]}>H1</CustomText>
              ),
              [actions.registerToolbar]: ({tintColor}) => (
                <CustomText style={[{color: tintColor}]}>H2</CustomText>
              ),
              insertCheckBox: ({tintColor}) => (
                <CustomText style={[{color: tintColor}]}>CB</CustomText>
              ),
              insertVideo: ({tintColor}) => (
                <CustomText style={[{color: tintColor}]}>V</CustomText>
              ),
            }}
            insertAudio={insertAudio}
            onPressAddImage={() => {
              richText.current?.insertImage(
                'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
              );
            }}
            insertVideo={insertVideo}
            insertCheckBox={insertCheckBox}
          />
        </View>
      </KeyboardAvoidingView>
      <BottomModalContainer
        show={showModal}
        title={'Result'}
        onClose={() => {
          setShowModal(false);
        }}>
        <View style={{height: height * 0.7}}>
          <ScrollView>
            {/* <RichEditor
                ref={richText}
                placeholder="Enter some text..."
                disabled={true}
                // accessibilityElementsHidden={true}
                showsVerticalScrollIndicator={false}
                allowsLinkPreview
                pasteAsPlainText={true}
                containerStyle={{
                  flex: 1,
                  backgroundColor: 'rgba(34,34,34, .5)',
                }}
                // editorInitializedCallback={() => onEditorInitialized()}
                // editorStyle={{
                //   backgroundColor: 'rgba(34,34,34, .5)',
                //   color: 'white',
                // }}
                // onChange={descriptionText => {
                //   console.log('descriptionText:', descriptionText);
                //   //   setDescriptionText(descriptionText);
                // }}
                initialContentHTML={descriptionText}
              /> */}
          </ScrollView>
        </View>
      </BottomModalContainer>
    </SafeAreaView>
  );
};

export {TextEditor};
