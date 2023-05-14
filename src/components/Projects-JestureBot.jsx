import React from "react";
import Car from "../assets/Jesture.jpg";


const JestureBot = () => {
    return (
    <div className="ArduinoCar">
      <div name="Arduino-Car" className="w-full bg-[#9790cc] pt-[80px] text-[#fdfffc]">
        <div className="flex flex-col justify-center items-center w-full">
            
        <p className="text-4xl font-bold inline border-b-4 border-[#FFBD59] pb-1 gap-8">
                  Jesture Bot
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

                    <br></br>Jesture Bot is a Bluetooth RC car that works as a portable speaker that can be controlled by using just your hands, built in under 24 hours as a part of UOFT's hardware hackathon. <br></br>

                    <br></br><h1 className="font-bold" >How?</h1>

                    <br></br> <div style={{marginBottom: 24}}> Used Google's mediapipe OpenCV library to recognize and process points on users hands, the left hand being used for car movement and the right for volume</div>
                    <div style={{marginBottom: 24}}> Sent data to an Arduino Due using an HC-05 Bluetooth module, controlling the 4TT motors using a L298N motor controllers and a basic speaker.</div>         
                    Used a logic level converter to drop voltage levels from Arduino 5V to 3.3V to communicate to the Bluetooth module.

                    <br></br><br></br>   <br></br>   <br></br>  <br></br>      
                  </p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

export default JestureBot;
