import Pocketbase, { ClientResponseError } from "pocketbase";

const db = new Pocketbase("http://localhost:8090/");

interface CartItem {
  id: string; // Unique identifier for the item (e.g., product ID)
  name: string; // Name of the item (for display purposes)
  quantity: number;
  price: number; // Price per item
  // You can add more properties as needed, like imageUrl, etc.
}

class Cart {
  private cartId: string; // Record ID from the 'carts' collection in PocketBase
  private userId: string;
  // private items: CartItem[];

  private constructor(cartId: string, userId: string) {
    this.cartId = cartId;
    this.userId = userId;
    // this.items = items;
  }

  static async create(userId: string) {
    // In a real application, you would check a database or storage
    // to see if a cart already exists for this userId.
    // For this example, we'll simulate checking in memory or some simple storage.
    // Simulate checking if a cart exists (replace with actual storage check)
    const existingCart = await Cart.getCartFromStorage(userId);

    if (existingCart) {
      console.log(
        `Cart already exists for user ${userId}. Returning existing cart.`
      );
      return existingCart;
    } else {
      console.log(`No cart found for user ${userId}. Creating a new cart.`);
      const newCartId = await Cart.insertNewCartIntoDatabase(userId);
      // 4. Initialize with an empty items array
      return new Cart(newCartId, userId);
    }
  }

  static async getCartFromStorage(userId: string): Promise<any | null> {
    // **Simulated Storage (Replace with your actual storage mechanism)**
    // In a real app, you might fetch from localStorage, a database, etc.

    try {
      const cartRecord = await db
        .collection("cart")
        .getFirstListItem(`customer_id="${userId}"`);
      return cartRecord;
    } catch (error) {
      if (error instanceof ClientResponseError && error.status === 404) {
        // 404 Not Found - Cart doesn't exist for this user
        console.log(
          `Cart not found for user ${userId} (PocketBase 404 handled).`
        );
        return null;
      } else {
        // Other errors (network issues, server errors, etc.) - re-throw
        console.error("PocketBase error fetching cart data:", error);
        throw error;
      }
    }
  }

  static async insertNewCartIntoDatabase(
    userId: string
  ): Promise<string> {
    try {
      console.log(`PocketBase insert: creating new cart for user: ${userId}`);
      const record = await db.collection("cart").create({
        customer_id: userId,
      });
      console.log(`PocketBase insert complete. New cart ID: ${record.id}`);
      return record.id; // Return the newly created cart record ID
    } catch (error) {
      console.error("PocketBase error inserting new cart:", error);
      throw error;
    }
  }

  static testFunc(){
    
  }
}

export default Cart;
