import { Request } from "express";
import { object, string } from "yup";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export const userLoginDTO = object({
  body: object({
    name: string().required("Name is required"),
    email: string().email("Email is invalid").required("Email is required"),
    password: string().required("Password is required"),
  }),
});

export const userRegisterDTO = object({
  body: object({
    email: string().email("Email is invalid").required("Email is required"),
    password: string().required("Password is required"),
  }),
});

export const userRoleDTO = object({
  body: object({
    email: string().email("Email is invalid").required("Email is required"),
    role: string().required("Role is required"),
  }),
});

export interface UserAccessDecoded {
  id: number;
  role: string;
}

export interface UserRefreshDecoded {
  id: number;
}

export interface RequestWithUser extends Request {
  user: UserAccessDecoded;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the user
 *        name:
 *          type: string
 *          description: The name of the user
 *        email:
 *          type: number
 *          description: The cost of the user
 *        password:
 *          type: string
 *          description: The password of the user
 *        role:
 *          type: string
 *          enum: [member, admin, superadmin]
 *          description: The role of the user
 *      example:
 *        id: 2
 *        name: John Doe
 *        email: johndoe@email.com
 *        password: $2b$10$1UknZW0SnBGPAIQvnM.XIOnOUnBD11v5twQLEfjEhaqk24nrMGUX6
 *        role: member
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    UserRegisterRequest:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          description: The user's name
 *        email:
 *          type: string
 *          description: The user's email
 *        password:
 *          type: string
 *          description: The user's password
 *      example:
 *        name: John Doe
 *        email: johndoe@email.com
 *        password: password
 *    UserRegisterResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: The user's name
 *            email:
 *              type: string
 *              description: The user's email
 *            role:
 *              type: string
 *              description: The user's role
 *      example:
 *        status: 201
 *        message: User successfully created
 *        data:
 *          name: John Doe
 *          email: johndoe@email.com
 *          role: member
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    UserLoginRequest:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          description: The user's email
 *        password:
 *          type: string
 *          description: The user's password
 *      example:
 *        email: johndoeloe@email.com
 *        password: password
 *    UserLoginResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          type: object
 *          properties:
 *            accessToken:
 *              type: string
 *              description: The user's accessToken
 *            refreshToken:
 *              type: string
 *              description: The user's refreshToken
 *      example:
 *        status: 200
 *        message: User login successfully
 *        data:
 *          accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6Im1lbWJlciIsImlhdCI6MTY2OTkwNjc1NSwiZXhwIjoxNjY5OTA3NjU1fQ.aUtKnu950hTMHY19o0H3yHEvxkKmeJE5oR8FTBKoMlU
 *          refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjY5OTA2NzU1LCJleHAiOjE2Njk5OTMxNTV9.qTPHlTnM7sgp4BrmjwDlcgJkhqiUmpVtr9F-KMmlmeQ
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    UserRoleRequest:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: The user's email
 *        role:
 *          type: string
 *          description: The user's new role
 *      example:
 *        email: johndoe@email.com
 *        role: admin
 *    UserRoleResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          type: array
 *          items:
 *            type: integer
 *            description: Update status
 *      example:
 *        status: 200
 *        message: User successfully created
 *        data:
 *          - 1
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    UserMeResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *              description: The user's name
 *            email:
 *              type: string
 *              description: The user's email
 *            role:
 *              type: string
 *              description: The user's role
 *      example:
 *        status: 200
 *        message: User fetched successfully
 *        data:
 *          name: John Doe
 *          email: johndoe@email.com
 *          role: member
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 */
