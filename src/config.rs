use dotenv::dotenv;
use std::env;

pub struct Config {
    pub database_url: String,
    pub server_host: String,
    pub server_port: u16,
    pub jwt_secret: String,
    pub email_smtp_server: String,
    pub email_smtp_user: String,
    pub email_smtp_pass: String,
}

impl Config {
    pub fn from_env() -> Result<Self, std::env::VarError> {
        dotenv().ok();

        Ok(Self {
            database_url: env::var("DATABASE_URL")?,
            server_host: env::var("SERVER_HOST").unwrap_or_else(|_| "127.0.0.1".to_string()),
            server_port: env::var("SERVER_PORT").unwrap_or_else(|_| "8000".to_string()).parse().unwrap_or(8000),
            jwt_secret: env::var("JWT_SECRET")?,
            email_smtp_server: env::var("EMAIL_SMTP_SERVER").unwrap_or_default(),
            email_smtp_user: env::var("EMAIL_SMTP_USER").unwrap_or_default(),
            email_smtp_pass: env::var("EMAIL_SMTP_PASS").unwrap_or_default(),
        })
    }
}
