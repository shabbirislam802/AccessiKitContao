<?php
use Contao\System;
use Contao\CoreBundle\DataContainer\PaletteManipulator;

$GLOBALS['TL_DCA']['tl_content']['fields']['textColor'] = [
    'label'     => ['Text Color', 'Choose a color for the text. Enter a hexadecimal value without the # symbol, e.g., FF5733.'],
    'inputType' => 'text',
    'eval'      => [ 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_content']['fields']['headerColor'] = [
    'label'     => ['Header Color', 'Choose a color for the header text. Enter a hexadecimal value without the # symbol, e.g., FF5733.'],
    'inputType' => 'text',
    'eval'      => [ 'maxlength' => 7, 'tl_class' => 'clr w50'],
    'sql'       => "varchar(7) NOT NULL default ''"
];

$GLOBALS['TL_DCA']['tl_content']['fields']['backgroundColor'] = [
    'label'     => ['Button and Link Background Color', 'Choose a background color for buttons and links.  Enter a hexadecimal value without the # symbol, e.g., FF5733.'],
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

$GLOBALS['TL_DCA']['tl_module']['fields']['elementLanguage'] = [
    'label'     => ['Module Language', 'Select the language for this module.'],
    'exclude'   => true,
    'inputType' => 'select',
    'options'   => ['en' => 'English', 'de' => 'German'],
    'eval'      => ['includeBlankOption' => true, 'chosen' => true, 'tl_class' => 'w50'],
    'sql'       => "varchar(5) NOT NULL default ''"
];

PaletteManipulator::create()
    ->addField('elementLanguage', 'title_legend', PaletteManipulator::POSITION_AFTER)
    ->applyToPalette('form', 'tl_module')
    ->applyToPalette('listing', 'tl_module')
    ->applyToPalette('newsreader', 'tl_module')
    ->applyToPalette('calendar', 'tl_module')
    ->applyToPalette('eventlist', 'tl_module')
    ->applyToPalette('faqreader', 'tl_module');
