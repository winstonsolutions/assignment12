/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Button,
  Card,
  Label,
  Dropdown,
  Table,
} from '@winstonsolutions/my-component-library';

function App() {
  const columns = ['name', 'age', 'email'];
  const data = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 30, email: 'charlie@example.com' },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Portfolio
      </h1>

      <div className="grid gap-8">
        {/* Basic Information Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Basic Information
          </h2>
          <div className="flex flex-row justify-between items-start">
            <div className="flex-1 pr-6">
              <h3 className="text-2xl font-bold text-gray-800">Wentao Zhao</h3>
              <p className="text-gray-600 text-lg mt-1">Full stack developer</p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                With a strong commitment to clean, maintainable code and a
                reliable work ethic, I am dedicated to delivering robust,
                scalable, and innovative solutions tailored to modern commercial
                businesses.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/profile.png"
                alt="Profile"
                className="rounded-full object-cover shadow-md"
                style={{ width: '180px', height: '180px' }}
              />
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Work
          </h2>
          <div className="grid gap-4">
            <Card
              title="UI Component Library"
              content={
                <div>
                  <p className="mb-3 leading-relaxed">
                    This project is a Web Component Library that provides
                    reusable and customizable UI components. It simplifies the
                    process of building web applications by offering pre-built,
                    styled components that can be easily integrated into any
                    project.
                  </p>
                  {/* <img
                    src="/project-image.jpg"
                    alt="Project"
                    className="w-full h-48 object-cover rounded-md mb-2"
                  /> */}
                  <a
                    href="http://localhost:8018/"
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline inline-flex items-center"
                  >
                    View Project →
                  </a>
                </div>
              }
            />
            <Card
              title="Storybook"
              content={
                <div>
                  <p className="mb-3 leading-relaxed">
                    Storybook is a development environment for UI components. It
                    allows you to browse a component library, view the different
                    states of each component, and interactively develop and test
                    components.
                  </p>
                  <a
                    href="http://localhost:8083/"
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline inline-flex items-center"
                  >
                    View Storybook →
                  </a>
                </div>
              }
            />
          </div>
        </section>

        {/* Tech List Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Tech List
          </h2>
          <div className="grid gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800">
                Project Tech Stack
              </h3>
              <p className="text-gray-700 mb-4">
                The following technologies are used in this project:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-3 text-gray-800 border-b pb-2">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Label text="React" />
                  <Label text="JavaScript" />
                  <Label text="Tailwind CSS" />
                  <Label text="Component Library" />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-3 text-gray-800 border-b pb-2">
                  Build Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Label text="Vite" />
                  <Label text="npm" />
                  <Label text="ESLint" />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-3 text-gray-800 border-b pb-2">
                  Development Environment
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Label text="VS Code" />
                  <Label text="Git" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Resources
          </h2>
          <div className="grid gap-4">
            <Card
              title="Resource Title"
              content={
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {/* <img
                      src="/resource-icon.png"
                      alt="Resource Icon"
                      className="w-6 h-6"
                    /> */}
                    <p className="leading-relaxed">
                      Resource summary goes here.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline inline-flex items-center"
                  >
                    View Resource →
                  </a>
                </div>
              }
            />
          </div>
        </section>

        {/* Original Component Demo Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Component Demo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Buttons Section */}
            <section className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                Buttons
              </h3>
              <div className="flex gap-4">
                <Button label="Test" disabled={false}></Button>
                <Button label="Test" disabled={true}></Button>
              </div>
            </section>

            {/* Card Section */}
            <section className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Card</h3>
              <Card title="My Card" content="This is the content of my card." />
            </section>

            {/* Label Section */}
            <section className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                Label
              </h3>
              <Label text="Welcome Label" disabled={false} />
            </section>

            {/* Dropdown Section */}
            <section className="p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                Dropdown
              </h3>
              <Dropdown options={['Apple', 'Banana', 'Orange']} />
            </section>

            {/* Table Section */}
            <section className="p-4 bg-gray-50 rounded-md md:col-span-2">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                Table
              </h3>
              <Table data={data} columns={columns} disabled={false} />
            </section>
          </div>
        </section>

        {/* Developer Setup Section */}
        <section className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
            Developer Setup
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2 border-b pb-2">
                VS Code Setup
              </h3>
              <p className="text-gray-700 mt-2">
                Your preferred VS Code settings and extensions.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2 border-b pb-2">
                Terminal Setup
              </h3>
              <p className="text-gray-700 mt-2">
                Your terminal configuration and preferences.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2 border-b pb-2">
                Preferred Editor Font
              </h3>
              <p className="text-gray-700 mt-2">
                Your preferred coding font and settings.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 p-6 bg-white rounded-lg shadow-sm text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div className="text-left">
            <h3 className="font-semibold mb-3 text-gray-800">Contact</h3>
            <p className="text-gray-600">email@example.com</p>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-3 text-gray-800">Social</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <h3 className="font-semibold mb-3 text-gray-800">Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Wentao Zhao. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
