<?php

namespace SI\ContaoAccessiKitContaoBundle\EventListener;

use SI\ContaoAccessiKitContaoBundle\Controller\WebAccessibilitySettingsController;

class OutputBackendTemplateListener
{
    public function __invoke(string $buffer, string $template): string
    {
        if ($template === 'be_main') {
            $accessibilitySettings = WebAccessibilitySettingsController::getAccessibilitySetting();

            $VERSION = "1.0.0";
            $scriptPath = 'bundles/contaoaccessikitcontao/js/accessibility.js?v=' . $VERSION;

            $buffer .= "<script>
                const settings = JSON.parse('" . $accessibilitySettings . "');
            </script>";

            $buffer .= "<script src='" . $scriptPath . "'></script>";
        }
        return $buffer;
    }
}
