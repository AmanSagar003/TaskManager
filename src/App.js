import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoListPage from './components/ToDoList/ToDoListPage';
import LoginPage from './components/LogInPage/LoginPage';
import Navbar from './components/HomePage/Navbar';
import { Provider } from 'react-redux';
import store from './components/LogInPage/store'; 
//import { WelcomePage } from './components/LogInPage/WelcomePage';
import { AlertProvider } from './components/LogInPage/AlertContext'; // Import AlertProvider


function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
      <AlertProvider> {/* Wrap your app with AlertProvider */}
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/ToDoList' element={<ToDoListPage />} />
              <Route path="/LogInPage" element={<LoginPage />} />
              {/*<Route path="/WelcomePage" element={<WelcomePage />} /> */}
            </Routes>
          </BrowserRouter>
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default App;










/*

DIRECTORY STRUCTURE
src
|-- components
|   |-- HomePage
|   |   |-- HomePage.js
|   |   |-- Navbar.js
|   |-- LogInPage
|   |   |-- LoginPage.js
|   |   |-- store.js
|   |   |-- userSlice.js
|   |   |-- WelcomPage.js
|   |-- ToDoList
|   |   |-- ToDoListPage.js
|-- App.js
|-- App.css

*/