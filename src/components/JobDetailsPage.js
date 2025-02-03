import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./footer";
import { FaMapMarkerAlt, FaBuilding, FaCalendarAlt } from "react-icons/fa";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/jobs/${id}/`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!job) {
    return (
      <div className="text-center mt-5">
        <p>Loading job details...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <img
              src={job.image}
              alt={job.title}
              className="img-fluid rounded"
              style={{ height: "100%", objectFit: "cover", borderRadius: "15px" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card shadow-lg border-0 p-4" style={{ borderRadius: "15px" }}>
              <h2 className="text-primary">{job.title}</h2>
              <p className="text-muted">
                <FaBuilding className="me-2" />
                {job.company_name || "Company Name Not Available"}
              </p>

              <div className="row mb-3">
                <div className="col-md-6">
                  <FaMapMarkerAlt className="text-success me-2" />
                  <strong>Location:</strong> {job.location || "N/A"}
                </div>
                <div className="col-md-6">
                  <FaCalendarAlt className="text-warning me-2" />
                  <strong>Posted At:</strong> {new Date(job.posted_at).toLocaleDateString()}
                </div>
              </div>

              <p className="mt-3">
                <strong>Description:</strong>
              </p>
              <p className="text-muted">{job.description}</p>

              <p className="mt-3">
                <strong>Qualifications & Requirements:</strong>
              </p>
              <ul className="text-muted">
                {job.minimumqualification.split('<br>').map((line, idx) => (
                  <li key={idx} style={{ listStyleType: 'disc' }}>{line}</li>
                ))}
              </ul>

              <Link to={`/apply/${job.id}`} className="mt-4">
                <button className="btn btn-primary w-100" style={{ backgroundColor: 'rgb(10, 11, 66)', borderColor: "#083AA9" }}>
                  Apply for this Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetailsPage;
