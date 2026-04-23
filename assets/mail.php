<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name    = trim($_POST["name"] ?? '');
        $name_2  = trim($_POST["l_name"] ?? '');
        $email   = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
        $subject = trim($_POST["subject"] ?? '');
        $phone   = trim($_POST["phone"] ?? '');
        $company = trim($_POST["company"] ?? '');
        $message = trim($_POST["message"] ?? '');

        if (
            empty($name) ||
            empty($name_2) ||
            empty($subject) ||
            empty($message) ||
            empty($phone) ||
            empty($company) ||
            !filter_var($email, FILTER_VALIDATE_EMAIL)
        ) {
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        $recipient = "hello.orfactor@gmail.com";
        $sender    = "New contact from $name $name_2";
        $head      = " /// Vstage HTML Template\\\ ";

        $email_content  = "$head\n\n";
        $email_content .= "Name: $name $name_2\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Subject: $subject\n";
        $email_content .= "Company: $company\n";
        $email_content .= "Phone: $phone\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers  = "From: $name $name_2 <$email>\r\n";
        $email_headers .= "Reply-To: $email\r\n";

        if (mail($recipient, $sender, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>


