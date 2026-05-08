import { useState } from "react";
import "./GeneratedCodeCard.css";

function GeneratedCodeCard({ changeLogData }) {

  const [copy, setCopy] = useState(false);
  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopy(true);
    })
  };

  return (

    <div className="card-container generated-code-card-container pa-7">
      <div className="d-flex align-items-center justify-space-between">
        <div className="dark-purple-color font-weight-800 fs-17">Generated JSON</div>
        <div>
          <button className="copy-button" onClick={() => copyText(changeLogData?.data ? JSON.stringify(changeLogData.data, null, 2) : '{ }')}>
            <div className="d-flex align-items-center justify-center">
              <img src="/src/assets/icons/copy.svg" width={16} height={16} className="mr-2"/>
              <span className="font-weight-800 white-color mt-1">
                {copy ? "Copied" : "Copy"}
              </span>
            </div>
          </button>
        </div>
      </div>

      <pre className="json-generated-container mt-4 pa-5">
        {changeLogData?.data ? JSON.stringify(changeLogData.data, null, 2) : '{ }'}
      </pre>
    </div>

  )
}

export default GeneratedCodeCard
