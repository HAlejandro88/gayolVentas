
const login = async (email, password) => {
    try {
        const body = {
            email,
            password
        }
        const response = await fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response.token;


    } catch (err) {
        console.log(err);
    }

}



const verify = async (token) => {
    try {
        const logged = await (await fetch(`http://localhost:5000/api/v1/auth/verify/${token}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();
        return logged.verify;

    } catch (err) {
        console.log(err);
    }
}

const verifyAdmin = async(token) => { // `https://gayol-app.herokuapp.com/api/v1
    try {
        const loggedAdmin = await (await fetch(`http://localhost:5000/api/v1/auth/verify/admin/${token}`,{
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

       return loggedAdmin

    } catch (err) {
        console.error(err);
    }
}



export {
    login,
    verify,
    verifyAdmin
}
