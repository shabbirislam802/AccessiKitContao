<?php
use Contao\Backend;
use Contao\DC_Table;

$GLOBALS['TL_DCA']['tl_web_accessibility_settings'] = [
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
            'fields' => ['id'],
            'flag' => 1,
            'panelLayout' => 'filter;search,limit',
        ],
        'label' => [
            'fields' => ['id'],
            'format' => 'Barrierefreiheit Einstellungen',
        ],
        'global_operations' => [
            'all' => [
                'label' => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href' => 'act=select',
                'class' => 'header_edit_all',
                'attributes' => 'onclick="Backend.getScrollOffset();"'
            ],
        ],
        'operations' => [
            'edit' => [
                'label' => ['Bearbeiten', 'Datensatz bearbeiten'],
                'href' => 'act=edit',
                'icon' => 'edit.gif'
            ]
        ],
    ],
    'palettes' => [
        '__selector__' => ['accessibility_guidelines'],  // Selector für accessibility_guidelines
        'default' => '{guidelines_legend},accessibility_guidelines,is_required;{advanced_settings_legend},advanced_checks;',
    ],
    'subpalettes' => [
        'accessibility_guidelines_wcag' => 'wcag_level',  // Subpalette für die Option "WCAG 2.1"
    ],
    'fields' => [
        'id' => [
            'sql' => "int(10) unsigned NOT NULL auto_increment"
        ],
        'tstamp' => [
            'sql' => ['type' => 'integer', 'unsigned' => true, 'default' => 0],
        ],
        'accessibility_guidelines' => [
            'label' => ['Barrierefreiheitsrichtlinien', 'Wählen Sie die Richtlinien zur Barrierefreiheit aus.'],
            'inputType' => 'select',
            'options' => [
                'group1' => [
                    'eaa' => 'European Accessibility Act',
                ],
                'group2' => [
                    'wcag' => 'WCAG 2.1',
                ],
            ],
            'eval' => [
                'includeBlankOption' => true,
                'groupStyle' => 'horizontal',
                'mandatory' => true,
                'submitOnChange' => true,  // Subpalette aktualisieren bei Auswahländerung
            ],
            'sql' => "varchar(32) NOT NULL default ''",
        ],
        'wcag_level' => [
            'label' => ['WCAG Level', 'Wählen Sie das WCAG 2.1 Level A oder AA aus.'],
            'inputType' => 'checkbox',
            'options' => ['A', 'AA'],
            'eval' => ['multiple' => true],
            'sql' => "blob NULL",
        ],
        'is_required' => [
            'label' => ['Verpflichtete Felder', 'Wählen Sie, ob wichtige Barrierefreiheitsfelder als Pflichtfelder markiert werden.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
            'explanation' => 'Durch diese Einstellung werden die wichtigen Felder zur Barrierefreiheit als Pflichtfelder im Backend markiert.',
        ],
        'advanced_checks' => [
            'label' => ['Erweiterte Prüfungen', 'Wählen Sie, welche erweiterten Prüfungen durchgeführt werden sollen (Bilder, Farben bei Buttons, Links, Tabellen).'],
            'inputType' => 'checkbox',
            'options' => ['check_images' => 'Überprüfung der Bilder', 'check_colors' => 'Überprüfung der Farben (Buttons, Links, Tabellen)'],
            'eval' => ['multiple' => true],
            'sql' => "blob NULL",
        ],
    ],
];
