import React  from 'react';
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import LogInPage from './components/register-loginPage';
import HomePage from './components/homePage';
import History from './components/history';
import ActiveRequests from './components/activeRequests';
import ContactUs from './components/ContactUs';
import CodeValidation from './components/codevalidation';
function App() {

  return (
    <>
          <BrowserRouter>
        <Routes>
          <Route path ="/" element={<LogInPage  />}  />
          <Route path ="/homePage" element={<HomePage  />}  />
          <Route path ="/history" element={<History  />}  />
          <Route path ="/requests" element={<ActiveRequests  />}  />
          <Route path ="/Contact" element={<ContactUs  />}  />
          <Route path="/accountValidation" element={<CodeValidation/>} />
        </Routes>
      </BrowserRouter>,
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;