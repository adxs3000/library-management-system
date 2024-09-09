import React from 'react';

import './App.css';
import Home from './components/home'
import LoginForm from './components/LoginForm'
import UserDashboard from './components/UserDashboard'
import IssueRequestForm from './components/IssueRequestForm'
import ReturnRequestForm from './components/RetrunRequestForm'
import AdminDashboard from './components/admindashboard';
import Library from './components/library';
import Userpage from './components/userpage';
import Book from './components/book';
import ReqEvents from './components/requestevents';
import IssueRegistry from './components/IssueRegistry';
import CreateLibrary from './components/createlibrary';
import LibraryList from './components/getlibrary';
import UpdateLibrary from './components/updatelibrary';
import DeleteLibrary from './components/deletelibrary';
import UserList from './components/userlist';
import CreateUser from './components/createuser';
import SearchUserList from './components/searchuser';
import DeleteUser from './components/deleteuser';
import CreateBook from './components/createbook';
import BookList from './components/getbooks';
import UpdateBook from './components/updatebook';
import DeleteBook from './components/deletebook';
import RequestEventsList from './components/getrequestevents';
import SearchRequestEvents from './components/searchreqevents';
import UpdateReqEvents from './components/updatereqevents';
import DeleteEvent from './components/deleteevent';
import IssueList from './components/issueregistrylist';
import SearchIssueRegistry from './components/searchissueregistry';
import UpdateIssueRegistry from './components/updateisuueregistry';
import DeleteRegistry from './components/deleteregistry';
import { Navigate, Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const PrivateRoutes = () => {
  let auth = {'token': true}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}


function App() {
  return (
    <Router>
    <Routes>
      <Route element={<PrivateRoutes/>}>
    <Route path="/userdashboard" element={<UserDashboard />}/> 
    <Route path="/issue_request" element={<IssueRequestForm />}/> 
    <Route path="/return_request" element={<ReturnRequestForm />}/> 
    <Route path="/admindashboard" element={<AdminDashboard />}/> 
    <Route path="/library" element={<Library />}/> 
    <Route path="/users_page" element={<Userpage />}/> 
    <Route path="/books" element={<Book />}/> 
    <Route path="/request_events" element={<ReqEvents />}/> 
    <Route path="/issue_registry" element={<IssueRegistry />}/> 
    <Route path="/createLibrary" element={<CreateLibrary />}/> 
    <Route path="/librarylist" element={<LibraryList />}/> 
    <Route path="/updateLibrary" element={<UpdateLibrary />}/> 
    <Route path="/DeleteLibrary" element={<DeleteLibrary />}/> 
    <Route path="/usersList" element={<UserList />}/> 
    <Route path="/createUser" element={<CreateUser />}/>  
    <Route path="/searchUser" element={<SearchUserList />}/>  
    <Route path="/deleteUser" element={<DeleteUser />}/> 
    <Route path="/addBook" element={<CreateBook />}/> 
    <Route path="/bookList" element={<BookList />}/>
    <Route path="/updateBook" element={<UpdateBook />}/> 
    <Route path="/deleteBook" element={<DeleteBook />}/>  
    <Route path="/get_request_events" element={<RequestEventsList />}/> 
    <Route path="/searchreqevent" element={<SearchRequestEvents />}/>
    <Route path="/update_request_event" element={<UpdateReqEvents />}/> 
    <Route path="/delete_request_event" element={<DeleteEvent />}/> 
    <Route path="/issue_list" element={<IssueList/>}/> 
    <Route path="/search_issue_registry" element={<SearchIssueRegistry/>}/>
    <Route path="/update_issue_registry" element={<UpdateIssueRegistry/>}/>
    <Route path="/delete_issue_registry" element={<DeleteRegistry/>}/>
      </Route>
      <Route exact path="/" element={<Home/>}/> 
      <Route path="/login" element={<LoginForm />}/> 
    

  </Routes>
  </Router>
  );
}

export default App;