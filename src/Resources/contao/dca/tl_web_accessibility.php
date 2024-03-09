<?php

use Contao\DC_Table;

// Add palette to tl_module
$GLOBALS['TL_DCA']['tl_web_accessibility'] = [
    'config' => [
        'dataContainer' => DC_Table::class,
        'enableVersioning' => true,
        'notSortable' => true,
        'notCopyable' => true,
        'sql' => [
            'keys' => [
                'id' => 'primary'
            ]
        ]
    ],
    'list' => [
        'sorting' => [
            'mode' => 1,
            'fields' => ['title'],
            'panelLayout' => 'filter;sort,search,limit'
        ],
        'label' => [
            'fields' => ['title'],
            'format' => '%s <span style="color:#999;padding-left:3px">[]</span>',
        ],
    ],
    'fields' => [
        'title' => [
            'label' => &$GLOBALS['TL_LANG']['tl_web_accessibility']['title'],
            'exclude' => true,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50', 'maxlength' => 255],
            'sql' => "VARCHAR(255) NOT NULL default ''"
        ],
        'tstamp' => [
            'label' => &$GLOBALS['TL_LANG']['tl_web_accessibility']['tstamp'],
            'exclude' => true,
            'sql' => "INT(10) unsigned NOT NULL default 0"
        ],
        'report_data' => [
            //'input_field_callback' => ['tl_web_accessibility', 'test'],
            'sql' => "LONGTEXT NOT NULL default ''"
        ]
    ],
    'palettes' => [
        'default' => '{title_legend},title',
    ]
];


class tl_web_accessibility extends Backend
{
    public function test()
    {

    }
}
