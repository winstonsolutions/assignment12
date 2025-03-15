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
    { name: 'Charlie', age: 28, email: 'charlie@example.com' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Component Demo
      </h1>

      <div className="grid gap-6">
        {/* Buttons Section */}
        <section className="p-4 bg-white rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Buttons</h2>
          <div className="flex gap-4">
            <Button label="Test" disabled={false}></Button>
            <Button label="Test" disabled={true}></Button>
          </div>
        </section>

        {/* Card Section */}
        <section className="p-4 bg-white rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Card</h2>
          <Card title="My Card" content="This is the content of my card." />
        </section>

        {/* Label Section */}
        <section className="p-4 bg-white rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Label</h2>
          <Label text="Welcome Label" disabled={false} />
        </section>

        {/* Dropdown Section */}
        <section className="p-4 bg-white rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Dropdown</h2>
          <Dropdown options={['Apple', 'Banana', 'Orange']} />
        </section>

        {/* Table Section */}
        <section className="p-4 bg-white rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Table</h2>
          <Table data={data} columns={columns} disabled={false} />
        </section>
      </div>
    </div>
  );
}

export default App;
