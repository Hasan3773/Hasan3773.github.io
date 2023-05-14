import React from "react";
import Car from "../assets/Toyota.PNG";


const Toyota = () => {
    return (
    <div className="ArduinoCar">
      <div name="Arduino-Car" className="w-full bg-[#9790cc] pt-[80px] text-[#fdfffc]">
        <div className="flex flex-col justify-center items-center w-full">
            
        <p className="text-4xl font-bold inline border-b-4 border-[#FFBD59] pb-1 gap-8">
                  Python OpenCV Wheel Detection Algorithm
        </p>
  
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            </div>
          </div>
  
          <div className="max-w-[1600px] w-full px-4 grid sm:grid-cols-2 gap-8">
        
            <img 
                className="w-full p-[px] rounded-2xl"
                source src={Car}
            />
           
             
              <div className="Project-description">
                    <p className="pb-[5px] text-3xl">
                    <h1 className="font-bold" >Goal:</h1>

                    <br></br>Use Python OpenCV to detect the wheels of a car, distinguish the front wheel, and time how long it takes for the front wheel to pass the pole <br></br>

                    <br></br><h1 className="font-bold" >How?</h1>

                    <br></br> <div style={{marginBottom: 24}}> Using OpenCV commands in Python we cropped and resized the live-streamed footage, then converted it to binary to make the footage as clear as possible for the hough-shapes command to be able to detect circles on the screen</div>       
                    Utilizing position and math calculations, we were able to find the front wheel, and when it passed the pole
                    <br></br><br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br> <br></br><br></br>  
                  </p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

export default Toyota;
