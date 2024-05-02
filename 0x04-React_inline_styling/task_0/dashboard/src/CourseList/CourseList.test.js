import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders header and course rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />));
    });

    // Consider using toContain or toMatch for style comparisons (optional)
    expect(wrapper.find("tbody").childAt(0).html()).toContain('<td>ES6</td>');  // More flexible check
    expect(wrapper.find("tbody").childAt(1).html()).toContain('<td>Webpack</td>'); // More flexible check
    expect(wrapper.find("tbody").childAt(2).html()).toContain('<td>React</td>');  // More flexible check
  });
});