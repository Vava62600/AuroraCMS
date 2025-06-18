pub mod auth_middleware;
use actix_web::{dev::ServiceRequest, Error, Result};
use actix_web::middleware::{Middleware, Transform};
use futures::future::{ok, Ready};
use futures::FutureExt;
use std::pin::Pin;
use std::task::{Context, Poll};
use crate::auth_middleware::AuthMiddleware;
use crate::auth_middleware::AuthMiddlewareFactory;
use crate::config::Config;
use crate::db::pool::create_pool;
use crate::services::auth_service::AuthService;
use crate::services::user_service::UserService;
use crate::db::pool::DbPool;
use crate::db::repositories::user_repository::UserRepository;
pub struct MiddlewareFactory {
    config: Config,
}
impl MiddlewareFactory {
    pub fn new(config: Config) -> Self {
        MiddlewareFactory { config }
    }
}
impl<S, B> Transform<S, ServiceRequest> for MiddlewareFactory
where
    S: actix_web::Service<ServiceRequest, Response = actix_web::dev::ServiceResponse<B>, Error = Error>,
{
    type Response = S::Response;
    type Error = S::Error;
    type InitError = ();
    type Future = Pin<Box<dyn futures::Future<Output = Result<Self::Response, Self::Error>> + Send>>;

    fn new_transform(self, service: S) -> Self::Future {
        let config = self.config.clone();
        let pool = create_pool(&config.database_url).await.expect("Failed to create DB pool");
        let auth_service = AuthService::new(pool.clone());
        let user_service = UserService::new(UserRepository::new(pool.clone()));

        let auth_middleware = AuthMiddlewareFactory::new(auth_service, user_service);

        Box::pin(async move {
            Ok(auth_middleware.new_transform(service).await?)
        })
    }
}