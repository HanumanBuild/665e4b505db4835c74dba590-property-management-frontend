
// src/components/PropertyList.jsx

import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '../lib/apiClient';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };

    getProperties();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
