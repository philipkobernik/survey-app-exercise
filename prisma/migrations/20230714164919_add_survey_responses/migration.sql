-- CreateTable
CREATE TABLE `SurveyResponse` (
    `id` VARCHAR(191) NOT NULL,
    `surveyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResponseQuestion` (
    `id` VARCHAR(191) NOT NULL,
    `surveyResponseId` VARCHAR(191) NOT NULL,
    `questionId` INTEGER NOT NULL,
    `option` VARCHAR(191) NOT NULL,
    `otherInput` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ResponseQuestion` ADD CONSTRAINT `ResponseQuestion_surveyResponseId_fkey` FOREIGN KEY (`surveyResponseId`) REFERENCES `SurveyResponse`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
