declare module "bun" {
  interface Env {
    PORT: number;
    MONGO_URI: string;
    JWT_SECRET: string;
    DB_NAME: string;
  }
}
