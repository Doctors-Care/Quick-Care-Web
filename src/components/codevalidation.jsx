import React, { useState} from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CodeValidation() {
  let [state, setState] = useState({email: "",name:"", password: "",address:"",phoneNumber:"",licenseNumber:"" });
	let [denied, setDenied] = useState(false);

  let navigate = useNavigate()
  

 
  let loggingIn = (account) => {
    console.log(account)
    axios.post('http://localhost:3000/hce/signin',  account)
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

        <MDBTabsPane >

          <div className="text-center mb-3">
            

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

          </div>

          <MDBInput wrapperClass='mb-4' label='validation code' id='form1' type='email'onChange={((event) => setState(prevState => { return { ...prevState, email: event.target.value } }))}/>
		  <div>
							{denied && <div className="error">wrong code </div>}
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
