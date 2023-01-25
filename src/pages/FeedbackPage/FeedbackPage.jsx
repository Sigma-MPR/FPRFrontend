import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const USER_API='https://sv2cgzy2e3ysqw4ibchg2k2aty0iqxfh.lambda-url.us-east-1.on.aws'
const sendFeedback = async(navigate) => {
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    const feedback = {
        uid: localStorage.getItem('userId'),
        cid: localStorage.getItem('collegeId'),
        name: inputs[0].value,
        email: inputs[1].value,
        feedback: textArea.value,
        date: new Date().toLocaleDateString()
    };
    await fetch(`${USER_API}/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(feedback)
    });
    alert('Feedback sent successfully');
    navigate('/');
};
const FeedbackPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='feedback-container' style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className='feedback-form' style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    width: '40%',
                    height: 'fit-content',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div className='feedback-form-header'>
                        <h1 style={{
                            fontSize: '2rem',
                            fontWeight: 'bolder',
                            textAlign: 'center',
                            fontFamily: 'fantasy',
                        }}>Feedback</h1>
                        <p>Help us improve our product</p>
                    </div>

                    <div className='feedback-form-body' style={{
                        width: '70%',
                    }}>
                        <div className='feedback-form-body-input'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' id='name' />
                        </div>

                        <div className='feedback-form-body-input'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' />
                        </div>

                        <div className='feedback-form-body-input'>
                            <label htmlFor='feedback'>Feedback</label>
                            <textarea name='feedback' id='feedback' cols='30' rows='10'></textarea>
                        </div>

                        <div className='feedback-form-body-input' style={{
                            padding: '1px',
                        }}>
                            <button onClick={() => sendFeedback(navigate)} style={{
                                padding: '5px',
                            }}>Submit</button>
                        </div>

                    </div>    
                </div>
            </div>

                        

                    

        </div>
    )
}

export default FeedbackPage;