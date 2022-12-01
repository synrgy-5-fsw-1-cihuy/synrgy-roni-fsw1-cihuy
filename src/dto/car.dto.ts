import { number, object, string } from "yup";

export interface ICar {
  name: string;
  cost: number;
  capacity: string;
  image: string;
  created_by: number;
  deleted_by: number;
  updated_by: number;
}

export const carCreateDTO = object({
  body: object({
    name: string().required("Name is required"),
    cost: number().required("Cost is required"),
    capacity: string().required("Capacity is required"),
    image: string().required("Image is required"),
  }),
});

export const carUpdateDTO = object({
  body: object({
    name: string(),
    cost: number(),
    capacity: string(),
    image: string(),
  }),
});

/**
 * @swagger
 * components:
 *  schemas:
 *    Car:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the car
 *        name:
 *          type: string
 *          description: The name of the car
 *        cost:
 *          type: number
 *          description: The cost of the car
 *        capacity:
 *          type: string
 *          enum: [small, medium, large]
 *          description: The capacity size of the car
 *        image:
 *          type: string
 *          description: The image of the car
 *        created_by:
 *          type: number
 *          description: The id of the user who created the car
 *        updated_by:
 *          type: number
 *          description: The id of the user who updated the car
 *        deleted_by:
 *          type: number
 *          description: The id of the user who deleted the car
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date of the car creation
 *        updatedAt:
 *          type: string
 *          format: date-time
 *          description: The date of the car update
 *      example:
 *        id: 2
 *        name: Toyota
 *        cost: 10000
 *        capacity: small
 *        image: https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/01.png
 *        created_by: 2
 *        updated_by: 3
 *        deleted_by: null
 *        createdAt: 2021-05-01T00:00:00.000Z
 *        updatedAt: 2021-05-01T00:00:00.000Z
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CarGetAllResponse:
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
 *            $ref: '#/components/schemas/Car'
 *      example:
 *        status: 200
 *        message: Success
 *        data:
 *        - id: 2
 *          name: Toyota
 *          cost: 10000
 *          capacity: small
 *          image: https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/01.png
 *          created_by: 2
 *          updated_by: null
 *          deleted_by: null
 *          createdAt: 2021-05-01T00:00:00.000Z
 *          updatedAt: 2021-05-01T00:00:00.000Z
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CarGetByIdResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          $ref: '#/components/schemas/Car'
 *      example:
 *        status: 200
 *        message: Success
 *        data:
 *          id: 2
 *          name: Toyota
 *          cost: 10000
 *          capacity: small
 *          image: https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/01.png
 *          created_by: 2
 *          updated_by: null
 *          deleted_by: null
 *          createdAt: 2021-05-01T00:00:00.000Z
 *          updatedAt: 2021-05-01T00:00:00.000Z
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CarCreateRequest:
 *      type: object
 *      required:
 *        - name
 *        - cost
 *        - capacity
 *        - image
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the car
 *        cost:
 *          type: number
 *          description: The cost of the car per day
 *        capacity:
 *          type: string
 *          enum: [small, medium, large]
 *          description: The capacity size of the car
 *        image:
 *          type: string
 *          description: The image of the car
 *      example:
 *        name: Toyota
 *        cost: 10000
 *        capacity: small
 *        image: https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/01.png
 *    CarCreateResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          $ref: '#/components/schemas/Car'
 *      example:
 *        status: 201
 *        message: Success
 *        data:
 *          id: 2
 *          name: Toyota
 *          cost: 10000
 *          capacity: small
 *          image: https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/c-hr/01.png
 *          created_by: 2
 *          updated_by: null
 *          deleted_by: null
 *          createdAt: 2021-05-01T00:00:00.000Z
 *          updatedAt: 2021-05-01T00:00:00.000Z
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CarUpdateRequest:
 *      type: object
 *      minProperties: 1
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the car
 *        cost:
 *          type: number
 *          description: The cost of the car per day
 *        capacity:
 *          type: string
 *          enum: [small, medium, large]
 *          description: The capacity size of the car
 *        image:
 *          type: string
 *          description: The image of the car
 *      example:
 *        name: BMW
 *        cost: 20000
 *    CarUpdateResponse:
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
 *        message: Success
 *        data:
 *          - 1
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CarDeleteResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: number
 *          description: The status code
 *        message:
 *          type: string
 *          description: The message
 *        data:
 *          type: number
 *          description: Update status
 *      example:
 *        status: 200
 *        message: Success
 *        data: 1
 */
