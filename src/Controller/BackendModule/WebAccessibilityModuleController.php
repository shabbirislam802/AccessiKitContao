<?php

namespace SI\ContaoAccessiKitContaoBundle\Controller\BackendModule;

use Contao\PageModel;
use Contao\System;
use Symfony\Component\DependencyInjection\ContainerInterface;

class WebAccessibilityModuleController
{

    public function generate(): string
    {
        $container = System::getContainer();

        if (null === ($twig = $container->get('twig', ContainerInterface::NULL_ON_INVALID_REFERENCE)))
        {
            return '';
        }
        $pages = PageModel::findBy(['type=?', 'robots=?', 'urlSuffix=?'], ['regular', 'index,follow', '.html']);

        return $twig->render(
            '@Contao_ContaoAccessiKitContaoBundle/web_accessibility_module.html.twig',
            [
                'pages' =>   $pages,
                'backUrl' =>  System::getReferer(true)
            ]
        );

        //dump($this->render('@Contao_ContaoAccessiKitContaoBundle/test.html.twig'));
    }
}
