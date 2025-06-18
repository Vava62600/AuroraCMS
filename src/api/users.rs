use actix_web::{web, HttpResponse, Responder};
use crate::db::pool::PgPool;
use crate::errors::ApiError;
use crate::db::models::User;
use uuid::Uuid;

pub fn scope() -> actix_web::Scope {
    web::scope("/users")
        .route("", web::get().to(get_users))
        .route("/{id}", web::get().to(get_user))
}

async fn get_users(pool: web::Data<PgPool>) -> Result<impl Responder, ApiError> {
    // TODO: fetch users from DB
    Ok(HttpResponse::Ok().json(Vec::<User>::new()))
}

async fn get_user(pool: web::Data<PgPool>, path: web::Path<Uuid>) -> Result<impl Responder, ApiError> {
    // TODO: fetch user by ID
    Ok(HttpResponse::Ok().json(None::<User>))
}
