import * as React from 'react';

export interface NewTravelerInfoProps {}

const NewTravelerInfo: React.FC<NewTravelerInfoProps> = () => {
  return (
    <section>
      <h4>Traveler:::</h4>
      <p>Name: </p>
      <p>Email: </p>
      <p>Phone: </p>
      <p>Address: </p>
    </section>
  );
};

export default NewTravelerInfo;
