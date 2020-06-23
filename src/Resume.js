import React from 'react';
import data from './data/data.json';
import profileIcon from './person.svg';
import profileIcon1 from './person1.svg';

let Resume=(prop)=>{
	let info=data.profiles[prop.location.data.id];
	return(
	<div className="row justify-content-center">
	 <div className="col-lg-3 m-2">
	 <div className="card shadow" style={{boxShadow:"5px 8px 8px -8px #000"}}>
	 <div className="card-body p-2 text-center">
	 {info.basics.gender==="male" ? <img src={profileIcon} alt="Profile icon" style={{width:"30%"}}/> : <img src={profileIcon1} alt="Profile icon" style={{width:"30%"}}/>}
             <h2> {info.basics.name} </h2>
              <h5 className="text-secondary" style={{fontStyle:"italic"}}> {info.basics.role}</h5> <hr />


               <a href={"mailto:"+info.basics.email}> {info.basics.email}</a> <br>
                         </br>
               <a href={"tel:"+info.basics.mobile}> {info.basics.mobile}</a> <br />
                <p> {info.basics.address} </p>
	     </div>
	 </div>
    </div>


   
	 <div className="col-lg-6 m-2">
	 <div className="card shadow" style={{boxShadow:"5px 8px 8px -8px #000"}}>
	 <div className="card-body">
            <div className="card-body text-center">
                 <h3> Resume </h3>  <hr />
                 <ul>
                      {info.summary.map((summaryValue,summaryIndex)=>(
                        <li key={summaryIndex}> {summaryValue} </li>
                      	))}
                 </ul>

                 <h3> Educational Qualifications </h3>
                 <div className="table-responsive">
                      <table className="table table-bordered">
                      <thead className="thead-dark">
                      <tr>
                      <td> Degree </td>
                      <td> Institute </td>
                      <td> Percentage  </td>
                      </tr>
                      </thead>
                      <tbody>
                       {info.education.map((educationValue, educationIndex)=>(
                       	<tr key={educationIndex}>
                           <td> {educationValue.degree} </td>
                           <td> {educationValue.institute} </td>
                           <td> {educationValue.percentage} </td>
                       	</tr>
                        ))}
                      </tbody>
                      </table>
                 </div>
                 <div>
                      <h3 className="text-left">Skills:</h3>
                      <ul className="text-left" >
                       <li>{info.skills.computer}</li>
                       <li>{info.skills.webdev}</li>
                       <li>{info.skills.core}</li>
                       <li> {info.skills.editings} </li>
                      </ul>
                 </div>
            </div>
	     </div>
	 </div>
</div>
</div>
)
}


export default Resume;