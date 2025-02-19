function validate()
{
    const username=document.getElementById("one").value;
    const usernameError=document.getElementById("username-error");
    const email=document.getElementById("two").value;
    const emailError=document.getElementById("email-error");
    const password=document.getElementById("three").value;
    const passwordError=document.getElementById("pwd-error");
    const address=document.getElementById("four").value;
    const addressError=document.getElementById("address-error");
    const contact =document.getElementById("five").value;
    const contactError=document.getElementById("contact-error");
    usernameError.textContent="";
    addressError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    contactError.textContent="";
    
    if(!username.match(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-z0-9])(?!.*\s).{8,15}$/))
        {
           // alert("please enter the name properly");
           usernameError.textContent="Username contain lowercase,numbers and special characters";
            return false;
        }
    if(email==="" || !email.includes("@"))
        {
           // alert("please enter the name properly");
           emailError.textContent="Enter the email properly";
            return false;
        }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/))
        {
        passwordError.textContent="Enter the password minimum 6 letters,uppercase, lowercase, number and special characters ";
            // alert("please enter the address properly");
        return false;
        }
    if(address==="")
        {
            addressError.textContent="Enter the address properly";
            // alert("please enter the address properly");
            return false;
        }
    if(!contact.match(/^[0-9]{10}$/))
        {
            contactError.textContent="Enter phone number with 10 numbers ";
                // alert("please enter the address properly");
            return false;
        }
    return true
}