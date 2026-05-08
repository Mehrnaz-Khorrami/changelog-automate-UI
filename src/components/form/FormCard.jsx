import { useState } from "react";
import "./FormCard.css";
import CircularLoader from "../shared/CircularLoader";
import { getChangeLog } from "../../services/getChangeLog";

function FormCard({setChangeLogData}) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    language: "",
    card: "",
  })

  const handleInput = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };
  

  
  
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setLoading(true);
     
      const data = await getChangeLog(formData)

      setChangeLogData(data);

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="card-container mr-6 pa-7">
        <div className="dark-purple-color font-weight-800 fs-17 mb-5 mt-2">Add Entry</div>

        <div>
          <label htmlFor="date" className="fs-14 input-label">Date</label>
          <input id="date" type="text" name="date" className="input-field mt-2" value={formData.date} onChange={handleInput} />
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="language" className="fs-14 input-label">Language</label>
          <input id="language" type="text" name="language" className="input-field mt-2" value={formData.language} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="card" className="fs-14 input-label">Card</label>
          <input id="card" type="text" name="card" className="input-field mt-2" value={formData.card} onChange={handleInput} />
        </div>

        <button className="generate-button mt-6" type="submit" disabled={loading}>
          {loading && <CircularLoader />}
          <span className="white-color font-weight-800 fs-16">
            {!loading && 'Create Change Log'}
          </span>
        </button>
      </div>
    </form>
  );
}

export default FormCard
