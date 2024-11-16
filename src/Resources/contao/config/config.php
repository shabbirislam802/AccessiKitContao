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

// Base directory of the bundle (of the directory in which this script is located)
$baseDir = System::getContainer()->getParameter('kernel.project_dir');

// Dynamic paths for source and destination
$sourceDir = $baseDir . '/vendor/shabbirislam/contao-accessi-kit-contao-bundle/src/Resources/contao/templates/twig';
$targetDir = $baseDir . '/templates';

try {
    // Check if the source directory exists
    if (!$filesystem->exists($sourceDir)) {
        throw new \Exception("Quellverzeichnis $sourceDir existiert nicht.");
    }

    // Create the target directory if it does not yet exist
    if (!$filesystem->exists($targetDir)) {
        $filesystem->mkdir($targetDir, 0755);
    }

    // Initialize the Finder to search through the files and folders in the source directory
    $finder = new Finder();
    $finder->files()->in($sourceDir);

    foreach ($finder as $file) {
        // Determine the source and destination paths for each file
        $relativePath = $file->getRelativePathname();
        $sourceFilePath = $file->getRealPath();
        $targetFilePath = $targetDir . '/' . $relativePath;

        // Check whether the file already exists in the target directory and whether it is identical
        if ($filesystem->exists($targetFilePath)) {
            continue;
        }

        // If the file or directory does not yet exist in the target directory, copy it
        $filesystem->copy($sourceFilePath, $targetFilePath, true);
    }

} catch (IOExceptionInterface $exception) {
    echo "Fehler beim Kopieren der Templates: " . $exception->getMessage();
}
