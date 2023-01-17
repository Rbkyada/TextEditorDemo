import React, {useState} from 'react';
import {CustomText, Layout} from '@CommonComponent/index';
import {ButtonComponent} from '@SubComponents/index';
import BottomModalContainer from '@CommonComponent/BottommodalContainer';
import {useNavigation} from '@react-navigation/native';
import {navigateToNextScreen} from '@Utils/Helper';
import {Route} from '@Routes/AppRoutes';

const Home = () => {
  const [isShowModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  return (
    <Layout title="Widgets" padding={20}>
      <CustomText large>Home screen</CustomText>
      <ButtonComponent
        onPress={() => {
          navigateToNextScreen(navigation, {
            name: Route.TextEditorScreen,
          });
          // setShowModal(true);
        }}
        title={'Show Modal'}
      />
      <BottomModalContainer
        title={'Modal'}
        onClose={() => setShowModal(false)}
        show={isShowModal}>
        <CustomText large>Modal</CustomText>
      </BottomModalContainer>
    </Layout>
  );
};

export default Home;
