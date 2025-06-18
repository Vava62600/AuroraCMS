use actix_web::{web, HttpResponse, Responder};
use serde::{Serialize, Deserialize};
use crate::db::pool::PgPool;
use crate::errors::ApiError;
use crate::services::jwt;
use crate::db::models::User;
use sqlx::PgPool as Pool;
use uuid::Uuid;

#[derive(Deserialize)]
pub struct LoginRequest {
    pub email: String,
    pub password: String,
}

#[derive(Serialize)]
pub struct LoginResponse {
    pub token: String,
}

pub fn scope() -> actix_web::Scope {
    web::scope("/auth")
        .route("/login", web::post().to(login))
        .route("/logout", web::post().to(logout))
        .route("/refresh", web::post().to(refresh))
}

async fn login(pool: web::Data<PgPool>, info: web::Json<LoginRequest>) -> Result<impl Responder, ApiError> {
    // TODO: authenticate user, generate JWT
    Ok(HttpResponse::Ok().json(LoginResponse { token: "".to_string() }))
}

async fn logout() -> impl Responder {
    HttpResponse::Ok().body("Logged out")
}

async fn refresh() -> impl Responder {
    HttpResponse::Ok().body("Token refreshed")
}
pub async fn get_user_from_token(pool: web::Data<PgPool>, token: String) -> Result<User, ApiError> {
    let claims = jwt::validate_token(token).await?;
    let user_id = claims.user_id;

    let user = sqlx::query_as!(
        User,
        "SELECT * FROM users WHERE id = $1",
        user_id
    )
    .fetch_one(&**pool)
    .await
    .map_err(|_| ApiError::NotFound)?;

    Ok(user)
}
pub async fn get_user_by_id(pool: web::Data<PgPool>, user_id: Uuid) -> Result<User, ApiError> {
    let user = sqlx::query_as!(
        User,
        "SELECT * FROM users WHERE id = $1",
        user_id
    )
    .fetch_one(&**pool)
    .await
    .map_err(|_| ApiError::NotFound)?;

    Ok(user)
}
