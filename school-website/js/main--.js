
    $(document).ready(function () {
        $("#membership_form").validate({
            rules: {
                "first_name": {
                    required: true,
                    minlength: 5
                },
                
                "last_name": {
                    required: true,
                    minlength: 5
                },
                
                "contact_number": {
                    required: true,
                    minlength: 5
                },

                "email": {
                    required: true,
                    email: true
                },
                
                "date_birth": {
                    required: true
                },
                
                "gender1": {
                    required: true
                },
                
                "addressline1": {
                    required: true
                },
                
                "addressline2": {
                    required: true
                },
                
                "city": {
                    required: true
                },
                
                "state": {
                    required: true
                },
                
                "country": {
                    required: true
                },
                
                "zipcode": {
                    required: true
                },
                
                "id_proof": {
                    required: true
                },
                
                "id_proof_number": {
                    required: true
                },
                
                "username": {
                    required: true
                },
                
                "password": {
                    required: true,
                },
                
                "confirm_password": {
                    required: true,
                }
            },
            messages: {
                "first_name": {
                    required: "Please Enter your First Name"
                },
                "last_name": {
                    required: "Please Enter your Last Name"
                },
                "contact_number": {
                    required: "Please Enter your Contact Number"
                },
                "email": {
                    required: "Please Enter your E-mail Address",
                    email: "Please Enter a Valid E-mail Address"
                },
                "date_birth": {
                    required: "Please Enter your Date of Birth"
                },
                "gender1": {
                    required: "Please Select your Gender"
                },
                "addressline1": {
                    required: "Please Enter your Address"
                },
                "addressline2": {
                    required: "Please Enter your Address"
                },
                "city": {
                    required: "Please Enter your City"
                },
                "state": {
                    required: "Please Enter your State"
                },
                "country": {
                    required: "Please Enter your Country"
                },
                "zipcode": {
                    required: "Please Enter your Zipcode"
                },
                "id_proof": {
                    required: "Please Select your Id Proof"
                },
                "id_proof_number": {
                    required: "Please Enter your Id Proof Number"
                },
                "username": {
                    required: "Please Enter your Username"
                },
                "password": {
                    required: "Please Enter your Password"
                },
                "confirm_password": {
                    required: "Please Enter your Confirm Password"
                }
            },
            submitHandler: function (form) { // for demo
                alert('valid form submitted'); // for demo
                return false; // for demo
            }
        });
    
    });