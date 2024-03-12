import { Provider } from "react-redux";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utilis/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
      path:"/",
      element:<Body />,
      children:[
            {
              path:"/",
              element:<MainContainer/>
            },

            {
              path:"watch",
              element:<WatchPage/>
           },

        ]
      },
   ])
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>


       {/**
        * header
        * body
        *   --sidebar
        *     - menuitems
        *   --maincontainer
        *    --videocontainer
        *     --video card
        * 
        */}
    </div>
    </Provider>
  );
}

export default App;
