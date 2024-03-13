<?php
	include('fpdf.php');
	include('HeaderFooter.php');


	$Altura = "9";
	$id = 10;
	$PalabraSecreta = "UppSh@rkT@nkSISDIST-".$id;
	
	$ClaveMD5 = md5($PalabraSecreta);

	$pdf = new PDF();
	$pdf->AliasNbPages();
	$pdf->AddPage();
	$pdf->SetFont('Arial','B',16);
	$pdf->Ln(10);
	// $pdf->Cell(40,10,'¡Hola, Mundo!');
	// $pdf->Cell(95,95,'ID',1,0,"C");
	$pdf->Cell(95,85,$pdf->Image("http://localhost/FPDF/logo.png",$pdf->GetX()+16,$pdf->GetY(),55,0,'','http://www.google.com?COD='.$ClaveMD5).
	$pdf->Text($pdf->GetX()+5,$pdf->GetY()+65,"Nombre: Producto Elefante").
	$pdf->Text($pdf->GetX()+5,$pdf->GetY()+70,"Precio: $200")
	, 1,0, 'J', false );

	$pdf->Output();
?>
