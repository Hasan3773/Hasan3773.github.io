import React from "react";
import PIDVid from "../assets/PIDVid.mp4";

const PIDController = () => {
    return (
    <div className="PIDControler">
      <div name="PID-Controller" className="w-full bg-[#9790cc] pt-[80px] text-[#fdfffc]">
        <div className="flex flex-col justify-center items-center w-full">
            
        <p className="text-4xl font-bold inline border-b-4 border-[#FFBD59] pb-1 gap-8">
                  Proportional Integral Derivative Control System 
        </p>
  
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            </div>
          </div>
  
          <div className="max-w-[1500px] w-full px-4 grid sm:grid-cols-2 gap-8">
              <div>
                  <div className="video-container">
                      <video className="w-full p-[px] rounded-2xl" controls muted>
                          <source src={PIDVid}  type="video/mp4"  />
                      </video>
                  </div>
                     
              </div>
              <div className="Project-description">
                    <p className="pb-[5px] text-3xl">
                    <h1 className="font-bold" >What?</h1>

                    <br></br>Using PID I created a see-saw auto balancer that took in an error input
                    from an ultrasonic sensor based on the position of the trolley. This 
                    computed error through an Arduino C++ program using PID calculations
                    and outputted an angle for the servo motor to balance the see-saw<br></br>

                    <br></br><h1 className="font-bold" >How?</h1>

                    <br></br> <div style={{marginBottom: 24}}> Used AutoCAD to design the main chasey, then laser cut it using LightBurn </div>
                    <div style={{marginBottom: 24}}> Designed Joinery pieces and screws using Inventor then 3D printed them </div>         
                    Used an Arduino UNO as the micro-controller, connecting to an ultrasonic sensor and a servo-motor <br></br>   

                    <br></br><h1 className="font-bold" >Results</h1>
                                     
                    <br></br> Using the Ziegler-Nichols tuning method, I was able to get an Auto-Balance 
                    time of under .5 seconds for most error positions 
                  </p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

export default PIDController;
