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
            'format' => 'Barrierefreiheit Einstellungen',
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
                'label' => ['Bearbeiten', 'Datensatz bearbeiten'],
                'href' => 'act=edit',
                'icon' => 'edit.gif'
            ]
        ],
    ],
    'palettes' => [
        'default' => '{description_legend},text_override_callback;{guidelines_legend},extended_color_function,image_meta_data_function,media_caption_function,accessibility_setting_indication_function,accessibility_widget;',
    ],
    'fields' => [
        'id' => [
            'sql' => "int(10) unsigned NOT NULL auto_increment"
        ],
        'tstamp' => [
            'sql' => ['type' => 'integer', 'unsigned' => true, 'default' => 0],
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
            'label' => ['Accessibility setting indication function', 'Show indications for accessibility settings.'],
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

        // Extended Color Function Explanation
        $html .= '<h3>Extended Color Function</h3>';
        $html .= '<p>This function adds color selection fields to modules, enabling users to choose colors for text, headers, and buttons. As colors are entered, the function checks if they meet contrast requirements for accessibility. If not, a notification appears, prompting the user to adjust the color combination for better accessibility.</p>';

        // Image Meta Data Function Explanation
        $html .= '<h3>Image Meta Data Function</h3>';
        $html .= '<p>In the files section, images that lack ALT text metadata are visually marked with an icon <i class="fas fa-wheelchair" style="color: red;"></i>. This indicates which images need ALT text for improved accessibility, allowing editors to add it where necessary.</p>';

        // Media Caption Function Explanation
        $html .= '<h3>Media Caption Function</h3>';
        $html .= '<p>This function enhances video and audio elements by allowing users to add subtitles and audio descriptions, which are critical for accessibility. It ensures that these media types provide the necessary information for users with disabilities.</p>';

        // Accessibility Setting Indication Function Explanation
        $html .= '<h3>Accessibility Setting Indication Function</h3>';
        $html .= '<p>This function highlights essential accessibility settings within elements and modules, marked with <i class="fas fa-wheelchair" style="color: blue;"></i>. These settings guide editors to make necessary adjustments to enhance accessibility.</p>';

        // Accessibility Widget Explanation
        $html .= '<h3>Accessibility Widget</h3>';
        $html .= '<p>This floating widget, which can be found on the bottom right corner, provides information on key accessibility requirements. It is organized by element and module, offering an overview of which requirements are met and which still need attention. It also provides guidance on how to address unmet requirements.</p>';

        $html .= '</div>';

        return $html;
    }
}

