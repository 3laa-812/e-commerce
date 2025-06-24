import dotenv from "dotenv";
dotenv.config(); // ← this line loads your .env file
import data from "@/lib/data";
import { connectToDatabase } from ".";
import Product from "./models/product.model";
import User from "./models/user.model";
console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);
const main = async () => {
  try {
    const { products, users } = data;
    console.log("MongoDB URI:", process.env.MONGODB_URI);
    await connectToDatabase(process.env.MONGODB_URI);

    await Product.deleteMany();
    const createdProducts = await Product.insertMany(products);

    await User.deleteMany();
    const createdUser = await User.insertMany(users);
    console.log({
      createdProducts,
      createdUser,
      message: "Seeded database successfully",
    });
    process.exit(0);
  } catch (error) {
    console.error("Detailed error:", error);
  }
};

main();
