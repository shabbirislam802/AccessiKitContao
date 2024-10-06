<?php
use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilitySettingsModel;

// Back end modules
$GLOBALS['BE_MOD']['content']['web_accessibility_settings'] = [
    'tables' => ['tl_web_accessibility_settings'],
];

//Models
$GLOBALS['TL_MODELS']['tl_web_accessibility_settings'] = WebAccessibilitySettingsModel::class;



