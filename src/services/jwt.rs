use jsonwebtoken::{EncodingKey, DecodingKey, Header, Validation, TokenData, decode, encode};
use serde::{Deserialize, Serialize};
use crate::config::Config;
use once_cell::sync::OnceCell;
use std::sync::Mutex;
use crate::errors::ApiError;

static CONFIG: OnceCell<Config> = OnceCell::new();

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub sub: String,
    pub exp: usize,
    pub iat: usize,
    pub email: String,
}

pub async fn validate_token(token: String) -> Result<TokenData<Claims>, ApiError> {
    let config = CONFIG.get().expect("Config not initialized");
    let decoding_key = DecodingKey::from_secret(config.jwt_secret.as_bytes());
    decode::<Claims>(&token, &decoding_key, &Validation::default())
        .map_err(|_| ApiError::Unauthorized)
}

pub fn create_token(email: &str, secret: &str, exp_seconds: usize) -> Result<String, ApiError> {
    let now = chrono::Utc::now().timestamp() as usize;
    let claims = Claims {
        sub: email.to_owned(),
        email: email.to_owned(),
        iat: now,
        exp: now + exp_seconds,
    };

    let encoding_key = EncodingKey::from_secret(secret.as_bytes());
    encode(&Header::default(), &claims, &encoding_key).map_err(|_| ApiError::InternalError)
}

pub fn init_config(config: Config) {
    CONFIG.set(config).expect("Config already set");
}
