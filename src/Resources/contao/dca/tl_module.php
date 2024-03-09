<?php
use Contao\Backend;
use SI\ContaoAccessiKitContaoBundle\Controller\FrontendModule\ExampleModuleController;

$GLOBALS['TL_DCA']['tl_module']['fields']['formularName'] = [
    'label' => &$GLOBALS['TL_LANG']['tl_module']['formularName'],
    'exclude' => true,
    'inputType' => 'select',
    'options_callback' => ['tl_module_custom', 'getFormNames'],
    'eval' => ['includeBlankOption'=>true, 'chosen'=>true, 'tl_class'=>'w50'],
    'sql' => "int(10) unsigned NOT NULL default '0'"
];

$GLOBALS['TL_DCA']['tl_module']['palettes'][ExampleModuleController::TYPE] =
    '{title_legend},name,type;{redirect_legend},jumpTo;{form_legend},formularNameddev start'
;

class tl_module_custom extends Backend
{
    public function getFormNames()
    {
        $arrForms = [];
        $objForms = Database::getInstance()->execute("SELECT id, title FROM tl_form ORDER BY title");

        while ($objForms->next()) {
            $arrForms[$objForms->id] = $objForms->title;
        }

        return $arrForms;
    }
}
