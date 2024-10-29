<?php
use Contao\CoreBundle\DataContainer\PaletteManipulator;
use Contao\System;
use Contao\FilesModel;
use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilitySettingsModel;

PaletteManipulator::create()
    ->addField('accessibility_warning', 'meta')
    ->applyToPalette('default', 'tl_files');

$wcagRelevantTypes = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];

$GLOBALS['TL_DCA']['tl_files']['list']['operations']['accessibility_warning'] = [
    'button_callback' => static function ($row, $href, $label, $title, $icon, $attributes) use ($wcagRelevantTypes) {
        $filePath = urldecode($row['id']);
        $file = FilesModel::findByPath($filePath);

        if ($file) {
            $extension = strtolower($file->extension);
            if (in_array($extension, $wcagRelevantTypes, true)) {
                // Metadaten auslesen und auf fehlenden alt-Text prüfen
                $meta = unserialize($file->meta);

                if (empty($meta['en']['alt']) && empty($meta['de']['alt'])) {
                    return '<span title="' . $title . '" ' . $attributes . '><i class="fas fa-wheelchair" style="color: red;"></i></span>';
                }
            }
        }
        return '';
    },
];
