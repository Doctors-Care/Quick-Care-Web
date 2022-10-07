import React, { useState } from 'react';
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
function LogInPage() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  let [state, setState] = useState({email: "",name:"", password: "",address:"",phoneNumber:"",licenseNumber:"" });
	let[confirmPassword, setConfirmPassword] = useState("");
	let [denied, setDenied] = useState(false);
	let [existing, setExisting] = useState(false);
	let [created, setCreated] = useState(false);

  let navigate = useNavigate()

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  let loggingIn = (account) => {
	console.log(account)
	 axios.post('/api/login',  account )
	 .then((result)=> { 
		 if (result.data === "allowed") {
			 navigate("/homePage")
			   }
	
			  else {setDenied(true) }
	
	
	})
		.catch((err) => console.log(err))
}
let register = (account) => {
	console.log(account);
	 axios.post('/api/register',  account )
	 .then((result)=> { if (result.data === "registred") {
		setCreated(true)
		  }

	})
		.catch((err) => setExisting(true))
}

  return (
	<div>
	<h1>Quick Care..</h1>
	<br/>
	<h2>is always quicker to save lives!</h2>
   <div className='login'> 
	<MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

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

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'onChange={((event) => setState(prevState => { return { ...prevState, email: event.target.value } }))}/>
          {existing && <div className="error">You're already registred </div>}
		  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'onChange={((event) => setState(prevState => { return { ...prevState, password: event.target.value } }))}/>
		  <div>
							{denied && <div className="error">Access Denied </div>}
						</div>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={((e) => {e.preventDefault(), loggingIn(state)})}>Sign in</MDBBtn>
          

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

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

          <MDBInput wrapperClass='mb-4' label="Hospital's Name" id='form1' type='text' onChange={((event) => setState(prevState => { return { ...prevState, name: event.target.value } }))}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={((event) => setState(prevState => { return { ...prevState, email: event.target.value } }, setExisting(false)))}/>
          <MDBInput wrapperClass='mb-4' label='Adress' id='form1' type='text' onChange={((event) => setState(prevState => { return { ...prevState, address: event.target.value } }, setExisting(false)))}/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type='number'onChange={((event) => setState(prevState => { return { ...prevState, phoneNumber: event.target.value } }))}/>
          <MDBInput wrapperClass='mb-4' label='License Number' id='form1' type='text' onChange={((event) => setState(prevState => { return { ...prevState, licenseNumber: event.target.value } }))}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'onChange={((event) => setState(prevState => { return { ...prevState, password: event.target.value } }))}/>
          <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'onChange={((event) => setConfirmPassword (event.target.value)  )}/>
		  <div>
		{state.password !== confirmPassword && <div id='error'> Incorrect Password </div>}
		{created && <div id='succes'>You Have Been Registred </div>}
			</div>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={((e) => {e.preventDefault(), register(state)})}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
	</div>
	</div>
  );
}

export default LogInPage;
