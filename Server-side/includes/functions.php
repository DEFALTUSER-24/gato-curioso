<?php

    function EndRequest($db, $success, $data)
    {
        mysqli_close($db);
        $obj = array("success" => $success, "data" => $data);
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($obj, JSON_FORCE_OBJECT);
        exit;
    }