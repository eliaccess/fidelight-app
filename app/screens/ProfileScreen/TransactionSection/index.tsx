/*
 *
 * TransactionSection
 *
 */

import React from 'react';
import { View } from 'react-native';

import { useTransactions } from 'containers/Transactions';
import useStateHandler from 'hooks/useStateHandler';

import FormattedMessage from 'theme/FormattedMessage';

import Image from 'theme/Image';
import Section from 'theme/Section';
import Text from 'theme/Text';

import style from './style';
import messages from '../messages';
import TransactionsWidgetLoader from './Loader';

function TransactionSection(_props) {
  const transactions = useTransactions();

  const showContent = useStateHandler({
    state: transactions,
  });

  if (!showContent) {
    return (
      <TransactionsWidgetLoader
        heading={
          <FormattedMessage {...messages.pastTransactionHeading} isFragment />
        }
        numberOfItems={2}
      />
    );
  }

  if (!transactions.data?.length) {
    return null;
  }

  return (
    <View style={style.rewardSectionContainer}>
      <Section
        heading={
          <FormattedMessage {...messages.pastTransactionHeading} isFragment />
        }
      >
        {transactions.data.map((item) => (
          <View key={item.companyId} style={style.itemWrapper}>
            <View style={style.logoWrapper}>
              <Image title="transactionIcon" style={style.logo} />
            </View>
            <View style={style.contentWrapper}>
              <Text style={style.title}>{item.companyName}</Text>
              <Text style={style.date}>{item.date}</Text>
            </View>
            <Text style={style.points}>{item.value} Points</Text>
          </View>
        ))}
      </Section>
    </View>
  );
}

export default React.memo(TransactionSection);
