mod api;
mod config;
mod db;
mod errors;
mod middleware;
mod services;

use actix_web::{App, HttpServer, middleware::Logger};
use crate::config::Config;
use crate::db::pool::create_pool;
use actix_cors::Cors;
use env_logger::Env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::Builder::from_env(Env::default().default_filter_or("info")).init();

    let config = Config::from_env().expect("Failed to load configuration");
    let pool = create_pool(&config.database_url).await.expect("Failed to create DB pool");

    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .max_age(3600);

        App::new()
            .wrap(Logger::default())
            .wrap(cors)
            .app_data(actix_web::web::Data::new(pool.clone()))
            .configure(api::init_routes)
    })
    .bind((config.server_host.as_str(), config.server_port))?
    .run()
    .await
}
