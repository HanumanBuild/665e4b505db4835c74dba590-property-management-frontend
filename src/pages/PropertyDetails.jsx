
// src/pages/PropertyDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchPropertyById } from '../lib/apiClient';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const getProperty = async () => {
      try {
        const data = await fetchPropertyById(parseInt(id));
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    getProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{property.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="w-full h-64 bg-gray-200 mb-4">
            <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <Card className="flex-grow p-4 bg-gray-100 mb-4 md:mb-0 md:mr-4">
              <CardHeader>
                <CardTitle>{property.name}</CardTitle>
                <CardDescription>{property.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{property.price}</p>
                <p>{property.description}</p>
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3 p-4 bg-gray-100">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Additional property info will go here */}
                <p>Contact: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
