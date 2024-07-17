import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number'),
    profession: Yup.string().required('Profession is required'),
    employed: Yup.boolean().required('Employed is required'),
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Formik
        initialValues={initialValues || { name: '', email: '', age: '', profession: '', employed: false }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <Field
                type="number"
                id="age"
                name="age"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <Field
                type="text"
                id="profession"
                name="profession"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage name="profession" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="employed"
                  name="employed"
                  className="mt-1 mr-2 border rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
                <label htmlFor="employed" className="text-sm font-medium text-gray-700">
                  Employed
                </label>
              </div>
              <ErrorMessage name="employed" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
