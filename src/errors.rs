use actix_web::{HttpResponse, ResponseError};
use derive_more::Display;
use serde::Serialize;

#[derive(Debug, Display)]
pub enum ApiError {
    #[display(fmt = "Internal Server Error")]
    InternalError,
    #[display(fmt = "Unauthorized")]
    Unauthorized,
    #[display(fmt = "Bad Request: {}", _0)]
    BadRequest(String),
    #[display(fmt = "Not Found")]
    NotFound,
}

#[derive(Serialize)]
struct ErrorResponse {
    error: String,
}

impl ResponseError for ApiError {
    fn error_response(&self) -> HttpResponse {
        let message = self.to_string();
        let status_code = match self {
            ApiError::InternalError => actix_web::http::StatusCode::INTERNAL_SERVER_ERROR,
            ApiError::Unauthorized => actix_web::http::StatusCode::UNAUTHORIZED,
            ApiError::BadRequest(_) => actix_web::http::StatusCode::BAD_REQUEST,
            ApiError::NotFound => actix_web::http::StatusCode::NOT_FOUND,
        };

        HttpResponse::build(status_code).json(ErrorResponse { error: message })
    }
}
