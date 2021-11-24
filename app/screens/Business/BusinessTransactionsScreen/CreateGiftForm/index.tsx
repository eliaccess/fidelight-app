/**
 *
 * Form
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as yup from 'yup';
import { Formik } from 'formik';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useBusinessTransactions } from 'containers/Business/BusinessTransactions';
import { useToastContext } from 'theme/Toast';

import Modal from 'theme/Modal';
import Button from 'theme/Button';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import Input from 'theme/Input';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';
import messages from './messages';

interface FormProps {
  onSubmit: (data: FormState) => void;
  onRequestClose: () => void;
}

type FormState = {
  numberOfPoints: string;
};

const schema = yup.object().shape({
  numberOfPoints: yup.string().required('Required'),
});

const initialValue = {
  numberOfPoints: '',
};

const Form: React.FC<FormProps> = (props) => {
  const [qrCode, setQrCode] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const transactions = useBusinessTransactions();
  const toast = useToastContext();
  const formError = useFormattedMessage(messages.formError);
  useEffect(() => {
    if (transactions.success) {
      toast?.show({
        message: transactions.message,
        delay: 500,
        type: 'success',
      });
      transactions.reset();
      props.onRequestClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  useEffect(() => {
    if (transactions.error) {
      toast?.show({
        message: transactions.message,
        delay: 800,
        type: 'error',
      });
      transactions.reset();
      props.onRequestClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions.error]);

  return (
    <>
      <Animatable.View style={style.container} animation="fadeIn">
        <Formik
          initialValues={initialValue}
          validationSchema={schema}
          onSubmit={(values) => {
            transactions.givePointsAsGift({
              data: {
                user: qrCode,
                points: parseInt(values.numberOfPoints, 10),
              },
            });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={style.inputContainer}>
                <Input
                  textContentType="name"
                  keyboardType="numeric"
                  returnKeyType="next"
                  autoCapitalize="none"
                  onChangeText={handleChange('numberOfPoints')}
                  onBlur={handleBlur('numberOfPoints')}
                  value={values.numberOfPoints}
                  error={touched.numberOfPoints ? errors.numberOfPoints : null}
                  label={
                    <FormattedMessage
                      {...messages.numberOfPointsLabel}
                      isFragment
                    />
                  }
                />
              </View>

              <TouchFeedback
                onPress={() => setShowScanner(true)}
                style={style.scanQRInput}
              >
                {qrCode ? (
                  <FormattedMessage
                    {...messages.qrCodeValue}
                    style={style.qrCodeValue}
                  />
                ) : (
                  <FormattedMessage
                    {...messages.scanQrCodeLabel}
                    style={style.scanQrCodeLabel}
                  />
                )}

                <Icon
                  name="qr-code-sharp"
                  font="ionicons"
                  style={style.scanQRIcon}
                />
              </TouchFeedback>

              <View style={style.buttonContainer}>
                <Button
                  flex
                  label={
                    <FormattedMessage {...messages.submitLabel} isFragment />
                  }
                  onPress={() => {
                    if (!values.numberOfPoints || !qrCode) {
                      toast?.show({
                        message: formError,
                        delay: 1000,
                        type: 'error',
                      });
                      return;
                    }
                    handleSubmit();
                  }}
                />
              </View>
            </>
          )}
        </Formik>
      </Animatable.View>

      <Modal
        visible={showScanner}
        onRequestClose={() => setShowScanner(false)}
        modalContentStyle={style.modalContentStyle}
      >
        <View style={style.scannerWrapper}>
          <QRCodeScanner
            containerStyle={style.scannerContainer}
            onRead={(t) => {
              setQrCode(t.data);
              setShowScanner(false);
            }}
            topContent={
              <FormattedMessage
                {...messages.scannerHeading}
                style={style.scannerHeading}
              />
            }
            showMarker
          />
          <TouchFeedback
            onPress={() => setShowScanner(false)}
            style={style.closeButtonWrapper}
          >
            <Icon name="x" style={style.closeButtonIcon} />
          </TouchFeedback>
        </View>
      </Modal>
    </>
  );
};

export default Form;
