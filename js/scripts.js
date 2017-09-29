//business logic

//start of function signup details
function Users(name,email,phonenum,username,pass){
  this.fullname=name;
  this.emailaddress=email;
  this.phonenumber=phonenum;
  this.username=username;
  this.password=pass;
}// end of function of signup

//start of function of contact details
function Contact(origin,destination,phonenumber,capacity){
  this.origin=origin;
  this.destination=destination;
  this.capacity=capacity;
  this.phonenumber=phonenumber;
}
//end of function of contact details

//user logic

//user logic for sign up details
$(document).ready(function(){
  $("form#signup").submit(function(event){
    event.preventDefault();
    var userDetails=[];
    var inputfullname=$("input#fullname").val();
    var inputemail=$("input#email").val();
    var inputphonenumber=parseInt($("input#phonenum").val());
    var inputusername=$("input#username").val();
    var inputpassword=$("input#password").val();
    var result= new Users(inputfullname,inputemail,inputphonenumber,inputusername,inputpassword);
     userDetails.push(result);
     alert("Thank you" + " " + inputfullname + " " + "for subscribing to our service");
     $(location).attr('href','ride.html');//redirects the page to another page after sign up.
       $('form#signup').reset();
   });// closing of the submit function

   //displays content to enable a user to book and hides the content that enables a user to give a ride
   $(".bookride").click(function(){
      $("#bookride").show();
      $("#bethedriver").hide();
      });
     //displays content to enable a user to provide details so as to give a ride
    $(".beride").click(function(){
      $("#bookride").hide();
      $("#bethedriver").show();
     });
     $("form#rider").submit(function(event){
       alert("Thank you for using our services. You will get a phone call request when someone books a ride with you.");
       $('form#rider').reset();
       event.preventDefault();
       var inputorigin=$("input#origin").val();
       var inputdestination=$("input#destination").val();
       var inputcapacity=parseInt($("input#capacity").val());
       var inputnumber=parseInt($("input#phonenumber").val());

       var newContact=new Contact(inputorigin,inputdestination,inputcapacity,inputnumber);


   });
