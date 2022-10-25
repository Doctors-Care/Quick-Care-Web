import React, { useState} from 'react';
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CodeValidation() {
  let [state, setState] = useState({activationCode:"" });
	let [denied, setDenied] = useState(false);
    const [justifyActive, setJustifyActive] = useState('tab1');
  let navigate = useNavigate()
  

 
  let loggingIn = (account) => {
    console.log(account)
    axios.post('http://localhost:3001/hce/accountconfirmation',  account)
    .then((result)=> { 
      console.log(result)
		 if (result.data === "allowed") {
			 navigate("/homePage",{state:account})
			   }
	
			  else {setDenied(true) }
	
	
	})
		.catch((err) => console.log(err))
}
  return (
    <>
	<div>
	<h1>Quick Care..</h1>
	<br/>
	<h2>is always quicker to save lives!</h2>
   <div className='login'> 
   <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBTabsContent>

  <MDBTabsPane show={justifyActive === 'tab1'}>


    <MDBInput wrapperClass='mb-4' label='Email Security Code' id='form1' type='text'onChange={((event) => setState(prevState => { return { ...prevState, activationCode: event.target.value } }))}/>
    <div>
                      {denied && <div className="error">Wrong Code </div>}
                  </div>
    <MDBBtn className="mb-4 w-100" onClick={((e) => {e.preventDefault(); loggingIn(state)})}>Confirm</MDBBtn>
    </MDBTabsPane>
</MDBTabsContent>
 </MDBContainer>
	</div>
	</div>
  </>
  );
}

export default CodeValidation;
