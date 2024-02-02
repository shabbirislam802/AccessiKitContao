<?php

declare(strict_types=1);

/*
 * This file is part of [package name].
 *
 * (c) John Doe
 *
 * @license LGPL-3.0-or-later
 */

namespace SI\ContaoAccessiKitContaoBundle\Tests;

use SI\ContaoAccessiKitContaoBundle\ContaoAccessiKitContaoBundle;
use PHPUnit\Framework\TestCase;

class ContaoAccessiKitContaoBundleTest extends TestCase
{
    public function testCanBeInstantiated(): void
    {
        $bundle = new ContaoAccessiKitContaoBundle();

        $this->assertInstanceOf('SI\ContaoAccessiKitContaoBundle\ContaoAccessiKitContaoBundle', $bundle);
    }
}
