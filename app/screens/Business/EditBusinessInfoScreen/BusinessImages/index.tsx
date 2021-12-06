/*
 *
 * BusinessImages
 *
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';

import { useBusinessProfile } from 'containers/Business/BusinessProfile';

import FullScreenLoader from 'theme/FullScreenLoader';
import FormattedMessage from 'theme/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import { useToastContext } from 'theme/Toast';
import Image from 'theme/Image';
import Icon from 'theme/Icon';

import style from './style';
import messages from './messages';

const OPTION = {
  title: 'Select Image',
  options: {
    saveToPhotos: false,
    mediaType: 'image',
  },
};

function BusinessImages(_props) {
  const businessProfile = useBusinessProfile();

  const toast = useToastContext();

  useEffect(() => {
    if (businessProfile.success) {
      toast?.show({
        message: businessProfile.message,
        delay: 1000,
        type: 'success',
      });
      businessProfile.reset();
    }
  }, [businessProfile?.success]);

  useEffect(() => {
    if (businessProfile.error) {
      toast?.show({
        message: businessProfile.message,
        delay: 500,
        type: 'error',
      });
      businessProfile.reset();
    }
  }, [businessProfile?.error]);

  const onAddLogoPress = () => {
    // @ts-ignore
    launchImageLibrary(OPTION, (resp: any) => {
      if (resp?.didCancel) {
        return;
      }

      businessProfile.addLogo({
        data: resp?.assets[0],
      });
    });
  };

  const onAddBackgroundImagePress = () => {
    // @ts-ignore
    launchImageLibrary(OPTION, (resp: any) => {
      if (resp?.didCancel) {
        return;
      }
      businessProfile.addBackgroundImage({
        data: resp.assets[0],
      });
    });
  };

  return (
    <Animatable.View animation="fadeInRight" duration={1000}>
      <View style={style.sectionContainer}>
        <FormattedMessage
          {...messages.businessImageHeading}
          style={style.sectionHeading}
        />
        <View style={style.businessImageContainer}>
          <View style={style.addWrapper}>
            <FormattedMessage
              {...messages.addLogoLabel}
              style={style.addLabel}
            />
            {businessProfile.data.logoUrl ? (
              <TouchFeedback
                onPress={onAddLogoPress}
                style={style.addImageWrapper}
              >
                <Image
                  uri={businessProfile.data.logoUrl}
                  style={style.logo}
                  resizeMode="cover"
                />
                <View style={style.editImageIconWrapper}>
                  <Icon name="edit-2" style={style.editImageIcon} />
                </View>
              </TouchFeedback>
            ) : (
              <TouchFeedback
                onPress={onAddLogoPress}
                style={style.addImageWrapper}
              >
                <Icon name="upload" style={style.uploadIcon} />
                <FormattedMessage
                  {...messages.addLogoLabel}
                  style={style.uploadLabel}
                />
              </TouchFeedback>
            )}
          </View>
          <View style={style.addWrapper}>
            <FormattedMessage
              {...messages.addBusinessImage}
              style={style.addLabel}
            />
            {businessProfile.data?.backgroundPicture ? (
              <TouchFeedback
                onPress={onAddBackgroundImagePress}
                style={style.addImageWrapper}
              >
                <Image
                  uri={businessProfile.data.backgroundPicture}
                  style={style.logo}
                  resizeMode="cover"
                />
                <View style={style.editImageIconWrapper}>
                  <Icon name="edit-2" style={style.editImageIcon} />
                </View>
              </TouchFeedback>
            ) : (
              <TouchFeedback
                onPress={onAddBackgroundImagePress}
                style={style.addImageWrapper}
              >
                <Icon name="upload" style={style.uploadIcon} />
                <FormattedMessage
                  {...messages.addBusinessImageLabel}
                  style={style.uploadLabel}
                />
              </TouchFeedback>
            )}
          </View>
        </View>
        {businessProfile.submitting || businessProfile.updating ? (
          <FullScreenLoader />
        ) : null}
      </View>
    </Animatable.View>
  );
}

export default React.memo(BusinessImages);
