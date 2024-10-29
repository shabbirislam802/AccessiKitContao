<?php
namespace SI\ContaoAccessiKitContaoBundle\EventListener;

use Contao\ContentModel;
use Contao\FilesModel;
use Contao\Environment;

class ContentElementListener
{
    public function __invoke(ContentModel $contentModel, string $buffer, $element): string
    {
        if ($contentModel->type === 'player') {
            $subtitleFile = null;
            $subtitleLanguage = $contentModel->subtitleLanguage ?? 'en';
            $audioDescription = null;
            $audioType = null;
            $baseUrl = Environment::get('url');

            // Untertitel-Datei
            if ($contentModel->subtitleFile) {
                $subtitleFileModel = FilesModel::findByUuid($contentModel->subtitleFile);
                $subtitleFile = $subtitleFileModel ? $baseUrl . '/' . $subtitleFileModel->path : null;
            }

            // Audiobeschreibungs-Datei
            if ($contentModel->audioDescription) {
                $audioDescriptionModel = FilesModel::findByUuid($contentModel->audioDescription);
                if ($audioDescriptionModel) {
                    $audioDescription = $baseUrl . '/' . $audioDescriptionModel->path;
                    $audioType = 'audio/' . $audioDescriptionModel->extension;
                }
            }

            // Datenattribute im HTML-Puffer für JavaScript zugänglich machen
            $buffer = str_replace(
                '<video',
                sprintf(
                    '<video data-subtitle-file="%s" data-subtitle-language="%s" data-audio-description="%s" data-audio-type="%s"',
                    htmlspecialchars($subtitleFile, ENT_QUOTES),
                    htmlspecialchars($subtitleLanguage, ENT_QUOTES),
                    htmlspecialchars($audioDescription, ENT_QUOTES),
                    htmlspecialchars($audioType, ENT_QUOTES)
                ),
                $buffer
            );
        }

        if($contentModel->type === 'module'){
            $textColor = $contentModel->textColor;
            $backgroundColor = $contentModel->backgroundColor;

            if ($textColor && $backgroundColor) {
                $buffer = str_replace(
                    '<div',
                    sprintf(
                        '<div data-text-color="%s" data-background-color="%s"',
                        htmlspecialchars($textColor, ENT_QUOTES),
                        htmlspecialchars($backgroundColor, ENT_QUOTES)
                    ),
                    $buffer
                );
            }
        }
        return $buffer;
    }
}

