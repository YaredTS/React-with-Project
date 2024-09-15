
import Student from "./Student.jsx";

function App() {
  return(
    <>
    <Student name="Spongbob" age="45" isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false }/>
    <Student />
    </>
  );
}

export default App
