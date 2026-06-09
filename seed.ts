import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const DUMMY_USERS = [
  {
    email: "john.doe@example.com",
    password: "password123",
    name: "John Doe",
  },
  {
    email: "jane.smith@example.com",
    password: "password123",
    name: "Jane Smith",
  },
  {
    email: "admin.uplift@example.com",
    password: "adminpassword",
    name: "Uplift Admin",
  },
];

async function seedUsers() {
  console.log("Seeding users...");

  for (const user of DUMMY_USERS) {
    const { data, error } = await supabase.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true,
      user_metadata: {
        full_name: user.name,
      },
    });

    if (error) {
      if (error.message.includes("User already registered")) {
        console.log(`User ${user.email} already exists. Skipping.`);
      } else {
        console.error(`Error creating user ${user.email}:`, error.message);
      }
    } else {
      console.log(`Successfully created user: ${user.email} (ID: ${data.user.id})`);
    }
  }

  console.log("User seeding complete!");
}

async function main() {
  console.log("Starting seed script...");
  await seedUsers();
  console.log("Seed script finished successfully.");
}

main().catch((err) => {
  console.error("Fatal error during seeding:", err);
  process.exit(1);
});
