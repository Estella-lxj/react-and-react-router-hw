
import './App.css';
import Table from "./components/table/Table";
import WebLayout from './components/layout/WebLayout';
import MobileLayout from './components/layout/MobileLayout';
import Counter from './components/counter/Counter'
import LoginForm from './components/login/LoginForm';
import UserList from './components/userList/UserList';
import OnlineQuiz from './components/quiz/OnlineQuiz';
import ModalBtn from './components/modal/ModalBtn';
import InputTag from './components/inputTag/inputTag';
import Responsive from './components/responsive/Responsive';
import ToDoList from './components/toDoList/toDoList';
import PollWidget from './components/pollWidget/PollWidget';
import StarRating from './components/starRating/starRating';
import Accordion from './components/accordion/Accordion';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <h1>Modal pop up</h1>
      <ModalBtn />
      <h1>Table</h1>
      <Table />
      <h1>Simple website layout</h1>
      <WebLayout />
      <h2>Simple iPhone screen layout</h2>
      <MobileLayout />
      <h1>Counter</h1>
      <Counter />
      <h1>Login form</h1>
      <LoginForm />
      <h1>Input tags</h1>
      <InputTag />
      <h1>Responsive web design</h1>
      <Responsive />
      <h1>Quiz</h1>
      <OnlineQuiz />
      <h1>Todo list</h1>
      <ToDoList />
      <h1>Poll widget</h1>
      <PollWidget />
      <h1>Star rating</h1>
      <StarRating />
      <h1>Accordion</h1>
      <Accordion />
      <h1>Carousel</h1>
      <Carousel />
      <h1>NavBar</h1>

      <h1>Infinite scroll</h1>
      <h1>Typeahead / autocomplete using trie</h1>
      <h1>Implement Debounce function</h1>
      <h1>tic tac toe</h1>
      <h1>snake ladder board</h1>
      <h1>Make calendar of any Month like Date Picker</h1>
      <h1>Implement throttle function</h1>
      <h1>Implement custom Higher Order Functions like Map, Reduce, Filter, Sort</h1>
      <h1>Design grid using HTML/CSS and Javascript with search and sort, event bubbling</h1>
      <h1>analog clock</h1>
      <h1>Build a calculator</h1>
      <h1>Search and display Giphy images (through Giphy api) in responsive format</h1>
      <h1>Build Connect Four</h1>
      <h1>Nested Checkboxes</h1>
      <h1>Implement Event Emitter</h1>
      <h1>Implement promise.all function</h1>
      <h1>Flatten nested Javascript Array without using Array.prototype.flat()</h1>
      <h1>Implement Sort() function.</h1>

      <h1>User list</h1>
      <UserList />

    </div>
  );
}

export default App;

