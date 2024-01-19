# Image Upload API

*This project implements a simple Image Upload API with TypeScript, Express, MongoDB, and Multer. The API provides endpoints for uploading images, retrieving images, and handling errors gracefully.
Requirements*

    Node.js (v14 or higher)
    MongoDB (Make sure your MongoDB server is running)
## Installation

    Clone this repository:
    git clone <repository-url>
## Install dependencies:


    cd image-upload-api:
    git clone <repository-url>

## Set up your environment variables:

### Create a .env file in the root directory and add the following:

    env

    MONGO_URL=<your-mongodb-connection-string>

### Start the server:

    npm start

The server will be running at http://localhost:5000.

# API Endpoints
## Upload Image (POST)

### Endpoint: /upload
 - Description: Upload an image and get a secure URL format for the saved image.
    - Request:
        Method: POST
        Body: Form-data with image field for the image file
    - Response:
        Status: 200 OK
        Body: JSON with message and imageUrl

# Get Image (GET)

## Endpoint: /get_image/:id
  - Description: Retrieve the saved image based on a secure URL format.
    - Request:
        Method: GET
        URL Parameter: id (Image ID)
    - Response:
        Status: 200 OK
        Body: Image data
    - Error Handling:
        Status: 404 Not Found if the image with the specified ID is not found.

### Validation and Error Handling

    Images must be in formats: jpeg, png, or gif.
    Proper error messages are provided for invalid requests or server issues.

### MongoDB Connection

    The API successfully connects to a MongoDB database to store uploaded images.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
License

*This project is licensed under the MIT License - see the LICENSE file for details*.
