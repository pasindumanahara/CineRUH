    <?php

session_start();
require_once __DIR__ . '/db.php';

header('Content-Type: application/json');

$loginError = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($email === '' || $password === '') {
        echo json_encode([
            'status' => 'error',
            'message' => 'Email and password are required.'
        ]);
        exit;
    }

    try {
        $stmt = $pdo->prepare(
            "SELECT email, hashed_password
             FROM users
             WHERE email = :u
             LIMIT 1"
        );

        $stmt->execute([':u' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['hashed_password'])) {
            session_regenerate_id(true);
            $_SESSION['email'] = $user['email'];

            echo json_encode([
                'status' => 'success',
                'message' => 'Login successful'
            ]);
            exit;
        }

        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid email or password.'
        ]);
        exit;

    } catch (Throwable $e) {
        error_log("Login error: " . $e->getMessage());

        echo json_encode([
            'status' => 'error',
            'message' => 'Server error.'
        ]);
        exit;
    }
}

echo json_encode([
    'status' => 'error',
    'message' => 'Invalid request.'
]);

 ?>