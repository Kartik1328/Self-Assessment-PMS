import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useLocalStorage, useSessionStorage } from "react-use";

// imports necessary modules for creating a React component, 
// making HTTP requests with Axios, navigating in a React application, 
// IoMdCheckmarkCircleOutline- this is the React Icon from the react-icons library.

function SelfAppraisel() {
  // Defines a functional component named SelfAppraisal.
  // THIS IS MY COMPONENT

  const [data, setData] = useState("");
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [value, setValue] = useState([])
  const [info, setInfo] = useState('')
  const [icon, setIcon] = useState();
  const [popoverVisible1, setPopoverVisible1] = useState(false);
  const [popoverVisible2, setPopoverVisible2] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [draftInfo, setDraftInfo] = useState("");
   const [overallValue,setOverallValue]=useState("");
  const [overallDraftValue,setOverallDraftValue]=useState("");
  const [selfAssm, setSelfAssm] = useState([]);
  const [devGoals, setDevGoals] = useState([]);
  const [addDevGoals, setAddDevGoals] = useState("");
  const [SubmitRatingComments, setSubmitRatingComments] = useState([]);


  console.log(popoverVisible1);
//   // THESE ARE THE State Declarations AND THEY ARE DECLARED BECAUSE HERE AN ACTION IS PERFORMED OR CHANGE OF DATA IS OCCURING THAT IS WHY THEY ARE WRITTEN WITH THE HELP OF THE REACT HOOKS.


//   var emp_id=10;

//   // it is for fetching data based on the emp id 
//   // useEffect hook to make an asynchronous API call to fetch self-appraisal data from the server when the component mounts.


  useEffect(() => {
    axios.get("http://localhost:8080/api/getBySelfAsmAll")
      .then((response) => setSelfAssm(response.data))
      .catch(err => console.log(err))
  }, [])

  console.warn(value,"value")

  useEffect(() => {
    axios.get("http://localhost:8080/api/getByDevGoals/1")
      .then((response) => setDevGoals(response.data))
      .catch(err => console.log(err))
  }, [])

  console.warn(value,"value")


  useEffect(() => {
    axios.get("http://localhost:8080/api/getByProfile/1")
      .then((response) => setValue(response.data))
      .catch(err => console.log(err))
  }, [])

  console.warn(value,"value")


// // ---------------------------------------------------------------------------------------------------------

// PREVIOUS LOGIC
  
  // const overallRatingAndComment=()=>{
  //   console.log(info);
  //   let infoAll={...info,"empId":emp_id,"rating":totalStr,"comment":totalStr1};
   
  //   console.log(infoAll,"infoAll...........");
  //   axios.post("http://localhost:8080/api/postBySelfAsm", infoAll)
  //      .then((response) => {
  //       axios.get("http://localhost:8080/api/getBySelfAsm/10")  
  //       .then(res=>{
  //         console.log(res.data,"response data **********************************")
  //         setOverallValue(res.data)     
  //       })
  //       setSubmitted("You have successfully submitted your self-appraisal");
  //     setIcon(<IoMdCheckmarkCircleOutline />);
  //     setButtonsVisible(false);
  //     setPopoverVisible1(false);
  //      })
  // }
// //   useEffect(()=>{
// //     axios.get("http://localhost:8080/api/getBySelfAsmDraft/15")
// //     .then((response)=>setDraftInfo(response.data))
// // },[])
// // const [count,setCount]=useState(0)
// // const handleCount=()=>{
// // setCount(count+1)
// // }

// // console.log(count)

// console.warn(value,"value")

//   // ----------------------------------------------------------------------------------------------------------------


//   // THIS IS THE LOGIC FOR filling THE COMMENTS IN THE form type filds THAT WE WRITE IN THE FRONT END and updation of the state input fields.


  const handleAddDevelopmentGoals = () => {
    console.log(addDevGoals,"addDevGoals...");
    axios.post("http://localhost:8080/api/postByDg", addDevGoals)
    .then((response) => {
      response.data
    })
  }

console.log(addDevGoals,"addDevGoals");
  handleAddDevelopmentGoals
  const handleChangeAddDevelopmentGoals=(e)=>{
    setAddDevGoals({...addDevGoals,"selfAssessment":e.target.value});
  }

  console.log(info,"info>>>>>>>>>>>>>>>>>");

  console.log(draftInfo,"draftInfo???????");
// // ------------------------------------------------------------------------------------------------------------
//   // To achieve the functionality of saving draft data and retrieving it even after reloading the page,
//   //  you can use browser storage mechanisms like localStorage or sessionStorage.
//   // -------------------------------------------------------------------------------------------------------------

//   // The "handleChangefunction" is an event handler for form input fields, extracting the name and value attributes from the target element 
//   // (typically an input field). It dynamically updates the info state with the latest user input and logs the updated state for debugging.


const [draftRatingComments, setDraftRatingComments] = useState("");
console.warn(draftRatingComments,"draftRatingComments");

// handleRatingsCommentsChange

const [submitRatings, setSubmitRatings] = useState("");
const handleRatingsChange=(e)=>{
  const key=e.target.name;
  const value=e.target.value;
  setSubmitRatings({...submitRatings,[key]:value});
}

console.log(submitRatings,"submitRatings");

const [submitComments, setSubmitComments] = useState("");

const handleCommentsChange=(e)=>{
  const key=e.target.name;
  const value=e.target.value;
  setSubmitComments({...submitComments,[key]:value});
}

console.log(submitComments,"submitComments");


// CONVERTING STRING TO OBJECT AND STORE IN DATABASE 

let submitRatingsString=""
for(let i in submitRatings){
  submitRatingsString+=submitRatings[i]+",";
}

let totalSubmitRatingsString=submitRatingsString.slice(0,submitRatingsString.length-1);
console.log(submitRatingsString.slice(0,submitRatingsString.length-1)); // This will log the current state of ratingComment

let submitCommentsString=""
for(let i in submitComments){
  submitCommentsString+=submitComments[i]+",";
}

let totalSubmitCommentsString=submitCommentsString.slice(0,submitCommentsString.length-1);
console.log(submitCommentsString.slice(0,submitCommentsString.length-1)); // This will log the current state of ratingComment

// // convert string to List 

// Draft Rating And Comments



useEffect(()=>{
  axios.get("http://localhost:8080/api/getBySelfAsmDraft/10")
  .then((response)=>{
    setDraftRatingComments(response.data)
    
setSubmitRatings({"rating":response.data.rating.split(",")[0],"rating1":response.data.rating.split(",")[1],"rating2":response.data.rating.split(",")[1],"rating3":response.data.rating.split(",")[1]})

setSubmitComments({"comment":response.data.comment.split(",")[0],"comment1":response.data.comment.split(",")[1],"comment2":response.data.comment.split(",")[1],"comment3":response.data.comment.split(",")[1]})

  })
},[])


// HERE I TAKEN THE FLAG VALUE TO PERFORM THE FUNCTIONALITY OF SAVE AS DRAFT AND SUBMIT 
const [flag,setFlag]=useState(true);

useEffect(()=>{
  axios.get("http://localhost:8080/api/getBySelfAsm/10")
  .then((response)=>{
    setDraftRatingComments(response.data)
    setFlag(false);

    // THIS MEANS THAT-----
    
setSubmitRatings({"rating":response.data.rating.split(",")[0],"rating1":response.data.rating.split(",")[1],"rating2":response.data.rating.split(",")[1],"rating3":response.data.rating.split(",")[1]})

setSubmitComments({"comment":response.data.comment.split(",")[0],"comment1":response.data.comment.split(",")[1],"comment2":response.data.comment.split(",")[1],"comment3":response.data.comment.split(",")[1]})

  })
},[])

console.log(submitRatings,"submitComments");

const handleChangeFeedback=(e)=>{
    const key=e.target.name;
    const value=e.target.value;
    setDraftRatingComments({...draftRatingComments,[key]:value});
}

console.log(draftRatingComments,"draftRatingComments");

const [devAssessment, setDevAssessment] = useState("");
const handleChangeAssessment=(e)=>{
  setDevAssessment(e.target.value);
}

console.log(devAssessment,"devAssessment");

console.log(draftRatingComments,"draftRatingComments")  ;

const handleDraftRatingComments = () => {
  console.log(totalSubmitRatingsString,totalSubmitCommentsString,"totalSubmitRatingsString,totalSubmitCommentsString");
  var AllDraftRatingComments={...draftRatingComments,"empId":10,"rating":totalSubmitRatingsString,"comment":totalSubmitCommentsString};
  console.log(AllDraftRatingComments,"AllDraftRatingComments");
  axios.post("http://localhost:8080/api/postBySelfAsmDraft", AllDraftRatingComments)
  .then((response) => {
    axios.get("http://localhost:8080/api/getBySelfAsmDraft/10")
    .then((response)=>setDraftRatingComments(response.data))
  })
  setSubmitted("You have saved as draft.");
  setIcon(<IoMdCheckmarkCircleOutline />);
  setButtonsVisible(false);
  setPopoverVisible1(false);
 
}
// THIS FUNCTION IS TO MANAGE MULTIPLE VALUES OR ENTRIES.
//A var is declared that accepts the values from the draftRatingComments and returns it as a string.
//then post and GET API are called and setSubmitted function is INVOKED.

// submit 

const handleSubmitRatingComments = () => {

  console.log(totalSubmitRatingsString,totalSubmitCommentsString,"totalSubmitRatingsString,totalSubmitCommentsString");
  var AllSubmitRatingComments={...draftRatingComments,"empId":10,"rating":totalSubmitRatingsString,"comment":totalSubmitCommentsString};
  console.log(AllSubmitRatingComments,"AllSubmitRatingComments");
  axios.post("http://localhost:8080/api/postBySelfAsm", AllSubmitRatingComments)
  .then((response) => {
    axios.get("http://localhost:8080/api/getBySelfAsm/10")
    .then((response)=>setSubmitRatingComments(response.data))
  })
  setSubmitted("You have successfully submitted your self-appraisal");
      setIcon(<IoMdCheckmarkCircleOutline />);
      setButtonsVisible(false);
      setPopoverVisible1(false);
 
}

//WE CANNOT EDIT THE ARRAYS DIRECTLY IN THE FRONT END UI AFTER SUBMITTING IT AS DRAFT.
// TO EDIT THE ARRAY OF RATING AND COMMENTS WE HAVE TAKEN IT IN OBJECT WAY AND CONVERTED IT TO STRING AND SPLIT


  return (

    <div className='w-full h-screen bg-gray-200 '>
      <div className='bg-white rounded-md relative top-12 ml-4 mr-3 border-[1px] border-blue-400 pb-24'>
        {/* anything that is written under square bracket CSS property is a arbitrary value */}

        {/* HERE THE COMPONENT STARTS (first part) */}
        <h1 className='text-xl font-normal text-black pl-4 pt-10'>Quarter 4</h1>
        <div className='flex space-x-[500px]'>
          <h3 className='text-m text-gray-500 pl-5 mt-2'>01-Apr 2023 to 30-Jun-2023</h3>
          <div className='flex space-x-2 text-green-500 items-center text-lg'>
            <h1 className='text-xl'>{icon}</h1>
            <h1 className=''>{submitted} </h1>
          </div>
        </div>


        {/* MENU BAR */}
        <div className='text-gray-400 pl-2'>
          <div className="relative">
            <div className="toggle-bar absolute h-2  transition-transform duration-300">
            </div>
            <ul className="flex space-x-4  p-4">
              <li><a href="#" onClick={() => moveToggle(0)} className="text-lg">Goal Setting</a></li>
              <li><a href="#" onClick={() => moveToggle(1)} className="text-lg">Self Assessment</a></li>
              <li><a href="#" onClick={() => moveToggle(2)} className="text-lg">Manager Assessment</a></li>
              <li><a href="#" onClick={() => moveToggle(2)} className="text-lg">Annual Review</a></li>

            </ul>
          </div>
        </div>

        {/* Adding one seprating line according to the figma design */}

        <h1 className='border-b-[1px] border-gray-300 ml-4 mr-4'></h1>

        {/* To make this we have to make a grid of 11 coloumns.4 for profile picture,role etc and 2 for "submitted on" and 5 for self rating */}

        <div className='grid grid-cols-11 '>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

          {/* PROFILE CARD IS displayed HERE */}

          <div className="col-span-4 ">
            <div className="grid grid-cols-12">
              <div className='col-span-2 '>
                <img src="profile.jpeg" className='rounded-full h-[40px] w-[42px] ml-6 mt-4' alt="Profile"></img>
              </div>

              <div className='col-span-10 '>
                <div className="ml-2 mb-4">
                  <h2 className='font-thin text-lg  mx-8 pt-3 w-56 flex-col justify-center -ml-0 text-black'>{value.empName}</h2>
                  <p className=' font-medium text-m text-blue-900 -ml-0 pt-1'>{`${value.designation} - ${value.department}`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Adding one seprating line according to the figma design */}

          <div className='col-span-2 border-l-[1px] border-gray-300 mt-2'>

            {/* NOW THE DATE/submitted ON PART IS DIPLAYED HERE */}

            <div className='ml-8 pl-6 mt-2'>
              <div className="pb-1">
                <h2 className='text-lg font-thin text-black'>Submitted On</h2>
              </div>
              <div className='flex space-x-3 pt-1'>
                <div className='calender-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="44" viewBox="0 0 448 512" fill='gray'>
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                  </svg>
                </div>
                <div className="text-m -mt-1">{draftRatingComments.submittedOn}</div>
              </div>
            </div>
          </div>

          {/* NOW THE SELF RATING PART is displayed AND ALSO ADDING ONE SEPRATING LINE ACCORDING TO THE FIGMA DESIGN*/}

          <div className='col-span-5 border-l-[1px] border-gray-300 mt-2'>

            <div className="div ml-6 pl-6 mt-2">
              <div className="pb-1">
                <h2 className='text-lg font-thin text-black'>Self Assessment</h2>
              </div>
              <div className="text-xl text-red-600 font-medium pl-6">
                {draftRatingComments.overallRating}
                {/* BECAUSE THE  VALUE OF SELF ASSESSMENT IS SAME AS THE OVERALL RATING */}
              </div>
            </div>
          </div>
        </div>

        {/* A SEPRATING LINE AS PER THE FIGMA DESIGN */}
        <h1 className='border-b-[1px] border-gray-300 ml-4 mr-4'></h1>

        {/* NOW THE SELF APPRAISAL-SECTION (second part) */}

        <div>
          <h1 className='text-xl font-medium text-black pl-4 pt-4'>Self Assessment</h1>

          {/* we have to divide the grid in 9 parts and then give the devison of col span according */}

          <div className='grid grid-cols-9'>
            {/* -------------------------------------------------------------------------------------------------------------------------------------- */}

            <div className='col-span-2  ml-4 mt-3 mb-6'>
              <div className="ml-4 mb-12 space-y-6 pt-3">
                <h2 className='font-extralight text-lg  mx-8 pt-3 w-56 flex-col justify-center -ml-0 text-black'>Overall Rating</h2>
                <p className=' font-extralight text-lg text-black -ml-0 pt-2 flex-col'>Overall Comments</p>
              </div>
            </div>

            <div className='col-span-4 mt-3'>
              <div className="-ml-28 mb-12 space-y-6 pt-3">
                <textarea type="text" placeholder="Add rating.." className=' placeholder-gray-300 overflow-hidden resize-none w-[20%] h-[40px] font-extralight text-lg text-black -ml-0 pt-3 border-[1px] border-gray-300 p-1' name='overallRating' onChange={handleChangeFeedback} value={draftRatingComments.overallRating} />
                <textarea type="text" placeholder="Add comment.." className='  placeholder-gray-300 overflow-hidden resize-none w-[100%] h-[130px] font-extralight text-lg text-black -ml-0 pt-1 border-[1px] border-gray-300 p-1' name='overallComments'onChange={handleChangeFeedback} value={draftRatingComments.overallComments}/>

                {/* <input type="text" placeholder="0.0"
                      className={`input input-bordered w-[15%] h-[30px] max-w-xs outline-none ${submitted ? 'cursor-not-allowed font-medium text-lg bg-white' : 'border-[1px] border-gray-200'}`}
                      name="frdRatings" onChange={handleChangeComments} disabled={submitted} value={draftInfo.frdRatings}/> */}

              </div>
            </div>
          </div>
        </div>

        {/* NOW THE THIRD PART STARTS */}

        <div className=''>

          <div className='flex space-x-[130px] pb-1'>
            <h1 className='text-lg font-medium text-black pl-5 pt-4 text-left'>Objective Area & KRA / Goals & Objective</h1>
            <h1 className='text-lg font-medium text-black pl-5 pt-4 text-left '>Measurement criteria / Target</h1>
            <div className='flex space-x-3 pr-24'>
              <img src="profile.jpeg" className='rounded-full h-[34px] w-[36px] ml-6 mt-4' alt="Profile"></img>
              <h2 className='font-thin text-base  mx-8 pt-3 w-56 flex-col justify-center -ml-0 mt-2 text-blue-500'>{value.empName}</h2>
            </div>
          </div>

          {/* A SEPRATING LINE AS PER THE FIGMA DESIGN */}
          <h1 className='border-b-[1px] border-gray-300 ml-4 mr-4 mb-4'></h1>

          {/* we have to divide the grid in 7 parts and then give the devison of col span according */}
          {/* THIS IS THE LOGIC OF DISPLAYING THE DATA FROM THE DATABASE FROM THE BACKEND AND THEN WRITING IN THE FRONT END */}

          {/* LOGIC FOR DISPLAYING DATA */}

          {/* if there are multiple datas eg 8-9 lines of goals then we have to apply a for loop so that the extra space is generated automatically
          data=20
          data.map(i=>(
            <li>
              <ol>{i.name}</ol>
            </li>
          )) */}

          <div className='grid grid-cols-12 mb-8'>
            <div className='col-span-7'>
              {
                selfAssm &&selfAssm.map((i, index) => (
                  <div key={index} className='grid grid-cols-7'>

                    <div className='col-span-1 -mt-4'>
                      <h2 className='font-extralight text-lg  mx-8 pt-3 justify-center ml-10'>{i.weightage}</h2>
                      <p className=' font-extralight text-lg  ml-4 mt-2 text-gray-500'>Weightage</p>
                    </div>

                    <div className='col-span-3 -mt-4 -ml-8'>
                      <div className="ml-4 mb-12 ">
                        <h2 className='font-extralight text-lg  mx-8 pt-3  flex-col justify-center ml-10 '>{i.kra}</h2>
                        <div className='font-extralight text-m mt-2 flex-col justify-center ml-10 text-gray-500'>

                          {/* THIS IS CALLED AS THE REGEX or REGULAR EXPRESSION */}
                          {/* The goal of this code seems to be splitting a string (i.goals) into an array of lines based on a specific pattern using a regular expression. */}
                          {i.goals.split(/(?=\d+\.\s)/).map((line, lineIndex) => (
                            // THIS PATTERN HAS COME BECAUSE THE DATA WAS ENTERED IN THIS WAY IN THE DATABASE.
                            // matches a position in the string where there is a sequence of one or more digits, 
                            // followed by a dot, and then followed by whitespace. However, it doesn't consume the actual digits, dot, or whitespace; 
                            // it only asserts that they are present at that position.
                            // It means that the string is split at positions where the positive lookahead pattern is matched.
                            <p key={lineIndex}>{line.trim()}</p>
                            // The trim method is used to remove leading and trailing whitespace from each line.

                          ))}
                        </div>
                      </div>
                      
                    </div>

                    {/* THIS MEASUREMNET CRITERIA IS WRITTEN UNDER THE LOOP ONLY BECAUSE IT WILL BE ACCORDING TO THE KRA and GOALS and under this measurement criteria includes the target and target operator*/}
                    <div className='col-span-3  mt-4 flex -space-x-3 ml-4'>
                    <h2 className='font-extralight text-2xl  mx-8  justify-center ml-10 border-[1px] border-gray-300 w-[45px] h-[35px] pl-4'>{i.targetOperator}</h2>
                    <h2 className='font-extralight text-lg  mx-8  justify-center ml-10 border-[1px] border-gray-300 w-[60px] h-[35px] pl-2 pt-1'>{i.target}</h2>
                    </div>
                  </div>

                ))
              }

              
            </div>
            
            <div className='col-span-5 ml-8'>
              {/* THIS IS FOR RATING AND COMMENT SECTION */}
              <div className={`col-span-3 -mt-1 ${submitted ? 'space-y-14' : 'space-y-4'}`}>

                <div className='space-y-2'>
                  <div>
                    <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Rating</h3>
                    <input type="text" placeholder="0.0"
                      className={`input input-bordered w-[15%] h-[30px] max-w-xs outline-none ${submitted ? 'cursor-not-allowed font-medium text-lg bg-white' : 'border-[1px] border-gray-200'}`}
                      name="rating" onChange={handleRatingsChange} value={submitRatings.rating} /> 
                  </div>
                  <div>
                    <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Comments</h3>
                    <textarea type="text" placeholder=""
                      className={`overflow-hidden resize-none w-[60%] h-[65px] outline-none ${submitted ? 'cursor-not-allowed font-extralight  text-gray-500 bg-white' : 'border-[1px] border-gray-200'}`}
                      name="comment"  onChange={handleCommentsChange} value={submitComments.comment}
                    />
                  </div>
                </div>

                <div className=' space-y-2'>
                  <div>
                  
                  <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Rating</h3>
                  <input type="text" placeholder="0.0"
                    className={`input input-bordered w-[15%] h-[30px] outline-none ${submitted ? 'cursor-not-allowed font-medium text-lg bg-white' : 'border-[1px] border-gray-200'}`}
                    name="rating1"  onChange={handleRatingsChange}  value={submitRatings.rating1}/> 
                    {/* array is converted into object form that is why we have taken "value={submitRatings.rating1}" */}
                    </div>
                    <div>
                    <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Comments</h3>
                  <textarea type="text" placeholder=""
                    className={`overflow-hidden resize-none w-[60%] h-[65px] outline-none ${submitted ? 'cursor-not-allowed font-extralight  text-gray-500 bg-none bg-white' : 'border-[1px] border-gray-200'}`}
                    name="comment1"  onChange={handleCommentsChange}   value={submitComments.comment1}
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <div>
                  <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Rating</h3>
                  <input type="text" placeholder="0.0"
                    className={`input input-bordered w-[15%] h-[30px] outline-none ${submitted ? 'cursor-not-allowed font-medium text-lg bg-white' : 'border-[1px] border-gray-200'}`}
                    name="rating2" disabled={submitted}  onChange={handleRatingsChange} value={submitRatings.rating2}/>  
                    </div>
                  <div>
                  <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Comments</h3>
                  <textarea type="text" placeholder=""
                    className={`overflow-hidden resize-none w-[60%] h-[65px] outline-none ${submitted ? 'cursor-not-allowed font-extralight  text-gray-500 bg-none bg-white' : 'border-[1px] border-gray-200'}`}
                    name="comment2" disabled={submitted}  onChange={handleCommentsChange}  value={submitComments.comment2}
                  />
                  </div>
                </div>

                <div className='space-y-2'>
                  <div>
                  <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Rating</h3>
                  <input type="text" placeholder="0.0"
                    className={`input input-bordered w-[15%] h-[30px] outline-none ${submitted ? 'cursor-not-allowed font-medium text-lg bg-white' : 'border-[1px] border-gray-200'}`}
                    name="rating3"  disabled={submitted}  onChange={handleRatingsChange} value={submitRatings.rating3} />   
                    </div>
                    <div>
                    <h3 className={`text-gray-500 text-sm ${submitted ? 'hidden' : ''}`}>Comments</h3>
                  <textarea type="text" placeholder=""
                    className={`overflow-hidden resize-none w-[60%] h-[65px] outline-none ${submitted ? 'cursor-not-allowed font-extralight  text-gray-500 bg-white' : 'border-[1px] border-gray-200'}`}
                    name="comment3"  disabled={submitted}  onChange={handleCommentsChange} value={submitComments.comment3}
                  />
                  </div>
                </div>

                {/* -----------------------------------------------NOW THE DEVELOPMENT GOALS------------------------------------------------- */}

                <div className='-ml-[780px] pb-8'>
                  <h1 className='text-xl font-medium mb-6 pt-12'>Development Goals</h1>

                  <div className='grid grid-cols-8 -space-x-10'>

                    <div className='col-span-2'>
                      <h2 className='text-lg'>Trainings</h2>
                      <p className='overflow-hidden resize-none w-[70%] h-[40px] font-extralight text-normal text-gray-500 -ml-0 pt-2 border-[1px] border-gray-300 p-1 mt-3'>{devGoals.training}</p>
                      {/* <textarea type="text" placeholder="Soft skills" className=' placeholder-gray-600 overflow-hidden resize-none w-[70%] h-[40px] font-extralight text-normal text-black -ml-0 pt-2 border-[1px] border-gray-300 p-1 mt-3' /> */}
                    </div>

                    <div className='col-span-2'>
                    <h2 className='text-lg'>Development goals & Plans</h2>
                    <p className='overflow-hidden resize-none w-[70%] h-[40px] font-extralight text-normal text-gray-500 -ml-0 pt-2 border-[1px] border-gray-300 p-1 mt-3'>{devGoals.goal}</p>
                      <textarea type="text" placeholder="Decription" className=' placeholder-gray-600 overflow-hidden resize-none w-[70%] h-[80px] font-extralight text-normal text-gray-500 -ml-0 pt-2 border-[1px] border-gray-300 p-1 mt-3' value={devGoals.description}/>
                      </div>

                    <div className='col-span-2 '>
                    <h2 className='text-lg'>Self Assessment</h2>
                    <textarea type="text" placeholder="Enter here" className=' placeholder-gray-400 overflow-hidden resize-none w-[70%] h-[40px] font-extralight text-normal text-gray-500 -ml-0 pt-2 border-[1px] border-gray-300 p-1 mt-3' name='selfAssessment' onChange={handleChangeAssessment}  />
                    </div>

                    <div className='col-span-2 '>
                    <h2 className='text-lg'>Manager Assessment</h2>
                    <p className='overflow-hidden resize-none w-[70%] h-[40px] font-extralight text-normal text-gray-400 -ml-0 pt-2 border-[1px] border-gray-300 p-1 mt-3 cursor-not-allowed'>NA</p>
                    </div>

                  </div>

                </div>
                {/* NOW THE BUTTONS SECTION- "SUBMIT" "SAVE AS DRAFT" AND "CANCEL" BUTTON */}

              
                  <div className='-ml-1 pt-8  '>
                    <div className="grid grid-cols-3 space-x-5">

                    {/* {buttonsVisible} == disable */}

              
                      <div className="col-span-1">
                        <div className='relative'>
                          <button
                            className="border-2 border-white bg-blue-500 text-white  rounded-md hover:bg-gray-500 w-[100px] h-11 font-medium"
                           onClick={ handleSubmitRatingComments}

                          
                          
                            onMouseMove={() => setPopoverVisible1(true)}
                            onMouseOut={() => { setPopoverVisible1(false) }}>Submit</button>
                          {popoverVisible1 && (
                            <div className="absolute top-[calc(100%+10px)] left-0 bg-gray-200 p-2 rounded-md shadow-md font-extralight">
                              {/* Your popover content goes here */}
                              <p className='space-x-4'>Once submitted cannot edit</p>
                            </div>
                          )}
                        </div>
                      </div>
                     
         
                      <div className="col-span-1">
                      {flag && 
                        <div className='relative'>
                          <button
                            className="border-2 border-white bg-gray-500 text-white w-[100px] h-11 rounded-md hover:bg-blue-500 -ml-20 font-medium"
                            onClick={handleDraftRatingComments}
                        
                           

                            onMouseMove={() => setPopoverVisible2(true)}
                            onMouseOut={() => setPopoverVisible2(false)}>
                          Save as Draft
                            </button>
                          {popoverVisible2 && (
                            <div className="absolute top-[calc(100%+10px)] left-0 bg-gray-200 p-2 rounded-md shadow-md font-extralight">
                              {/* Your popover content goes here */}
                              <p>You can edit it later</p>
                            </div>
                          )}
                        </div>
                        }
                      </div>


                      <div className="col-span-1 pl-5">
                        <button className="border-2 border-white bg-black text-white rounded-md w-[100px] h-11 -ml-[158px] font-medium">Cancel</button>
                      </div>
                      


                    </div>
                  </div>

              </div>
            </div>
          </div>

        </div>        

      </div>
    </div>

  )
}
export default SelfAppraisel

