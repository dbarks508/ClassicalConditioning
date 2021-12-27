<!DOCTYPE html>
<html lang="en">
<head>
<title>Contact::Classical conditioning</title>
<meta charset="utf-8">
<link href="stylesheet.css" rel="stylesheet">
</head>
<body>
<div id="page">
<header><a href="index.html"><img id="logo" src="images/logo.png" alt="logo">Classical Conditioning</a></header>
<nav>
<ul>
<li><a href="about.html">About</a></li>
<li><a href="philosophy.html">Philosophy</a></li>
<li><a href="rates.html">Rates</a></li>
<li><a href="contact.html">Contact</a></li>
<li><a href="inquire.html">Inquire</a></li>
</ul>
</nav>
<h1 class="centertext">Successfully Submitted,  <?php echo $_POST['name'] ?> </h1>
<div id="phpResults">
<p>Your message was...</p>
<?php
	echo "<pre>\n";
	print_r($_POST);
	echo"</pre>\n";
?>
</div>
</div>
</body>
</html>