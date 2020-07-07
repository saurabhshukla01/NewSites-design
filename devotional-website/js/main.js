// validate signup form on keyup and submit
$("#contactus").validate({
  rules: {
    
    name: {
      required: true,
    },
   email: {
      required: true,
      email: true
    },
    phone: {
      required:true,
			minlength:10,
			maxlength:10,
			number: true
    },
    weburl: {
      required: true,
      url: true
    },
    message: {
      required: true,
      minlength: 20,
      lettersonly: true
    },
  },
  messages: {
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid phone number.",
    weburl: "Please enter a valid website url.",
    message: "Please type atleast 20 Words."
  }
});


// validate signup form on keyup and submit
$("#getaquotesform").validate({
  rules: {
    
    name1: {
      required: true,
    },
   email1: {
      required: true,
      email: true
    },
    phone1: {
      required:true,
			minlength:10,
			maxlength:10,
			number: true
    },
    weburl1: {
      required: true,
      url: true
    },
    message1: {
      required: true,
      minlength: 20,
      lettersonly: true
    },
  },
  messages: {
    name1: "Please enter your name.",
    email1: "Please enter a valid email address.",
    phone1: "Please enter a valid phone number.",
    weburl1: "Please enter a valid website url.",
    message1: "Please type atleast 20 Words."
  }
});
