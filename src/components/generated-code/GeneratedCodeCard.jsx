
import "./GeneratedCodeCard.css";

function GeneratedCodeCard() {
  return (
    <>
      <div className="card-container mr-6 pa-5">
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

        <div className="json-generated-container mt-4 pa-5">
          change-log
        </div>
      </div>
    </>
  )
}

export default GeneratedCodeCard
