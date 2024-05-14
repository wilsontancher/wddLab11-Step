<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submitted</title>
    <link rel="stylesheet" href="css/css_reset.css">
    <link rel="stylesheet" href="css/global.css">
</head>
<body>
    <header>
        <img id="logo" src="images/makandologo.png" alt="Logo">
        <nav>
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            <ul id="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="order.html">Order Now</a></li>
                <li><a href="history.html">Order History</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <hr>
    </header>
    <section id="main">
       <h1>Form Submitted</h1>
       <p>Thank you <?=$_POST["fname"]; ?> for your feedback!</p>
       <p>We will contact you via <?=$_POST["femail"]; ?> or on your number <?=$_POST["fmobile"]; ?> if we need more information.</p>
       <br>
       <p>We have also received your comments:</p>
       <p><?=$_POST["fcomments"]; ?></p>
    </section>
    <footer>
        <hr>
        &copy; Makando Bistro Pte Ltd. All rights reserved.
    </footer>
</body>
</html>
