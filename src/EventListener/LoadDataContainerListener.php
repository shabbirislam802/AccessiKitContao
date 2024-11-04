<?php

namespace SI\ContaoAccessiKitContaoBundle\EventListener;

use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilitySettingsModel;
use Contao\Database;

class LoadDataContainerListener
{
    public function __invoke(string $table): void
    {
        if ($table === 'tl_web_accessibility_settings') {
            if (Database::getInstance()->tableExists('tl_web_accessibility_settings')) {
                $existingRecord = WebAccessibilitySettingsModel::findAll();

                if ($existingRecord !== null) {
                    $GLOBALS['TL_DCA']['tl_web_accessibility_settings']['config']['notCreatable'] = true;
                }
            }
        }
    }
}

