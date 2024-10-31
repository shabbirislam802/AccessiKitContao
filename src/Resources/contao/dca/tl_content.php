<?php
use Contao\CoreBundle\DataContainer\PaletteManipulator;

$GLOBALS['TL_DCA']['tl_content']['fields']['subtitleFile'] = [
    'label'     => ['<label for="ctrl_subtitleFile">Subtitle File</label>', 'Select the subtitle file in .vtt or .srt format.'],
    'inputType' => 'fileTree',
    'eval'      => ['filesOnly' => true, 'extensions' => 'vtt,srt', 'fieldType' => 'radio', 'tl_class' => 'w50'],
    'sql'       => "binary(16) NULL"
];

$GLOBALS['TL_DCA']['tl_content']['fields']['subtitleLanguage'] = [
    'label'     => ['Subtitle Language', 'Enter the language code (e.g., "en" for English).'],
    'inputType' => 'text',
    'eval'      => ['maxlength' => 2, 'tl_class' => 'w50'],
    'sql'       => "varchar(2) NOT NULL default 'en'"
];

$GLOBALS['TL_DCA']['tl_content']['fields']['audioDescription'] = [
    'label'     => ['<label for="ctrl_audioDescription">Audio Description</label>', 'Select an audio description file in .mp3 or .ogg format.'],
    'inputType' => 'fileTree',
    'eval'      => ['filesOnly' => true, 'extensions' => 'mp3,ogg', 'fieldType' => 'radio', 'tl_class' => 'w50'],
    'sql'       => "binary(16) NULL"
];


PaletteManipulator::create()
    ->addLegend('accessibility_legend', 'expert_legend', PaletteManipulator::POSITION_AFTER)
    ->addField(['subtitleFile', 'subtitleLanguage', 'audioDescription'], 'accessibility_legend', PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('player', 'tl_content');


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
    ->applyToPalette('module', 'tl_content');

