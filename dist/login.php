<?php

if(session_status() == PHP_SESSION_NONE){
    session_start();
    }

if(isset($_POST['login'])){
    if($_POST['password'] == 'admin'){
        $_SESSION['username'] = 'admin';
        header('location: admin.php');
    }
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
    

<div class="login"> <!--Login form-->
        <form class="formLog" target="" method="post">
        <input type="username" name="username" placeholder="Username"><br>  
        <input type="password" name="password" placeholder="Password"><br>  
        <input class="button" name="login" type="submit" value="Sign in">     
        </form>
</div>       
</body>
</html>