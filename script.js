function generateSignal() {
  const signals = ["CALL ⬆️", "PUT ⬇️"];
  const expirations = ["5s", "15s", "30s", "1m"];
  const assets = ["EUR/USD", "USD/JPY", "GBP/USD", "AUD/USD"];

  document.getElementById("signal").innerText =
    signals[Math.floor(Math.random() * signals.length)];

  document.getElementById("expiration").innerText =
    expirations[Math.floor(Math.random() * expirations.length)];

  document.getElementById("asset").innerText =
    assets[Math.floor(Math.random() * assets.length)];
}
