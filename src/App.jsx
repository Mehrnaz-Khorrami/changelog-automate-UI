import FormCard from "./components/form/FormCard";
import GeneratedCodeCard from "./components/generated-code/GeneratedCodeCard";
import "./App.css"
import { useState } from "react";
function App() {
  const [changeLogData, setChangeLogData] = useState(null)
  return (
    
      <div className="main-container d-flex flex-column align-items-center justify-center">
        <div className="file-code-container">
          <img src="/src/assets/icons/file-code.svg" width={35} height={35} />
        </div>
        <div className="head-title">Change Log Creator</div>
        <div className="fs-18 gray-color">Create your JSON changelogs in secondes</div>


        <div className=" d-flex align-items-center mt-11">
          <FormCard setChangeLogData={setChangeLogData}/>
          <GeneratedCodeCard changeLogData={changeLogData}/>
        </div>
      </div>
    
  )
}

export default App
