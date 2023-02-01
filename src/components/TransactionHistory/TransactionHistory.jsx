import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';
import { getRandomColor } from '../Statistics/Statistics';
// import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
  const transElements = items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.transaction_line}>
      <td className={styles.transaction_field}>{type}</td>
      <td className={styles.transaction_field}>{amount}</td>
      <td className={styles.transaction_field}>{currency}</td>
    </tr>
  ))
  return (
    <>
      <table className={styles.transaction}>
        <thead>
          <tr style={transStyles} className={styles.transaction_header}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody style={transColors}>
          {transElements}
        </tbody>
      </table></>
  )
};
export default TransactionHistory;

TransactionHistory.defaultProps = { items: [] };
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
};
const transStyles = {
    backgroundColor: getRandomColor()
}

const transColors = {
    color: getRandomColor()
}

// const TransactionHistory = ({ transactions }) => {
//   const transactionElement = transactions.map(transaction =>
//     <Transaction transaction={transaction} key={transaction.id} />)
//     return (
//         {transactionElement}
//     )
// };