
   const form = document.querySelector('.forms');
   const username= document.getElementById("username");
   const email = document.getElementById("email");
   const userType = document.querySelector(".account-type");
   const pass1 = document.getElementById("password");
   const pass2 = document.getElementById("confirm-pass");
   const containerElem = document.querySelector(".container");
   const submitSuccess = document.querySelector('.success-wrapper');
 

        function checkInputs(){
            const userValue= username.value;
            const emailValue= email.value;
           let userTypeValue = userType.value;
            const pass1Value= pass1.value;
            const pass2Value= pass2.value;


             console.log(userTypeValue);
           // username validation
            if (userValue ==""){
                errMsg(username,"Username must be filled");
            }else{
                success(username);
            }

            //email validation
            if(emailValue ==""){
                errMsg(email,"Email must be filled");
            }else if(!isEmail(emailValue)){
            errMsg(email,"Invalid Email address");
            }else{
                success(email);
            }


            // password validation
            if(pass1Value ==""){
                errMsg(pass1,"Password is must be filled");
            }else if(pass1Value <7){
            errMsg(pass1,"Passwords need to be at least 7 characters long.")
            }else{
                success(pass1);
            }

            // password confirm validation
            if(pass2Value ==""){
                errMsg(pass2,"Password must be filled");
                return;
            }else if(pass2Value != pass1Value){
                errMsg(pass2,"Password does not match");
                return;
            }else{
                success(pass2);
            }
            
            toggleDisplay();
            setInterval(()=>{
                containerElem.classList.remove('opacity')
                submitSuccess.classList.add('hidden');
            },2000);
            return true;
        }

        


        function errMsg(input,msg){
            const formControl = input.parentElement;
            const selector = document.querySelector('#account-type');
            const small = formControl.querySelector('small');
            small.innerText =msg
            formControl.className = "row error";
        }

        function success(input){
            const formControl = input.parentElement;
            formControl.className = "row success";
        }
            
        function isEmail(email) {
            return (
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                .test(email) );
        }


  function toggleDisplay(){
    console.log(submitSuccess)
     submitSuccess.classList.remove('hidden');
    
  }
 
 
  

  
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
  
   if(checkInputs){
     containerElem.classList.remove("opacity");
    
   }else{
    containerElem.classList.add("opacity");
   }
})
