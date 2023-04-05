import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Athlete Management System</h1>
      <p className="mb-4">
        The Athlete Management System is a tool designed for athletes to help manage their training and performance. It allows athletes to input their data and track their progress, while coaches and trainers can use the system to monitor and adjust their training plans.
      </p>
      <h2 className="text-xl font-bold mb-4">How to Use</h2>
      <ol className="list-decimal ml-4 mb-4">
        <li>Create an account or log in to an existing account</li>
        <li>Add your athlete details and track their progress</li>
        <li>View and manage your data</li>
      </ol>
    </div>
  );
};

export default About;