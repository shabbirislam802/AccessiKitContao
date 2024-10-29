<?php

declare(strict_types=1);

/*
 * This file is part of [package name].
 *
 * (c) John Doe
 *
 * @license LGPL-3.0-or-later
 */

namespace SI\ContaoAccessiKitContaoBundle\ContaoManager;

use Contao\CommentsBundle\ContaoCommentsBundle;
use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ListingBundle\ContaoListingBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use Contao\ManagerPlugin\Routing\RoutingPluginInterface;
use Contao\NewsBundle\ContaoNewsBundle;
use Contao\NewsletterBundle\ContaoNewsletterBundle;
use SI\ContaoAccessiKitContaoBundle\ContaoAccessiKitContaoBundle;
use Symfony\Component\Config\Loader\LoaderResolverInterface;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\RouteCollection;

class Plugin implements BundlePluginInterface, RoutingPluginInterface
{
    public function getBundles(ParserInterface $parser): array
    {
        return [
            BundleConfig::create(ContaoAccessiKitContaoBundle::class)
                ->setLoadAfter([ContaoCoreBundle::class, ContaoNewsletterBundle::class, ContaoNewsBundle::class, ContaoListingBundle::class, ContaoCommentsBundle::class]),
        ];
    }

    public function getRouteCollection(LoaderResolverInterface $resolver, KernelInterface $kernel): ?RouteCollection
    {
        return $resolver
            ->resolve(__DIR__.'/../Resources/config/routes.yaml')
            ->load(__DIR__.'/../Resources/config/routes.yaml')
            ;
    }
}
