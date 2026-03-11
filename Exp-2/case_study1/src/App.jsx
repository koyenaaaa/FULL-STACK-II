import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Rating,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const courseList = [
  { id: 1, title: "React Basics", instructor: "Mr. Sharma" },
  { id: 2, title: "Cybersecurity Fundamentals", instructor: "Dr. Verma" },
  { id: 3, title: "AI & Machine Learning", instructor: "Prof. Singh" },
  { id: 4, title: "Software Engineering", instructor: "Ms. Gupta" },
];

export default function App() {
  const [page, setPage] = useState("courses");
  const [user, setUser] = useState(null);
  const [enrolled, setEnrolled] = useState([]);
  const [auth, setAuth] = useState({ name: "", email: "" });

  const enrollCourse = (course) => {
    if (!user) {
      alert("Please Login/Register first!");
      setPage("auth");
      return;
    }
    if (!enrolled.find((c) => c.id === course.id)) {
      setEnrolled([...enrolled, { ...course, feedback: "", rating: 0 }]);
      alert("Enrolled Successfully ✅");
    } else {
      alert("Already enrolled ✅");
    }
  };

  const logout = () => {
    setUser(null);
    setEnrolled([]);
    setPage("courses");
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar using MUI */}
      <AppBar position="static">
        <Toolbar className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <SchoolIcon />
            <Typography variant="h6">Student Course Portal</Typography>
          </div>

          <div className="d-flex gap-2">
            <Button color="inherit" onClick={() => setPage("courses")}>
              Courses
            </Button>

            <Button color="inherit" onClick={() => setPage("enrolled")}>
              Enrolled
            </Button>

            {!user ? (
              <Button color="inherit" onClick={() => setPage("auth")}>
                Login/Register
              </Button>
            ) : (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section using Bootstrap */}
      <div className="container py-4">
        <div className="p-4 rounded shadow-sm bg-white">
          <h3 className="fw-bold mb-1">
            Welcome {user ? user.name : "Student"} 👋
          </h3>
          <p className="text-muted mb-0">
            A frontend-only portal to view courses, enroll, and give feedback.
          </p>
        </div>

        {/* Page Rendering */}
        <div className="mt-4">
          {page === "courses" && (
            <Courses courseList={courseList} enrollCourse={enrollCourse} />
          )}

          {page === "auth" && (
            <Auth
              auth={auth}
              setAuth={setAuth}
              setUser={setUser}
              setPage={setPage}
            />
          )}

          {page === "enrolled" && (
            <Enrolled
              enrolled={enrolled}
              setEnrolled={setEnrolled}
              user={user}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------- COURSES PAGE ------------------- */
function Courses({ courseList, enrollCourse }) {
  return (
    <div>
      <h4 className="fw-bold mb-3">📚 Available Courses</h4>

      <div className="row g-3">
        {courseList.map((course) => (
          <div className="col-md-6 col-lg-4" key={course.id}>
            <Card className="shadow-sm">
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" className="text-muted">
                  Instructor: {course.instructor}
                </Typography>

                <button
                  className="btn btn-primary mt-3 w-100"
                  onClick={() => enrollCourse(course)}
                >
                  Enroll
                </button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------- AUTH PAGE ------------------- */
function Auth({ auth, setAuth, setUser, setPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth.name || !auth.email) return alert("Fill all fields!");
    setUser({ name: auth.name, email: auth.email });
    alert("Login/Register Successful ✅");
    setPage("courses");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-6">
        <h4 className="fw-bold mb-3">🔐 Login / Register (UI Only)</h4>

        <Card className="shadow-sm">
          <CardContent>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <TextField
                label="Full Name"
                value={auth.name}
                onChange={(e) => setAuth({ ...auth, name: e.target.value })}
                fullWidth
              />
              <TextField
                label="Email"
                value={auth.email}
                onChange={(e) => setAuth({ ...auth, email: e.target.value })}
                fullWidth
              />

              <button className="btn btn-success w-100">Submit</button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ------------------- ENROLLED PAGE + FEEDBACK ------------------- */
function Enrolled({ enrolled, setEnrolled, user }) {
  const updateFeedback = (id, feedback) => {
    setEnrolled(
      enrolled.map((c) => (c.id === id ? { ...c, feedback } : c))
    );
  };

  const updateRating = (id, rating) => {
    setEnrolled(enrolled.map((c) => (c.id === id ? { ...c, rating } : c)));
  };

  if (!user) {
    return <h5 className="text-danger">⚠️ Please Login to view enrolled courses!</h5>;
  }

  return (
    <div>
      <h4 className="fw-bold mb-3">✅ Enrolled Courses</h4>

      {enrolled.length === 0 ? (
        <p className="text-muted">No enrolled courses yet.</p>
      ) : (
        <div className="row g-3">
          {enrolled.map((course) => (
            <div className="col-md-6" key={course.id}>
              <Card className="shadow-sm">
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" className="text-muted">
                    Instructor: {course.instructor}
                  </Typography>

                  <div className="mt-3">
                    <Typography variant="body2" className="fw-bold">
                      Rating:
                    </Typography>
                    <Rating
                      value={course.rating}
                      onChange={(e, newValue) =>
                        updateRating(course.id, newValue)
                      }
                    />
                  </div>

                  <div className="mt-3">
                    <TextField
                      label="Feedback"
                      value={course.feedback}
                      onChange={(e) =>
                        updateFeedback(course.id, e.target.value)
                      }
                      fullWidth
                      multiline
                      rows={2}
                    />
                  </div>

                  <button
                    className="btn btn-outline-primary mt-3 w-100"
                    onClick={() => alert("Feedback Saved ✅ (UI Only)")}
                  >
                    Submit Feedback
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
