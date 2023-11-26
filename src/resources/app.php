<?php
header('Content-Type: application/json; charset=utf-8'); // Установка заголовка с кодировкой UTF-8

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        // Получение данных из формы
        $name = $_POST['name'] ?? '';
        $surname = $_POST['surname'] ?? '';
        $phone = $_POST['phone'] ?? '';

        // Обработка данных из формы (возможно, здесь будут другие действия, например, сохранение в базу данных)

        // Подготовка данных для ответа
        $response = [
            'result' => 'Заявка успешно отправлена',
            'name' => $name,
            'surname' => $surname,
            'phone' => $phone
        ];

        echo json_encode($response, JSON_UNESCAPED_UNICODE); // Кодирование данных в формат JSON
        exit;
    } else {
        $response = ['result' => 'Ошибка: форма не отправлена'];
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
        exit;
    }
} else {
    $response = ['result' => 'Ошибка: неправильный метод запроса'];
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit;
}
?>
