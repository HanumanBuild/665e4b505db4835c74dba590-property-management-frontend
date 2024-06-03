
// src/lib/apiClient.js

// This file is a mock API client to simulate fetching property data. Since we are not interfacing
// with a backend, this file provides functions to fetch the hardcoded property data.

import properties from './properties';

// Function to fetch all properties
export const fetchProperties = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(properties);
    }, 500); // Simulate a network delay
  });
};

// Function to fetch a property by ID
export const fetchPropertyById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const property = properties.find((prop) => prop.id === id);
      if (property) {
        resolve(property);
      } else {
        reject(new Error('Property not found'));
      }
    }, 500); // Simulate a network delay
  });
};
