
import './App.css';
import Table from "./components/table/Table";
import WebLayout from './components/layout/WebLayout';
import MobileLayout from './components/layout/MobileLayout';
import Counter from './components/counter/Counter'
import LoginForm from './components/login/LoginForm';
import UserList from './components/userList/UserList';
import Router from './components/router/Router';
import Auth from './components/auth/Auth';
import OnlineQuiz from './components/quiz/OnlineQuiz';
import ModalBtn from './components/modal/ModalBtn';
import InputTag from './components/inputTag/inputTag';
import Responsive from './components/responsive/Responsive';



function App() {
  return (
    <div className="App">
      <h1>Homework 1</h1>
      <h2>HTML table</h2>
      <Table />
      <h2>Simple website layout</h2>
      <WebLayout />
      <h2>Simple iPhone screen layout</h2>
      <MobileLayout />
      <h1>Homework 2 Counter</h1>
      <Counter />
      <h1>Homework 5 Login form</h1>
      <LoginForm />
      <h1>Homework 4 User list</h1>
      <UserList />
      <h1>Homework 7 Modal</h1>
      <ModalBtn />
      <h1>Homework 9 input tags</h1>
      <InputTag />
      <h1>Responsive web design</h1>
      <Responsive />

      <h1>React-router Homework 1</h1>
      <Router />
      <h1>React-router Homework 2</h1>
      <Auth />
      <h1>React-router Homwork 3</h1>
      <OnlineQuiz />








    </div>
  );
}

export default App;

