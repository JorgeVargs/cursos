<?php
    require_once('facebook/config.php');

    $redirectTo = "http://practicas.loc/comentarios/facebook/callback.php";
    $data = ['email'];
    $fulURL = $handler->getLoginUrl($redirectTo,$data);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitema de Comentarios</title>

    <style>
        .social{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .social input{
            width:150px;
            background-color: tomato;
            color:white;
            margin: 0px 30px;
            text-decoration: none;
            text-align: center;
            padding: 15px 0px;
        }

        .social a:hover{
            background-color: teal;
        }
    </style>
</head>
<body>
    <div class="social">
        <input type="button" onclick="window.location = '<?php echo $fulURL; ?>' " value="Facebook" />
        <input type="button" value="Twitter" />
        <input type="button" value="Google" />
        <input type="button" value="Mail" />
    </div>
</body>
</html>