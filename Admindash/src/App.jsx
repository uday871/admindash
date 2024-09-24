import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserMessage from './UserMessage';


// function NotFound() {
//   return <h2>404 - Not Found</h2>;
// }

function App() {
  return (
    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<UserMessage />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Router>

    <>

    <UserMessage/>
    
    </>
  );
}

export default App;
