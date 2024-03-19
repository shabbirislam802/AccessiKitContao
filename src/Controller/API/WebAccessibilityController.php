<?php

namespace SI\ContaoAccessiKitContaoBundle\Controller\API;

use Contao\CoreBundle\Controller\AbstractController;
use Contao\CoreBundle\Framework\ContaoFramework;
use PHPUnit\Util\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilityModel;

#[Route('/api/v1', name: WebAccessibilityController::class)]
class WebAccessibilityController extends AbstractController
{
    private $framework;

    public function __construct(ContaoFramework $framework)
    {
        $this->framework = $framework;
        $this->framework->initialize();
    }

    #[Route('/report', name: 'save_report', methods: ['POST'])]
    public function saveReport(Request $request): Response
    {
        $content = $request->getContent();
        $submittedData = json_decode($content, true);

        if (!isset($submittedData['title'], $submittedData['report_data'])) {
            return new Response('Ungültige Daten', Response::HTTP_BAD_REQUEST);
        }

        try{
            $report = new WebAccessibilityModel();
            $report->tstamp = time();
            $report->created = time();
            $report->title = $submittedData['title'];
            $report->report_data = serialize($submittedData['report_data']);
            $report->save();

            return new Response('Bericht gespeichert', Response::HTTP_OK);

        } catch (Exception $exception) {
            return new Response($exception->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
