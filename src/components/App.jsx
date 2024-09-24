// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Section from './Section';
import Profile from './Profile/Profile';
import Friendlist from './Friendlist/Friendlist';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json" ;





function App() {
  
  return (
   <div>
  <Section title='Profile'>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      </Section>
    <Section title='FriendList'>
        <Friendlist friends={friends} />
      </Section>
       <Section title='Transactions'>
        <TransactionHistory items={transactions} />
        </Section>
      
      </div>
  );
};

export default App;
