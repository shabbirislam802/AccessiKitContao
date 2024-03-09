<?php

namespace SI\ContaoAccessiKitContaoBundle\Migration;

use Contao\CoreBundle\Migration\AbstractMigration;
use Contao\CoreBundle\Migration\MigrationResult;
use Doctrine\DBAL\Connection;

class WebAccessibilityMigration extends AbstractMigration
{
    /**
     * @var Connection
     */
    private $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function getName(): string
    {
        return 'Web Accessibility 0.0.1 Create';
    }

    public function shouldRun(): bool
    {

        $schemaManager = $this->connection->getSchemaManager();

        // If the database table itself does not exist we should do nothing
        if (!$schemaManager->tablesExist(['tl_web_accessibility'])) {
            return true;
        }

        return false;
    }

    public function run(): MigrationResult
    {
        $this->connection->executeQuery('
                CREATE TABLE tl_web_accessibility
                (
                    id INT AUTO_INCREMENT NOT NULL,
                    PRIMARY KEY(id)
                )
                DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`;'
        );


        return $this->createResult(
            true,
            'Created table tl_web_accessiblity.'
        );
    }
}
