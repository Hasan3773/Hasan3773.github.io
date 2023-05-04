import React from "react";
import Arduino from "../assets/ArduinoCar.jpg";
import PID from "../assets/PID.jpg";
import Toyota from "../assets/ToyotaHack.png";
import ECG from "../assets/ECG.jpg";
import Jesture from "../assets/Jesture.jpg";
import ASR from "../assets/ASR.jpg";
import Xwing from "../assets/Xwing.mp4";



const Projects = () => {
  return (
  <div className="Projects">
    <div className="bg-[#1a3036] w-full h-full">
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 p-[30px] pt-[70px]">
     <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#249987]">
          <h1 className="font-bold text-3xl " >
            PID Controller{" "}
          </h1>
          <p className="pb-[5px] text-lg">(Proportional Integral Derivative Control System with Arduino C++)</p>
          <div className="image-container">
            <img
              className="w-screen rounded-lg pt-5px"
              src={PID}
              alt="demontration of model working"
            />
            <div className="overlay text-3xl">
              <p> Using PID I created a see-saw auto balancer that took in an error input from an ultrasonic sensor based on the position of the trolley. This computed error through an Arduino C++ program using PID calculations and outputted an angle for the servo motor to balance the see-saw </p>
            </div>
          </div>
        </div>
       
        <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#249987] ">
          <h1 className="font-bold text-3xl">
            Emotional Cardiography{" "}
          </h1>
          <p className="pb-[5px] text-lg">(Using openCV, Machine Learning & Heartbeat Sensors)</p>
          <div className="image-container">
          <img
            className="w-screen rounded-lg pt-5px"
            src={ECG}
            alt=
            "Final term design project UW MTE100"
          />
            <div className="overlay text-3xl">
              <p>Revolutionary tech using openCV, machine learning & heartbeat sensors to monitor multiple patients, giving doctors early detection & improved accessibility to hospital safety</p>
            </div>
          </div>
        </div>
      
          <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#249987] ">
            <h1 className="font-bold text-3xl">
            Gesture controlled Arduino car{" "}
            </h1>
            <p className="pb-[5px] text-lg">(Python OpenCV using mediapipe & Arduino C++)</p>
            <div className="image-container">
            <img
              className="w-screen rounded-lg pt-5px"
              src={Jesture}
              alt="our project for the University of Waterloo Toyota Innovation Hackathon"
            />
              <div className="overlay text-3xl">
              <p>Gesture controlled Arduino car that was meant to be much more, it's called the JesterBot but we were the real clowns</p>
              </div>
            </div>
          </div>



          <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#249987]">
            <h1 className="font-bold  text-3xl">
              Wheel Detection Algorithm{" "}
            </h1>
            <p className="pb-[5px] text-lg">
              (Object Detection with Python OpenCV)
            </p>
            <div className="image-container">
            <img
              className="w-screen rounded-lg pt-5px"
              src={Toyota}
              alt="photo of the outer completed prototype"
            />
              <div className="overlay text-3xl">
              <p>As a part of a design challenge hosted by Toyota, my team developed a program that used Python OpenCV to recognize wheels, distinguish the front wheel and then time how long it takes for the wheel to pass a pole in real time</p>
              </div>
            </div>
          </div>
   

          <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#249987]">
            <h1 className="font-bold  text-3xl">
              Arduino Line-Folllowing/Bluetooth Car{" "}
            </h1>
            <p className="pb-[5px] text-lg">(Arduino C++ & Bluetooth control via App)</p>
            <div className="image-container">
            <img
              className="w-screen rounded-lg pt-5px "
              src={Arduino}
              alt="cover photo for 'today my goal is project"
            />
              <div className="overlay text-3xl">
              <p>Created in highschool as a demo project for my robotics club, taught/helped 30+ members build their own versions of the project through weekly lessons</p>
              </div>
            </div>
          </div>
   
          <div className="p-4 rounded-lg text-[#fdfffc] hover:text-[#249987] ">
            <h1 className="font-bold  text-3xl">
              Autonomus Sketching Robot{" "}
            </h1>
            <p className="pb-[5px] text-lg">(Spacial Scanning & Drawing with RobotC)</p>
            <div className="image-container">
            <img
              className="w-screen rounded-lg pt-5px "
              src={ASR}
              alt="cover photo for 'today my goal is project"
            />
              <div className="overlay text-3xl">
              <p>Using EV3 and RobotC, created a robot that autonomusly drives around a closed space while recording spacial data and then autonomusly draws the shape it was inclosed in afterwards</p>
              </div>
            </div>
          </div>
  
      </div>
    </div>

  {/*}
    <div className="ForFun">
      <div className="text-white text-center text-4xl center font-bold py-5" >
        <h1 style={{display: "flex", justifyContent: "center"}} >For Fun Projects</h1>
        <h1 className="font-bold text-3xl">Xwing designed, composited & rendered in blender{" "}</h1>
        <div className="image-container">
          <video src={Xwing} autoPlay loop className="w-screen rounded-xl pt-5px "></video>
        </div>
      </div>
    </div>
  */}

  </div>
  );
};

export default Projects;
