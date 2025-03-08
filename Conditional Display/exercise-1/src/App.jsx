/** @format */

import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS } from "./data";
import { HTML_RESULTS } from "./data";
import { PYTHON_RESULTS } from "./data";
import { ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header name='PNC batch 2025' />

      <main className='scores-container'>
        <Scores courseName='Java' courseResults={JAVA_RESULTS} />
        <Scores courseName='HTML' courseResults={HTML_RESULTS} />
        <Scores courseName='Python' courseResults={PYTHON_RESULTS} />
        <Scores courseName='English' courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
