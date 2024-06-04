<?php
// Connect to the database
$conn = mysqli_connect("localhost", "username", "password", "school_of_wisdom");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve form data
$name = mysqli_real_escape_string($conn, $_POST['name']);
$surname = mysqli_real_escape_string($conn, $_POST['surname']);
// ... (retrieve other fields)

// Insert data into the table
$sql = "INSERT INTO students (name, surname, ...) VALUES ('$name', '$surname', ...)";

if (mysqli_query($conn, $sql)) {
    echo "Registration successful!";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
