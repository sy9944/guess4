import React, {useState} from 'react';

export default function SignupPage () {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');

    const handleSumbit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                user_name: userName,
            }),
        });

        if (response.ok) {
            alert('User registered successfully!');
        } else {
            alert('Registration failed!');
        }
    };

    return (
        <div className="">
            <h1 className=''>Sign up</h1>
            <form onSubmit={handleSumbit} className=''>
                <div>
                    <label className='' >User Name</label>
                    <input 
                        type="text"
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className=''
                        />
                </div>
                <div>
                    <label className=''>Email</label>
                    <input 
                        type="emial" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className=''/>
                </div>
                <button type="submit" className=''>Register</button>
            </form>
        </div>
    );
}