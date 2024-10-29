<?php
use SI\ContaoAccessiKitContaoBundle\Model\WebAccessibilitySettingsModel;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Finder\Finder;
use Contao\System;

// Back end modules
$GLOBALS['BE_MOD']['content']['web_accessibility_settings'] = [
    'tables' => ['tl_web_accessibility_settings'],
];

//Models
$GLOBALS['TL_MODELS']['tl_web_accessibility_settings'] = WebAccessibilitySettingsModel::class;

$filesystem = new Filesystem();

// Basisverzeichnis des Bundles (von dem Verzeichnis, in dem dieses Skript liegt)
$baseDir = System::getContainer()->getParameter('kernel.project_dir');

// Dynamische Pfade für Quelle und Ziel
$sourceDir = $baseDir . '/vendor/shabbirislam/contao-accessi-kit-contao-bundle/src/Resources/contao/templates/twig';
$targetDir = $baseDir . '/templates';

try {
    // Prüfen, ob das Quellverzeichnis existiert
    if (!$filesystem->exists($sourceDir)) {
        throw new \Exception("Quellverzeichnis $sourceDir existiert nicht.");
    }

    // Erstellt das Zielverzeichnis, falls es noch nicht existiert
    if (!$filesystem->exists($targetDir)) {
        $filesystem->mkdir($targetDir, 0755);
    }

    // Finder initialisieren, um Dateien und Ordner im Quellverzeichnis zu durchsuchen
    $finder = new Finder();
    $finder->files()->in($sourceDir);

    foreach ($finder as $file) {
        // Quelle und Zielpfade für jede Datei ermitteln
        $relativePath = $file->getRelativePathname();
        $sourceFilePath = $file->getRealPath();
        $targetFilePath = $targetDir . '/' . $relativePath;

        // Prüfen, ob die Datei bereits im Zielverzeichnis existiert und ob sie identisch ist
        if ($filesystem->exists($targetFilePath)) {
            //echo "Überspringe bereits vorhandene Datei: $relativePath\n";
            continue;
        }

        // Falls die Datei oder das Verzeichnis im Zielverzeichnis noch nicht existiert, kopieren
        $filesystem->copy($sourceFilePath, $targetFilePath, true);
    }

} catch (IOExceptionInterface $exception) {
    echo "Fehler beim Kopieren der Templates: " . $exception->getMessage();
}
