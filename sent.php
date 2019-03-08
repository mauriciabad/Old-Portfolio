<?php
  $to      = "hello@mauriciabad.com";
  $from    = htmlentities($_POST['email']);
  $subject = htmlentities($_POST['subject']);
  $message = htmlentities($_POST['message']);
  $cc      = isset($_POST['cc']);
  $headers = "From: " . $from;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Thank You</title>
    <style>
      body{
        background-color: #222;
        color: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        box-sizing: border-box;
        margin: 0;
        padding: 1em;
        text-shadow: 0 3px 32px rgba(0, 0, 0, 0.7);
      }
      .bar{
        background-color: coral;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        animation: anim 2s ease-in;
        z-index: -1;
        transform-origin: left;
      }
      @keyframes anim {
        from{transform: scaleX(0);}
        to{transform: scaleX(1);}
      }
    </style>
  </head>
  <body>
    <div class="bar"></div>
    <h1>Your eMail has<?php if(!mail($to,$subject,$message,$headers)){echo " not";} ?> been sent</h1>
    <h2>Thank you</h2>
    <?php
      if ($cc) {
        $subjectCC = "Copy of " . $_POST['subject'];
        $messageCC = "Here is a copy of your message sent to Maurici Abad:" . "\n\n" . $message;
        $headersCC = "From: " . $to;
        if(mail($from,$subjectCC,$messageCC,$headersCC)){
          echo "<br><h3>You recived a copy at " . $from . "</h3>";
        }
      }
    ?>

    <script type="text/javascript">
      setTimeout(() => { window.history.back(); }, 2000);
    </script>
  </body>
</html>
