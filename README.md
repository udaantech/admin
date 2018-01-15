# **Api documentation**
# ** Base_url = http://projects.udaantechnologies.com:3000 **

## **login**

#### **POST** {{Base_url}}/users/login

*Resquest JSON*
``` JSON
{
    "email" : "abc@xyz.com",
    "password" : "welcome"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Login Successfully",
    "result": {
        "firstname": "mohit",
        "lastname": "verma",
        "email": "m@m.com",
        "gender": "male"
    }
}
```

## **Forgot Password**

#### **POST** {{Base_url}}/users/forgot

*Resquest JSON*
``` JSON
{
    "email" : "abc@xyz.com"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "An email to reset password has been sent to your email id!",
    "result": {
        "_id": "5a54a6f91e89af4a767461ff",
        "firstname": "mohit",
        "lastname": "verma",
        "email": "mohit.verma@udaantechnologies.com",
        "password": "U2FsdGVkX19jqoooX+IWoeFZM+tR9Pf1W0eTAtyQAZo=",
        "gender": "male",
        "salt": "5JYqN8y9dkV44fV",
        "__v": 0
    }
}
```

## **Change Password**

#### **POST** {{Base_url}}/users/changepassword/:id

*Resquest JSON*
``` JSON
{
    "npassword": "welcome",
    "cpassword": "welcome"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Password changed successfully!",
    "result": {
        "_id": "5a54a6f91e89af4a767461ff",
        "firstname": "mohit",
        "lastname": "verma",
        "email": "mohit.verma@udaantechnologies.com",
        "password": "U2FsdGVkX19XWQXB0Eoi4obCaX1pjEJcbzTMJeSCtYs=",
        "gender": "male",
        "salt": "8ObNxVzO7gLQjdR",
        "__v": 0
    }
}

```
# **Register**

#### **POST** {{Base_url}}/users/register/

*Resquest JSON*
``` JSON
{
    "firstname": "mohit",
    "lastname": "verma",
    "password": "welcome",
    "email": "mohit.verma@udaantechnologies.com",
    "gender": "male"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User created successfully",
    "result": {
        "verified": true,
        "status": true,
        "_id": "5a55f6ed4bbc973b9dadd6d3",
        "firstname": "mohit",
        "lastname": "verma",
        "email": "mohit.verma@udaantechnologies.com",
        "password": "U2FsdGVkX19VxWWanZHndtDZhTwqDJ6gLPDyY4hOLgM=",
        "gender": "male",
        "salt": "P5bUuHCRb1F2Z5w",
        "__v": 0
    }
}

```
# **Logout**

#### **GET** {{Base_url}}/users/Logout

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Logout successfully!",
    "result": []
}

```

# **Property Create**

#### **POST** {{Base_url}}/property/create

*Resquest JSON*
``` JSON
{
    "name": "Hotel Ginger",
    "description": "5 star hotelSector 63 A block noida",
    "rating": "5",
    "address": "Sector 63 A block noida",
    "gps": "185257:4454544",
    "socialWebsite": "facebook.com",
    "socialFacebook": "facebook",
    "socialInstagram": "Insta",
    "socialTwitter": "twitter",
    "socialTripadvisor": "trip advisor",
    "orgId": "ms.mohit1986@gmail.com",
    "user": "5a5729d50f9a7e490fff51b4"

    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property created successfully",
    "result": {
        "isActive": true,
        "_id": "5a573dcda78e1f17864c1b2c",
        "name": "Hotel Ginger",
        "description": "5 star hotelSector 63 A block noida",
        "address": "Sector 63 A block noida",
        "gps": "185257:4454544",
        "socialWebsite": "facebook.com",
        "socialFacebook": "facebook",
        "socialInstagram": "Insta",
        "socialTwitter": "twitter",
        "socialTripadvisor": "trip advisor",
        "orgId": "ms.mohit1986@gmail.com",
        "rating": "5",
        "user": "5a5729d50f9a7e490fff51b4",
        "createdAt": "2018-01-11T10:34:53.078Z",
        "createdBy": "5a5729d50f9a7e490fff51b4",
        "__v": 0
    }
}

```
# **Property List**

#### **GET** {{Base_url}}/property/index

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property list",
    "result": [
        {
            "isActive": true,
            "_id": "5a573dcda78e1f17864c1b2c",
            "name": "Hotel Ginger",
            "description": "5 star hotelSector 63 A block noida",
            "address": "Sector 63 A block noida",
            "gps": "185257:4454544",
            "socialWebsite": "facebook.com",
            "socialFacebook": "facebook",
            "socialInstagram": "Insta",
            "socialTwitter": "twitter",
            "socialTripadvisor": "trip advisor",
            "orgId": "ms.mohit1986@gmail.com",
            "rating": "5",
            "user": {
                "verified": true,
                "status": true,
                "_id": "5a5729d50f9a7e490fff51b4",
                "firstname": "mohit",
                "lastname": "verma",
                "email": "mohit.verma@udaantechnologies.com",
                "password": "U2FsdGVkX183u2C6zeiEuATwqwR69G4nq0EkkX9XYHk=",
                "gender": "male",
                "salt": "38pcaQYTKyCp8Er",
                "__v": 0
            },
            "createdAt": "2018-01-11T10:34:53.078Z",
            "createdBy": "5a5729d50f9a7e490fff51b4",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5a57102d9b45b73dd3b2dc35",
            "__v": 0,
            "name": "Tata hotelss",
            "description": "5 star hotel Sector 63 A block haridwars",
            "rating": "2",
            "address": "Sector 63 A block noida",
            "gps": "185257:4454544",
            "socialWebsite": "facebook.com",
            "socialFacebook": "facebook",
            "socialInstagram": "Insta",
            "socialTwitter": "twitter",
            "socialTripadvisor": "trip advisor",
            "orgId": "ms.mohit1986@yahoo.com",
            "user": {
                "verified": true,
                "status": true,
                "_id": "5a5729d50f9a7e490fff51b4",
                "firstname": "mohit",
                "lastname": "verma",
                "email": "mohit.verma@udaantechnologies.com",
                "password": "U2FsdGVkX183u2C6zeiEuATwqwR69G4nq0EkkX9XYHk=",
                "gender": "male",
                "salt": "38pcaQYTKyCp8Er",
                "__v": 0
            }
        }
    ]
}

```

# **Property Find**

#### **GET** {{Base_url}}/property/find/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property fetch",
    "result": {
        "isActive": true,
        "_id": "5a573dcda78e1f17864c1b2c",
        "name": "Hotel Ginger",
        "description": "5 star hotelSector 63 A block noida",
        "address": "Sector 63 A block noida",
        "gps": "185257:4454544",
        "socialWebsite": "facebook.com",
        "socialFacebook": "facebook",
        "socialInstagram": "Insta",
        "socialTwitter": "twitter",
        "socialTripadvisor": "trip advisor",
        "orgId": "ms.mohit1986@gmail.com",
        "rating": "5",
        "user": {
            "verified": true,
            "status": true,
            "_id": "5a5729d50f9a7e490fff51b4",
            "firstname": "mohit",
            "lastname": "verma",
            "email": "mohit.verma@udaantechnologies.com",
            "password": "U2FsdGVkX183u2C6zeiEuATwqwR69G4nq0EkkX9XYHk=",
            "gender": "male",
            "salt": "38pcaQYTKyCp8Er",
            "__v": 0
        },
        "createdAt": "2018-01-11T10:34:53.078Z",
        "createdBy": "5a5729d50f9a7e490fff51b4",
        "__v": 0
    }
}

```

# **Property Delete**

#### **DELETE** {{Base_url}}/property/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property has been deleted successfully!",
    "result": []
}

```

# **Property Update**

#### **PUT** {{Base_url}}/property/update/:id

*Resquest JSON*
``` JSON
{
    "name": "Tata hotelss",
    "description": "5 star hotel Sector 63 A block haridwars",
    "rating": "2",
    "address": "Sector 63 A block noida",
    "gps": "185257:4454544",
    "socialWebsite": "facebook.com",
    "socialFacebook": "facebook",
    "socialInstagram": "Insta",
    "socialTwitter": "twitter",
    "socialTripadvisor": "trip advisor",
    "orgId": "ms.mohit1986@yahoo.com",
    "user": "5a5729d50f9a7e490fff51b4"

    
}

```

*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a57102d9b45b73dd3b2dc35",
        "__v": 0,
        "name": "Tata hotels",
        "description": "5 star hotel Sector 63 A block delhi",
        "rating": "4",
        "address": "Sector 63 A block noida",
        "gps": "185257:4454544",
        "socialWebsite": "facebook.coms",
        "socialFacebook": "facebook",
        "socialInstagram": "Insta",
        "socialTwitter": "twitter",
        "socialTripadvisor": "trip advisor",
        "orgId": "ms.mohit1986@yahoo.com",
        "user": "5a5729d50f9a7e490fff51b4"
    }
}

```

# **Role Create**

#### **POST** {{Base_url}}/roles/create/

*Resquest JSON*
``` JSON
{
    "name": "Ashok",
    "description": "manager role"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Role created successfully",
    "result": {
        "isActive": true,
        "_id": "5a574a346e7d1823899b6378",
        "name": "Ashok",
        "description": "manager role",
        "createdAt": "2018-01-11T11:27:48.949Z",
        "__v": 0
    }
}

```
# **Role Update**

#### **PUT** {{Base_url}}/roles/update/:id

*Resquest JSON*
``` JSON
{
    "name": "Ashok",
    "description": "manager role"
    
}


```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Role has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a57484c55dbcd20af643fe2",
        "name": "Admin",
        "description": "manager role",
        "createdAt": "2018-01-11T11:19:40.392Z",
        "__v": 0
    }
}

```

# **Role Lists**

#### **GET** {{Base_url}}/roles/index

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Role list",
    "result": [
        {
            "isActive": true,
            "_id": "5a57484c55dbcd20af643fe2",
            "name": "Admin",
            "description": "admin role",
            "createdAt": "2018-01-11T11:19:40.392Z",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5a57487855dbcd20af643fe3",
            "name": "Manager",
            "description": "manager role",
            "createdAt": "2018-01-11T11:20:24.634Z",
            "__v": 0
        }
    ]
}

```
# **Role View**

#### **GET** {{Base_url}}/roles/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Role fetch",
    "result": {
        "isActive": true,
        "_id": "5a57487855dbcd20af643fe3",
        "name": "Manager",
        "description": "manager role",
        "createdAt": "2018-01-11T11:20:24.634Z",
        "__v": 0
    }
}

```
# **Role Delete**

#### **DELETE** {{Base_url}}/roles/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Role has been deleted successfully!",
    "result": []
}

```

# **User Role Delete**

#### **DELETE** {{Base_url}}/userRoles/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Entries has been deleted successfully!",
    "result": []
}

```
# **User Role Create**

#### **POST** {{Base_url}}/userRoles/create/

*Resquest JSON*
``` JSON
{
    "userId": "5a5729d50f9a7e490fff51b4",
    "roleId": "5a57484c55dbcd20af643fe2"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Assigned role to user successfully",
    "result": {
        "_id": "5a5853eef1fc202c74351af8",
        "userId": "5a5729d50f9a7e490fff51b5",
        "roleId": "5a57484c55dbcd20af643fe3",
        "__v": 0
    }
}

```

# **User Role Update**

#### **UPDATE** {{Base_url}}/userRoles/update/:id

*Resquest JSON*
``` JSON
{
    "userId": "5a5729d50f9a7e490fff51b4",
    "roleId": "5a57484c55dbcd20af643fe2"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User Role has been updated successfully",
    "result": {
        "_id": "5a584b22c7a32b27e713680f",
        "userId": "5a5729d50f9a7e490fff51b4",
        "roleId": "5a57484c55dbcd20af643fe2",
        "__v": 0
    }
}

```

# **User Role lists**

#### **GET** {{Base_url}}/userRoles/index

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User Role list",
    "result": [
        {
            "_id": "5a584b22c7a32b27e713680f",
            "userId": {
                "_id": "5a5729d50f9a7e490fff51b4",
                "firstname": "mohit",
                "lastname": "verma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "roleId": {
                "isActive": true,
                "_id": "5a57484c55dbcd20af643fe2",
                "name": "Admin",
                "description": "manager role",
                "createdAt": "2018-01-11T11:19:40.392Z",
                "__v": 0
            },
            "__v": 0
        }
    ]
}

```

# **User lists**

#### **GET** {{Base_url}}/users/index

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User list",
    "result": [
        {
            "userRoles": [
                {
                    "isActive": true,
                    "_id": "5a57484c55dbcd20af643fe2",
                    "name": "Admin",
                    "description": "manager role",
                    "createdAt": "2018-01-11T11:19:40.392Z",
                    "__v": 0
                }
            ],
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        }
    ]
}

```

# **User delete**

#### **DELETE** {{Base_url}}/users/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User has been deleted successfully",
    "result": []
}

```

# **User view**

#### **GET** {{Base_url}}/users/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User fetch",
    "result": {
        "_id": "5a585ab973b38330416cf38b",
        "firstname": "mohit",
        "lastname": "verma",
        "email": "mohit.verma@udaantechnologies.com"
    }
}

```

# **User update info**

#### **PUT** {{Base_url}}/users/update/:id

*Resquest JSON*
``` JSON
{
    "firstname": "raj",
    "lastname": "sharma",
    "email": "mohit.verma@udaantechnologies.com",
    "gender": "male",
    "userRoles": ["5a57484c55dbcd20af643fe2"]
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User has been updated successfully",
    "result": {
        "verified": true,
        "isActive": true,
        "userRoles": [
            "5a57484c55dbcd20af643fe2"
        ],
        "_id": "5a585ab973b38330416cf38b",
        "firstname": "raj",
        "lastname": "sharma",
        "email": "mohit.verma@udaantechnologies.com",
        "password": "U2FsdGVkX18sBg1avphI7nAwe1N52D3a/C1VackTmxA=",
        "gender": "male",
        "salt": "g0Aqm8ZFTcg5jby",
        "createdAt": "2018-01-12T06:50:33.527Z",
        "__v": 0
    }
}

```

# **User create api**

#### **POST** {{Base_url}}/users/create

*Resquest JSON*
``` JSON
{
    "firstname": "mohit",
    "lastname": "sharma",
    "password": "welcome",
    "email": "ms.mohit1986@gmail.com",
    "gender": "male",
    "userRoles": ["5a57484c55dbcd20af643fe2","5a57487855dbcd20af643fe3"]
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "User created successfully",
    "result": {
        "verified": true,
        "isActive": true,
        "userRoles": [
            "5a57484c55dbcd20af643fe2",
            "5a57487855dbcd20af643fe3"
        ],
        "_id": "5a58b3d18c686958cc2313a8",
        "firstname": "anu",
        "lastname": "kumari",
        "email": "anu.kumari@gmail.com",
        "password": "U2FsdGVkX1/Ojc6xwOXvKNelWNp9zhmXOFd5dZFrR0M=",
        "gender": "female",
        "salt": "k1tkXnKlYwAXY82",
        "createdAt": "2018-01-12T13:10:41.849Z",
        "__v": 0
    }
}

```
# **Contact Create**

#### **POST** {{Base_url}}/contacts/create/

*Resquest JSON*
``` JSON
{
    "contact_type": "5a586705a38a177f8126611a",
    "first_name": "pradeep",
    "last_name": "singhs",
    "title": "yo yo",
    "email": "ms.mohit1986@gmail.com",
    "phone": "9599322537",
    "mobile": "9599322537",
    "messengerwhatsApp": "mohitv_ud",
    "messengerFB": "mohitv_ud",
    "messengerLine": "mohitv_ud"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Contact created successfully",
    "result": {
        "isActive": true,
        "_id": "5a5882d8a894ba4ae816ccab",
        "contact_type": "5a586705a38a177f8126611a",
        "first_name": "pradeep",
        "last_name": "singhs",
        "title": "yo yo",
        "email": "ms.mohit1986@gmail.com",
        "phone": "9599322537",
        "mobile": "9599322537",
        "messengerwhatsApp": "mohitv_ud",
        "messengerFB": "mohitv_ud",
        "messengerLine": "mohitv_ud",
        "__v": 0
    }
}

```
# **Contact Update**

#### **PUT** {{Base_url}}/contacts/update/:id

*Resquest JSON*
``` JSON
{
    "contact_type": "5a586705a38a177f8126611a",
    "first_name": "amit",
    "last_name": "pandey",
    "title": "pandey g",
    "email": "amit.pandey@gmail.com",
    "phone": "9599322537",
    "mobile": "9599322537",
    "messengerwhatsApp": "amitp_ud",
    "messengerFB": "amitp_ud",
    "messengerLine": "amitp_ud"
    
}


```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Contact has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a5881c484520e49d66b615a",
        "contact_type": "5a586705a38a177f8126611a",
        "first_name": "amit",
        "last_name": "pandey",
        "title": "pandey g",
        "email": "amit.pandey@gmail.com",
        "phone": "9599322537",
        "mobile": "9599322537",
        "messengerwhatsApp": "amitp_ud",
        "messengerFB": "amitp_ud",
        "messengerLine": "amitp_ud",
        "__v": 0
    }
}

```

# **Contact Lists**

#### **GET** {{Base_url}}/contacts/index

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Contact list",
    "result": [
        {
            "isActive": true,
            "_id": "5a5881c484520e49d66b615a",
            "contact_type": "5a586705a38a177f8126611a",
            "first_name": "amit",
            "last_name": "pandey",
            "title": "pandey g",
            "email": "amit.pandey@gmail.com",
            "phone": "9599322537",
            "mobile": "9599322537",
            "messengerwhatsApp": "amitp_ud",
            "messengerFB": "amitp_ud",
            "messengerLine": "amitp_ud",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5a5882d8a894ba4ae816ccab",
            "contact_type": "5a586705a38a177f8126611a",
            "first_name": "pradeep",
            "last_name": "singhs",
            "title": "yo yo",
            "email": "ms.mohit1986@gmail.com",
            "phone": "9599322537",
            "mobile": "9599322537",
            "messengerwhatsApp": "mohitv_ud",
            "messengerFB": "mohitv_ud",
            "messengerLine": "mohitv_ud",
            "__v": 0
        }
    ]
}

```
# **Contact View**

#### **GET** {{Base_url}}/contacts/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Contact fetch",
    "result": {
        "isActive": true,
        "_id": "5a5881c484520e49d66b615a",
        "contact_type": "5a586705a38a177f8126611a",
        "first_name": "amit",
        "last_name": "pandey",
        "title": "pandey g",
        "email": "amit.pandey@gmail.com",
        "phone": "9599322537",
        "mobile": "9599322537",
        "messengerwhatsApp": "amitp_ud",
        "messengerFB": "amitp_ud",
        "messengerLine": "amitp_ud",
        "__v": 0
    }
}
```
# **Contact Delete**

#### **DELETE** {{Base_url}}/contacts/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Contact has been deleted successfully",
    "result": []
}




