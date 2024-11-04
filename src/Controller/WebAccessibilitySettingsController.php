<?php

namespace SI\ContaoAccessiKitContaoBundle\Controller;

use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilitySettingsModel;
use Contao\Database;

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
            $settingsArray[] = [
                'enable_language_setting' => (bool) $settings->enable_language_setting,
                'extended_color_function' => (bool) $settings->extended_color_function,
                'image_meta_data_function' => (bool) $settings->image_meta_data_function,
                'media_caption_function' => (bool) $settings->media_caption_function,
                'accessibility_setting_indication_function' => (bool) $settings->accessibility_setting_indication_function,
                'accessibility_widget' => (bool) $settings->accessibility_widget,
                'custom_text_field' => $settings->custom_text_field,
            ];
        }

        return json_encode($settingsArray);
    }

    public static function isMetaDataRequired(): bool
    {
        if (Database::getInstance()->tableExists('tl_web_accessibility_settings')) {
            $settings = WebAccessibilitySettingsModel::findOneBy(['id=?'], [1]);
            return $settings !== null && (bool) $settings->image_meta_data_function;
        }
        return false;
    }

    public static function isWidgetActivated(): bool
    {
        if (Database::getInstance()->tableExists('tl_web_accessibility_settings')) {
            $settings = WebAccessibilitySettingsModel::findOneBy(['id=?'], [1]);
            return $settings !== null && (bool) $settings->accessibility_widget;
        }
        return false;
    }
}
