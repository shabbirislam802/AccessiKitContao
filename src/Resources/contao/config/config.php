<?php

$GLOBALS['BE_MOD']['content']['web_accessibility'] = [
    'tables' => ['tl_web_accessibility'],
    'javascript' => ['bundles/contaoaccessikitcontao/js/index.js'],
    'callback' => SI\ContaoAccessiKitContaoBundle\Controller\BackendModule\WebAccessibilityModuleController::class,
];

$GLOBALS['BE_MOD']['content']['web_accessibility_report'] = [
    'tables' => ['tl_web_accessibility'],
    'hideInNavigation' => false
];


