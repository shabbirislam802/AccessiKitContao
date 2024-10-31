<?php

namespace SI\ContaoAccessiKitContaoBundle\EventListener;

use SI\ContaoAccessiKitContaoBundle\Controller\WebAccessibilitySettingsController;

class OutputBackendTemplateListener
{
    public function __invoke(string $buffer, string $template): string
    {

        if ($template === 'be_main') {
            $accessibilitySettings = WebAccessibilitySettingsController::getAccessibilitySetting();

            $VERSION = '1.0.0';
            $scriptPaths = [
                'bundles/contaoaccessikitcontao/js/accessibilityIndication.js?v=' . $VERSION,
                'bundles/contaoaccessikitcontao/js/mediaMeta.js?v=' . $VERSION,
                'bundles/contaoaccessikitcontao/js/contrastChecker.js?v=' . $VERSION,
                'bundles/contaoaccessikitcontao/js/config/element.json.js?v=' . $VERSION,
                'bundles/contaoaccessikitcontao/js/config/module.json.js?v=' . $VERSION,
                'bundles/contaoaccessikitcontao/js/accessibilityWidget.js?v=' . $VERSION,
            ];

            $stylePath = [
                'bundles/contaoaccessikitcontao/css/main.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
            ];

            if(WebAccessibilitySettingsController::isWidgetActivated()){
                $buffer .= "
                <div id='floating-widget' style='position:fixed; bottom:20px; right:20px; z-index:1000; width:300px;'>
                    <button id='toggle-widget' style='width:100%; padding:10px; background:#007bff; color:white; font-size:16px;'>
                        <i class='fa fa-bars'></i> Accessibility Criteria
                    </button>
                    <div id='widget-content' style='display:none; background:white; border:1px solid #ccc; max-height:400px; overflow-y:auto; padding:10px;'>
                        <!-- Inhalt des Widgets wird dynamisch mit JavaScript geladen -->
                    </div>
                </div>
            ";
            }

            foreach ($stylePath as $path){
                $buffer .= "<link rel='stylesheet' href='". $path ."'/>";
            }

            $buffer .= "<script>
                const settings = JSON.parse('" . $accessibilitySettings . "');
            </script>";

            foreach ($scriptPaths as $path) {
                $buffer .= "<script src='" . $path . "'></script>";
            }
        }

        return $buffer;
    }
}
