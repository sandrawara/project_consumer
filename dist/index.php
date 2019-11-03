
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="js/fetch_.js"></script>
    <title>Sandra | Wara</title>
</head>

<body>
   <!--Typing effect-->
   <p id="intro">Hi, Im Web Developer Sandra Wara...</p>

<section> <!--Scroll down animation arrow-->
    <a href="#" class="scroll-down" target="true"></a>
</section>

<section class="ok">
   
      <div id="adminLink">
          <a href="login.php">&#128295; Admin</a>
      </div>

      <h1>About <span class="magenta">Me</span></h1>

   <div class="timeline-wrap"> <!--Timeline-->
         <div class="timeline timeline--first">
            <div class="era">
               <h2 class="era__title">Work</h2>
            </div>
               <div id="w-output"></div>
         </div>


     
      <div class="timeline">
         <div  class="era">
            <h2 class="era__title">Education</h2>
         </div >
         <div id="e-output"></div>
      </div >   
   

      <div  class="timeline">
         <div  class="era">
            <h2 class="era__title">Web pages</h2>
         </div >     
         <div id="wb-output"></div>  
      </div >  
   </div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!--Import social buttons-->

<div id="mainFooter">
      <div id="col-1"> <!--Div column för flexbox-->
            <p>My name is Sandra | <span class="magenta">Wara</span> and i'm a student at Mid university studying the Web development program.
               I just started my second year and learning to use rest API with fetch. Very useful, hard and fun to learn.</p>
      </div>

   <div id="col-2"> <!--Social icons-->
       <a href="#" class="fa fa-facebook"></a>
       <a href="#" class="fa fa-twitter"></a>
       <a href="#" class="fa fa-reddit"></a>
       <a href="#" class="fa fa-linkedin"></a>
    </div>

</div>

<div id="secondFooter"><p>&copy; Sandra | <span class="magenta">Wara</span> 2019</p> </div>

</section>
<script src="js/animation.js"></script>

<script> get_work();  // Call function
         get_education(); 
         get_weblinks();</script>
</body>
</html>