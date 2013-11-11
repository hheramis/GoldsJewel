<?php
return array(
    'service_manager' => array(
        'factories' => array(
            'Zend\Db\Adapter\Adapter' => 'Zend\Db\Adapter\AdapterServiceFactory',
        ),
    ),
    'db' => array(
        'driver'    => 'pdo',
        'dsn'       => 'mysql:dbname=test;host=54.251.108.169',
        'username'  => 'root',
        'password'  => '3u$1n3s$$w1tCh',
    ),
);
