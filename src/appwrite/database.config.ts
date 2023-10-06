import { Client, Account, Databases, ID } from "appwrite"
import { Category } from "@/types"
const client = new Client()

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64fe4be24e7fc4b1499b")

const databases = new Databases(client)
const account = new Account(client)

class AppwriteDatabaseService {
  async CreateWeeklyWidget(CategoryList: Category[]) {
    try {
      const user = await account.get()
      const parsedCategories = JSON.stringify(CategoryList)
      // Creates JSON document with the following data
      const data = {
        user_id: user.$id,
        categories: parsedCategories,
      }

      // Where first parameter is the database unique ID and second parameter is the collection unique ID
      await databases.createDocument(
        "651f59b0dcc46d545caf",
        "651f59d4233b0ed25c30",
        ID.unique(),
        data
      )
    } catch (e) {
      console.log(e)
    }
  }
}

const appwriteDatabaseService = new AppwriteDatabaseService()

export default appwriteDatabaseService
