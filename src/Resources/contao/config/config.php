<?php

$GLOBALS['BE_MOD']['content']['web_accessibility'] = [
    'javascript' => [
        'bundles/contaoaccessikitcontao/js/libraries/dompurify/purify.min.js',
        'bundles/contaoaccessikitcontao/js/libraries/html2canvas/html2canvas.min.js',
        'bundles/contaoaccessikitcontao/js/libraries/jspdf/jspdf.umd.min.js',
        'bundles/contaoaccessikitcontao/js/libraries/jspdf/jspdf.plugin.autotable.min.js',
        'bundles/contaoaccessikitcontao/js/index.js'
    ],
    'stylesheet' => ['bundles/contaoaccessikitcontao/css/main.css'],
    'callback' => SI\ContaoAccessiKitContaoBundle\Controller\BackendModule\WebAccessibilityModuleController::class,
];

$GLOBALS['BE_MOD']['content']['web_accessibility_report'] = [
    'tables' => ['tl_web_accessibility'],
    'hideInNavigation' => true
];


