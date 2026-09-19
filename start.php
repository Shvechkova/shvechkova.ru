<?php
var_dump($_SERVER['HTTP_REFERER']);
var_dump($_GET); 
var_dump($_SERVER['QUERY_STRING']);
var_dump($_POST); 


$filename = 'test.txt';
$file = fopen($filename, 'w'); // Открываем файл для записи

if ($file) {
    // $content = "Пример текста для записи в файл.";
    // $content2 = $_SERVER['HTTP_REFERER'];
    $content3 = $_SERVER['QUERY_STRING'];
    fwrite($file, $content3); // Записываем данные в файл
    fclose($file); // Закрываем файл
    echo "Данные успешно записаны.";
} else {
    echo "Не удалось открыть файл.";
}

?>