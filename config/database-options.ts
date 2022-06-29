import { Client } from "pg";

export const isExist = (tenantId: any) => {
  let is_exist: boolean;

  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456789",
  });

  client.connect();

  const query = `SELECT * FROM pg_database WHERE datname = '${tenantId}'`;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        is_exist = false;
      } else {
        if (res.rows.length > 0) {
          is_exist = true;
        } else {
          is_exist = false;
        }
        resolve(is_exist);
      }
    });
  });
};

export const createDb = (tenantId: any) => {
  let message: string;

  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456789",
  });

  client.connect();

  const query = `CREATE DATABASE ${tenantId}`;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        message = "Error creating database";
      } else {
        message = "Database created successfully";
      }
      resolve(message);
    });
  });
};

export const dropDb = (tenantId: any) => {
  let message: string;

  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456789",
  });

  client.connect();

  const query = `DROP DATABASE ${tenantId}`;

  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        message = "Error dropping database";
      } else {
        message = "Database dropped successfully";
      }
      resolve(message);
    });
  });
};
