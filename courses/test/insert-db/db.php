<?php
/*
Developer: Ehtesham Mehmood
Site:      PHPCodify.com
Script:    Insert Data in PHP using jQuery AJAX without Page Refresh
File:      DB.php
*/

$DB_host = "localhost";
$DB_user = "root";
$DB_pass = "mutualwide";
$DB_name = "insert-php-ajax-jquery";

try
 {
     $DBcon = new PDO("mysql:host={$DB_host};dbname={$DB_name}",$DB_user,$DB_pass);
     $DBcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 }
 catch(PDOException $e)
 {
     echo "ERROR : ".$e->getMessage();
 }
?>
