import PropTypes from 'prop-types';
import css from './FriendListItem.module.scss';

const FriendListItem = ({ friend }) => {
    // console.log(friend);
    const { name, avatar, isOnline } = friend;
    return (
        <li className={css.friend}>
            <div className={isOnline ? css.friend_status : css.friend_status_offline}>{isOnline}</div>
            <img className={css.friend_avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.friend_name}>{name}</p>
        </li>
    )
};

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string
}

/* <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {data.map(i =>
                    <li key={i.id} className="item">
                    <span className="label">{i.label}</span>
                    <span className="percentage">{i.percentage}</span>
                </li>)}
            </ul>
        </section> */