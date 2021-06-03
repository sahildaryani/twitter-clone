import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    //BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* 
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="/__/firebase/8.6.3/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
          https://firebase.google.com/docs/web/setup#available-libraries -->

        <!-- Initialize Firebase -->
        <script src="/__/firebase/init.js"></script>     
      */}
      {/* FEED */}
      <Feed />

      {/* WIDGETS */}
      <Widgets />
    </div>
  );
}

export default App;
