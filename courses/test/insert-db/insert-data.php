<?php
/*
Developer: Ehtesham Mehmood
Site:      PHPCodify.com
Script:    Insert Data in PHP using jQuery AJAX without Page Refresh
File:      Insert-Data.php
*/
require('db.php');
$student_name=$_POST['student_name'];
$student_roll_no=$_POST['student_roll_no'];
$student_class=$_POST['student_class'];

$stmt = $DBcon->prepare("INSERT INTO student(student_name,student_roll_no,student_class) VALUES(:student_name, :student_roll_no,:student_class)");

$stmt->bindparam(':student_name', $student_name);
$stmt->bindparam(':student_roll_no', $student_roll_no);
$stmt->bindparam(':student_class', $student_class);
if($stmt->execute())
{
  $res="Data Inserted Successfully:";
  echo json_encode($res);
}
else {
  $error="Not Inserted,Some Probelm occur.";
  echo json_encode($error);
}

 ?>
