<?php

/* Set e-mail recipient */
$myemail = "harisarcade@gmail.com";


/* Check all form inputs using check_input function */
$name = check_input($_POST["name"], "Enter your name");
$email = check_input($_POST['email"]);
$phone = check_input($_POST["phone"], "Enter your number");
$subject = check_input($_POST["subject"], "Enter your organisation name");
$desg = check_input($_POST["designation"], "Enter your designation");
$message = check_input($_POST["message"], "Write your message");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("E-mail address not valid");
}

/* Let's prepare the message for the e-mail */


Name: $name
E-mail: $email
Phone: $phone
Organisation Name: $subject
Designation: $desg
Message:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}

function show_error($myError)
{
?>
<html>
<body>

<p>Please correct the following error:</p>
<strong><?php echo $myError; ?></strong>
<p>Hit the back button and try again</p>

</body>
</html>
<?php
exit();
}
?>