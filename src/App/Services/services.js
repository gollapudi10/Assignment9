export async function login(emailId, userPassword){
    try{
        const req = await fetch('http://localhost:9000/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: emailId,
                password: userPassword
            })
        });
        const res = await req.json()
        
        return res;
        // return new Promise((resolve, reject) => {
        //     if(!res.isLoginSuccessful){
        //         reject("Invalid Email/Password, try again")
        //     }else{
        //         if(res.isAuthenticated === true){
        //             console.log("Authenticated");
        //             resolve(res)
        //         }
        //     }
        // });
    }catch (e){
        console.log(e)
    }
}