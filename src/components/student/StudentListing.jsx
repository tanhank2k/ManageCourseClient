import React from "react";
import { useState, useEffect } from "react";
import { Table, Button, Modal, Input } from "antd";
import { Course } from "../../model/course";
import "./studentPage.css";
import axios from "axios";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "SubjectId",
    dataIndex: "subjectId",
  },
  {
    title: "GradeId",
    dataIndex: "gradeId",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Schedule",
    dataIndex: "schedule",
  },
];
const baseURL = process.env.REACT_APP_API_URL;
export const StudentListing = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(new Course());
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    axios
      .post(`${baseURL}/course`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          'Content-Type': 'application/json'
        },
        ...course,
      })
      .then((res) => {
        loadData();
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    const fieldName = e.target.name;
    const courseClone = course;
    courseClone[fieldName] = value;
    setCourse(courseClone);
  };
  console.log(baseURL);

  const loadData = () => {
    axios
      .get(`${baseURL}/course`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      })
      .then((res) => {
        const source = res.data?.data.map((item) => {
          return { key: item.id, ...item };
        });
        setCourses(source);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);
  const pagination = {
    pageSize: 10,
  };
  return (
    <>
      <div className="content-body">
        <div className="btn-create">
          <Button type="primary" onClick={showModal}>
            Create new course
          </Button>
          <Modal
            title="Create new course"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="input-form">
              <label>Subject</label>
              <Input
                placeholder="Input name of course"
                defaultValue={course.subjectId}
                name="subjectId"
                allowClear
                onChange={onChangeInput}
              />
            </div>
            <div className="input-form">
              <label>Grade</label>
              <Input
                placeholder="Input name of course"
                defaultValue={course.gradeId}
                name="gradeId"
                allowClear
                onChange={onChangeInput}
              />
            </div>
            <div className="input-form">
              <label>Name</label>
              <Input
                placeholder="Input name of course"
                defaultValue={course.name}
                name="name"
                allowClear
                onChange={onChangeInput}
              />
            </div>
            <div className="input-form">
              <label>Describes</label>
              <Input
                placeholder="Input describes of course"
                defaultValue={course.description}
                name="description"
                allowClear
                onChange={onChangeInput}
              />
            </div>
            <div className="input-form">
              <label>Schedule</label>
              <Input
                placeholder="Input schedule of course"
                name="schedule"
                allowClear
                defaultValue={course.schedule}
                onChange={onChangeInput}
              />
            </div>
          </Modal>
        </div>
        <Table columns={columns} pagination={pagination} dataSource={courses} />
      </div>
    </>
  );
};
