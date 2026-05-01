
import "./FormCard.css";

function FormCard() {
    return (
      <>
      <div className="card-container mr-6 pa-7">
        <div className="dark-purple-color font-weight-800 fs-17 mb-5 mt-2">Add Entry</div>

        <div>
          <label for="date" className="fs-14 input-label">Date</label>
          <input id="date" type="text" name="date" className="input-field mt-2"/>
        </div>
        <div className="mt-4 mb-4">
          <label for="language" className="fs-14 input-label">Language</label>
          <input id="language" type="text" name="language" className="input-field mt-2"/>
        </div>
        <div>
          <label for="card" className="fs-14 input-label">Card</label>
          <input id="card" type="text" name="card" className="input-field mt-2"/>
        </div>

        <button className="generate-button mt-6">
          <span className="white-color font-weight-800 fs-16">Create Change Log</span>
        </button>
      </div>
      </>
    )
  }
  
  export default FormCard
  