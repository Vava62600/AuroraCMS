use actix_web::web;

mod auth;
mod users;
mod tenants;
mod sites;

pub fn init_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(web::scope("/api")
        .service(auth::scope())
        .service(users::scope())
        .service(tenants::scope())
        .service(sites::scope())
    );
}
