/*
 *
 * TransactionSection
 *
 */

import React from 'react';
import { View } from 'react-native';

import useStateHandler from 'hooks/useStateHandler';
import { useBusinessTransactions } from 'containers/Business/BusinessTransactions';

import FormattedMessage from 'theme/FormattedMessage';
import NoResult from 'theme/NoResult';

import Section from 'theme/Section';
import Text from 'theme/Text';

import style from './style';
import messages from '../messages';
import TransactionsWidgetLoader from './Loader';

function TransactionSection(_props) {
  const transactions = useBusinessTransactions();

  const showContent = useStateHandler({
    state: transactions,
  });

  if (!showContent) {
    return (
      <TransactionsWidgetLoader
        heading={
          <FormattedMessage {...messages.transactionHeading} isFragment />
        }
        numberOfItems={2}
      />
    );
  }

  return (
    <View style={style.rewardSectionContainer}>
      <Section
        heading={
          <FormattedMessage {...messages.transactionHeading} isFragment />
        }
      >
        {transactions?.data ? (
          transactions.data.map((item) => (
            <View key={item.id} style={style.itemWrapper}>
              <View style={style.contentWrapper}>
                <Text style={style.title}>{item.userSurname}</Text>
                <Text style={style.date}>{item.date}</Text>
              </View>
              <View style={style.pointsWrapper}>
                <FormattedMessage
                  style={style.points}
                  {...messages.pointsGivenLabel}
                  values={{ points: item.value }}
                />
              </View>
            </View>
          ))
        ) : (
          <NoResult message={transactions?.message} />
        )}
      </Section>
    </View>
  );
}

export default React.memo(TransactionSection);
