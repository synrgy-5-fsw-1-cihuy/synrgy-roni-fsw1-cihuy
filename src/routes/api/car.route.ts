import express from "express";

import CarController from "@controllers/car.controller";

import { carCreateDTO, carUpdateDTO } from "@dto/car.dto";

import { isAuthenticated, isAuthorized } from "@middlewares/auth.middleware";
import { validateSchema } from "@middlewares/validate.middleware";

const CarRouter = express.Router();

CarRouter.use(isAuthenticated);

/**
 * @swagger
 *  /api/cars:
 *    get:
 *      summary: Get all cars
 *      description: Get all cars
 *      tags: [Cars]
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: The cars were successfully retrieved
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarGetAllResponse'
 *        401:
 *          description: Unauthenticated
 */
CarRouter.get("/", CarController.getAllCar);

/**
 * @swagger
 *  /api/cars/{id}:
 *    get:
 *      summary: Get a car by id
 *      description: Get a car by id
 *      tags: [Cars]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: integer
 *         required: true
 *         description: The id of the car
 *      responses:
 *        200:
 *          description: The car was successfully retrieved
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarGetByIdResponse'
 *        404:
 *          description: Car not found
 *        401:
 *          description: Unauthenticated
 */
CarRouter.get("/:id", CarController.getCarById);

/**
 * @swagger
 *  /api/cars:
 *    post:
 *      summary: Create a new car
 *      description: Create a new car
 *      tags: [Cars]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *         application/json:
 *          schema:
 *           $ref: '#/components/schemas/CarCreateRequest'
 *      responses:
 *        200:
 *          description: The car was successfully created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarCreateResponse'
 *        403:
 *          description: Forbidden
 *        401:
 *          description: Unauthorized
 *        400:
 *          description: Bad Request / JWT expired
 */
CarRouter.post("/", isAuthorized(["admin", "superadmin"]), validateSchema(carCreateDTO), CarController.createCar);

/**
 * @swagger
 *  /api/cars/{id}:
 *    put:
 *      summary: Update a car by id
 *      description: Update a car by id
 *      tags: [Cars]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: integer
 *         required: true
 *         description: The id of the car
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarUpdateRequest'
 *      responses:
 *        200:
 *          description: The car was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarUpdateResponse'
 *        404:
 *          description: Car not found
 *        403:
 *          description: Forbidden
 *        401:
 *          description: Unauthorized
 *        400:
 *          description: Bad Request / JWT expired
 */
CarRouter.put("/:id", isAuthorized(["admin", "superadmin"]), validateSchema(carUpdateDTO), CarController.updateCar);

/**
 * @swagger
 *  /api/cars/{id}:
 *    delete:
 *      summary: Delete a car by id
 *      description: Delete a car by id
 *      tags: [Cars]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: integer
 *         required: true
 *         description: The id of the car
 *      responses:
 *        200:
 *          description: The car was successfully deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/CarDeleteResponse'
 *        404:
 *          description: Car not found
 *        403:
 *          description: Forbidden
 *        401:
 *          description: Unauthorized
 *        400:
 *          description: Bad Request / JWT expired
 */
CarRouter.delete("/:id", isAuthorized(["admin", "superadmin"]), CarController.deleteCar);

export default CarRouter;
