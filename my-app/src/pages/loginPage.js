import React from 'react';
import profilePic from "./Photos/homePage.png";
 
function LoginPage() {
    const navigateToPage = (url) => {
        // This will reload the page and navigate to the new URL.
        window.location.href = url;
      };

return <div className='col justify-conent-center' style={{ height: '100vh', width: '100vw' }}>
    <div className='row justify-content-center' onClick={() => navigateToPage('/')} style={{cursor: 'pointer',margin:"25px",width:"100px",height:"100px", backgroundImage: `url(${profilePic})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
    </div>
    <div className='row justify-content-center'>
        <div className='col-4' >
            <div className='row justify-content-center'style={{marginBottom:"10px"}}>
                <h1>Login</h1>
            </div>
            <div className='row justify-content-center' >
                <form>
                    <div className='form-group'style={{marginBottom:"10px"}}>
                        <label for='exampleInputEmail1'>Email address</label>
                        <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                    </div>
                    <div className='form-group' style={{marginBottom:"25px"}}>
                        <label for='exampleInputPassword1'>Password</label>
                        <input type='password' className='form-control' id='exampleInputPassword1' />
                    </div>
                    
                    <button type='submit' className='btn btn-primary'style={{marginLeft:"150px",marginRight:"50px"}}>Submit</button>
                    <button type='submit' className='btn btn-success'>Create Account</button>
                </form>
            </div>
        </div>
    </div>
</div>;
}
export default LoginPage;