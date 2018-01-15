var nodemailer = require('nodemailer');
var config = require("../config/config");

var transporter = nodemailer.createTransport({
  service: config.SMTP_SERVICE,
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASSWORD
  }
});

exports.sendForgotPasswordLink = function(user) {
    //console.log(user, "Hello Mohit");

   if(user) {
        var link = config.FRONT_ADMIN_URL +'resetpassword/'+ user._id;
        var content = '<div style="backgound:#f5f5f5;padding:10px;text-align:center;"><p>Hi <b>'+user.firstname+'</b></p><p>To complete the forgot password process, please click <a href="'+link+'">Here</a></p></div>';
        var subject = 'MajorDomo, forgot password email';
        sendmail(user.email,subject,content);
   }
};

exports.welcomeRegisterEmail = function(user) {
    //console.log(user, "Hello Mohit");

   if(user) {
        var linkregister = config.FRONT_ADMIN_URL;
        var content = '<div style="backgound:#f5f5f5;padding:10px;text-align:center;"><p>Hi <b>'+user.firstname+'</b></p><p>You have successfully Register on <a href="'+linkregister+'">MajorDomo</a></p></div>';
        var subject = 'MajorDomo welcome email';
        sendmail(user.email,subject,content);
   }
};

//mail type is html or text
function sendmail(to,subject,content) {
    from = 'no-reply@test.com'
    var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: content
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
      }
    }); 

}