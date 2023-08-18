<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['numero'])) {
    $numero = $data['numero'];

    $arquivo = fopen('numeros.txt','a');
    fwrite($arquivo,$numero."\n");
    fclose($arquivo);
    
    echo json_encode(array('message' => 'Número salvo com sucesso!'));
} else {
    echo json_encode(array('message' => 'Erro ao salvar número.'));
}
?>
