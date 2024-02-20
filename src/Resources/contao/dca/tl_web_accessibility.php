<?php
use Contao\DC_Table;

// Add palette to tl_module
$GLOBALS['TL_DCA']['tl_web_accessibility'] = [
    'config' => [
        'dataContainer' => DC_Table::class,
        'enableVersioning' => true,
        'sql' => [
            'keys' => [
                'id' => 'primary'
            ]
        ]
    ],
    'list' => [],
    'fields' => [
        'id' => [
            'sql' => "int(10) unsigned NOT NULL auto_increment"
        ],
        'titel' => [
            'sql' => "varchar(255) NOT NULL ''"
        ]
    ],
    'palettes' => []
];
