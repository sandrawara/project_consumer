<?php
if(session_status() == PHP_SESSION_NONE){
        session_start();
        }
if(isset($_POST['logout'])) {
        unset($_SESSION['username']);
        header('location:index.php');
        session_destroy();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/fetch_.js"></script>
    <title>Login</title>
</head>
<body>

<form class="formLog" action="" method="post">
        <input class="button" name="logout" type="submit" value="Log out">
</form>

<div id="w-output"></div>
<div id="e-output"></div>
<div id="wb-output"></div>

<?php
        if(isset($_SESSION['username'])){
        echo '<script> get_workAdmin();
                get_educationAdmin();
                get_webAdmin();</script>';
        } 
?>     
</body>
</html>
