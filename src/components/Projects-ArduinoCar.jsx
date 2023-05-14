import React from "react";
import Car from "../assets/ArduinoCar1.PNG";


const ArduinoCar = () => {
    return (
    <div className="ArduinoCar">
      <div name="Arduino-Car" className="w-full bg-[#9790cc] pt-[80px] text-[#fdfffc]">
        <div className="flex flex-col justify-center items-center w-full">
            
        <p className="text-4xl font-bold inline border-b-4 border-[#FFBD59] pb-1 gap-8">
                  Bluetooth Arduino Car
        </p>
  
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            </div>
          </div>
  
          <div className="max-w-[1400px] w-full px-4 grid sm:grid-cols-2 gap-8">
        
            <img 
                className="w-full p-[px] rounded-2xl"
                source src={Car}
            />
           
             
              <div className="Project-description">
                    <p className="pb-[5px] text-3xl">
                    <h1 className="font-bold" >What?</h1>

                    <br></br>Taught 4 other teams to create similar RC cars by giving weekly lessons and walking them through the process of programming and wiring the car.<br></br>

                    <br></br><h1 className="font-bold" >How?</h1>

                    <br></br> <div style={{marginBottom: 24}}> Line Following Mode: Used a Photoresistor connected with the 4 DC motors and a C++ program to follow black lines</div>
                    <div style={{marginBottom: 24}}> Bluetooth Mode: Used a Bluetooth module that I programmed to connect to a phone app with C++ allowing the user to control the car via their phone</div>         
                    Autonomous Driving Mode: Programmed the car to drive autonomously around the room avoiding obstacles using the 2 ultrasonic sensors and an Arduino C++ program
                    <br></br>   <br></br> <br></br> <br></br> <br></br> 
                  </p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

export default ArduinoCar;
