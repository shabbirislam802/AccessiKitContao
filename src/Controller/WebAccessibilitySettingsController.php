<?php

namespace SI\ContaoAccessiKitContaoBundle\Controller;

use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilitySettingsModel;

class WebAccessibilitySettingsController
{
    public function __construct()
    {
    }

    public static function getAccessibilitySetting(): string
    {
        $settings = WebAccessibilitySettingsModel::findAll();

        if ($settings === null) {
            return json_encode([]);
        }

        $settingsArray = [];

        while ($settings->next()) {
            $advancedChecks = !empty($settings->advanced_checks) ? unserialize($settings->advanced_checks) : [];

            $settingsArray[] = [
                'accessibility_guidelines' => $settings->accessibility_guidelines,
                'wcag_level' => $settings->wcag_level,
                'is_required' => $settings->is_required,
                'advanced_checks' => $advancedChecks,  
            ];
        }

        return json_encode($settingsArray);
    }
}

