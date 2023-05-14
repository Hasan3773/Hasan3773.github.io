import React from "react";
import ASR from "../assets/ECG.png";


const Emotion = () => {
    return (
    <div className="ArduinoCar">
      <div name="Arduino-Car" className="w-full bg-[#9790cc] pt-[80px] text-[#fdfffc]">
        <div className="flex flex-col justify-center items-center w-full">
            
        <p className="text-4xl font-bold inline border-b-4 border-[#FFBD59] pb-1 gap-8">
                  Emotional Cardiography
        </p>
  
          <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="sm:text-right pb-8">
            </div>
          </div>
  
          <div className="max-w-[1400px] w-full px-4  gap-8">
        
            <img 
                className="w-full p-[px] rounded-2xl"
                source src={ASR}
            />
           
             
              <div className="Project-description">
                    <p className="pb-[5px] text-3xl">
                    <h1 className="font-bold" >What?</h1>

                    <br></br>ECG is an application that monitors a patient's emotional state and heart rate using OpenCV, Machine Learning & Arduino sensors. <br></br>

                    <br></br><h1 className="font-bold" >Neural Network Architecture:</h1>

                    <br></br> <div style={{marginBottom: 24}}> KER 2013 dataset- 27,000 (48 x 48 x 1 greyscale) images, divided into 24,000 images for the train set, 3000 images for the cross-validation set. </div>
                    <div style={{marginBottom: 24}}> Achieved 70% Validation Set Accuracy.</div>   
                    <div style={{marginBottom: 24}}>4.7 million parameters total from 12 convolutional layers and 2 FC layers (ELU non-linearity) with 5 units SoftMax output. </div>   

                    <h1 className="font-bold" >How?</h1>

                    <br></br> <div style={{marginBottom: 24}}> Uses an Emotion recognition CNN model built on Python with OpenCV and TensorFlow Keras.</div>
                    <div style={{marginBottom: 24}}> Streamed real-time video feed and model predictions to the website's Node.js backend using Flask.</div>   
                    <div style={{marginBottom: 24}}> Used a KY-039 heart beat sensor hooked up to an Arduino which processed the patient's data, which was then transmitted to the web application. </div>   
                    Built a web application that receives all the data and displays it to the doctor, along with an algorithm that displays the patients state based off our data.
                    <br></br>   
                  </p>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  };

export default Emotion;
