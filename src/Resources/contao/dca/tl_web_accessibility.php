<?php
use Contao\Backend;
use Contao\DC_Table;
use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilityModel;

$GLOBALS['TL_DCA']['tl_web_accessibility'] = [
    'config' => [
        'dataContainer' => DC_Table::class,
        'enableVersioning' => true,
        'notSortable' => true,
        'notCopyable' => true,
        'notCreatable' => true,
        'sql' => [
            'keys' => [
                'id' => 'primary'
            ]
        ]
    ],
    'list' => [
        'sorting' => [
            'mode' => 1,
            'fields' => ['title'],
            'panelLayout' => 'search,limit'
        ],
        'label' => [
            'fields' => ['title', 'created'],
            'format' => '%s <span style="color:#999;padding-left:3px">[%s]</span>',
        ],
        'operations' => [
            'edit' => [
                'href' => 'act=edit',
                'icon' => 'edit.svg',
            ],
            'delete' => [
                'href' => 'act=delete',
                'icon' => 'delete.svg',
                'attributes' => 'onclick="if(!confirm(\'' . ($GLOBALS['TL_LANG']['MSC']['deleteConfirm'] ?? null) . '\'))return false;Backend.getScrollOffset()"',
            ],
        ],
    ],
    'fields' => [
        'id' => [
            'exclude' => true,
            'label' => array('ID'),
            'search' => true,
            'sql' => "int(10) unsigned NOT NULL auto_increment"
        ],
        'tstamp' => [
            'exclude' => true,
            'sql' => "INT(10) unsigned NOT NULL default 0"
        ],
        'created' => [
            'exclude' => true,
            'label' => ['Erstellungsdatum', ''],
            'sorting' => true,
            'flag' => 8,
            'eval' => ['rgxp' => 'datim'],
            'sql' => ['type' => 'integer', 'unsigned' => true, 'default' => 0],
        ],
        'title' => [
            'exclude' => true,
            'label' => ['Name', ''],
            'exclude' => true,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50', 'maxlength' => 255],
            'sql' => "VARCHAR(255) NOT NULL default ''"
        ],
        'report_data' => [
            'exclude' => true,
            'input_field_callback' => ['tl_web_accessibility', 'displayReport'],
            'sql' => "LONGTEXT NOT NULL default ''"
        ]
    ],
    'palettes' => [
        'default' => 'title,report_data',
    ]
];


class tl_web_accessibility extends Backend
{
    public function displayReport($dc)
    {
        $report = WebAccessibilityModel::findById($dc->id);

        if (!$report) {
            return '<div class="widget clr"><p>Keine Daten gefunden.</p></div>';
        }

        $reportData = unserialize($report->report_data);
        return $this->renderDataAsHtml($reportData);
    }

    protected function renderDataAsHtml($data, $level = 0)
    {
        $html = '<div class="widget clr"><div style="margin: 10px 0;border: 1px solid black;padding: 20px;">';

        foreach ($data as $key => $value) {
            if ($key === 'items') {
                $html .= $this->renderItemsAsHtml($value, $level + 1);
            } elseif (is_array($value)) {
                $html .= '<strong>' . htmlspecialchars($key) . ':</strong>';
                $html .= $this->renderDataAsHtml($value, $level + 1);
            } else {
                $html .= '<p><strong>' . htmlspecialchars($key) . ':</strong> ' . htmlspecialchars($value) . '</p>';
            }
        }

        $html .= '</div></div>';
        return $html;
    }

    protected function renderItemsAsHtml($items, $level)
    {
        $html = '<div style="margin-left: ' . ($level * 20) . 'px;"><ul>';

        foreach ($items as $itemId => $itemDetails) {
            $html .= '<li>';
            $html .= '<strong>' . htmlspecialchars($itemId) . ':</strong> ' . htmlspecialchars($itemDetails['description']);
            $html .= ' - Anzahl: ' . htmlspecialchars($itemDetails['count']);
            if (isset($itemDetails['xpaths']) && is_array($itemDetails['xpaths'])) {
                $html .= ' - XPaths: ' . implode(', ', array_map('htmlspecialchars', $itemDetails['xpaths']));
            }
            $html .= '</li>';
        }

        $html .= '</ul></div>';
        return $html;
    }
}
