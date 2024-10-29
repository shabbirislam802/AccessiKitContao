<?php
use Contao\CoreBundle\DataContainer\PaletteManipulator;

$GLOBALS['TL_DCA']['tl_module']['fields']['textColor'] = [
    'label'     => &$GLOBALS['TL_LANG']['tl_module']['textColor'],
    'inputType' => 'text',
    'eval'      => ['colorpicker' => true, 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_module']['fields']['backgroundColor'] = [
    'label'     => &$GLOBALS['TL_LANG']['tl_module']['backgroundColor'],
    'inputType' => 'text',
    'eval'      => ['colorpicker' => true, 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

// Neue Legend 'color_settings_legend' erstellen und Felder hinzufügen
PaletteManipulator::create()
    ->addLegend('color_settings_legend', 'expert_legend', PaletteManipulator::POSITION_BEFORE)
    ->addField(['textColor', 'backgroundColor'], 'color_settings_legend', PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('form', 'tl_module')
    ->applyToPalette('newslist', 'tl_module')
    ->applyToPalette('newsreader', 'tl_module')
    ->applyToPalette('subscribe', 'tl_module')
    ->applyToPalette('unsubscribe', 'tl_module')
    ->applyToPalette('newsletterlist', 'tl_module')
    ->applyToPalette('comments', 'tl_module')
    ->applyToPalette('listing', 'tl_module');
