-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "expiry_month" INTEGER NOT NULL,
    "expiry_year" INTEGER NOT NULL,
    "cvc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "first_line" TEXT NOT NULL,
    "street_name" TEXT NOT NULL,
    "postcode" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "card_id_key" ON "card"("id");

-- CreateIndex
CREATE UNIQUE INDEX "address_id_key" ON "address"("id");
