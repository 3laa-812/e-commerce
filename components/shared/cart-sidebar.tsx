import useCartStore from "@/hooks/use-cart-store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TrashIcon, ShoppingBagIcon } from "lucide-react";
import ProductPrice from "./product/product-price";
import { FREE_SHIPPING_MIN_PRICE } from "@/lib/constants";

export default function CartSidebar() {
  const {
    cart: { items, itemsPrice },
    updateItem,
    removeItem,
  } = useCartStore();

  return (
    <div className="w-80">
      <div className="sticky top-0 h-screen border-l bg-background shadow-lg">
        <div className="p-4 h-full flex flex-col gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <ShoppingBagIcon className="h-5 w-5" />
            <span>Your Cart</span>
          </div>

          <div className="space-y-3 bg-muted/50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <div className="font-bold text-lg">
                <ProductPrice price={itemsPrice} plain />
              </div>
            </div>
            {itemsPrice > FREE_SHIPPING_MIN_PRICE ? (
              <div className="text-xs text-green-600 font-medium">
                ✓ Your order qualifies for FREE Shipping
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">
                Add{" "}
                <ProductPrice
                  price={FREE_SHIPPING_MIN_PRICE - itemsPrice}
                  plain
                />{" "}
                more for free shipping
              </div>
            )}

            <Link
              className={cn(
                buttonVariants(),
                "rounded-full hover:no-underline w-full"
              )}
              href="/cart"
            >
              View Cart
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.clientId} className="group">
                  <div className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Link
                      href={`/product/${item.slug}`}
                      className="flex-shrink-0"
                    >
                      <div className="relative h-20 w-20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="20vw"
                          className="object-contain rounded-md"
                        />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.slug}`}
                        className="text-sm font-medium hover:underline truncate block"
                      >
                        {item.name}
                      </Link>
                      <div className="text-sm text-muted-foreground mt-1">
                        {item.color} / {item.size}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Select
                          value={item.quantity.toString()}
                          onValueChange={(value) => {
                            updateItem(item, Number(value));
                          }}
                        >
                          <SelectTrigger className="h-8 text-xs w-16">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: item.countInStock }).map(
                              (_, i) => (
                                <SelectItem
                                  value={(i + 1).toString()}
                                  key={i + 1}
                                >
                                  {i + 1}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeItem(item)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      <ProductPrice price={item.price * item.quantity} plain />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
