import data from "@/lib/data";
import { connectToDatabase } from ".";
import Product from "./models/product.model";

const main = async () => {
  try {
    const { products } = data;
    console.log(
      "MongoDB URI:",
      process.env.MONGODB_URI?.substring(0, 20) + "..."
    ); // Log first 20 chars for security
    await connectToDatabase(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);

    console.log({
      createdProducts,
      message: "Seeded database successfully",
    });
    process.exit(0);
  } catch (error) {
    console.error("Detailed error:", error);
    throw new Error("Failed to seed database");
  }
};

main();
