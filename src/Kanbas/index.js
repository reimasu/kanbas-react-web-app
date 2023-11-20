import KanbasNavigation from "./KanbasNavigation";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Home from "./Courses/Home";
import Account from "./Account";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import axios from "axios";
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Course Number",
    startDate: new Date(),
    endDate: new Date(),
  });
  const URL = "http://localhost:4000/api/courses";


  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  // const addNewCourse = async () => {
  //   try {
  //     const newCourse = await service.addCourse(course);
  //     setCourses([newCourse, ...courses]);
  //     setCourses([
  //       { ...course, _id: new Date().getTime().toString() },
  //       ...courses,
  //     ]);
  //     setCourse({ name: "" });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const deleteCourse = async (courseId) => {
      const response = await axios.delete(`${URL}/${courseId}`);
      setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async (course) => {
    try {
      await axios.put(`${URL}/${course._id}`, course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
      setCourse({ name: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Provider store={store}>
      <div className="d-flex flex-row flex-nowrap">
        <KanbasNavigation />
        <div className={`all-screens`}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;