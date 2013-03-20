


<!DOCTYPE html><html lang="en"><head>
    <meta charset="utf-8">
    <title>Varmı Gelen?</title>
    <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
    <meta name="keywords" content="varmi, gelen, varmi gelen, toplu tasima, car pooling, turkiye">
    <meta name="description" content="Varmi gelen servisi yakinda aciliyor! Gelismeler icin mail adresinizi birakin.">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="css/social-buttons.css" rel="stylesheet">
    <link href="http://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    
    
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
   
</head>

<body>
<div class = "body">
    <div class="container">
      <?php
if($_POST["email"]){
	$email=$_POST["email"];
	$servername ="localhost";
	$database="ynizipli_varmigelen";
	$username="ynizipli_vgelen";
	$password="4561230";
	$conn=mysql_connect($servername,$username,$password)or die (mysql_error());
	mysql_select_db($database,$conn);
	$sql=mysql_query("INSERT INTO users (email, date) values ('$email', NOW() )");
	echo "<div class='alert alert-success'><strong>Tebrikler!</strong> İlk sizin haberiniz olacak. Mail adresiniz listemize eklendi.</div>";
}
?>
        <div class="gradient">
            <div class="row">
                <div id="logo" style="background-color: rgb(5, 0, 0); ">
                    varmıgelen?
                </div>
            </div>
            <div class="row">
                <div class="span12">
                    <div class="content">
                        <h1 style="color: rgb(5, 0, 0); ">Toplu taşımanın pahalılığından sıkıldınız mı?</h1>
                        <p>Projemizin beta sürümü çok yakında bu adreste açılıyor. Açıldığında haber almak için e-mail adresinizi bırakın.</p>
                        <form action="index.php" class="form-horizontal" method=post>
                            <input type="email" name="email" placeholder="Mail adresinizi bırakın!" class="input-large">
                            <input type="submit" value="Bildir!" class="btn btn-large">
                        </form>
                        <p>
                            <a href="http://twitter.com/varmigelen" class="sb circle twitter mytooltip" data-original-title="Twitter">Twitter</a>
                            <a href="http://facebook.com/varmigelen" class="sb circle facebook mytooltip" data-original-title="Facebook">Facebook</a>
                            <a href="http://plus.google.com/" class="sb circle gplus mytooltip" data-original-title="Google Plus">Google Plus</a>
                        </p>
                 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</body></html>