<?php
return array(
    'doctrine' => array(
        'connection' => array(
            // default connection name
            'orm_default' => array(
                'driverClass' => 'Doctrine\DBAL\Driver\PDOMySql\Driver',
                'params' => array(
                    'host'     => '54.251.108.169',
                    'port'     => '3306',
                    'user'     => 'root',
                    'password' => '3u$1n3s$$w1tCh',
                    'dbname'   => 'test',
                )
            )
        )
    ),

    'driver' => array(

        'cache' => array(
            'class' => 'Doctrine\Common\Cache\ApcCache'
        ),

        'configuration' => array(
            'orm_default' => array(
                'metadata_cache' => 'apc',
                'query_cache'    => 'apc',
                'result_cache'   => 'apc'
            )
        ),
    )

);