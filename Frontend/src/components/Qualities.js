import React from 'react';
import restApiData from '../restApi.json';

const Qualities = () => {
//  restApi data
  const ourQualities = restApiData && restApiData[0] && restApiData[0].ourQualities;

  return (
    <section className='qualities' id='qualities'>
      <div className="container">
        {ourQualities && ourQualities.map((element) => (
          <div className='card' key={element.id}>
            <img src={element.image} alt={element.title} />
            <p className='title'>{element.title}</p>
            <p className='description'>{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
