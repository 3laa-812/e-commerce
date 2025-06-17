/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCartStore from "@/hooks/use-cart-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { OrderItem } from "@/types";

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem;
  minimal?: boolean;
}) {
  const router = useRouter();
  const { addItem } = useCartStore();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    if (item.countInStock === 0) {
      toast.error("Product is out of stock");
      return;
    }

    try {
      const itemId = await addItem(item, quantity);
      router.push(`/cart/${itemId}`);
      toast.success("Added to cart", {
        description: `${item.name} (${quantity} x ${item.size}, ${item.color})`,
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return minimal ? (
    <Button
      className="rounded-full w-auto"
      onClick={handleAddToCart}
      disabled={item.countInStock === 0}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {item.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
    </Button>
  ) : (
    <div className="w-full space-y-2">
      <Select
        value={quantity.toString()}
        onValueChange={(i) => setQuantity(Number(i))}
      >
        <SelectTrigger className="">
          <SelectValue>Quantity: {quantity}</SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          {Array.from({ length: item.countInStock }).map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        className="rounded-full w-full"
        type="button"
        onClick={handleAddToCart}
        disabled={item.countInStock === 0}
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        {item.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          try {
            addItem(item, quantity);
            router.push(`/checkout`);
          } catch (error: any) {
            toast.error(error.message);
          }
        }}
        className="w-full rounded-full "
      >
        Buy Now
      </Button>
    </div>
  );
}
