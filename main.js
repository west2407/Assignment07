


function validateForm()
 {
     var a=document.forms["input_form"]["email"].value;
     var b=document.forms["input_form"]["title"].value;
     var c=document.forms["input_form"]["first_name"].value;
     var d=document.forms["input_form"]["password"].value;
     if (a==null || a=="",b==null || b=="",c==null || c=="",d==null || d=="")
     {
         alert("Please fill-in all required fields!");
         
         return false;
     }
 }
