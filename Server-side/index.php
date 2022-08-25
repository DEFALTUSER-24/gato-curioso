<?php

    include "includes/db-connection.php";
    include "includes/functions.php";

    $data = array();
    $tpmData = array();

    if (isset($_GET["curiosities"])) /** LISTADO DE CURIOSIDADES **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_curiosities ORDER BY RAND() LIMIT 1");
        $data = mysqli_fetch_assoc($query);
        EndRequest($database, true, $data);
    }
    else if (isset($_GET["breedList"])) /** LISTADO DE RAZAS **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_breed_list");
        while ($tpmData = mysqli_fetch_assoc($query))
        {
            $data[] = $tpmData;
        }
        EndRequest($database, true, $data);
    }
    else if (isset($_GET["breedDetail"])) /** DETALLE DE LA RAZA **/
    {
        $breedID = $_POST["selectedBreed"];
        $query = mysqli_query($database, "SELECT name, picture, description FROM app_gato_curioso_breed_list WHERE id = $breedID");
        if (mysqli_num_rows($query) > 0)
        {
            $data = mysqli_fetch_assoc($query);
            EndRequest($database, true, $data);
        }
        else
        {
            EndRequest($database, false, array("errorDesc" => "No se encontró la raza."));
        }
    }
    else if (isset($_GET["foodList"])) /** LISTADO DE COMIDAS **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_food_list");
        while ($tpmData = mysqli_fetch_assoc($query))
        {
            $data[] = $tpmData;
        }
        EndRequest($database, true, $data);
    }
    else if (isset($_GET["vaccineTypes"])) /** LISTADO DE TIPOS DE VACUNAS **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_vaccine_types");
        while ($tpmData = mysqli_fetch_assoc($query))
        {
            $data[] = $tpmData;
        }
        EndRequest($database, true, $data);
    }
    else if (isset($_GET["colourList"])) /** LISTADO DE COLORES **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_colour_list");
        while ($tpmData = mysqli_fetch_assoc($query))
        {
            $data[] = $tpmData;
        }
        EndRequest($database, true, $data);
    }
    else if (isset($_GET["genreList"])) /** LISTADO DE GENEROS **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_genre_list");
        while ($tpmData = mysqli_fetch_assoc($query))
        {
            $data[] = $tpmData;
        }
        EndRequest($database, true, $data);
    }
    else if (isset($_GET["userSexList"])) /** LISTADO DE GENEROS DE USUARIO **/
    {
        $query = mysqli_query($database, "SELECT * FROM app_gato_curioso_user_sex_list");
        while ($tpmData = mysqli_fetch_assoc($query))
        {
            $data[] = $tpmData;
        }
        EndRequest($database, true, $data);
    }

    else if (isset($_GET["login"])) /** INICIO DE SESION **/
    {
        $query = mysqli_query($database, "SELECT users.user_email, users.user_name, users.user_birthdate, users.user_sex, sex_list.sex FROM app_gato_curioso_users AS users 
            INNER JOIN app_gato_curioso_user_sex_list AS sex_list ON users.user_sex = sex_list.id
            WHERE user_email = '" . $_POST["loginEmail"] . "' AND user_password = '" . $_POST["loginPassword"] . "'");

        if (mysqli_num_rows($query) > 0)
        {
            $data = mysqli_fetch_assoc($query);
            EndRequest($database, true, $data);
        }
        else
        {
            EndRequest($database, false, array("errorDesc" => "Email/usuario incorrectos."));
        }
    }
    else if (isset($_GET["register"])) /** REGISTRO **/
    {
        $email = $_POST["registerEmail"];
        $query = mysqli_query($database, "SELECT user_email FROM app_gato_curioso_users WHERE user_email = '$email'");
        if (mysqli_num_rows($query) > 0)
        {
            EndRequest($database, false, array("errorDesc" => "Ya hay un usuario registrado con ese email."));
        }

        $name = $_POST["username"];
        $password = $_POST["registerPassword"];
        $query = mysqli_query($database, "INSERT INTO app_gato_curioso_users (user_email, user_password, user_name, user_sex) VALUES ('$email', '$password', '$name', 3)");
        EndRequest($database, ($query && mysqli_affected_rows($database) > 0), array("errorDesc" => "Error en la consulta al registrarse"));
    }
    else if (isset($_GET["editProfile"])) /** EDITAR PERFIL **/
    {
        $dataToEdit = $_POST["fieldToEdit"];
        $value = $_POST["fieldValue"];
        $oldUserEmail = $_POST["username"];

        $query = mysqli_query($database,"UPDATE app_gato_curioso_users SET $dataToEdit = '$value' WHERE user_email = '$oldUserEmail'");
        EndRequest($database, ($query && mysqli_affected_rows($database) > 0), array("errorDesc" => "Error"));
    }

    EndRequest($database, false, array("errorDesc" => "Solicitud rechazada"));