import  { useEffect, useRef, useState } from "react";


interface CruiseDetail {
  cruiseNameDetail: string;
  images: File[];
  dateDetail: Date | null;
}

interface Cruise {
  _id: string;
  cruisename: string;
  nightpackage: string;
  month: string;
  date: string;
  cruisedetails: {
    cruisename: string;
    images: string[]; 
    date: string | null;
  }[];
}

export const CruiseManagement = () => {
  const [cruisename, setCruiseName] = useState("");
  const [cruiseNameDetail, setCruiseNameDetail] = useState("");
  const [nightpackage, setNightpackage] = useState("");
  const [month, setMonth] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [dateDetail, setDateDetail] = useState<Date | null>(null);
  const [cruiseDetails, setCruiseDetails] = useState<CruiseDetail[]>([]);
  const [cruises, setCruises] = useState<Cruise[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    fetchCruises();
  }, []);

  const fetchCruises = async () => {
    const response = await fetch("http://localhost:3002/cruise");
    const data = await response.json();
    setCruises(data);
  };

  const handleAddCruise = async () => {
    const cruiseData = {
      cruisename,
      nightpackage,
      month,
      date: date?.toISOString().substring(0, 10),
      cruisedetails: cruiseDetails.map((detail) => ({
        cruisename: detail.cruiseNameDetail,
        images: detail.images.map((img: File) => img.name), // Keep as File names for the server
        date: detail.dateDetail?.toISOString().substring(0, 10),
      })),
    };

    console.log("Sending data to server:", cruiseData);

    const response = await fetch("http://localhost:3002/cruise", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cruiseData),
    });

    const responseData = await response.json();

    if (response.ok) {
      alert("Cruise added successfully!");
      setCruises((prev) => [...prev, responseData]);
      resetFields();
    } else {
      alert(`Failed to add cruise: ${responseData.message || "Unknown error"}`);
    }
  };

  const resetFields = () => {
    setCruiseName("");
    setCruiseNameDetail("");
    setImages([]);
    setMonth("");
    setCruiseDetails([]);
    setNightpackage("");
    setDate(null);
    setDateDetail(null);
  };

  const handleDeleteCruise = async (CruiseToDelete: string) => {
    const response = await fetch(
      `http://localhost:3002/cruise/${CruiseToDelete}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Cruise deleted successfully!");
      fetchCruises(); // Fetch the updated list of cruises after deletion
    } else {
      alert("Failed to delete cruise");
    }
  };

  const handleAddCruiseDetail = () => {
    if (cruiseNameDetail && images.length > 0 && dateDetail) {
      setCruiseDetails([
        ...cruiseDetails,
        { cruiseNameDetail, images, dateDetail },
      ]);
      setCruiseNameDetail("");
      setImages([]);
      setDateDetail(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else {
      alert("Please fill in all cruise details");
    }
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Manage Cruises</h2>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          borderCollapse: "collapse",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Cruise Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Night Package
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Month</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Cruise Details
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {/* <input
                type="text"
                placeholder="Cruise Name"
                value={cruisename}
                onChange={(e) => setCruiseName(e.target.value)}
              /> */}
            <select style={{padding:10}} value={cruisename} onChange={(e)=> setCruiseName(e.target.value)}>
              <option value={""}> Select Cruise Name: </option>
              <option value={"MSC"}> MSC </option>
              <option value={"Royal Caribbean"}> Royal Caribbean </option>
            </select>

            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {/* <input
                type="text"
                placeholder="Night Package"
                value={nightpackage}
                onChange={(e) => setNightpackage(e.target.value)}
              /> */}
            <select style={{padding:10}} value={nightpackage} onChange={(e)=>setNightpackage(e.target.value)}>
            <option value={""}> Select Night Package: </option>
              <option value={"1 Night"}> 1 Night </option>
              <option value={"2 Nights"}> 2 Nights </option>
              <option value={"3 Nights"}> 3 Nights </option>
              <option value={"4 Nights"}> 4 Nights </option>
              <option value={"5 Nights"}> 5 Nights </option>
              <option value={"6 Nights"}> 6 Nights </option>
              <option value={"7 Nights"}> 7 Nights </option>
              <option value={"8 Nights"}> 8 Nights </option>
              <option value={"9 Nights"}> 9 Nights </option>
              <option value={"10 Nights"}> 10 Nights </option>
              <option value={"11 Nights"}> 11 Nights </option>
              <option value={"12 Nights"}> 12 Nights </option>
            </select>
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <select style={{padding:10}} value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <input
                style={{padding:10}}
                type="date"
                value={date ? date.toISOString().substring(0, 10) : ""}
                onChange={(e) => setDate(new Date(e.target.value))}
              />
            </td>
            <td style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 ,padding: "8px", border: "1px solid #ddd" }}>
              <h4>Add Cruise Details</h4>
              <select style={{padding:10}} value={cruiseNameDetail} onChange={(e)=> setCruiseNameDetail(e.target.value)}>
              <option value={""}> Select Cruise Name: </option>
              <option value={"MSC"}> MSC </option>
              <option value={"Royal Caribbean"}> Royal Caribbean </option>
            </select>
              <input
              style={{padding:10}}
                type="date"
                value={
                  dateDetail ? dateDetail.toISOString().substring(0, 10) : ""
                }
                onChange={(e) => setDateDetail(new Date(e.target.value))}
              />
                <input
                  ref={fileInputRef}
                  style={{border:"1px solid"}}
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImages(Array.from(e.target.files || []))}
                  // multiple
                />
              <button
                onClick={handleAddCruiseDetail}
                style={{ marginTop: "8px", backgroundColor:"dodgerblue", border:"none", borderRadius:4,padding:5 }}
              >
                Add Cruise Details
              </button>
              <div>
                <strong>Added Cruise Details:</strong>
                {cruiseDetails.length > 0 ? (
                  <ul>
                    {cruiseDetails.map((detail, index) => (
                      <li key={index}>
                        {detail.cruiseNameDetail} (
                        {detail.images.map((img: File) => img.name).join(", ")},{" "}
                        {detail.dateDetail?.toISOString().substring(0, 10)})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No Cruise Details added yet.</p>
                )}
              </div>
            </td>
            <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              <button
                onClick={handleAddCruise}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                
              >
                Add Cruise
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 style={{textAlign:"center"}} >Existing Cruises</h2>
      <table
        style={{
          width: "80%",
          margin: "0 auto",
          borderCollapse: "collapse",
          textAlign: "center",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Cruise Name
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Night Package
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Month</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>
              Images
            </th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cruises.map((cruise) => (
            <tr key={cruise._id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {cruise.cruisename}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {cruise.nightpackage}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {cruise.month}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {cruise.date?.toString().substring(0, 10)}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {cruise.cruisedetails.map((detail, index) => (
                  <div key={index}>

                    {detail.images.map((img) => (
                      <img
                        key={img}
                        src={`http://localhost:3002/uploads/${img}`}
                        alt={detail.cruisename}
                        style={{ width: "50px", height: "50px", margin: "5px" }}
                      />
                    ))}
                    {/* <span>
                      {detail.date ? detail.date : "No date provided"}
                    </span> */}
                  </div>
                ))}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => handleDeleteCruise(cruise._id)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

