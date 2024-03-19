<?php

namespace SI\ContaoAccessiKitContaoBundle\Model;

use Contao\Model;

class WebAccessibilityModel extends Model
{
    protected static $strTable = 'tl_web_accessibility';

}

class_alias(WebAccessibilityModel::class, 'WebAccessibilityModel');
