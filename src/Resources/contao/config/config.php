<?php

$GLOBALS['BE_MOD']['content']['web_accessibility'] = [
    'javascript' => ['bundles/contaoaccessikitcontao/js/index.js'],
    'callback' => \SI\ContaoAccessiKitContaoBundle\View\BackendModule\TestModuleView::class,
    //'tables' => ['tl_web_accessibility'],
];


