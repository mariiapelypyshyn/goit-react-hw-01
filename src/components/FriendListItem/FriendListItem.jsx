// import styles from './FriendlistItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
   
   
    const color = isOnline => {
        switch (isOnline) {
            case true:
                return "green";
            case false:
                return "red";
            default: return;
        }
    }
    return (
        <div>
           
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p style={{color: color(isOnline)}}>{ isOnline? 'Online' : 'Offline'}</p>
            
        </div>
    )
}    
 
export default FriendListItem;
