<!DOCTYPE html>
<html lang="es">
	
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="Granpez publicidad">
<meta name="robots" content="INDEX,FOLLOW">
<link rel="icon" href="img/favicon.png">

<title>Obertec Sitio</title>

<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />

<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script src="js/ie-emulation-modes-warning.js"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<link href="css/main.css?v=1.0" rel="stylesheet">
<link href="css/carousel.css" rel="stylesheet">
	
<script src="js/modernizr.js"></script>
	
</head>

<body>
<?php include_once("analyticstracking.php") ?>
<?php
	require_once("header.php");
?>
		<div class="col-md-7">
			<div id="navbar" class="navbar-collapse collapse">
			  <ul class="nav navbar-nav text-right">
				<li><a href="index.php" title="Inicio">INICIO</a></li>
				<li class="dropdown"><a href="nosotros.php" title="Obertec" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">OBERTEC <span class="caret"></span></a>
				  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li><a href="nosotros.php" title="Nosotros">NOSOTROS</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="fabricacion.php" title="Fabricacion">FABRICACIÓN</a></li>
				  </ul>
				</li>
				 <li><a href="equipos.php" title="Equipos">EQUIPOS</a></li>
				<!--<li><a href="distribuidores.php" title="distribuidores">DISTRIBUIDORES</a></li>-->
				<li><a href="contacto.php" title="Contacto">CONTACTO</a></li>                       
			  </ul>
			</div>
		</div>
		<div class="col-md-1">
		</div>
	  </nav>
	</div> 
</header>
<?php
	require_once("slider.php");
?>
<section>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<h1 class="title-section"> Gracias por contactárse con nosotros. Le responderemos a la brevedad.</h1>
				<br><br>
			</div>
		</div>		
</section>
	
<img src="img/bg-bottom-section.jpg" alt="Obertec" title="Obertec" style="width:100%">
	
<?php
	require_once("footer.php");
?>