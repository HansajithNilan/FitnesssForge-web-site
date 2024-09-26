import React from "react";
import Navbar from "./Navbar/Navbar";


import "./Home.css";
function Home() {


  return (
    <div className="wrapper">
      <div className="image">
        <Navbar />

        <img src="./Images/Fitness.jpg"></img>
      </div>
      <div className="section1 clearfix">
        <h1>B E N E F I T S</h1>
        <h5>TRAINING WITH FITNESSFORGE </h5>
        <div className="benefits">
          <h4>Mind Body Connection</h4>
          <h4>Mind Body Connection</h4>
          <h4>Mind Body Connection</h4>
          <h4>Mind Body Connection</h4>
        </div>
        
        <div className="foodimage">
          <img src="./Images/Foodimg.jpg"></img>
        </div>
      </div>
      <div className="suplement ">
        <h1>SUPPLEMENT</h1>
        <div className="text">
          <h5>
            Boost your workout performance and recovery with our premium fitness
            supplement. Packed with essential vitamins, minerals, and natural
            ingredients, it helps increase energy, enhance endurance,and promote
            muscle growth. Perfect for athletes, bodybuilders, and fitness
            enthusiasts aiming to achieve their goals faster and healthier." it
            helps increase energy, enhance endurance,and promote muscle growth.
            Perfect for athletes, bodybuilders, and fitness enthusiasts aiming
            to achieve their goals faster and healthier." it helps increase
            energy, enhance endurance,and promote
          </h5>
        </div>
        <div className="imge">
          <img src="./Images/supplement.png"></img>
        </div>
      </div>
      <h1>SCHEDULED PACKAGES</h1>
      <h3>TRAINING WITH FITNESSFORGE </h3>
      <div className="packages ">
        <div className="personal">
          <h1>
            Personal Training <br />
            Packages
          </h1>
          <img src="./Images/personal.jpg"></img>
          <p>
            Tailored, individual training sessions with a personal trainer,
            focusing on specific fitness goals.A few people working with a
            trainer for a more personalized experience at a reduced cost.
          </p>
        </div>
        <div className="training">
        <h1>
        Online Fitness <br />
        Programs 
          </h1>
          <img src="./Images/online.jpg"></img>
          <p>
            Subscription-based access to a library of workout videos or live
            streaming classes. 12-Week Challenges: Specific fitness challenges
            that include diet and workout plans designed to achieve a
            transformation in a set time.
          </p>
        </div>
        <div className="membership">
        <h1>
        Gym Membership  <br />
        Packages
          </h1>
        <img src="./Images/membership.jpg"></img>
          <p>
            Unlimited access to gym facilities on a monthly basis. Annual
            Membership: A yearly package, often at a discounted price compared
            to monthly plans. Class Passes: Pay for a certain number of group
            fitness classes (e.g., yoga, .)
          </p>
        </div>
      </div>
      <h1>Owner</h1>
      <div className="owner clearfix">
      
      <img src="./Images/owner.png" >
      </img></div>
      <div className="ownerpra">
      <p>"A fitness gym owner is a passionate individual dedicated to promoting health and wellness within their community. With a deep understanding of fitness, exercise science, and business management, they oversee the day-to-day operations of the gym. They are responsible for creating a positive, motivating environment where clients can achieve their fitness goals, managing staff, maintaining equipment, and offering tailored fitness programs. Driven by a commitment to helping others lead healthier lives, the gym owner combines expertise in physical training with entrepreneurial skills to run a successful and welcoming fitness facility."
      4o "A fitness gym owner is a passionate individual dedicated to promoting health and wellness within their community. With a deep understanding of fitness, exercise science, and business management, they oversee the day-to-day operations of the gym. They are responsible for creating a positive, motivating environment where clients can achieve their fitness goals, managing staff, maintaining equipment, and offering tailored fitness programs. Driven by a commitment to helping others lead healthier lives, the gym owner combines expertise in physical training with entrepreneurial skills to run a successful and welcoming fitness facility."
      4o"A fitness gym owner is a passionate individual dedicated to promoting health and wellness within their community. With a deep understanding of fitness, exercise science, and business management, they oversee the day-to-day operations of the gym. They are responsible for creating a positive, motivating environment where clients can achieve their fitness goals, managing staff, maintaining equipment, and offering tailored fitness programs. Driven by a commitment to helping others lead healthier lives, the gym owner combines expertise in physical training with entrepreneurial skills to run a successful and welcoming fitness facility."
      4o</p>
      </div>
      <h1>Join With FitnessForge </h1>
      <div className="joinwith clearfix">
        <div className="form">
          <form>
          
            <input  type="text" placeholder="Name " ></input><br/>
           
            <input  type="text"  placeholder="Email"></input><br/>
           
            <input  type="text" placeholder="Phonenumber" ></input><br/>
            
            <textarea placeholder="Message"></textarea>
          </form>
        </div>
        <div className="joinimage">
          <img src="./Images/joinimage.png"></img>
          
        </div>
        </div>
        <div className="lastpara">
      <p>"A fitness gym owner is a passionate individual dedicated to promoting health and wellness within their community. With a deep understanding of fitness, exercise science, and business management, they oversee the day-to-day operations of the gym. They are responsible for creating a positive, motivating environment where clients can achieve their fitness goals, managing staff, maintaining equipment, and offering tailored fitness programs. Driven by a commitment to helping others lead healthier lives, the gym owner combines expertise in physical training with entrepreneurial skills to run a successful and welcoming fitness facility."
      4o "A fitness gym owner is a passionate individual dedicated to promoting health and wellness within their community. With a deep understanding of fitness, exercise science, and business management, they oversee the day-to-day operations of the gym. They are responsible for creating a positive, motivating environment where clients can achieve their fitness goals, managing staff, maintaining equipment, and offering tailored fitness programs. Driven by a commitment to helping others lead healthier lives, the gym owner combines expertise in physical training with entrepreneurial skills to run a successful and welcoming fitness facility."
      4o"A fitness gym owner is a passionate individual dedicated to promoting health and wellness within their community. With a deep understanding of fitness, exercise science, and business management, they oversee the day-to-day operations of the gym. They are responsible for creating a positive, motivating environment where clients can achieve their fitness goals, managing staff, maintaining equipment, and offering tailored fitness programs. Driven by a commitment to helping others lead healthier lives, the gym owner combines expertise in physical training with entrepreneurial skills to run a successful and welcoming fitness facility."
      4o</p>
      </div>
      
    </div>
  );
}

export default Home;
