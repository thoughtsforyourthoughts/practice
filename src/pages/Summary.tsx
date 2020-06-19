import React from 'react';
import TripSummary from '../components/SummaryOfCharges/TripSummary';
import NewTripSummary from '../experiments/NewTripSummary';
import TravelerInfo from '../components/Traveler/TravelerInfo';
import CreditCardPayment from '../components/Payment/CreditCard';
import Comments from '../components/Comments/Comments';
import Album from '../components/Album/Album';

const SummaryPage: React.FC = () => {
  return (
    <article className='container'>
      <section className='row'>
        <div className='col-md-6'>
          <TripSummary></TripSummary>
        </div>
        <div className='col-md-6'>
          <NewTripSummary></NewTripSummary>
        </div>
      </section>
      <section className='row'>
        <div className='col-md-6'>
          <TravelerInfo></TravelerInfo>
        </div>
        <div className='col-md-6'>
          <CreditCardPayment></CreditCardPayment>
        </div>
      </section>
      <section className='row'>
        <div className='col-md-6'>
          <Comments></Comments>
        </div>
        <div className='col-md-6'>
          <Album></Album>
        </div>
      </section>
    </article>
  );
};

export default SummaryPage;
