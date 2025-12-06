-- CreateEnum
CREATE TYPE "Marketplace" AS ENUM ('SHOPEE', 'TOKOPEDIA');

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "marketplace" "Marketplace" NOT NULL,
    "externalShopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shopLevel" TEXT,
    "rating" DOUBLE PRECISION,
    "location" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "marketplace" "Marketplace" NOT NULL,
    "url" TEXT NOT NULL,
    "externalProductId" TEXT,
    "name" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "category" TEXT,
    "shopId" INTEGER,
    "isTracked" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSnapshot" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'IDR',
    "rating" DOUBLE PRECISION,
    "reviewsCount" INTEGER,
    "soldCount" INTEGER,
    "rawSpecs" JSONB,
    "rawData" JSONB,

    CONSTRAINT "ProductSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductReviewSample" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "snapshotId" INTEGER,
    "platformReviewId" TEXT,
    "rating" INTEGER NOT NULL,
    "authorName" TEXT,
    "content" TEXT NOT NULL,
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductReviewSample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductAIAnalysis" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "snapshotId" INTEGER,
    "worthItScore" INTEGER NOT NULL,
    "priceComment" TEXT,
    "summary" TEXT,
    "pros" JSONB,
    "cons" JSONB,
    "modelName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductAIAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompareSession" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompareSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompareItem" (
    "id" SERIAL NOT NULL,
    "compareSessionId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CompareItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shop_marketplace_externalShopId_key" ON "Shop"("marketplace", "externalShopId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_url_key" ON "Product"("url");

-- CreateIndex
CREATE INDEX "Product_marketplace_idx" ON "Product"("marketplace");

-- CreateIndex
CREATE INDEX "Product_shopId_idx" ON "Product"("shopId");

-- CreateIndex
CREATE INDEX "ProductSnapshot_productId_scrapedAt_idx" ON "ProductSnapshot"("productId", "scrapedAt");

-- CreateIndex
CREATE INDEX "ProductReviewSample_productId_idx" ON "ProductReviewSample"("productId");

-- CreateIndex
CREATE INDEX "ProductReviewSample_snapshotId_idx" ON "ProductReviewSample"("snapshotId");

-- CreateIndex
CREATE INDEX "ProductAIAnalysis_productId_idx" ON "ProductAIAnalysis"("productId");

-- CreateIndex
CREATE INDEX "ProductAIAnalysis_snapshotId_idx" ON "ProductAIAnalysis"("snapshotId");

-- CreateIndex
CREATE INDEX "CompareItem_compareSessionId_idx" ON "CompareItem"("compareSessionId");

-- CreateIndex
CREATE INDEX "CompareItem_productId_idx" ON "CompareItem"("productId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSnapshot" ADD CONSTRAINT "ProductSnapshot_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReviewSample" ADD CONSTRAINT "ProductReviewSample_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductReviewSample" ADD CONSTRAINT "ProductReviewSample_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "ProductSnapshot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAIAnalysis" ADD CONSTRAINT "ProductAIAnalysis_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductAIAnalysis" ADD CONSTRAINT "ProductAIAnalysis_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "ProductSnapshot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareItem" ADD CONSTRAINT "CompareItem_compareSessionId_fkey" FOREIGN KEY ("compareSessionId") REFERENCES "CompareSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompareItem" ADD CONSTRAINT "CompareItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
