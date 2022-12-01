import express from "express";

import UserController from "@controllers/user.controller";

import { userLoginDTO, userRegisterDTO, userRoleDTO } from "@dto/user.dto";

import { isAuthenticated, isAuthorized } from "@middlewares/auth.middleware";
import { validateSchema } from "@middlewares/validate.middleware";

const UserRouter = express.Router();

/**
 * @swagger
 *  /api/users/register:
 *    post:
 *      summary: Create a new user
 *      description: Create a new user as a member
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserRegisterRequest'
 *      responses:
 *        201:
 *          description: The user was successfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserRegisterResponse'
 *        409:
 *          description: The email is already in use
 *        400:
 *          description: Bad Request
 *
 *
 */
UserRouter.post("/register", validateSchema(userLoginDTO), UserController.register);

/**
 * @swagger
 *  /api/users/login:
 *    post:
 *      summary: Login a user
 *      description: Login a user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserLoginRequest'
 *      responses:
 *        200:
 *          description: The user was successfully logged in
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserLoginResponse'
 *        404:
 *          description: User not found
 *        401:
 *          description: Unauthorized
 *        400:
 *          description: Bad Request
 *
 *
 */
UserRouter.post("/login", validateSchema(userRegisterDTO), UserController.login);

/**
 * @swagger
 *  /api/users/role:
 *    put:
 *      summary: Change user role
 *      description: Change user role
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/UserRoleRequest'
 *      responses:
 *        200:
 *          description: The user was successfully logged in
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserRoleResponse'
 *        404:
 *          description: User not found
 *        403:
 *          description: Forbidden
 *        401:
 *          description: Unauthorized
 *        400:
 *          description: Bad Request / JWT expired
 *
 *
 */
UserRouter.put(
  "/role",
  isAuthenticated,
  isAuthorized(["superadmin"]),
  validateSchema(userRoleDTO),
  UserController.updateUserRole
);

/**
 * @swagger
 *  /api/users/me:
 *    get:
 *      summary: Get current user
 *      description: Get current user
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: The user was successfully logged in
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserMeResponse'
 *        404:
 *          description: User not found
 *        401:
 *          description: Unauthorized
 *        400:
 *          description: Bad Request / JWT expired
 *
 *
 */
UserRouter.get("/me", isAuthenticated, UserController.getCurrentUser);

export default UserRouter;
