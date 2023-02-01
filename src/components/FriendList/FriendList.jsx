import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
    const friendList = friends.map(friend => <FriendListItem friend={friend} key={friend.id} />)
    return (
            <ul className={s.friends}>
                {friendList}
            </ul>
    )
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}