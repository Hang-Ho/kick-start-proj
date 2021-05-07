import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We are the Spiders!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              label='Gurveer Singh'
              text='Project Manager'
              paragraph='Second year Computer Science major at the time
               of this website’s creation. Software engineer interested
                in web development and project management.'
            />
            <CardItem
              src='https://avatars1.githubusercontent.com/u/69872401?s=460&u=c4855852db639025c7199ed810d4bc7e26d8b580&v=4'              label='Tuyet Nhi Ngo'
              text="Frontend Engineer"
              paragraph='Currently pursuing a Bachelor in Computer Science degree 
              at San Jose State University. A junior student with focus on
              full-stack web development.'
            />
            <CardItem
              src='https://avatars.githubusercontent.com/u/55907833?v=4'
              label='Hang Ho'
              text='Full-Stack Engineer'
              paragraph='Junior student in Computer Science major at San Jose State 
              University. Software Developer | Seeking internships in summer 2021 and
               Full-Time opportunities in the field of Computer Science from Summer 2022.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
