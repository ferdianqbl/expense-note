-- DropIndex
DROP INDEX "User_token_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "token" SET DATA TYPE TEXT;
