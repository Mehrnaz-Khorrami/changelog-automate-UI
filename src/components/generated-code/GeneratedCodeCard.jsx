import "./GeneratedCodeCard.css";

function GeneratedCodeCard({changeLogData}) {
  return (
    
      <div className="card-container generated-code-card-container pa-7">
        <div className="d-flex align-items-center justify-space-between">
          <div className="dark-purple-color font-weight-800 fs-17">Generated JSON</div>
          <div>
            <button className="copy-button">
              <div className="d-flex align-items-center justify-space-between">
                <img src="/src/assets/icons/copy.svg" width={16} height={16} />
                <span className="font-weight-800 white-color mt-1">Copy</span>
              </div>
            </button>
          </div>
        </div>

        <pre className="json-generated-container mt-4 pa-5">
          {changeLogData ? JSON.stringify(changeLogData, null, 2) : '{ }'}
        </pre>
      </div>
   
  )
}

export default GeneratedCodeCard
