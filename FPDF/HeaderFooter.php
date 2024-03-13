<?php
	class PDF extends FPDF 
	{     
		function Header() //Cabecera de página 
		{ 
			$fecha_actual = date("d/m/Y");
			$hora_actual = date("h:i A");
			
			$this->Image('Logo.png',11,15,32,0); //Logo         
			$this->SetFont('Arial','',11); //Arial bold 12 
			$this->SetTextColor(0,0,0);  // Establece el color del texto negro
			$this->Cell(140,1,'');
			$this->Cell(100,1,utf8_decode($hora_actual.' del '.$fecha_actual));
			$this->Ln(6);
			$this->Cell(35,3,'');
			$this->SetFont('Arial','B',11); //Arial bold 12 
			$this->Cell(100,3,utf8_decode("Empresa"));
			$this->SetFont('Arial','',11); //Arial bold 12 
			$this->Ln(4);
			$this->Cell(35,3,'');
			$this->Cell(100,3,utf8_decode("Teléfono: 999999999"));
			/*****************************TIENDA**************************************/
			$this->Ln(4);
			$this->Cell(35,3,'');
			$this->Cell(100,3,utf8_decode("Correo: ventas@empresa.com.mx"));
			$this->Ln(4);
			$this->Cell(35,3,'');
			$this->Cell(100,3,utf8_decode("Sitio web: www.empresa.com.mx"));
			$this->Ln(4);
			$this->Cell(35,3,'');
			$this->Cell(100,3,utf8_decode("Reporte General del ".$fecha_actual));
			$this->Ln(10);       
			$this->Line(10,45,200,45);
		} 
	 
		function Footer() //Pie de página 
		{         
			$this->SetY(-15); //Posición: a 1,5 cm del final
			$this->SetFont('Arial','I',8); //Arial italic 8          
			$this->SetTextColor(0,0,0);  // Establece el color del texto (en este caso es blanco) 
			$this->Cell(0,10,utf8_decode("Página ").$this->PageNo().'/{nb}',0,0,'C'); //Número de página 
		} 
	}
?>