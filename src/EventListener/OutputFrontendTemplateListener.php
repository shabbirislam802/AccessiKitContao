<?php

namespace SI\ContaoAccessiKitContaoBundle\EventListener;

use SI\ContaoAccessiKitContaoBundle\Controller\WebAccessibilitySettingsController;

class OutputFrontendTemplateListener
{
    public function __invoke(string $buffer, string $template): string
    {
        if ($template === 'fe_page') {
            $accessibilitySettings = WebAccessibilitySettingsController::getAccessibilitySetting();

            $VERSION = '1.0.0';
            $scriptPaths = [
                'bundles/contaoaccessikitcontao/js/playerCaption.js?v=' . $VERSION,
                'bundles/contaoaccessikitcontao/js/colorModifier.js?v=' . $VERSION,
            ];

            $buffer .= "<script>
                const settings = JSON.parse('" . $accessibilitySettings . "');
            </script>";

            foreach ($scriptPaths as $path) {
                if (strpos($buffer, $path) === false) {
                    $buffer .= "<script src='" . $path . "'></script>";
                }
            }
        }

        return $buffer;
    }
}
