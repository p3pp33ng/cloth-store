const baseUrl = "https://localhost:44306/api/";

export const productUrls = {
    "get-product": baseUrl + "product/get/{id}",
    "get-products": baseUrl + "product/getAll",
    "post-create": baseUrl + "product",
    "put-update": baseUrl + "product/{id}",
    "delete-delete": baseUrl + "product/{id}"
};

export const userUrls = {
    "get-user": baseUrl + "user",
    "post-register-user": baseUrl + "user/register",
    "post-login-user": baseUrl + "user/login",
    "put-update-user": baseUrl + "user",
    "delete-user": baseUrl + "user",
    "checked-if-logged-in": baseUrl + "checkIfLoggedIn"
}