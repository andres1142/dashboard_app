import { Client, Account, ID } from "appwrite";
import { LoginUserAccount, CreateUserAccount } from "./types";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64fe4be24e7fc4b1499b");

const account = new Account(client);

class AppwriteService {
  /**
   * Create user account and login to appwrite
   *
   * @param userInfo  - user info to create account
   * @returns
   */
  async createUserAccount(userInfo: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );
      if (userAccount) {
        return this.login(userInfo);
      } else {
        return userAccount;
      }
    } catch (error: any) {
      throw error;
    }
  }

  /**
   * Login to appwrite with email and password
   *
   * @param userInfo - user info to login
   * @returns  - session info
   */
  async login(userInfo: LoginUserAccount) {
    try {
      return await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Checks if user is LoggedIn in appwrite
   *
   * @returns - true if user is logged in, false otherwise
   */
  async isLogged(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      return false;
    }
  }

  /**
   * Helper function to get current user info
   *
   * @returns - current user info
   */
  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log("getcurrentUser error: " + error);
    }

    return null;
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
