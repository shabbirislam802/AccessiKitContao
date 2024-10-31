<?php
use Contao\CoreBundle\DataContainer\PaletteManipulator;

$GLOBALS['TL_DCA']['tl_content']['fields']['textColor'] = [
    'label'     => ['Text Color', 'Choose a color for the text.'],
    'inputType' => 'text',
    'eval'      => [ 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_content']['fields']['headerColor'] = [
    'label'     => ['Header Color', 'Choose a color for the header text.'],
    'inputType' => 'text',
    'eval'      => [ 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_content']['fields']['backgroundColor'] = [
    'label'     => ['Button and Link Background Color', 'Choose a background color for buttons and links.'],
    'inputType' => 'text',
    'eval'      => [ 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

PaletteManipulator::create()
    ->addLegend('color_settings_legend', 'expert_legend', PaletteManipulator::POSITION_BEFORE)
    ->addField(['textColor', 'headerColor', 'backgroundColor'], 'color_settings_legend', PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('form', 'tl_module')
    ->applyToPalette('newslist', 'tl_module')
    ->applyToPalette('newsreader', 'tl_module')
    ->applyToPalette('subscribe', 'tl_module')
    ->applyToPalette('unsubscribe', 'tl_module')
    ->applyToPalette('newsletterlist', 'tl_module')
    ->applyToPalette('comments', 'tl_module')
    ->applyToPalette('listing', 'tl_module');
