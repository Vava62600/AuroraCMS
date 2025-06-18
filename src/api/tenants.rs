use actix_web::{web, HttpResponse, Responder};
use crate::db::pool::PgPool;
use crate::db::models::Tenant;
use crate::errors::ApiError;
use uuid::Uuid;

pub fn scope() -> actix_web::Scope {
    web::scope("/tenants")
        .route("", web::get().to(get_tenants))
        .route("/{id}", web::get().to(get_tenant))
}

async fn get_tenants(pool: web::Data<PgPool>) -> Result<impl Responder, ApiError> {
    // TODO: fetch tenants from DB
    Ok(HttpResponse::Ok().json(Vec::<Tenant>::new()))
}

async fn get_tenant(pool: web::Data<PgPool>, path: web::Path<Uuid>) -> Result<impl Responder, ApiError> {
    // TODO: fetch tenant by ID
    Ok(HttpResponse::Ok().json(None::<Tenant>))
}
pub async fn get_tenant_by_id(pool: web::Data<PgPool>, tenant_id: Uuid) -> Result<Tenant, ApiError> {
    let tenant = sqlx::query_as!(
        Tenant,
        "SELECT * FROM tenants WHERE id = $1",
        tenant_id
    )
    .fetch_one(&**pool)
    .await
    .map_err(|_| ApiError::NotFound)?;

    Ok(tenant)
}