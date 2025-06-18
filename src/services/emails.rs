use lettre::{AsyncSmtpTransport, AsyncTransport, Message, Tokio1Executor};
use crate::config::Config;
use once_cell::sync::OnceCell;

static CONFIG: OnceCell<Config> = OnceCell::new();

pub async fn send_email(to: &str, subject: &str, body: &str) -> Result<(), lettre::transport::smtp::Error> {
    let config = CONFIG.get().expect("Config not initialized");

    let email = Message::builder()
        .from(config.email_smtp_user.parse().unwrap())
        .to(to.parse().unwrap())
        .subject(subject)
        .body(body.to_string())
        .unwrap();

    let mailer = AsyncSmtpTransport::<Tokio1Executor>::relay(&config.email_smtp_server)
        .unwrap()
        .credentials(lettre::transport::smtp::authentication::Credentials::new(
            config.email_smtp_user.clone(),
            config.email_smtp_pass.clone(),
        ))
        .build();

    mailer.send(email).await.map(|_| ())
}
pub fn init_config(config: Config) {
    CONFIG.set(config).expect("Config already set");
}