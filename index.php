<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Gerar um número aleatório entre 0 e 100
    $numeroAleatorio = rand(0, 100);

    // Retornar o número como resposta JSON
    $response = [
        'numero' => $numeroAleatorio
    ];

    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    header("HTTP/1.0 405 Method Not Allowed");
}
?>