
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from '../data/data';
import user from '../data/user';
import friends from '../data/friends';
import transactions from '../data/transactions';
import '../index.css';

// console.log(data);
// console.log(user);

export const App = () => {
  return (
    <div className="app-components"
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
      <FriendList friends={friends} />
      
    </div>
  );
};

// import './App.css';
// import { PostList } from "./components/PostList"

// const items = [
//   { title: "Post1", text: "Post1 text", src: "", alt: "text1" },
//   { title: "Post2", text: "Post2 text", src: "", alt: "text2" },
// ];

// function App() {
//   return <PostList title="Post" items={items} />;
// }

// export default App;