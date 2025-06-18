use actix_web::{web, HttpResponse, Responder};
use crate::db::pool::PgPool;
use crate::db::models::Site;
use crate::errors::ApiError;
use uuid::Uuid;

pub fn scope() -> actix_web::Scope {
    web::scope("/sites")
        .route("", web::get().to(get_sites))
        .route("/{id}", web::get().to(get_site))
}

async fn get_sites(pool: web::Data<PgPool>) -> Result<impl Responder, ApiError> {
    // TODO: fetch sites from DB
    Ok(HttpResponse::Ok().json(Vec::<Site>::new()))
}

async fn get_site(pool: web::Data<PgPool>, path: web::Path<Uuid>) -> Result<impl Responder, ApiError> {
    // TODO: fetch site by ID
    Ok(HttpResponse::Ok().json(None::<Site>))
}
pub async fn get_site_by_id(pool: web::Data<PgPool>, site_id: Uuid) -> Result<Site, ApiError> {
    let site = sqlx::query_as!(
        Site,
        "SELECT * FROM sites WHERE id = $1",
        site_id
    )
    .fetch_one(&**pool)
    .await
    .map_err(|_| ApiError::NotFound)?;

    Ok(site)
}