<?php
/* 
Authors: 		Dylan Barks, Jon Barks
Last edited: 	12/9/21
Description: 	php for ajax request from amIRight.js
*/

function vGradeToEuro( $vGrade){
    $euroGrades = array(
        0 => "6A+",
        1 => "6B" ,
        2 => "6B+",
        3 => "6C",
        4 => "6C+",
        5 => "7A",
        6 => "7A+",
        7 => "7B",
        8 => "7B+",
        9 => "7C",
        10 => "7C+",
        11 => "8A",
        12 => "8A+",
        13 => "8B",
        14 => "8B+",
        15 => "8C",
        16 => "8C+",
        17 => "9A");
	if( $vGrade > count( $euroGrades) || $vGrade < 0 || !is_numeric($vGrade)) return "Enter a V-grade between 0 and 17";
    return $euroGrades[ $vGrade];
}
$vGrade = $_GET['vGrade'];
echo vGradeToEuro( $vGrade);
?>