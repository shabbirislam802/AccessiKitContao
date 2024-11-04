<?php

namespace SI\ContaoAccessiKitContaoBundle\EventListener;
use Contao\Form;
use Contao\Module;
use Contao\ModuleModel;

class GetFrontendModuleListener
{
    public function __invoke(ModuleModel $model, string $buffer, $module): string
    {
        $elementLanguage = $model->elementLanguage;

        if ($elementLanguage) {
            $buffer = str_replace(
                '<div',
                sprintf('<div data-element-language="%s"', htmlspecialchars($elementLanguage, ENT_QUOTES)),
                $buffer
            );
        }

        return $buffer;
    }
}
