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
        $router = $container->get('router');

        if (null === ($twig = $container->get('twig', ContainerInterface::NULL_ON_INVALID_REFERENCE)))
        {
            return '';
        }

        $webAccessibilityReportUrl = $router->generate('contao_backend', [
            'do' => 'web_accessibility_report'
        ]);

        $pages = PageModel::findBy(['type=?', 'robots=?', 'urlSuffix=?'], ['regular', 'index,follow', '.html']);

        return $twig->render(
            '@Contao_ContaoAccessiKitContaoBundle/web_accessibility_module.html.twig',
            [
                'pages' =>   $pages,
                'backUrl' =>  System::getReferer(true),
                'webAccessibilityReportUrl' => $webAccessibilityReportUrl
            ]
        );

        //dump($this->render('@Contao_ContaoAccessiKitContaoBundle/test.html.twig'));
    }
}
