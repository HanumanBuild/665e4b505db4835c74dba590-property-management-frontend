
// src/components/PropertyCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ property }) => {
  return (
    <Card className="m-4 w-80">
      <CardHeader>
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-t-lg" />
        <CardTitle>{property.name}</CardTitle>
        <CardDescription>{property.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">{property.price}</p>
        <p>{property.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/property/${property.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
