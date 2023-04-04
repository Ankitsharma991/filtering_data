import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

import DUMMY_USERS from "./store/data";
// no change
function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
