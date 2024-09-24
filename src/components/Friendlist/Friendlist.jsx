import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const Friendlist = ({friends}) => {
  return (
      <ul className={styles.listContainer}>
      {friends.map((friend) => {
        return (
          <li className={styles.item } key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
       />
          </li>
        )
      })}
</ul>
   
  )
}

export default Friendlist;
