import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';
// import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
  const transElements = items.map(({ id, type, amount, currency}) => {})
  return (
    <>
      <table className={styles.transaction}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Invoice</td>
              <td>125</td>
              <td>USD</td>
            </tr>
            <tr>
              <td>Withdrawal</td>
              <td>85</td>
              <td>USD</td>
            </tr>
          </tbody>
        </table></>
  )
};

export default TransactionHistory;

TransactionHistory.defaultProps = { items: [] };
TransactionHistory.propTypes = {};

// const TransactionHistory = ({ transactions }) => {
//   const transactionElement = transactions.map(transaction =>
//     <Transaction transaction={transaction} key={transaction.id} />)
//     return (
//         {transactionElement}
//     )
// };