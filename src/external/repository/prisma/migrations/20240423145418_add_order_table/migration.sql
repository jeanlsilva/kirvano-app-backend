-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "address_id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_avatar" TEXT NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "shipping_fee" INTEGER NOT NULL,
    "total" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "order_id_key" ON "order"("id");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
