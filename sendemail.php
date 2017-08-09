

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Thanks for contacting</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/feedback.css">
</head>
<body>
    <div class="container"> 
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">
                <div class="feedback-page">
                    <?php
                        $status = 'Thanks for contacting us!';
                        $feedback = 'We will get back to you as quickly as possible.';

                        $name = @trim(stripslashes($_POST['name'])); 
                        $email = @trim(stripslashes($_POST['email'])); 
                        $subject = @trim(stripslashes($_POST['subject'])); 
                        $message = @trim(stripslashes($_POST['message'])); 

                        $email_from = $email;
                        $email_to = 'support@themeitems.com';//replace with your email

                        $body = 'Name: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Subject: ' . $subject . "\n\n" . 'Message: ' ."\n". $message;
                        $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');
                    ?>
                    <h2><?php  echo $status; ?></h2>
                    <h3><?php  echo $feedback; ?></h3>
                    <a href="http://themeitems.com/tf/reveal-preview/" class="feedback-btn">Back to the site</a>
                    <p><span>Follow us</span>:
                    <p><a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                    <a href=""><i class="fa fa-instagram"></i></a>
                    <a href=""><i class="fa fa-pinterest"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-yelp"></i></a>
                    <a href=""><i class="fa fa-behance"></i></a></p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<?php  die; ?>