Title: How Pick and Omit Keep TypeScript Code DRY by Creating Type “Slices”

Introduction

In large TypeScript codebases, interfaces often grow into “master models” that represent full entities like User, Product, or Order. However, not every part of that model is needed everywhere. Writing new interfaces for each use case leads to duplication and inconsistency.

TypeScript’s utility types—especially Pick and Omit—solve this by letting you create specialized slices of existing types, keeping your code DRY (Don’t Repeat Yourself).

1. The Problem: Repeated Type Definitions

Without utility types, developers often duplicate interfaces for different use cases.

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface PublicUser {
  id: number;
  name: string;
}

Here, PublicUser repeats part of User, creating duplication. If User changes, PublicUser may become outdated.

2. Using Pick to Select Only What You Need

Pick allows you to create a new type by selecting specific properties from an existing one.

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Pick<User, "id" | "name">;

Now PublicUser is directly tied to User, so any structural changes in User are automatically reflected. This eliminates duplication and improves maintainability.

3. Using Omit to Exclude Sensitive Fields

Omit works in the opposite way—it creates a type by removing specific properties.

type SafeUser = Omit<User, "password" | "email">;

This is especially useful when you want to hide sensitive data like passwords or internal fields before sending data to the frontend.

4. Why This Keeps Code DRY

Using Pick and Omit improves code quality in several ways:

No duplication: You reuse the master type instead of redefining it
Single source of truth: Changes in the base interface automatically propagate
Reduced bugs: No mismatch between duplicated interfaces
Better maintainability: Easier to scale and refactor large systems
Conclusion

Pick and Omit are powerful TypeScript utility types that let you build flexible, reusable “views” of your data models. Instead of rewriting interfaces for every use case, you derive them from a single source of truth.

This approach keeps your codebase clean, consistent, and DRY, which is essential for maintaining large-scale TypeScript applications.