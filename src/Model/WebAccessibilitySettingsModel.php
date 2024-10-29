<?php

namespace SI\ContaoAccessiKitContaoBundle\Model;

use Contao\Model;

class WebAccessibilitySettingsModel extends Model
{
    protected static $strTable = 'tl_web_accessibility_settings';

    public static function isMetaDataRequired(): bool
    {
        $settings = static::findOneBy(['id=?'], [1]);
        return $settings !== null && (bool) $settings->is_meta_data_required;
    }
}
