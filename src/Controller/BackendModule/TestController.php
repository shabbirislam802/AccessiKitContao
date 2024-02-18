<?php

namespace SI\ContaoAccessiKitContaoBundle\Controller\BackendModule;

use Contao\PageModel;
use Contao\FrontendTemplate;
use Contao\System;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Twig\Environment;

class TestController extends AbstractController
{

    public function generate(): string
    {
        $container = System::getContainer();

        $template = new FrontendTemplate('my_front_end_template');
        $template->someData = 'foobar';
        $buffer = $template->parse();
        if (null === ($twig = $container->get('twig', ContainerInterface::NULL_ON_INVALID_REFERENCE)))
        {
            return '';
        }
        dump($container);
        dump($twig->render('@Contao_ContaoAccessiKitContaoBundle/test.html.twig', ['html' => $this->getPagesSelectHtml()]));
        //dump($this->render('@Contao_ContaoAccessiKitContaoBundle/test.html.twig'));
        return '<fieldset id="pal_global_legend" class="tl_tbox">
                    <legend>Barrierefreiheit-Analyse Einstellungen</legend>'
            . $this->getPagesSelectHtml() .
            $this->getAccuracyClassSelectHtml() .
            '</fieldset>'
            . $this->getSubmitButtonHtml();
    }

    private function getPagesSelectHtml(): string
    {
        $optionsHtml = $this->getPagesOptionsHtml();
        return '<div class="w50 widget">
                    <h3><label>Seite</label></h3>
                    <select name="pageSelect" id="ctrl_pageSelect" class="tl_select tl_chosen">'
            . $optionsHtml .
            '</select>
                    <p class="tl_help tl_tip" title="">Bitte wählen Sie eine Seite für die Analyse aus.</p>
                </div>';
    }

    private function getPagesOptionsHtml(): string
    {
        $pages = PageModel::findBy(['type=?', 'robots=?', 'urlSuffix=?'], ['regular', 'index,follow', '.html']);
        $html = '';
        if ($pages) {
            foreach ($pages as $page) {
                if (!empty($page->alias)) {
                    $html .= sprintf('<option value="%s">%s</option>', $page->urlPrefix . $page->alias . $page->urlSuffix, $page->title);
                }
            }
        }
        return $html;
    }

    private function getAccuracyClassSelectHtml(): string
    {
        return '<div class="w50 widget">
                    <h3><label>Genauigkeitsklasse</label></h3>
                    <select name="accuracyClass" id="ctrl_accuracyClass" class="tl_select tl_chosen">'
            . '<option value="">-</option>'
            . '<option value="1">Genauigkeitsklasse 1</option>'
            . '<option value="2">Genauigkeitsklasse 2</option>'
            . '<option value="3">Genauigkeitsklasse 3</option>'
            . '<option value="4">Genauigkeitsklasse 4</option>' .
            '</select>
                    <p class="tl_help tl_tip" title="">Bitte wählen Sie eine Genauigkeitsklasse für die Analyse der Seite aus.</p>
                </div>';
    }

    private function getSubmitButtonHtml(): string
    {
        return '<div class="tl_formbody_submit">
                    <div class="tl_submit_container">
                      <button id="analyse" class="tl_submit">Seite Analysieren</button>
                    </div>
                </div>';
    }
}
