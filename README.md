# nodeTask

1.  route.post('/signup',postSignupcontroller)

        First you call this API and create the user
        {
             "firstName":"rokey",
            "lastName":"rokey"
        }

2.  route.post('/address',postAdderssController)

        seconed you call the Address API and create the Address and also pass the userID
        {
            "address":"bhopal",
            "uuid":"652fd07b4e6ac75c76c46a2a"
        }

3.  route.post('/number',postNumberController)

    Third you call the Number API and create the Number and also pass the userID
    {
    "number":"1234567",
    "uuid":"652fd07b4e6ac75c76c46a2a" // This ID is userID
    }

4.  route.get('/pdf') //http://localhost:5050/pdf

    last you call the get API and Generate the PDF

5.  http://localhost:5050/signup
6.  http://localhost:5050/address
7.  http://localhost:5050/number
8.  http://localhost:5050/pdf
