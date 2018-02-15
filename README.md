# **Api documentation**
# ** Base_url = http://projects.udaantechnologies.com:3000 **
# ** Authentic Api Header = x-access-token **

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
        "verified": true,
        "isActive": true,
        "userRoles": [
            "5a57484c55dbcd20af643fe2"
        ],
        "_id": "5a585ab973b38330416cf38b",
        "firstname": "raj",
        "lastname": "sharma",
        "email": "mohit.verma@udaantechnologies.com",
        "gender": "male",
        "salt": "kMDfqATIZ8BbDAi",
        "createdAt": "2018-01-12T06:50:33.527Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFqIiwiZW1haWwiOiJtb2hpdC52ZXJtYUB1ZGFhbnRlY2hub2xvZ2llcy5jb20iLCJpYXQiOjE1MTYyNTU5NjksImV4cCI6MTUxNzI1NTk2OH0.NAApxDMVbCzVyI8kSyc8IntMNTJhA18FwP8ALPkQL_Q"
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
    "name": "Hotel Ganga",
    "description": "% star hotelSector 63 A block noida",
    "rating": "5",
    "address": "Sector 63 A block noida",
    "gps_lat": "185257",
    "gps_long": "4454544",
    "socialWebsite": "facebook.com",
    "socialFacebook": "facebook",
    "socialInstagram": "Insta",
    "socialTwitter": "twitter",
    "socialTripadvisor": "trip advisor",
    "orgId": "ms.mohit1986@gmail.com",
    "salespersonId": "5a585ab973b38330416cf38b",
    "numberRooms": "5",
    "isActive": "1",
    "createdBy": "5a585ab973b38330416cf38b",
    "lastmodifiedBy": ""

    
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
        "_id": "5a5ef07f55ddc41e52db3651",
        "name": "Hotel Ganga",
        "description": "% star hotelSector 63 A block noida",
        "address": "Sector 63 A block noida",
        "gps_lat": "185257",
        "gps_long": "4454544",
        "socialWebsite": "facebook.com",
        "socialFacebook": "facebook",
        "socialInstagram": "Insta",
        "socialTwitter": "twitter",
        "socialTripadvisor": "trip advisor",
        "orgId": "ms.mohit1986@gmail.com",
        "rating": "5",
        "salespersonId": "5a585ab973b38330416cf38b",
        "numberRooms": "5",
        "createdAt": "2018-01-17T06:43:11.890Z",
        "createdBy": "5a585ab973b38330416cf38b",
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
            "_id": "5a5ef07f55ddc41e52db3651",
            "name": "Hotel Ganga",
            "description": "% star hotelSector 63 A block noida",
            "address": "Sector 63 A block noida",
            "gps_lat": "185257",
            "gps_long": "4454544",
            "socialWebsite": "facebook.com",
            "socialFacebook": "facebook",
            "socialInstagram": "Insta",
            "socialTwitter": "twitter",
            "socialTripadvisor": "trip advisor",
            "orgId": "ms.mohit1986@gmail.com",
            "rating": "5",
            "salespersonId": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "numberRooms": "5",
            "createdAt": "2018-01-17T06:43:11.890Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
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
        "_id": "5a5ef2898b289d1fb108a04e",
        "name": "Hotel Tata",
        "description": "5 star hotelSector 63 A block noida",
        "address": "Sector 63 A block noidas",
        "gps_lat": "185257",
        "gps_long": "4454544",
        "socialWebsite": "facebook.com",
        "socialFacebook": "facebook",
        "socialInstagram": "Insta",
        "socialTwitter": "twitter",
        "socialTripadvisor": "trip advisor",
        "orgId": "ms.mohit1986@gmail.com",
        "rating": "5",
        "salespersonId": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "numberRooms": "5",
        "createdAt": "2018-01-17T06:51:53.354Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodifiedBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        }
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
    "name": "Hotel Tata",
    "description": "5 star hotelSector 63 A block noida",
    "rating": "5",
    "address": "Sector 63 A block noidas",
    "gps_lat": "185257",
    "gps_long": "4454544",
    "socialWebsite": "facebook.com",
    "socialFacebook": "facebook",
    "socialInstagram": "Insta",
    "socialTwitter": "twitter",
    "socialTripadvisor": "trip advisor",
    "orgId": "ms.mohit1986@gmail.com",
    "salespersonId": "5a585ab973b38330416cf38b",
    "numberRooms": "5",
    "isActive": "1",
    "lastmodifiedBy": "5a585ab973b38330416cf38b"

    
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
        "_id": "5a5ef2898b289d1fb108a04e",
        "name": "Hotel Tata",
        "description": "5 star hotelSector 63 A block noida",
        "address": "Sector 63 A block noidas",
        "gps_lat": "185257",
        "gps_long": "4454544",
        "socialWebsite": "facebook.com",
        "socialFacebook": "facebook",
        "socialInstagram": "Insta",
        "socialTwitter": "twitter",
        "socialTripadvisor": "trip advisor",
        "orgId": "ms.mohit1986@gmail.com",
        "rating": "5",
        "salespersonId": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "numberRooms": "5",
        "createdAt": "2018-01-17T06:51:53.354Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodifiedBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        }
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

```

# **Account Create**

#### **POST** {{Base_url}}/accounts/create/

*Resquest JSON*
``` JSON
{
    "name": "raj sharma",
    "description": "Sector 63 A block noida",
    "planid": "5a585ab973b38330416cf38b",
    "salesperson": "5a585ab973b38330416cf39s",
    "billingaddress": "Sector 63 A block noida",
    "isActive": "1"

    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Account created successfully",
    "result": {
        "isActive": true,
        "_id": "5a5c483c67ee4c2abb804572",
        "name": "raj sharma",
        "description": "Sector 63 A block noida",
        "planid": "5a585ab973b38330416cf38b",
        "salesperson": "5a585ab973b38330416cf38b",
        "billingaddress": "Sector 63 A block noida",
        "createdAt": "2018-01-15T06:20:44.006Z",
        "__v": 0
    }
}

```
# **Account Update**

#### **PUT** {{Base_url}}/accounts/update/:id

*Resquest JSON*
``` JSON
{
    "name": "mohit account",
    "description": "Sector 63 A block noidas",
    "planid": "5a585ab973b38330416cf38b",
    "salesperson": "5a585ab973b38330416cf38b",
    "billingaddress": "Sector 63 A block noida",
    "isActive": "1"

    
}


```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Account has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a5c45616ef24c26ed6e1e15",
        "name": "mohit account",
        "description": "Sector 63 A block noidas",
        "planid": "5a585ab973b38330416cf38b",
        "salesperson": "5a585ab973b38330416cf38b",
        "billingaddress": "Sector 63 A block noida",
        "createdAt": "2018-01-15T06:08:33.700Z",
        "__v": 0
    }
}
```

# **Account Lists**

#### **GET** {{Base_url}}/accounts/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Account list",
    "result": [
        {
            "isActive": true,
            "_id": "5a5c483c67ee4c2abb804572",
            "name": "raj sharma",
            "description": "Sector 63 A block noida",
            "planid": "5a585ab973b38330416cf38b",
            "salesperson": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "billingaddress": "Sector 63 A block noida",
            "createdAt": "2018-01-15T06:20:44.006Z",
            "__v": 0
        }
    ]
}

```
# **Account View**

#### **GET** {{Base_url}}/accounts/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Account fetch",
    "result": {
        "isActive": true,
        "_id": "5a5c483c67ee4c2abb804572",
        "name": "raj sharma",
        "description": "Sector 63 A block noida",
        "planid": "5a585ab973b38330416cf38b",
        "salesperson": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "billingaddress": "Sector 63 A block noida",
        "createdAt": "2018-01-15T06:20:44.006Z",
        "__v": 0
    }
}
```
# **Account Delete**

#### **DELETE** {{Base_url}}/accounts/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Account has been deleted successfully!",
    "result": []
}

```


# **Department Create**

#### **POST** {{Base_url}}/departments/create/

*Resquest JSON*
``` JSON
{
    "name": "R&D",
    "type": "Sales Office",
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "extension": "xlsx",
    "email": "p@p.com",
    "managerId": "5a585ab973b38330416cf38b",
    "supervisorId": "5a585ab973b38330416cf38b",
    "managerinDutyId": "5a585ab973b38330416cf38b",
    "operatinghours": "24 hours",
    "isActive": 1,
    "createdBy": "5a585ab973b38330416cf38b"
    
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Department created successfully",
    "result": {
        "isActive": true,
        "_id": "5a608c2c083d34592b2df48c",
        "name": "R&D",
        "type": "Sales Office",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "extension": "xlsx",
        "email": "p@p.com",
        "managerId": "5a585ab973b38330416cf38b",
        "supervisorId": "5a585ab973b38330416cf38b",
        "managerinDutyId": "5a585ab973b38330416cf38b",
        "operatinghours": "24 hours",
        "createdAt": "2018-01-18T11:59:40.763Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Department Update**

#### **PUT** {{Base_url}}/departments/update/:id

*Resquest JSON*
``` JSON
{
    "name": "R&D & Science",
    "type": "Sales Office",
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "extension": "xlsx",
    "email": "p@p.com",
    "managerId": "5a585ab973b38330416cf38b",
    "supervisorId": "5a585ab973b38330416cf38b",
    "managerinDutyId": "5a585ab973b38330416cf38b",
    "operatinghours": "24 hours",
    "isActive": 1,
    "lastmodifiedBy": "5a585ab973b38330416cf38b"
    
    
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Department has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a608c2c083d34592b2df48c",
        "name": "R&D & Science",
        "type": "Sales Office",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "extension": "xlsx",
        "email": "p@p.com",
        "managerId": "5a585ab973b38330416cf38b",
        "supervisorId": "5a585ab973b38330416cf38b",
        "managerinDutyId": "5a585ab973b38330416cf38b",
        "operatinghours": "24 hours",
        "createdAt": "2018-01-18T11:59:40.763Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedBy": "5a585ab973b38330416cf38b",
        "updatedAt": "2018-01-18T12:03:50.232Z"
    }
}
```

# **Departments Lists**

#### **GET** {{Base_url}}/departments/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Department list",
    "result": [
        {
            "isActive": true,
            "_id": "5a608c2c083d34592b2df48c",
            "name": "R&D & Science",
            "type": "Sales Office",
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "extension": "xlsx",
            "email": "p@p.com",
            "managerId": {
                "_id": "5a585ab973b38330416cf38b",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "supervisorId": {
                "_id": "5a585ab973b38330416cf38b",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "managerinDutyId": "5a585ab973b38330416cf38b",
            "operatinghours": "24 hours",
            "createdAt": "2018-01-18T11:59:40.763Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodifiedBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "updatedAt": "2018-01-18T12:03:50.232Z"
        }
    ]
}
```
# **Department View**

#### **GET** {{Base_url}}/departments/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Department fetch",
    "result": {
        "isActive": true,
        "_id": "5a5c7b695581993c4f648566",
        "name": "IT",
        "type": "Front Office",
        "propertyId": {
            "_id": "5a5744fe85ceaf1c0110234c",
            "name": "Hotel Ginger",
            "description": "5 star hotelSector 63 A block noida",
            "address": "Sector 63 A block noida"
        },
        "extension": "xlsx",
        "email": "p@p.com",
        "managerId": {
            "_id": "5a588f11acd38427ed3044aa",
            "first_name": "sumit",
            "last_name": "kumar",
            "email": "amit.pandey@gmail.com"
        },
        "supervisorId": {
            "_id": "5a5882d8a894ba4ae816ccab",
            "first_name": "pradeep",
            "last_name": "singhs",
            "email": "ms.mohit1986@gmail.com"
        },
        "managerinDutyId": "5a5882d8a894ba4ae816ccab",
        "operatinghours": "24 hours",
        "createdAt": "2018-01-15T09:59:05.835Z",
        "__v": 0
    }
}
```
# **Department Delete**

#### **DELETE** {{Base_url}}/departments/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Department has been deleted successfully!",
    "result": []
}

```

# **Room Category Create**

#### **POST** {{Base_url}}/roomCategory/create

*Resquest JSON*
``` JSON
{
    "name": "Double room",
    "description": "Double room description",
    "pictures": "scdcdcdcd",
    "numberRooms": "2",
    "smokingPolicy": "no",
    "amneties": "5a585ab973b38330416cf38b",
    "viewId": "5a585ab973b38330416cf38b",
    "area": "12*12"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Room Category created successfully",
    "result": {
        "isActive": true,
        "_id": "5a5d8b46e9932624d5dc42cf",
        "name": "Double room",
        "description": "Double room description",
        "pictures": "scdcdcdcd",
        "numberRooms": "2",
        "smokingPolicy": "no",
        "amneties": "5a585ab973b38330416cf38b",
        "viewId": "5a585ab973b38330416cf38b",
        "area": "12*12",
        "__v": 0
    }
}

```
# **Room Category Update**

#### **PUT** {{Base_url}}/roomCategory/update/:id

*Resquest JSON*
``` JSON
{
    "name": "Double room luxury",
    "description": "Double room description",
    "pictures": "scdcdcdcd",
    "numberRooms": "2",
    "smokingPolicy": "no",
    "amneties": "5a585ab973b38330416cf38b",
    "viewId": "5a585ab973b38330416cf38b",
    "area": "12*12"
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Room Category has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a5d8b1be9932624d5dc42ce",
        "__v": 0,
        "name": "Double room luxury",
        "description": "Double room description",
        "pictures": "scdcdcdcd",
        "numberRooms": "2",
        "smokingPolicy": "no",
        "amneties": "5a585ab973b38330416cf38b",
        "viewId": "5a585ab973b38330416cf38b",
        "area": "12*12"
    }
}
```

# **Room Category Lists**

#### **GET** {{Base_url}}/roomCategory/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Room Category list",
    "result": [
        {
            "isActive": true,
            "_id": "5a5d8b46e9932624d5dc42cf",
            "name": "Double room",
            "description": "Double room description",
            "pictures": "scdcdcdcd",
            "numberRooms": "2",
            "smokingPolicy": "no",
            "amneties": "5a585ab973b38330416cf38b",
            "viewId": "5a585ab973b38330416cf38b",
            "area": "12*12",
            "__v": 0
        }
    ]
}

```
# **Room Category View**

#### **GET** {{Base_url}}/roomCategory/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Room Category fetch",
    "result": {
        "isActive": true,
        "_id": "5a5d8b46e9932624d5dc42cf",
        "name": "Double room",
        "description": "Double room description",
        "pictures": "scdcdcdcd",
        "numberRooms": "2",
        "smokingPolicy": "no",
        "amneties": "5a585ab973b38330416cf38b",
        "viewId": "5a585ab973b38330416cf38b",
        "area": "12*12",
        "__v": 0
    }
}
```
# **Room Category Delete**

#### **DELETE** {{Base_url}}/departments/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Room Category has been deleted successfully!",
    "result": []
}

```

# **Outlet Create**

#### **POST** {{Base_url}}/outlets/create

*Resquest JSON*
``` JSON
{
    "name": "outlet second",
    "description": "outlet description",
    "phone": "5565655556",
    "extensionNum": "2",
    "email": "ms@m.com",
    "outletTypeId": "5a585ab973b38330416cf38b",
    "openingtime": "12:00:00",
    "closingtime": "23:00:00",
    "lastordertime": "23:00:00",
    "outletmanagerId": "5a585ab973b38330416cf38b",
    "picture": "cdcdc.jpg",
    "menuId": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet created successfully",
    "result": {
        "isActive": true,
        "_id": "5a5da0e0d99e3b3a4de4988a",
        "name": "outlet second",
        "description": "outlet description",
        "phone": "5565655556",
        "extensionNum": "2",
        "email": "ms@m.com",
        "outletTypeId": "5a585ab973b38330416cf38b",
        "openingtime": "12:00:00",
        "closingtime": "23:00:00",
        "lastordertime": "23:00:00",
        "outletmanagerId": "5a585ab973b38330416cf38b",
        "picture": "cdcdc.jpg",
        "menuId": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Outlets Update**

#### **PUT** {{Base_url}}/outlets/update/:id

*Resquest JSON*
``` JSON
{
    "name": "outlet seconds",
    "description": "outlet descriptions",
    "phone": "55656555567",
    "extensionNum": "3",
    "email": "ms@ms.com",
    "outletTypeId": "5a585ab973b38330416cf38b",
    "openingtime": "12:00:00",
    "closingtime": "23:00:00",
    "lastordertime": "23:00:00",
    "outletmanagerId": "5a585ab973b38330416cf38b",
    "picture": "cdcdc.jpg",
    "menuId": "5a585ab973b38330416cf38b"
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a5da0e0d99e3b3a4de4988a",
        "name": "outlet seconds",
        "description": "outlet descriptions",
        "phone": "55656555567",
        "extensionNum": "3",
        "email": "ms@ms.com",
        "outletTypeId": "5a585ab973b38330416cf38b",
        "openingtime": "12:00:00",
        "closingtime": "23:00:00",
        "lastordertime": "23:00:00",
        "outletmanagerId": "5a585ab973b38330416cf38b",
        "picture": "cdcdc.jpg",
        "menuId": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```

# **Outlet Lists**

#### **GET** {{Base_url}}/outlets/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "outlet list",
    "result": [
        {
            "isActive": true,
            "_id": "5a5da0e0d99e3b3a4de4988a",
            "name": "outlet secondss",
            "description": "outlet descriptions",
            "phone": "55656555567",
            "extensionNum": "3",
            "email": "ms@ms.com",
            "outletTypeId": {
                "isActive": true,
                "_id": "5a5da97943515c4982b272b5",
                "name": "type 1",
                "description": "type 1 description",
                "createdAt": "2018-01-16T07:27:53.565Z",
                "__v": 0
            },
            "openingtime": "12:00:00",
            "closingtime": "23:00:00",
            "lastordertime": "23:00:00",
            "outletmanagerId": "5a585ab973b38330416cf38b",
            "picture": "cdcdc.jpg",
            "menuId": "5a585ab973b38330416cf38b",
            "__v": 0
        }
    ]
}

```
# **Outlet View**

#### **GET** {{Base_url}}/outlets/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "outlet fetch",
    "result": {
        "isActive": true,
        "_id": "5a5da0e0d99e3b3a4de4988a",
        "name": "outlet secondss",
        "description": "outlet descriptions",
        "phone": "55656555567",
        "extensionNum": "3",
        "email": "ms@ms.com",
        "outletTypeId": {
            "isActive": true,
            "_id": "5a5da97943515c4982b272b5",
            "name": "type 1",
            "description": "type 1 description",
            "createdAt": "2018-01-16T07:27:53.565Z",
            "__v": 0
        },
        "openingtime": "12:00:00",
        "closingtime": "23:00:00",
        "lastordertime": "23:00:00",
        "outletmanagerId": "5a585ab973b38330416cf38b",
        "picture": "cdcdc.jpg",
        "menuId": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}
```
# **Outlet Delete**

#### **DELETE** {{Base_url}}/outlets/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet has been deleted successfully!",
    "result": []
}

```
# **Outlet Type Create**

#### **POST** {{Base_url}}/outletTypes/create

*Resquest JSON*
``` JSON
{
    "name": "type 2",
    "description": "type 2 description"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet Type created successfully",
    "result": {
        "isActive": true,
        "_id": "5a5da97943515c4982b272b5",
        "name": "type 2",
        "description": "type 2 description",
        "createdAt": "2018-01-16T07:27:53.565Z",
        "__v": 0
    }
}

```
# **Outlet type Update**

#### **PUT** {{Base_url}}/outletTypes/update/:id

*Resquest JSON*
``` JSON
{
    "name": "type 1",
    "description": "type 1 description"
    
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet Type has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a5da97943515c4982b272b5",
        "name": "type 1",
        "description": "type 1 description",
        "createdAt": "2018-01-16T07:27:53.565Z",
        "__v": 0
    }
}

```

# **Outlet type Lists**

#### **GET** {{Base_url}}/outletTypes/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet Type list",
    "result": [
        {
            "isActive": true,
            "_id": "5a5da97943515c4982b272b5",
            "name": "type 1",
            "description": "type 1 description",
            "createdAt": "2018-01-16T07:27:53.565Z",
            "__v": 0
        }
    ]
}

```
# **Outlet type View**

#### **GET** {{Base_url}}/outletTypes/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet Type fetch",
    "result": {
        "isActive": true,
        "_id": "5a5da95643515c4982b272b4",
        "name": "type 1",
        "description": "type 1 description",
        "createdAt": "2018-01-16T07:27:18.166Z",
        "__v": 0
    }
}

```
# **Outlet type Delete**

#### **DELETE** {{Base_url}}/outletTypes/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet Type has been deleted successfully!",
    "result": []
}

```

# **Outlet Create**

#### **POST** {{Base_url}}/outlets/create

*Resquest JSON*
``` JSON
{
    "name": "outlet second",
    "description": "outlet description",
    "phone": "5565655556",
    "extensionNum": "2",
    "email": "ms@m.com",
    "outletTypeId": "5a585ab973b38330416cf38b",
    "openingtime": "12:00:00",
    "closingtime": "23:00:00",
    "lastordertime": "23:00:00",
    "outletmanagerId": "5a585ab973b38330416cf38b",
    "picture": "cdcdc.jpg",
    "menuId": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet created successfully",
    "result": {
        "isActive": true,
        "_id": "5a5da0e0d99e3b3a4de4988a",
        "name": "outlet second",
        "description": "outlet description",
        "phone": "5565655556",
        "extensionNum": "2",
        "email": "ms@m.com",
        "outletTypeId": "5a585ab973b38330416cf38b",
        "openingtime": "12:00:00",
        "closingtime": "23:00:00",
        "lastordertime": "23:00:00",
        "outletmanagerId": "5a585ab973b38330416cf38b",
        "picture": "cdcdc.jpg",
        "menuId": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Outlets Update**

#### **PUT** {{Base_url}}/outlets/update/:id

*Resquest JSON*
``` JSON
{
    "name": "outlet seconds",
    "description": "outlet descriptions",
    "phone": "55656555567",
    "extensionNum": "3",
    "email": "ms@ms.com",
    "outletTypeId": "5a585ab973b38330416cf38b",
    "openingtime": "12:00:00",
    "closingtime": "23:00:00",
    "lastordertime": "23:00:00",
    "outletmanagerId": "5a585ab973b38330416cf38b",
    "picture": "cdcdc.jpg",
    "menuId": "5a585ab973b38330416cf38b"
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a5da0e0d99e3b3a4de4988a",
        "name": "outlet seconds",
        "description": "outlet descriptions",
        "phone": "55656555567",
        "extensionNum": "3",
        "email": "ms@ms.com",
        "outletTypeId": "5a585ab973b38330416cf38b",
        "openingtime": "12:00:00",
        "closingtime": "23:00:00",
        "lastordertime": "23:00:00",
        "outletmanagerId": "5a585ab973b38330416cf38b",
        "picture": "cdcdc.jpg",
        "menuId": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```

# **Outlet Lists**

#### **GET** {{Base_url}}/outlets/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "outlet list",
    "result": [
        {
            "isActive": true,
            "_id": "5a5da0e0d99e3b3a4de4988a",
            "name": "outlet secondss",
            "description": "outlet descriptions",
            "phone": "55656555567",
            "extensionNum": "3",
            "email": "ms@ms.com",
            "outletTypeId": {
                "isActive": true,
                "_id": "5a5da97943515c4982b272b5",
                "name": "type 1",
                "description": "type 1 description",
                "createdAt": "2018-01-16T07:27:53.565Z",
                "__v": 0
            },
            "openingtime": "12:00:00",
            "closingtime": "23:00:00",
            "lastordertime": "23:00:00",
            "outletmanagerId": "5a585ab973b38330416cf38b",
            "picture": "cdcdc.jpg",
            "menuId": "5a585ab973b38330416cf38b",
            "__v": 0
        }
    ]
}

```
# **Outlet View**

#### **GET** {{Base_url}}/outlets/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "outlet fetch",
    "result": {
        "isActive": true,
        "_id": "5a5da0e0d99e3b3a4de4988a",
        "name": "outlet secondss",
        "description": "outlet descriptions",
        "phone": "55656555567",
        "extensionNum": "3",
        "email": "ms@ms.com",
        "outletTypeId": {
            "isActive": true,
            "_id": "5a5da97943515c4982b272b5",
            "name": "type 1",
            "description": "type 1 description",
            "createdAt": "2018-01-16T07:27:53.565Z",
            "__v": 0
        },
        "openingtime": "12:00:00",
        "closingtime": "23:00:00",
        "lastordertime": "23:00:00",
        "outletmanagerId": "5a585ab973b38330416cf38b",
        "picture": "cdcdc.jpg",
        "menuId": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}
```
# **Outlet Delete**

#### **DELETE** {{Base_url}}/outlets/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Outlet has been deleted successfully!",
    "result": []
}

```
# **Facility Create**

#### **POST** {{Base_url}}/facility/create

*Resquest JSON*
``` JSON
{
    "name": "Table tannis pool",
    "description": "very nice facility",
    "type": "5a585ab973b38330416cf38b",
    "phoneExtension": "545454544",
    "phoneNumber": "45444445",
    "openingHours": "5a585ab973b38330416cf38b",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility created successfully",
    "result": {
        "isActive": true,
        "_id": "5a603c52479be82bc1d43e1d",
        "name": "Table tannis pool",
        "description": "very nice facility",
        "type": "5a585ab973b38330416cf38b",
        "phoneExtension": "545454544",
        "phoneNumber": "45444445",
        "openingHours": "5a585ab973b38330416cf38b",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Facility Update**

#### **PUT** {{Base_url}}/facility/update/:id

*Resquest JSON*
``` JSON
{
    "name": "long tannis pool",
    "description": "very nice facility",
    "type": "5a585ab973b38330416cf38b",
    "phoneExtension": "545454544",
    "phoneNumber": "9559955",
    "openingHours": "5a585ab973b38330416cf38b",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a603c52479be82bc1d43e1d",
        "name": "long tannis pool",
        "description": "very nice facility",
        "type": "5a585ab973b38330416cf38b",
        "phoneExtension": "545454544",
        "phoneNumber": "9559955",
        "openingHours": "5a585ab973b38330416cf38b",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b"
    }
}

```

# **Facility Lists**

#### **GET** {{Base_url}}/facility/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "facility list",
    "result": [
        {
            "isActive": true,
            "_id": "5a606fa5b406dd478715fdc5",
            "name": "Table tannis pool",
            "description": "very nice facility",
            "type": {
                "_id": "5a604d74347bd938662a0cd7",
                "name": "swimming"
            },
            "phoneExtension": "545454544",
            "phoneNumber": "45444445",
            "openingHours": "5a585ab973b38330416cf38b",
            "created": "2018-01-18T09:57:57.613Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        }
    ]
}

```
# **Facility View**

#### **GET** {{Base_url}}/facility/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "facility fetch",
    "result": {
        "isActive": true,
        "_id": "5a606fa5b406dd478715fdc5",
        "name": "Table tannis pool",
        "description": "very nice facility",
        "type": {
            "_id": "5a604d74347bd938662a0cd7",
            "name": "swimming"
        },
        "phoneExtension": "545454544",
        "phoneNumber": "45444445",
        "openingHours": "5a585ab973b38330416cf38b",
        "created": "2018-01-18T09:57:57.613Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **Facility Delete**

#### **DELETE** {{Base_url}}/facility/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility has been deleted successfully!",
    "result": []
}

```

# **Facility type Create**

#### **POST** {{Base_url}}/facilityTypes/create

*Resquest JSON*
``` JSON
{
    "name": "sports",
    "description": "type 2 description",
    "createdBy": "5a585ab973b38330416cf38b"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "facility Type created successfully",
    "result": {
        "isActive": true,
        "_id": "5a604d74347bd938662a0cd7",
        "name": "sports",
        "description": "type 2 description",
        "created": "2018-01-18T07:32:04.347Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Facility type Update**

#### **PUT** {{Base_url}}/facilityTypes/update/:id

*Resquest JSON*
``` JSON
{
    "name": "swimming",
    "description": "type 2 description",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
    
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility Type has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a604d74347bd938662a0cd7",
        "name": "swimming",
        "description": "type 2 description",
        "created": "2018-01-18T07:32:04.347Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-18T07:32:19.025Z"
    }
}

```

# **Facility type Lists**

#### **GET** {{Base_url}}/facilityTypes/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility Type list",
    "result": [
        {
            "isActive": true,
            "_id": "5a604d74347bd938662a0cd7",
            "name": "swimming",
            "description": "type 2 description",
            "created": "2018-01-18T07:32:04.347Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-18T07:32:19.025Z"
        }
    ]
}

```
# **Facility Type View**

#### **GET** {{Base_url}}/facilityTypes/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility Type fetch",
    "result": {
        "isActive": true,
        "_id": "5a604ca9680e0e3807b25246",
        "name": "sports",
        "description": "type 2 description",
        "created": "2018-01-18T07:28:41.049Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **Facility Type Delete**

#### **DELETE** {{Base_url}}/facilityTypes/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Facility Type has been deleted successfully!",
    "result": []
}

```

# **Opening Hour Create**

#### **POST** {{Base_url}}/openingHours/create

*Resquest JSON*
``` JSON
{
    "dayofweek": "Monday",
    "outletId": "5a5da0e0d99e3b3a4de4988a",
    "facilityId": "5a606fa5b406dd478715fdc5",
    "startTimeMorning": "7:00",
    "closeTimeMorning": "11:00",
    "startTimeEvening": "17:00",
    "closeTimeEvening": "23:00",
    "createdBy": "5a585ab973b38330416cf38b"
    
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Opening Hour created successfully",
    "result": {
        "isActive": true,
        "_id": "5a6180a97c93f420186d16df",
        "dayofweek": "Monday",
        "outletId": "5a5da0e0d99e3b3a4de4988a",
        "facilityId": "5a606fa5b406dd478715fdc5",
        "startTimeMorning": "7:00",
        "closeTimeMorning": "11:00",
        "startTimeEvening": "17:00",
        "closeTimeEvening": "23:00",
        "created": "2018-01-19T05:22:49.141Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Opening Hours Update**

#### **PUT** {{Base_url}}/openingHours/update/:id

*Resquest JSON*
``` JSON
{
    "dayofweek": "monday",
    "outletId": "5a5da0e0d99e3b3a4de4988a",
    "facilityId": "5a606fa5b406dd478715fdc5",
    "startTimeMorning": "8:00",
    "closeTimeMorning": "12:00",
    "startTimeEvening": "18:00",
    "closeTimeEvening": "24:00",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
    
    
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Opening Hour has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a6180a97c93f420186d16df",
        "dayofweek": "monday",
        "outletId": "5a5da0e0d99e3b3a4de4988a",
        "facilityId": "5a606fa5b406dd478715fdc5",
        "startTimeMorning": "8:00",
        "closeTimeMorning": "12:00",
        "startTimeEvening": "18:00",
        "closeTimeEvening": "24:00",
        "created": "2018-01-19T05:22:49.141Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-19T05:23:07.526Z"
    }
}

```

# **Opening Hours Lists**

#### **GET** {{Base_url}}/openingHours/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Opening Hour list",
    "result": [
        {
            "isActive": true,
            "_id": "5a6180a97c93f420186d16df",
            "dayofweek": "monday",
            "outletId": {
                "_id": "5a5da0e0d99e3b3a4de4988a",
                "name": "outlet secondss"
            },
            "facilityId": {
                "_id": "5a606fa5b406dd478715fdc5",
                "name": "Table tannis pool"
            },
            "startTimeMorning": "8:00",
            "closeTimeMorning": "12:00",
            "startTimeEvening": "18:00",
            "closeTimeEvening": "24:00",
            "created": "2018-01-19T05:22:49.141Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-19T05:23:07.526Z"
        }
    ]
}

```
# **Opening Hours View**

#### **GET** {{Base_url}}/openingHours/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Opening Hour fetch",
    "result": {
        "isActive": true,
        "_id": "5a617e837c93f420186d16dd",
        "dayofweek": "monday",
        "outletId": {
            "_id": "5a5da0e0d99e3b3a4de4988a",
            "name": "outlet secondss"
        },
        "facilityId": {
            "_id": "5a606fa5b406dd478715fdc5",
            "name": "Table tannis pool"
        },
        "startTimeMorning": "7:00",
        "closeTimeMorning": "11:00",
        "startTimeEvening": "17:00",
        "closeTimeEvening": "23:00",
        "created": "2018-01-19T05:13:39.234Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **Opening Hours Delete**

#### **DELETE** {{Base_url}}/openingHours/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Opening Hours has been deleted successfully!",
    "result": []
}

```
# **Policy Create**

#### **POST** {{Base_url}}/policy/create

*Resquest JSON*
``` JSON
{
    "name": "policy 1",
    "description": "policy 1 description",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Policy created successfully",
    "result": {
        "isActive": true,
        "_id": "5a61a5355aa9a734aca34daa",
        "name": "policy 1",
        "description": "policy 1 description",
        "created": "2018-01-19T07:58:45.241Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Policy Update**

#### **PUT** {{Base_url}}/policy/update/:id

*Resquest JSON*
``` JSON
{
    "name": "policy 1",
    "description": "policy 1 description",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Policy has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a61a5355aa9a734aca34daa",
        "name": "policy 1",
        "description": "policy 1 description",
        "created": "2018-01-19T07:58:45.241Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-19T08:42:09.332Z"
    }
}

```

# **Policy Lists**

#### **GET** {{Base_url}}/policy/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Policy list",
    "result": [
        {
            "isActive": true,
            "_id": "5a61a5355aa9a734aca34daa",
            "name": "policy 1",
            "description": "policy 1 description",
            "created": "2018-01-19T07:58:45.241Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-19T08:42:09.332Z"
        }
    ]
}

```
# **Policy View**

#### **GET** {{Base_url}}/policy/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Policy fetch",
    "result": {
        "isActive": true,
        "_id": "5a61a5355aa9a734aca34daa",
        "name": "policy 1",
        "description": "policy 1 description",
        "created": "2018-01-19T07:58:45.241Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodifiedby": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "lastmodified": "2018-01-19T08:42:09.332Z"
    }
}

```
# **Policy Delete**

#### **DELETE** {{Base_url}}/policy/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Policy has been deleted successfully!",
    "result": []
}

```

# **Picture Create multipart**

#### **POST** {{Base_url}}/picture/create

*Resquest form-data*
`file` is the name of the <input> field of type `file`
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Picture created successfully",
    "result": {
        "isActive": true,
        "_id": "5a61bce90a923c4150635ffe",
        "name": "abc.jpg",
        "mime": "image/jpeg",
        "size": "2500",
        "storage": "http://xyz.com/images/abc.jpeg",
        "created": "2018-01-19T09:39:53.944Z",
        "__v": 0
    }
}

```
# **Picture Update multipart**

#### **PUT** {{Base_url}}/picture/update/:id

*Resquest form-data*
```
`file` is the name of the <input> field of type `file`
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Picture has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a66f7b3c907312f940f89d6",
        "name": "upload_316e3969aa531f5510c052906c6a06ce",
        "mime": "image/png",
        "size": "991794",
        "storage": "local",
        "created": "2018-01-23T08:52:03.846Z",
        "__v": 0,
        "lastmodified": "2018-01-23T09:01:10.656Z"
    }
}
```

# **Picture Lists**

#### **GET** {{Base_url}}/picture/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Picture list",
    "result": [
        {
            "isActive": true,
            "_id": "5a61bce90a923c4150635ffe",
            "name": "abcs.jpg",
            "mime": "image/png",
            "size": "2500",
            "storage": "http://xyz.com/images/abc.jpeg",
            "created": "2018-01-19T09:39:53.944Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-19T09:40:48.369Z"
        }
    ]
}

```
# **Picture View**

#### **GET** {{Base_url}}/picture/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Picture fetch",
    "result": {
        "isActive": true,
        "_id": "5a61bce90a923c4150635ffe",
        "name": "abcs.jpg",
        "mime": "image/png",
        "size": "2500",
        "storage": "http://xyz.com/images/abc.jpeg",
        "created": "2018-01-19T09:39:53.944Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodifiedby": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "lastmodified": "2018-01-19T09:40:48.369Z"
    }
}

```
# **Picture Delete**

#### **DELETE** {{Base_url}}/picture/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Picture has been deleted successfully!",
    "result": []
}

```
# **Activity Type Create**

#### **POST** {{Base_url}}/activityTypes/create

*Resquest JSON*
``` JSON
{
    "name": "sports",
    "description": "sports description",
    "createdBy": "5a585ab973b38330416cf38b"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity Type created successfully",
    "result": {
        "isActive": true,
        "_id": "5a61cf582b036e4f4bd39116",
        "name": "sports",
        "description": "sports description",
        "created": "2018-01-19T10:58:32.358Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Activity Type Update**

#### **PUT** {{Base_url}}/activityTypes/update/:id

*Resquest JSON*
``` JSON
{
    "name": "sportssss",
    "description": "sports descriptionss",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
    
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity Type has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a61cf582b036e4f4bd39116",
        "name": "sportssss",
        "description": "sports descriptionss",
        "created": "2018-01-19T10:58:32.358Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodified": "2018-01-19T11:06:56.188Z",
        "lastmodifiedby": "5a585ab973b38330416cf38b"
    }
}
```

# **Activity Type Lists**

#### **GET** {{Base_url}}/activityTypes/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity Type list",
    "result": [
        {
            "isActive": true,
            "_id": "5a61cf582b036e4f4bd39116",
            "name": "sportssss",
            "description": "sports descriptionss",
            "created": "2018-01-19T10:58:32.358Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodified": "2018-01-19T11:06:56.188Z",
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            }
        }
    ]
}

```
# **Activity Types View**

#### **GET** {{Base_url}}/activityTypes/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity Type fetch",
    "result": {
        "isActive": true,
        "_id": "5a61cf582b036e4f4bd39116",
        "name": "sportssss",
        "description": "sports descriptionss",
        "created": "2018-01-19T10:58:32.358Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodified": "2018-01-19T11:06:56.188Z",
        "lastmodifiedby": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        }
    }
}

```
# **Activity Types Delete**

#### **DELETE** {{Base_url}}/activityTypes/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity Type has been deleted successfully!",
    "result": []
}


```
# **Language Create**

#### **POST** {{Base_url}}/languages/create

*Resquest JSON*
``` JSON
{
    "name": "Hindi",
    "flag": true,
    "numberStaffSpeaking": "10",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Language created successfully",
    "result": {
        "flag": true,
        "isActive": true,
        "_id": "5a657d40dd121a1f65b885dc",
        "name": "Hindi",
        "numberStaffSpeaking": "10",
        "created": "2018-01-22T05:57:20.457Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Language Update**

#### **PUT** {{Base_url}}/languages/update/:id

*Resquest JSON*
``` JSON
{
    "name": "Hindi",
    "flag": true,
    "numberStaffSpeaking": "20",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Language has been updated successfully",
    "result": {
        "flag": true,
        "isActive": true,
        "_id": "5a657d40dd121a1f65b885dc",
        "name": "Hindi",
        "numberStaffSpeaking": "20",
        "created": "2018-01-22T05:57:20.457Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodified": "2018-01-22T07:18:13.963Z",
        "lastmodifiedby": "5a585ab973b38330416cf38b"
    }
}
```

# **Language Lists**

#### **GET** {{Base_url}}/languages/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Language list",
    "result": [
        {
            "flag": true,
            "isActive": true,
            "_id": "5a65765bdd121a1f65b885da",
            "name": "English",
            "numberStaffSpeaking": "5",
            "created": "2018-01-22T05:27:55.695Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        },
        {
            "flag": true,
            "isActive": true,
            "_id": "5a657d40dd121a1f65b885dc",
            "name": "Hindi",
            "numberStaffSpeaking": "20",
            "created": "2018-01-22T05:57:20.457Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodified": "2018-01-22T06:03:25.129Z"
        }
    ]
}

```
# **Languages View**

#### **GET** {{Base_url}}/languages/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Language fetch",
    "result": {
        "flag": true,
        "isActive": true,
        "_id": "5a65765bdd121a1f65b885da",
        "name": "English",
        "numberStaffSpeaking": "5",
        "created": "2018-01-22T05:27:55.695Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **Languages Delete**

#### **DELETE** {{Base_url}}/languages/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Language has been deleted successfully!",
    "result": []
}

```

# **Activity Create**

#### **POST** {{Base_url}}/activities/create

*Resquest JSON*
``` JSON
{
    "name": "Cinema",
    "description": "Very good",
    "activityTypeId": "5a61cf582b036e4f4bd39116",
    "facilityId": "5a606fa5b406dd478715fdc5",
    "picture": "5a61bce90a923c4150635ffe",
    "inHouse": "in the hotel",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity created successfully",
    "result": {
        "isActive": true,
        "picture": [
            "5a61bce90a923c4150635ffe"
        ],
        "_id": "5a658ff23467592b523badd8",
        "name": "Cinema",
        "description": "Very good",
        "activityTypeId": "5a61cf582b036e4f4bd39116",
        "facilityId": "5a606fa5b406dd478715fdc5",
        "inHouse": "in the hotel",
        "created": "2018-01-22T07:17:06.403Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Activity Update**

#### **PUT** {{Base_url}}/activities/update/:id

*Resquest JSON*
``` JSON
{
    "name": "Gym",
    "description": "Very good",
    "activityTypeId": "5a61cf582b036e4f4bd39116",
    "facilityId": "5a606fa5b406dd478715fdc5",
    "picture": "5a61bce90a923c4150635ffe",
    "inHouse": "in the hotel",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity has been updated successfully",
    "result": {
        "isActive": true,
        "picture": [
            "5a61bce90a923c4150635ffe"
        ],
        "_id": "5a658eb93467592b523badd7",
        "name": "Gym",
        "description": "Very good",
        "activityTypeId": "5a61cf582b036e4f4bd39116",
        "facilityId": "5a606fa5b406dd478715fdc5",
        "inHouse": "in the hotel",
        "created": "2018-01-22T07:11:53.483Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-22T07:26:24.589Z"
    }
}
```

# **Activity Lists**

#### **GET** {{Base_url}}/activities/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity list",
    "result": [
        {
            "isActive": true,
            "picture": [
                {
                    "_id": "5a61bce90a923c4150635ffe",
                    "name": "abcs.jpg"
                }
            ],
            "_id": "5a658eb93467592b523badd7",
            "name": "Cinema",
            "description": "Very good",
            "activityTypeId": {
                "_id": "5a61cf582b036e4f4bd39116",
                "name": "sportssss",
                "description": "sports descriptionss"
            },
            "facilityId": {
                "_id": "5a606fa5b406dd478715fdc5",
                "name": "Table tannis pool",
                "description": "very nice facility"
            },
            "inHouse": "in the hotel",
            "created": "2018-01-22T07:11:53.483Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        },
        {
            "isActive": true,
            "picture": [
                {
                    "_id": "5a61bce90a923c4150635ffe",
                    "name": "abcs.jpg"
                }
            ],
            "_id": "5a658ff23467592b523badd8",
            "name": "Cinema",
            "description": "Very good",
            "activityTypeId": {
                "_id": "5a61cf582b036e4f4bd39116",
                "name": "sportssss",
                "description": "sports descriptionss"
            },
            "facilityId": {
                "_id": "5a606fa5b406dd478715fdc5",
                "name": "Table tannis pool",
                "description": "very nice facility"
            },
            "inHouse": "in the hotel",
            "created": "2018-01-22T07:17:06.403Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        }
    ]
}

```
# **Activity View**

#### **GET** {{Base_url}}/activities/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity fetch",
    "result": {
        "isActive": true,
        "picture": [
            {
                "_id": "5a61bce90a923c4150635ffe",
                "name": "abcs.jpg"
            }
        ],
        "_id": "5a658eb93467592b523badd7",
        "name": "Cinema",
        "description": "Very good",
        "activityTypeId": {
            "_id": "5a61cf582b036e4f4bd39116",
            "name": "sportssss",
            "description": "sports descriptionss"
        },
        "facilityId": {
            "_id": "5a606fa5b406dd478715fdc5",
            "name": "Table tannis pool",
            "description": "very nice facility"
        },
        "inHouse": "in the hotel",
        "created": "2018-01-22T07:11:53.483Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **Activity Delete**

#### **DELETE** {{Base_url}}/activities/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Activity has been deleted successfully!",
    "result": []
}



```


# **RoomPolicy Create**

#### **POST** {{Base_url}}/roomPolicies/create

*Resquest JSON*
``` JSON
{
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "policyId": "5a61a5355aa9a734aca34daa",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "RoomPolicy created successfully",
    "result": {
        "isActive": true,
        "_id": "5a65bc9743f0433a9975b1e6",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "policyId": "5a61a5355aa9a734aca34daa",
        "created": "2018-01-22T10:27:35.543Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **RoomPolicy Update**

#### **PUT** {{Base_url}}/roomPolicies/update/:id

*Resquest JSON*
``` JSON
{
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "policyId": "5a61a5355aa9a734aca34daa",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "RoomPolicy has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a65bb0e43f0433a9975b1e5",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "policyId": "5a61a5355aa9a734aca34daa",
        "created": "2018-01-22T10:21:02.638Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-22T10:36:08.486Z"
    }
}
```

# **RoomPolicy Lists**

#### **GET** {{Base_url}}/roomPolicies/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "RoomPolicy list",
    "result": [
        {
            "isActive": true,
            "_id": "5a65bb0e43f0433a9975b1e5",
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "policyId": {
                "_id": "5a61a5355aa9a734aca34daa",
                "name": "policy 1"
            },
            "created": "2018-01-22T10:21:02.638Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5a65b97094d4513a2d3d4d02",
            "__v": 0,
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "policyId": {
                "_id": "5a61a5355aa9a734aca34daa",
                "name": "policy 1"
            },
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-22T10:26:57.827Z"
        },
        {
            "isActive": true,
            "_id": "5a65bc9743f0433a9975b1e6",
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "policyId": {
                "_id": "5a61a5355aa9a734aca34daa",
                "name": "policy 1"
            },
            "created": "2018-01-22T10:27:35.543Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        }
    ]
}

```
# **RoomPolicy View**

#### **GET** {{Base_url}}/roomPolicies/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "RoomPolicy fetch",
    "result": {
        "isActive": true,
        "_id": "5a65bb0e43f0433a9975b1e5",
        "propertyId": {
            "_id": "5a5ef2898b289d1fb108a04e",
            "name": "Hotel Tata",
            "description": "5 star hotelSector 63 A block noida",
            "address": "Sector 63 A block noidas"
        },
        "policyId": {
            "_id": "5a61a5355aa9a734aca34daa",
            "name": "policy 1"
        },
        "created": "2018-01-22T10:21:02.638Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}
```
# **RoomPolicy Delete**

#### **DELETE** {{Base_url}}/roomPolicies/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "RoomPolicy has been deleted successfully!",
    "result": []
}


```
# **PropertySpokenLanguage Create**

#### **POST** {{Base_url}}/propertySpokenLanguages/create

*Resquest JSON*
``` JSON
{
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "numberStaffSpeaking": "10",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property Spoken Language created successfully",
    "result": {
        "isActive": true,
        "_id": "5a65cf9b24934f47a1bf90d6",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "numberStaffSpeaking": "10",
        "created": "2018-01-22T11:48:43.224Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **PropertySpokenLanguage Update**

#### **PUT** {{Base_url}}/propertySpokenLanguages/update/:id

*Resquest JSON*
``` JSON
{
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "numberStaffSpeaking": "15",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property Spoken Language has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a65cca2e64912458ec3df62",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "numberStaffSpeaking": "15",
        "created": "2018-01-22T11:36:02.779Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-22T11:48:20.764Z"
    }
}
```

# **PropertySpokenLanguage Lists**

#### **GET** {{Base_url}}/propertySpokenLanguages/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property Spoken Language list",
    "result": [
        {
            "isActive": true,
            "_id": "5a65cca2e64912458ec3df62",
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "numberStaffSpeaking": "15",
            "created": "2018-01-22T11:36:02.779Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-22T11:48:20.764Z"
        },
        {
            "isActive": true,
            "_id": "5a65cf9b24934f47a1bf90d6",
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "numberStaffSpeaking": "10",
            "created": "2018-01-22T11:48:43.224Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        }
    ]
}

```
# **PropertySpokenLanguage View**

#### **GET** {{Base_url}}/propertySpokenLanguages/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property Spoken Language fetch",
    "result": {
        "isActive": true,
        "_id": "5a65cca2e64912458ec3df62",
        "propertyId": {
            "_id": "5a5ef2898b289d1fb108a04e",
            "name": "Hotel Tata",
            "description": "5 star hotelSector 63 A block noida",
            "address": "Sector 63 A block noidas"
        },
        "numberStaffSpeaking": "15",
        "created": "2018-01-22T11:36:02.779Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodifiedby": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "lastmodified": "2018-01-22T11:48:20.764Z"
    }
}

```
# **PropertySpokenLanguage Delete**

#### **DELETE** {{Base_url}}/propertySpokenLanguages/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Property Spoken Language has been deleted successfully!",
    "result": []
}

```
# **HotelRoomCategory Create**

#### **POST** {{Base_url}}/hotelRoomCategories/create

*Resquest JSON*
``` JSON
{
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "roomcategoryId": "5a5d8b1be9932624d5dc42ce",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Hotel Room Category created successfully",
    "result": {
        "isActive": true,
        "_id": "5a65d701faf7a84b35d778e2",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "roomcategoryId": "5a5d8b1be9932624d5dc42ce",
        "created": "2018-01-22T12:20:17.983Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **HotelRoomCategory Update**

#### **PUT** {{Base_url}}/hotelRoomCategories/update/:id

*Resquest JSON*
``` JSON
{
    "propertyId": "5a5ef2898b289d1fb108a04e",
    "roomcategoryId": "5a5d8b46e9932624d5dc42cf",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Hotel Room Category has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a65d701faf7a84b35d778e2",
        "propertyId": "5a5ef2898b289d1fb108a04e",
        "roomcategoryId": "5a5d8b46e9932624d5dc42cf",
        "created": "2018-01-22T12:20:17.983Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-22T12:30:33.328Z"
    }
}
```

# **HotelRoomCategory Lists**

#### **GET** {{Base_url}}/hotelRoomCategories/

```
*Response*
``` JSON
{ 
    "status": "success",
    "statusCode": 200,
    "message": "Hotel Room Category list",
    "result": [
        {
            "isActive": true,
            "_id": "5a65d701faf7a84b35d778e2",
            "propertyId": {
                "_id": "5a5ef2898b289d1fb108a04e",
                "name": "Hotel Tata",
                "description": "5 star hotelSector 63 A block noida",
                "address": "Sector 63 A block noidas"
            },
            "roomcategoryId": {
                "_id": "5a5d8b1be9932624d5dc42ce",
                "name": "Double room luxury",
                "description": "Double room description"
            },
            "created": "2018-01-22T12:20:17.983Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        }
    ]
}

```
# **HotelRoomCategory View**

#### **GET** {{Base_url}}/hotelRoomCategories/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Hotel Room Category fetch",
    "result": {
        "isActive": true,
        "_id": "5a65d701faf7a84b35d778e2",
        "propertyId": {
            "_id": "5a5ef2898b289d1fb108a04e",
            "name": "Hotel Tata",
            "description": "5 star hotelSector 63 A block noida",
            "address": "Sector 63 A block noidas"
        },
        "roomcategoryId": {
            "_id": "5a5d8b1be9932624d5dc42ce",
            "name": "Double room luxury",
            "description": "Double room description"
        },
        "created": "2018-01-22T12:20:17.983Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **HotelRoomCategory Delete**

#### **DELETE** {{Base_url}}/hotelRoomCategories/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Hotel Room Category has been deleted successfully!",
    "result": []
}

```
# **Entity Create**

#### **POST** {{Base_url}}/entities/create

*Resquest JSON*
``` JSON
{
    "name": "xyz",
    "status": "public",
    "expiryDate": "2018-02-20",
    "imageId": "5a61bce90a923c4150635ffe",
    "tags": ["5a66f3de5e2e9225a33d19eb"],
    "title": "Image",
    "description": "image description",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Entity created successfully",
    "result": {
        "tags": [
            "5a66f3de5e2e9225a33d19eb"
        ],
        "_id": "5a6ffa1de3667d197560c905",
        "name": "xyz",
        "status": "public",
        "expiryDate": "2018-02-20T00:00:00.000Z",
        "imageId": "5a61bce90a923c4150635ffe",
        "title": "Image",
        "description": "image description",
        "created": "2018-01-30T04:52:45.192Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}
```

# **Entity Update**

#### **PUT** {{Base_url}}/entities/update/:id

*Resquest JSON*
``` JSON
{
    "name": "abc",
    "status": "private",
    "expiryDate": "2018-02-21",
    "imageId": "5a61bce90a923c4150635ffe",
    "tags": ["5a68276af523a21ef4146082"],
    "title": "Image Title Update",
    "description": "Image description",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Entity has been updated successfully",
    "result": {
        "tags": [
            "5a68276af523a21ef4146082"
        ],
        "_id": "5a6ffa1de3667d197560c905",
        "name": "abc",
        "status": "private",
        "expiryDate": "2018-02-21T00:00:00.000Z",
        "imageId": "5a61bce90a923c4150635ffe",
        "title": "Image Title Update",
        "description": "Image description",
        "created": "2018-01-30T04:52:45.192Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0,
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-30T04:54:23.020Z"
    }
}
```

# **Entity Lists**

#### **GET** {{Base_url}}/entities/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Entity list",
    "result": [
        {
            "tags": [
                {
                    "_id": "5a68276af523a21ef4146082",
                    "label": "Tag update 1"
                }
            ],
            "_id": "5a6834675c97c3269837a8a9",
            "imageId": {
                "_id": "5a61bce90a923c4150635ffe",
                "name": "abcs.jpg"
            },
            "title": "Image Title Update",
            "description": "Image description",
            "created": "2018-01-24T07:23:19.715Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0,
            "lastmodified": "2018-01-24T09:44:48.166Z",
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            }
        }
    ]
}

```
# **Entity View**

#### **GET** {{Base_url}}/entities/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Entity fetch",
    "result": {
        "tags": [
            {
                "_id": "5a68276af523a21ef4146082",
                "label": "Tag update 1"
            }
        ],
        "_id": "5a6834675c97c3269837a8a9",
        "imageId": {
            "_id": "5a61bce90a923c4150635ffe",
            "name": "abcs.jpg"
        },
        "title": "Image Title Update",
        "description": "Image description",
        "created": "2018-01-24T07:23:19.715Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0,
        "lastmodified": "2018-01-24T09:44:48.166Z",
        "lastmodifiedby": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        }
    }
}

```
# **Entity Delete**

#### **DELETE** {{Base_url}}/entities/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Entity has been deleted successfully!",
    "result": []
}
```

# **Tag Create**

#### **POST** {{Base_url}}/tags/create

*Resquest JSON*
``` JSON
{
    "label": "tag 1",
    "category": "image",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Tag list",
    "result": {
        "_id": "5a66f3de5e2e9225a33d19eb",
        "label": "tag 1",
        "category": "image",
        "created": "2018-01-23T08:35:42.275Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Tag Update**

#### **PUT** {{Base_url}}/tags/update/:id

*Resquest JSON*
``` JSON
{
    "label": "Tag update 2",
    "category": "Image Update 2",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Tag has been updated successfully",
    "result": {
        "_id": "5a66f3de5e2e9225a33d19eb",
        "__v": 0,
        "label": "Tag update 2",
        "category": "Image Update 2",
        "createdBy": "5a585ab973b38330416cf38b",
        "lastmodifiedby": "5a585ab973b38330416cf38b",
        "lastmodified": "2018-01-24T09:57:11.285Z"
    }
}
```

# **Tag Lists**

#### **GET** {{Base_url}}/tags/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Tag list",
    "result": [
        {
            "_id": "5a68276af523a21ef4146082",
            "label": "Tag update 1",
            "category": "Image Update 1",
            "created": "2018-01-24T06:27:54.340Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        },
        {
            "_id": "5a66f3de5e2e9225a33d19eb",
            "__v": 0,
            "label": "Tag update 2",
            "category": "Image Update 2",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "lastmodified": "2018-01-24T09:45:24.380Z"
        }
    ]
}

```
# **Tag View**

#### **GET** {{Base_url}}/tag/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Tag fetch",
    "result": {
        "_id": "5a66f3de5e2e9225a33d19eb",
        "__v": 0,
        "label": "Tag update 2",
        "category": "Image Update 2",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "lastmodifiedby": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "lastmodified": "2018-01-24T09:57:11.285Z"
    }
}

```
# **Tag Delete**

#### **DELETE** {{Base_url}}/tags/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Tag has been deleted successfully!",
    "result": []
}
```

# **Category Create**

#### **POST** {{Base_url}}/categories/create

*Resquest JSON*
``` JSON
{
    "label": "Category label 1",
    "description": "Category description",
    "createdBy": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Category created successfully",
    "result": {
        "_id": "5a68614883cef03fb23a5a41",
        "label": "Category label 1",
        "description": "Category description",
        "created": "2018-01-24T10:34:48.088Z",
        "createdBy": "5a585ab973b38330416cf38b",
        "__v": 0
    }
}

```
# **Category Update**

#### **PUT** {{Base_url}}/categories/update/:id

*Resquest JSON*
``` JSON
{
    "label": "Category label 1 update",
    "description": "Category description",
    "lastmodifiedby": "5a585ab973b38330416cf38b"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Category has been updated successfully!",
    "result": {
        "_id": "5a685f9f647b193e9a8ef816",
        "__v": 0,
        "label": "Category label 1 update",
        "description": "Category description",
        "lastmodifiedby": "5a585ab973b38330416cf38b"
    }
}
```

# **Category Lists**

#### **GET** {{Base_url}}/categories/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Category list",
    "result": [
        {
            "_id": "5a68614883cef03fb23a5a41",
            "label": "Category label 1",
            "description": "Category description",
            "created": "2018-01-24T10:34:48.088Z",
            "createdBy": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            },
            "__v": 0
        },
        {
            "_id": "5a685f9f647b193e9a8ef816",
            "__v": 0,
            "label": "Category label 1 update",
            "description": "Category description",
            "lastmodifiedby": {
                "_id": "5a585ab973b38330416cf38b",
                "firstname": "raj",
                "lastname": "sharma",
                "email": "mohit.verma@udaantechnologies.com"
            }
        }
    ]
}

```
# **Category View**

#### **GET** {{Base_url}}/categories/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Category fetch",
    "result": {
        "_id": "5a68614883cef03fb23a5a41",
        "label": "Category label 1",
        "description": "Category description",
        "created": "2018-01-24T10:34:48.088Z",
        "createdBy": {
            "_id": "5a585ab973b38330416cf38b",
            "firstname": "raj",
            "lastname": "sharma",
            "email": "mohit.verma@udaantechnologies.com"
        },
        "__v": 0
    }
}

```
# **Category Delete**

#### **DELETE** {{Base_url}}/categories/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Category has been deleted successfully!",
    "result": []
}
```
# **Guest Create**

#### **POST** {{Base_url}}/guest/create

*Resquest JSON*
``` JSON
{
    "contactId": "5a5882d8a894ba4ae816ccab",
    "groupId": "5a5881c484520e49d66b615a",
    "roomNumber": "A-301",
    "nationality": "UAE",
    "languages": "5a6971f4b4e0cc2e419dc018",
    "status": 1,
    "checkInDate": "2017-01-25",
    "checkOutDate": "2017-01-27"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest created successfully",
    "result": {
        "isActive": true,
        "_id": "5a69741ca776022ecb16b4cc",
        "contactId": "5a5882d8a894ba4ae816ccab",
        "groupId": "5a5881c484520e49d66b615a",
        "roomNumber": "A-301",
        "nationality": "UAE",
        "languages": "5a6971f4b4e0cc2e419dc018",
        "status": true,
        "checkInDate": "2017-01-25T00:00:00.000Z",
        "checkOutDate": "2017-01-27T00:00:00.000Z",
        "createdAt": "2018-01-25T06:07:24.238Z",
        "__v": 0
    }
}

```
# **Guest Update**

#### **PUT** {{Base_url}}/guest/update/:id

*Resquest JSON*
``` JSON
{
    "contactId": "5a5882d8a894ba4ae816ccab",
    "groupId": "5a5881c484520e49d66b615b",
    "roomNumber": "A-303",
    "nationality": "India",
    "languages": "5a6971f4b4e0cc2e419dc018",
    "status": 1,
    "checkInDate": "2017-01-25",
    "checkOutDate": "2017-01-27"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest has been updated successfully",
    "result": {
        "isActive": true,
        "_id": "5a6971a0e8b0fc2e15326d18",
        "contactId": "5a5882d8a894ba4ae816ccab",
        "groupId": "5a5881c484520e49d66b615b",
        "roomNumber": "A-303",
        "nationality": "India",
        "languages": "5a6971f4b4e0cc2e419dc018",
        "status": true,
        "checkInDate": "2017-01-25T00:00:00.000Z",
        "checkOutDate": "2017-01-27T00:00:00.000Z",
        "createdAt": "2018-01-25T05:56:48.948Z",
        "__v": 0,
        "updatedAt": "2018-01-25T06:10:04.243Z"
    }
}
```

# **Guest Lists**

#### **GET** {{Base_url}}/guest/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest list",
    "result": [
        {
            "isActive": true,
            "_id": "5a6971a0e8b0fc2e15326d18",
            "contactId": {
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
            "groupId": "5a5881c484520e49d66b615a",
            "roomNumber": "A-301",
            "nationality": "UAE",
            "languages": {
                "_id": "5a6970986a68602db0592c1c",
                "name": "English"
            },
            "status": true,
            "checkInDate": "2017-01-25T00:00:00.000Z",
            "checkOutDate": "2017-01-27T00:00:00.000Z",
            "createdAt": "2018-01-25T05:56:48.948Z",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5a69741ca776022ecb16b4cc",
            "contactId": {
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
            },
            "groupId": "5a5881c484520e49d66b615a",
            "roomNumber": "A-301",
            "nationality": "UAE",
            "languages": {
                "_id": "5a6971f4b4e0cc2e419dc018",
                "name": "hindi"
            },
            "status": true,
            "checkInDate": "2017-01-25T00:00:00.000Z",
            "checkOutDate": "2017-01-27T00:00:00.000Z",
            "createdAt": "2018-01-25T06:07:24.238Z",
            "__v": 0
        }
    ]
}

```
# **Guest View**

#### **GET** {{Base_url}}/guest/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest fetch",
    "result": {
        "isActive": true,
        "_id": "5a6971a0e8b0fc2e15326d18",
        "contactId": {
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
        "groupId": "5a5881c484520e49d66b615a",
        "roomNumber": "A-301",
        "nationality": "UAE",
        "languages": {
            "_id": "5a6970986a68602db0592c1c",
            "name": "English"
        },
        "status": true,
        "checkInDate": "2017-01-25T00:00:00.000Z",
        "checkOutDate": "2017-01-27T00:00:00.000Z",
        "createdAt": "2018-01-25T05:56:48.948Z",
        "__v": 0
    }
}

```
# **Guest Delete**

#### **DELETE** {{Base_url}}/guest/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest has been deleted successfully!",
    "result": []
}

```

# **Guest Group Create**

#### **POST** {{Base_url}}/guestGroup/create

*Resquest JSON*
``` JSON
{
    "name": "Guest group",
    "description": "group description"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest Group has been created successfully!",
    "result": {
        "isActive": true,
        "_id": "5a69b0f633824847dde642aa",
        "name": "Guest group",
        "description": "group description",
        "createdAt": "2018-01-25T10:27:02.894Z",
        "__v": 0
    }
}

```
# **Guest Group Update**

#### **PUT** {{Base_url}}/guestGroup/update/:id

*Resquest JSON*
``` JSON
{
    "name": "Guest group update",
    "description": "description update"
}
```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest Group has been updated successfully!",
    "result": {
        "isActive": true,
        "_id": "5a69b0f633824847dde642aa",
        "name": "Guest group update",
        "description": "description update",
        "createdAt": "2018-01-25T10:27:02.894Z",
        "__v": 0,
        "updatedAt": "2018-01-25T10:36:05.259Z"
    }
}
```

# **Guest Group Lists**

#### **GET** {{Base_url}}/guestGroup/

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest Group list",
    "result": [
        {
            "isActive": true,
            "_id": "5a69b0f633824847dde642aa",
            "name": "Guest group update",
            "description": "description update",
            "createdAt": "2018-01-25T10:27:02.894Z",
            "__v": 0,
            "updatedAt": "2018-01-25T10:36:05.259Z"
        }
    ]
}

```
# **Guest Group View**

#### **GET** {{Base_url}}/guestGroup/view/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest Group fetch",
    "result": {
        "isActive": true,
        "_id": "5a69b0f633824847dde642aa",
        "name": "Guest group update",
        "description": "description update",
        "createdAt": "2018-01-25T10:27:02.894Z",
        "__v": 0,
        "updatedAt": "2018-01-25T10:36:05.259Z"
    }
}

```
# **GuestGroup Delete**

#### **DELETE** {{Base_url}}/guestGroup/delete/:id

```
*Response*
``` JSON
{
    "status": "success",
    "statusCode": 200,
    "message": "Guest Group has been deleted successfully!",
    "result": []
}

```
