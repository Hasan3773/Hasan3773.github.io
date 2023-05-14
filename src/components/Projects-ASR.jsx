import React from "react";
import ASR from "../assets/ASR2.PNG";


const ArduinoCar = () => {
    return (
    <div className="ArduinoCar">
      <div name="Arduino-Car" className="w-full bg-[#9790cc] pt-[80px] text-[#fdfffc]">
        <div className="flex flex-col justify-center items-center w-full">
            
        <p className="text-4xl font-bold inline border-b-4 border-[#FFBD59] pb-1 gap-8">
                  Autonomous Sketching Robot (ASR)
        </p>
  
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            </div>
          </div>
  
          <div className="max-w-[1600px] w-full px-4 grid sm:grid-cols-2 gap-8">
        
            <img 
                className="w-full p-[px] rounded-2xl"
                source src={ASR}
            />
           
             
              <div className="Project-description">
                    <p className="pb-[5px] text-3xl">
                    <h1 className="font-bold" >What?</h1>

                    <br></br>ASR is a robot that drives around the perimeter of whatever room you place it in, navigating around any obstacles. Then it drives to the center of the room and sketches the layout of the room.<br></br>

                    <br></br><h1 className="font-bold" >How?</h1>

                    <br></br> <div style={{marginBottom: 24}}> The ASR uses two ultrasonic sensors to analyze its surrounding environment and make the correct decisions to driver around the perimeter.</div>
                    <div style={{marginBottom: 24}}> Implemented PID controls to help the ASR navigate around obstacles and maintain a consistent distance from the wall.</div>   
                    <div style={{marginBottom: 24}}> Built using an EV3 controller and various sensors, programmed using RobotC.</div>   
                    <div style={{marginBottom: 24}}> The spatial data is recorded using a gyroscope and built in motor encoders and then stored into arrays</div>  
                    <div style={{marginBottom: 24}}> The spatial data is recorded using a gyroscope and built in motor encoders and then stored into arrays</div>   
                    The ASR can recognize once its done a full lap around the perimeter using the spatial data, It then drives to the middle of the room and draws using its two mechanical arms.
                    <br></br>   
                  </p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

export default ArduinoCar;
