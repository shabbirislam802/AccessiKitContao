<?php
use Contao\Backend;
use Contao\DC_Table;
use Contao\DataContainer;

$GLOBALS['TL_DCA']['tl_web_accessibility_settings'] = [
    'config' => [
        'dataContainer' => DC_Table::class,
        'enableVersioning' => true,
        'notSortable' => true,
        'notCopyable' => true,
        'sql' => [
            'keys' => [
                'id' => 'primary'
            ]
        ]
    ],
    'list' => [
        'sorting' => [
            'mode' => 1,
            'fields' => ['id'],
            'flag' => 1,
            'panelLayout' => 'filter;search,limit',
        ],
        'label' => [
            'fields' => ['id'],
            'format' => 'Accessibility Settings',
        ],
        'global_operations' => [
            'all' => [
                'label' => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href' => 'act=select',
                'class' => 'header_edit_all',
                'attributes' => 'onclick="Backend.getScrollOffset();"'
            ],
        ],
        'operations' => [
            'edit' => [
                'href' => 'act=edit',
				'icon' => 'edit.svg'
            ]
        ],
    ],
    'palettes' => [
        'default' => '{description_legend},text_override_callback;{language_settings_legend},enable_language_setting;{guidelines_legend},extended_color_function,image_meta_data_function,media_caption_function,accessibility_setting_indication_function,accessibility_widget;',
    ],
    'fields' => [
        'id' => [
            'sql' => "int(10) unsigned NOT NULL auto_increment"
        ],
        'tstamp' => [
            'sql' => ['type' => 'integer', 'unsigned' => true, 'default' => 0],
        ],
        'enable_language_setting' => [
            'label' => ['Enable Language Setting', 'Activate the language setting option for content and modules.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
        ],
        'extended_color_function' => [
            'label' => ['Extended color function', 'Activate extended color checking functionality.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
        ],
        'image_meta_data_function' => [
            'label' => ['Image meta data function', 'Enable checks for image metadata.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
        ],
        'media_caption_function' => [
            'label' => ['Media caption function', 'Activate media caption checks.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
        ],
        'accessibility_setting_indication_function' => [
            'label' => ['Accessibility setting indication function', 'Show indications for accessibility settings, especially useful with the Accessibility Widget.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
        ],
        'accessibility_widget' => [
            'label' => ['Accessibility widget', 'Enable the accessibility widget.'],
            'inputType' => 'checkbox',
            'eval' => ['mandatory' => false],
            'sql' => "char(1) NOT NULL default ''",
        ],
        'text_override_callback' => [
            'label' => ['Custom Text Field', 'This field uses a callback to override the HTML content.'],
            'inputType' => 'text',
            'eval' => ['mandatory' => false],
            'input_field_callback' => ['tl_web_accessibility_settings', 'showDescription'],
            'sql' => "text NULL",
        ],
    ],
];

class tl_web_accessibility_settings extends Backend
{
    public function showDescription(DataContainer $dc)
    {
        $html = '<div class="widget">';

        // Enable Language Setting Explanation
        $html .= '<h3>Enable Language Setting</h3>';
        $html .= '<p>This option enables editors to set language-specific configurations for text elements in content and modules. By activating this, the editor can specify if an element should be rendered in a particular language, enhancing accessibility on multilingual sites.</p>';

        // Extended Color Function Explanation
        $html .= '<h3>Extended Color Function</h3>';
        $html .= '<p>This function adds color selection fields to modules, allowing users to set colors for text, headers, and buttons. The function checks color contrast for accessibility, notifying users if adjustments are needed to improve accessibility.</p>';

        // Image Meta Data Function Explanation
        $html .= '<h3>Image Meta Data Function</h3>';
        $html .= '<p>In the files section, images without ALT text metadata are marked with an icon <i class="fas fa-wheelchair" style="color: red;"></i>. This highlights images that require ALT text, allowing editors to add necessary metadata for accessibility.</p>';

        // Media Caption Function Explanation
        $html .= '<h3>Media Caption Function</h3>';
        $html .= '<p>This function supports accessibility for video and audio by allowing subtitles and audio descriptions. It ensures that these media types include necessary information for users with disabilities.</p>';

        // Accessibility Setting Indication Function Explanation
        $html .= '<h3>Accessibility Setting Indication Function</h3>';
        $html .= '<p>This function highlights essential accessibility settings within elements and modules with an icon <i class="fas fa-wheelchair" style="color: blue;"></i>. When combined with the Accessibility Widget, it provides editors a comprehensive view of accessibility requirements and adjustments to improve content accessibility.</p>';

        // Accessibility Widget Explanation
        $html .= '<h3>Accessibility Widget</h3>';
        $html .= '<p>This floating widget provides an overview of accessibility requirements per element and module, showing which criteria are met and offering guidance on unmet requirements. This tool works effectively alongside the Accessibility Setting Indication Function for a thorough accessibility check.</p>';

        $html .= '</div>';

        return $html;
    }
}
