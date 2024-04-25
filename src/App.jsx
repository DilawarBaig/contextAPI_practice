import Login from "./Components/Profile"
import User from "./Components/Login"
import UserContextProvider from "./Context/UserContextProvider"


function App() {

  return (
    <UserContextProvider>
      <div className="w-full h-screen bg-gray-800 text-white ">


    <User />
    <Login />
      </div>
    </UserContextProvider>
  )
}

export default App
