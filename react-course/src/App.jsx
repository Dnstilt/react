
import {
   Route, 
   createBrowserRouter,
   createRouteFromElements, 
   RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayouts';
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRouteFromElements(
  <Route path="/" element={ <MainLayout/> }> 
    <Route index element={ <HomePage /> }/>
    <Route path="/jobs" element={ <JobsPage/> }/>
    <Route path="*" element={ <NotFoundPage/> }/>
  </Route>

  )
);


const App = () => {
  return <RouterProvider router ={router}/>
};
export default App;