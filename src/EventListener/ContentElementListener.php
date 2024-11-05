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

        if ($contentModel->type === 'module' || $contentModel->type === 'form' || $contentModel->type === 'headline' || $contentModel->type === 'text' || $contentModel->type === 'list' || $contentModel->type === 'table') {
            $textColor = $contentModel->textColor;
            $headerColor = $contentModel->headerColor;
            $backgroundColor = $contentModel->backgroundColor;
            $elementLanguage = $contentModel->elementLanguage;

            $attributes = [];

            if ($textColor) {
                $attributes[] = sprintf('data-text-color="%s"', htmlspecialchars($textColor, ENT_QUOTES));
            }
            if ($headerColor) {
                $attributes[] = sprintf('data-header-color="%s"', htmlspecialchars($headerColor, ENT_QUOTES));
            }
            if ($backgroundColor) {
                $attributes[] = sprintf('data-background-color="%s"', htmlspecialchars($backgroundColor, ENT_QUOTES));
            }
            if ($elementLanguage) {
                $attributes[] = sprintf('data-element-language="%s"', htmlspecialchars($elementLanguage, ENT_QUOTES));
            }

            if (!empty($attributes)) {
                $buffer = str_replace(
                    '<div',
                    sprintf('<div %s', implode(' ', $attributes)),
                    $buffer
                );
            }
        }

        return $buffer;
    }
}
