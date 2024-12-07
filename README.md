<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universidad de Ciencias y Artes de América Latina</title>
    <style>
        .option {
            display: inline-block;
            padding: 20px;
            margin: 10px;
            background-color: #d1c4e9;
            border-radius: 10px;
            cursor: pointer;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="option" id="tutorAcademico">
        Tutor académico
    </div>

    <script>
        document.getElementById('tutorAcademico').addEventListener('click', function() {
            window.open('https://www.example.com/tutor-academico', '_blank');
        });
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel del Tutor</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
        }
        .sidebar {
            width: 200px;
            background-color: #eeeeee;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0,0,0,0.1);
        }
        .main {
            flex-grow: 1;
            padding: 20px;
        }
        .option {
            padding: 10px;
            background-color: #d1c4e9;
            margin: 10px 0;
            border-radius: 10px;
            cursor: pointer;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="option" id="tutorAcademico">
            Tutor académico
        </div>
    </div>
    <div class="main">
        <h1>Bienvenido al Panel del Tutor</h1>
        <p>Seleccione una opción del menú a la izquierda.</p>
    </div>

    <script>
        document.getElementById('tutorAcademico').addEventListener('click', function() {
            window.open('https://www.example.com/tutor-academico', '_blank');
        });
    </script>
</body>
</html>
